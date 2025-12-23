-- Users Table (招待コード使用履歴用カラムを追加)
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  wallet_address TEXT,
  invite_code_used TEXT, -- 自分が登録に使ったコード
  otp_code TEXT,
  otp_expires INTEGER,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

-- ★ NEW: Invites Table (招待コード管理)
DROP TABLE IF EXISTS invites;
CREATE TABLE invites (
  code TEXT PRIMARY KEY,       -- 招待コード (例: AXIS-8X92A)
  creator_id TEXT NOT NULL,    -- 発行したユーザーのID
  used_by_user_id TEXT,        -- 使用したユーザーのID (NULLなら未使用)
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);

-- Admin用の初期招待コード (これが最初の入り口)
INSERT INTO invites (code, creator_id) VALUES ('AXIS-ALPHA', 'admin-id');
INSERT INTO invites (code, creator_id) VALUES ('AXIS-BETA', 'admin-id');

-- Vaults Table (ETF保存用)
DROP TABLE IF EXISTS vaults;
CREATE TABLE vaults (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  symbol TEXT NOT NULL,
  description TEXT,
  creator TEXT NOT NULL, -- 作成者のWallet Address
  strategy_type TEXT DEFAULT 'yield_max',
  management_fee REAL DEFAULT 0.95,
  min_liquidity REAL DEFAULT 0,
  composition TEXT NOT NULL, -- 構成銘柄をJSON文字列として保存
  image_url TEXT,
  tvl REAL DEFAULT 0,
  apy REAL DEFAULT 0,
  created_at INTEGER DEFAULT (strftime('%s', 'now'))
);