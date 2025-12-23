import { CreateVaultForm } from "@/app/create/CreateVaultForm";

export default function CreatePage() {
  return (
    <div className="space-y-8 pb-20">
      {/* Page Header */}
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-serif tracking-tight">
          Create ETF
        </h1>
        <p className="text-neutral-400 font-serif italic max-w-2xl">
          Launch your own on-chain index fund. Select assets, define your strategy, and let the protocol handle rebalancing.
        </p>
      </div>

      {/* Main Form Component */}
      <CreateVaultForm />
    </div>
  );
}