"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Shield, 
  Lock, 
  ArrowRight, 
  Terminal,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";

// ==========================================
// Configuration
// ==========================================

// Curator access password - in production, this should be validated server-side
const CURATOR_PASSWORD = "axis2024";

// ==========================================
// Types
// ==========================================

interface CuratorAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ==========================================
// Main Component
// ==========================================

/**
 * Curator Access Modal
 * 
 * Provides password-protected access to Curator Studio
 * Includes setup guide for new curators
 */
export function CuratorAccessModal({ isOpen, onClose }: CuratorAccessModalProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSetupGuide, setShowSetupGuide] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate verification delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (password === CURATOR_PASSWORD) {
      toast.success("Access granted! Welcome to Curator Studio.");
      // Store curator access in session
      sessionStorage.setItem("curator_access", "true");
      onClose();
      router.push("/curator-studio");
    } else {
      toast.error("Invalid access code. Please try again.");
    }

    setIsLoading(false);
  };

  const handleClose = () => {
    setPassword("");
    setShowSetupGuide(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[95%] max-w-lg rounded-3xl border-white/10 bg-[#09090b] text-white sm:w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 font-serif text-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <Shield size={20} className="text-emerald-400" />
            </div>
            Curator Studio Access
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Professional ETF creation and backtesting platform for institutional curators.
          </DialogDescription>
        </DialogHeader>

        {!showSetupGuide ? (
          <div className="space-y-6 pt-4">
            {/* Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-xs text-neutral-400">
                  <Lock size={12} />
                  Access Code
                </Label>
                <Input
                  type="password"
                  placeholder="Enter curator access code"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-white/10 bg-white/5 text-white placeholder:text-neutral-600"
                  autoFocus
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading || !password}
                className="h-12 w-full bg-emerald-500 text-black hover:bg-emerald-400 disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                    Verifying...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Access Curator Studio
                    <ArrowRight size={16} />
                  </span>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center">
              <div className="flex-1 border-t border-white/10" />
              <span className="px-4 text-xs text-neutral-600">or</span>
              <div className="flex-1 border-t border-white/10" />
            </div>

            {/* Setup Guide Link */}
            <button
              onClick={() => setShowSetupGuide(true)}
              className="group w-full rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left transition-all hover:border-emerald-500/30 hover:bg-emerald-500/5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800">
                  <Terminal size={14} className="text-neutral-400 group-hover:text-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="mb-1 text-sm font-medium text-white">New Curator?</p>
                  <p className="text-xs text-neutral-500">
                    Learn how to set up your curator environment and get started.
                  </p>
                </div>
                <ArrowRight size={16} className="mt-1 text-neutral-600 transition-transform group-hover:translate-x-1 group-hover:text-emerald-400" />
              </div>
            </button>

            {/* Info Note */}
            <p className="text-center text-[10px] text-neutral-600">
              Curator access is currently in closed beta.
              <br />
              Contact the Axis team for access credentials.
            </p>
          </div>
        ) : (
          /* Setup Guide */
          <div className="space-y-6 pt-4">
            {/* Back Button */}
            <button
              onClick={() => setShowSetupGuide(false)}
              className="flex items-center gap-2 text-xs text-neutral-500 transition-colors hover:text-white"
            >
              <ArrowRight size={12} className="rotate-180" />
              Back to login
            </button>

            {/* Setup Steps */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-bold text-white">
                <Terminal size={14} className="text-emerald-400" />
                Curator Setup Guide
              </h3>

              {/* Step 1 */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                    1
                  </div>
                  <span className="text-sm font-medium text-white">Request Access</span>
                </div>
                <p className="mb-3 text-xs text-neutral-400">
                  Apply for curator status by filling out the application form. Include your:
                </p>
                <ul className="space-y-1 text-xs text-neutral-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={10} className="text-emerald-500" />
                    Trading experience & portfolio history
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={10} className="text-emerald-500" />
                    Investment strategy overview
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={10} className="text-emerald-500" />
                    Social/professional profiles
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3 w-full border-white/10 text-xs"
                  onClick={() => window.open("https://forms.gle/example", "_blank")}
                >
                  <ExternalLink size={12} className="mr-2" />
                  Apply for Curator Access
                </Button>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-xs font-bold text-neutral-400">
                    2
                  </div>
                  <span className="text-sm font-medium text-white">Verification</span>
                </div>
                <p className="text-xs text-neutral-400">
                  The Axis team will review your application and conduct a brief verification call 
                  to discuss your strategy and goals.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-xs font-bold text-neutral-400">
                    3
                  </div>
                  <span className="text-sm font-medium text-white">Get Started</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Once approved, you will receive your curator access code and can start creating 
                  professional ETFs with advanced backtesting tools.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <p className="mb-2 text-xs font-medium text-emerald-400">Questions?</p>
              <p className="text-[11px] text-neutral-400">
                Reach out on{" "}
                <a
                  href="https://twitter.com/Axis__Solana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 underline"
                >
                  Twitter @Axis__Solana
                </a>{" "}
                or join our{" "}
                <a
                  href="https://discord.gg/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 underline"
                >
                  Discord
                </a>
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
