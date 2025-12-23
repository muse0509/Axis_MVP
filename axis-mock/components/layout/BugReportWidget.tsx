"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Megaphone, ImagePlus, Loader2, MessageSquareWarning } from "lucide-react"; // Bug -> Megaphoneに変更
import { toast } from "sonner";
import { submitBugReport } from "@/app/actions/submit-bug";

export function BugReportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [discord, setDiscord] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshot(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!discord || !description) {
      toast.error("Please fill in required fields.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("discord", discord);
    formData.append("description", description);
    if (screenshot) {
      formData.append("screenshot", screenshot);
    }

    const result = await submitBugReport(formData);

    setIsSubmitting(false);

    if (result.success) {
      toast.success("Bug report sent! Thank you.");
      setIsOpen(false);
      setDiscord("");
      setDescription("");
      setScreenshot(null);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* --- Modal Form --- */}
      {isOpen && (
        <Card className="w-[350px] bg-[#1E1E24] border-white/10 shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="p-5 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <MessageSquareWarning className="text-white" /> Report a Bug
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-neutral-300">
                  Discord (required)
                </label>
                <Input
                  placeholder="Username"
                  className="bg-[#2B2B36] border-white/5 text-white placeholder:text-neutral-500"
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-neutral-300">
                  Description (required)
                </label>
                <Textarea
                  placeholder="What's the bug? What did you expect?"
                  className="bg-[#2B2B36] border-white/5 text-white placeholder:text-neutral-500 min-h-[100px] resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-[#2B4B64]/50 border-sky-500/30 text-sky-400 hover:bg-[#2B4B64] hover:text-sky-300 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <ImagePlus size={16} className="mr-2" />
                  {screenshot ? screenshot.name : "Add a screenshot"}
                </Button>
              </div>

              <div className="space-y-2 pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit"}
                </Button>
                
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full bg-[#2B4B64] hover:bg-[#233d52] text-white/80"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
              </div>

            </form>
          </div>
        </Card>
      )}

      {/* --- ★ Trigger Button (Updated Style) --- */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-12 px-6 rounded-full bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] hover:bg-neutral-200 border border-white/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
        >
          <Megaphone size={18} className="text-neutral-800" />
          <span>Bug Report</span>
        </Button>
      )}
    </div>
  );
}