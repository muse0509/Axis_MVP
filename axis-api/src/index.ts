import { Buffer } from 'node:buffer';
globalThis.Buffer = Buffer;
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import {
  Connection, Keypair, PublicKey, clusterApiUrl, Transaction
} from "@solana/web3.js";
import {
  getOrCreateAssociatedTokenAccount,
  createTransferInstruction,
} from "@solana/spl-token";
import bs58 from 'bs58'

// Cloudflare Workersの環境変数の型定義
type Bindings = {
  axis_db: D1Database
  FAUCET_PRIVATE_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()

// CORS設定
app.use('/*', cors({
  origin: '*',
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['POST', 'GET', 'OPTIONS'],
  exposeHeaders: ['Content-Length'],
  maxAge: 600,
}))

const USDC_MINT = new PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr");

const STRICT_LIST = [
  // --- Majors ---
  { symbol: "SOL", name: "Wrapped SOL", address: "So11111111111111111111111111111111111111112", logoURI: "https://assets.coingecko.com/coins/images/4128/large/solana.png" },
  { symbol: "USDC", name: "USD Coin", address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", logoURI: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png" },
  { symbol: "USDT", name: "USDT", address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", logoURI: "https://assets.coingecko.com/coins/images/325/large/Tether.png" },
  { symbol: "WBTC", name: "Wrapped Bitcoin", address: "3NZ9JMVBmGAqocyBIC2c7LQCJScmgsAZ6vQqTDzcqmJh", logoURI: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png" },
  { symbol: "WETH", name: "Wrapped Ethereum", address: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs", logoURI: "https://assets.coingecko.com/coins/images/279/large/ethereum.png" },
  
  // --- DeFi Blue Chips ---
  { symbol: "JUP", name: "Jupiter", address: "JUPyiwrYJFskUPiHa7hkeR8VUtkOp66YWug2yPnTxk3", logoURI: "https://static.jup.ag/jup/icon.png" },
  { symbol: "RAY", name: "Raydium", address: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R", logoURI: "https://assets.coingecko.com/coins/images/13928/large/PSigc4ie_400x400.jpg" },
  { symbol: "ORCA", name: "Orca", address: "orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE", logoURI: "https://assets.coingecko.com/coins/images/17547/large/Orca_Logo.png" },
  { symbol: "PYTH", name: "Pyth Network", address: "HzwqbKZw8RnJC2SHW4Mg8BJyEZ56m47y59ccJeSDexi3", logoURI: "https://assets.coingecko.com/coins/images/31924/large/pyth.png" },
  { symbol: "RENDER", name: "Render", address: "rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof", logoURI: "https://assets.coingecko.com/coins/images/11636/large/rndr.png" },
  { symbol: "HNT", name: "Helium", address: "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux", logoURI: "https://assets.coingecko.com/coins/images/4284/large/Helium_HNT.png" },

  // --- LSTs (Liquid Staking) ---
  { symbol: "mSOL", name: "Marinade Staked SOL", address: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So", logoURI: "https://assets.coingecko.com/coins/images/17752/large/mSOL.png" },
  { symbol: "jitoSOL", name: "Jito Staked SOL", address: "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn", logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/22533.png" },
  { symbol: "bSOL", name: "BlazeStake Staked SOL", address: "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1", logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/28862.png" },

  // --- Top Memes (Major Only) ---
  { symbol: "BONK", name: "Bonk", address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263", logoURI: "https://assets.coingecko.com/coins/images/28600/large/bonk.jpg" },
  { symbol: "WIF", name: "dogwifhat", address: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm", logoURI: "https://assets.coingecko.com/coins/images/33566/large/dogwifhat.jpg" },
  { symbol: "POPCAT", name: "Popcat", address: "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr", logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/28782.png" }
];

const generateInviteCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // I,O,1,0を除く
  let result = 'AXIS-';
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// --- Auth & Invite Endpoints ---

// 1. Verify Invite Code (DB Check)
app.get('/verify-invite', async (c) => {
  const code = c.req.query('code');
  if (!code) return c.json({ valid: false });

  // 未使用のコードがあるかチェック
  const invite: any = await c.env.axis_db.prepare(
    "SELECT * FROM invites WHERE code = ? AND used_by_user_id IS NULL"
  ).bind(code).first();
  
  if (invite) {
    return c.json({ valid: true });
  } else {
    return c.json({ valid: false }, 400);
  }
});
/**
 * 1. 招待コード確認API
 */
app.get('/verify', async (c) => {
  const code = c.req.query('code')
  
  if (!code) {
    return c.json({ valid: false, message: 'Code required' }, 400)
  }

  const result = await c.env.axis_db.prepare('SELECT id FROM users WHERE invite_code = ?')
    .bind(code)
    .first()

  if (result) {
    return c.json({ valid: true })
  } else {
    return c.json({ valid: false, message: 'Invalid code' }, 404)
  }
})

app.post('/auth/store-otp', async (c) => {
  const { email, code } = await c.req.json();
  const expires = Math.floor(Date.now() / 1000) + 600; // 10分間有効
  
  // ユーザーが存在するか確認
  const existing: any = await c.env.axis_db.prepare("SELECT * FROM users WHERE email = ?").bind(email).first();
  
  if (existing) {
    // 既存ユーザーならOTP更新
    await c.env.axis_db.prepare("UPDATE users SET otp_code = ?, otp_expires = ? WHERE email = ?")
      .bind(code, expires, email).run();
  } else {
    // 新規ユーザーなら作成 (ID発行)
    const id = crypto.randomUUID();
    await c.env.axis_db.prepare("INSERT INTO users (id, email, otp_code, otp_expires) VALUES (?, ?, ?, ?)")
      .bind(id, email, code, expires).run();
  }

  return c.json({ success: true });
});

app.post('/auth/verify-otp', async (c) => {
  const { email, code, inviteCode, walletAddress } = await c.req.json();
  const now = Math.floor(Date.now() / 1000);

  const user: any = await c.env.axis_db.prepare("SELECT * FROM users WHERE email = ?").bind(email).first();

  if (!user || user.otp_code !== code || user.otp_expires < now) {
    return c.json({ success: false, message: "Invalid or expired code" }, 400);
  }

  // ★ 招待コードの消費 & 新規コード発行 (初回のみ)
  if (!user.wallet_address && inviteCode) {
    // 初期ADMINコードの場合は消費しない
    if (inviteCode !== 'AXIS-ALPHA' && inviteCode !== 'AXIS-BETA') {
        const invite: any = await c.env.axis_db.prepare(
          "SELECT * FROM invites WHERE code = ? AND used_by_user_id IS NULL"
        ).bind(inviteCode).first();

        if (invite) {
          // 消費
          await c.env.axis_db.prepare("UPDATE invites SET used_by_user_id = ? WHERE code = ?")
            .bind(user.id, inviteCode).run();
        }
    }

    // 30個の招待コードを新規発行
    const stmt = c.env.axis_db.prepare("INSERT INTO invites (code, creator_id) VALUES (?, ?)");
    const batch = [];
    for (let i = 0; i < 30; i++) {
      batch.push(stmt.bind(generateInviteCode(), user.id));
    }
    await c.env.axis_db.batch(batch);
  }

  // ユーザー情報更新
  await c.env.axis_db.prepare(
    "UPDATE users SET otp_code = NULL, wallet_address = ?, invite_code_used = ? WHERE email = ?"
  ).bind(walletAddress || null, inviteCode, email).run();

  return c.json({ success: true, user });
});

app.get('/my-invites', async (c) => {
  const email = c.req.query('email');
  if(!email) return c.json([]);

  const user: any = await c.env.axis_db.prepare("SELECT id FROM users WHERE email = ?").bind(email).first();
  if(!user) return c.json([]);

  const { results } = await c.env.axis_db.prepare(
    "SELECT * FROM invites WHERE creator_id = ?"
  ).bind(user.id).all();

  return c.json(results);
});

async function fetchWithTimeout(resource: string, options: any = {}) {
  const { timeout = 5000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

app.get('/tokens', (c) => {
  // 外部APIには行かず、メモリ上のリストを返すだけなので爆速
  console.log(`[Axis Internal] Returning ${STRICT_LIST.length} curated tokens.`);
  return c.json(STRICT_LIST);
});

app.get('/vaults', async (c) => {
  try {
    const { results } = await c.env.axis_db.prepare("SELECT * FROM vaults ORDER BY created_at DESC").all();
    
    // DBに保存されたJSON文字列をオブジェクトに戻す
    const vaults = results.map((v: any) => ({
      ...v,
      composition: v.composition ? JSON.parse(v.composition) : []
    }));

    return c.json(vaults);
  } catch (e: any) {
    console.error("Fetch Vaults Error:", e);
    return c.json({ error: e.message }, 500);
  }
});

// 3. Create New Vault (Save to DB)
app.post('/vaults', async (c) => {
  try {
    const body = await c.req.json();
    const { name, symbol, description, creator, strategy, fee, minLiquidity, composition, imageUrl } = body;

    // UUID生成
    const id = crypto.randomUUID();

    // D1に保存
    await c.env.axis_db.prepare(`
      INSERT INTO vaults (id, name, symbol, description, creator, strategy_type, management_fee, min_liquidity, composition, image_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id, 
      name, 
      symbol, 
      description, 
      creator, 
      strategy || 'yield_max', 
      fee, 
      minLiquidity, 
      JSON.stringify(composition), // 配列を文字列化して保存
      imageUrl
    ).run();

    return c.json({ success: true, id });
  } catch (e: any) {
    console.error("Create Vault Error:", e);
    return c.json({ success: false, error: e.message }, 500);
  }
});

/**
 * 2. Faucet API (Claim USDC)
 */
app.post("/claim", async (c) => {
  const { wallet_address } = await c.req.json();
  if (!wallet_address) return c.json({ error: "Wallet address required" }, 400);

  try {
    const secret = bs58.decode(c.env.FAUCET_PRIVATE_KEY);
    const adminKeypair = Keypair.fromSecretKey(secret);

    const connection = new Connection(clusterApiUrl("devnet"), "processed");
    const userPublicKey = new PublicKey(wallet_address);

    const adminTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      adminKeypair,
      USDC_MINT,
      adminKeypair.publicKey
    );

    const userTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      adminKeypair,
      USDC_MINT,
      userPublicKey
    );

    const amount = 1000 * 1_000_000;

    // ✅ tx を自前で作る
    const tx = new Transaction().add(
      createTransferInstruction(
        adminTokenAccount.address,
        userTokenAccount.address,
        adminKeypair.publicKey,
        amount
      )
    );

    // ✅ 最新 blockhash を明示
    const latest = await connection.getLatestBlockhash("processed");
    tx.recentBlockhash = latest.blockhash;
    tx.feePayer = adminKeypair.publicKey;
    tx.sign(adminKeypair);

    // ✅ 送信は confirm しない（= ここで待たない）
    const sig = await connection.sendRawTransaction(tx.serialize(), {
      skipPreflight: false,
      maxRetries: 3,
    });

    // ✅ confirm は裏でベストエフォート（失敗してもレスポンスに影響させない）
    c.executionCtx.waitUntil(
      (async () => {
        try {
          await connection.confirmTransaction(
            { signature: sig, ...latest },
            "confirmed"
          );
        } catch (e) {
          console.warn("confirm failed (non-fatal):", e);
        }
      })()
    );

    return c.json({ success: true, signature: sig, message: "Sent 1,000 USDC (Devnet)" });
  } catch (e: any) {
    console.error(e);
    return c.json({ error: "Transfer failed: " + e.message }, 500);
  }
});

/**
 * 3. ユーザー登録API
 */
app.post('/register', async (c) => {
  try {
    const { email, wallet_address, invite_code_used } = await c.req.json()

    if (!email || !wallet_address || !invite_code_used) {
      return c.json({ error: 'Missing fields' }, 400)
    }

    // A. 招待コード確認
    const referrer = await c.env.axis_db.prepare('SELECT id FROM users WHERE invite_code = ?')
      .bind(invite_code_used)
      .first()

    if (!referrer) {
      return c.json({ error: 'Invalid invite code' }, 400)
    }

    // B. 重複確認
    const existing = await c.env.axis_db.prepare('SELECT id, invite_code FROM users WHERE email = ? OR wallet_address = ?')
      .bind(email, wallet_address)
      .first()

    if (existing) {
      return c.json({ 
        success: true, 
        user: { 
          id: existing.id, 
          invite_code: existing.invite_code,
          is_existing: true 
        } 
      })
    }

    // C. 新規登録
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase()
    const newInviteCode = `AXIS-${randomSuffix}`
    const newId = crypto.randomUUID()

    await c.env.axis_db.prepare(
      'INSERT INTO users (id, email, wallet_address, invite_code, referred_by) VALUES (?, ?, ?, ?, ?)'
    ).bind(newId, email, wallet_address, newInviteCode, invite_code_used).run()

    return c.json({ 
      success: true, 
      user: { 
        id: newId, 
        invite_code: newInviteCode,
        is_existing: false
      } 
    })

  } catch (e) {
    console.error(e)
    return c.json({ error: 'Internal Server Error' }, 500)
  }
})

export default app