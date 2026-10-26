"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  FileText,
  Play,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";

export default function ForensicIncidentLab() {
  const [emlHeaders, setEmlHeaders] = useState<string | null>(null);
  const [emlLoading, setEmlLoading] = useState(false);
  const [sandboxState, setSandboxState] = useState<"IDLE" | "RUNNING" | "COMPLETE">("IDLE");
  const [sandboxOutput, setSandboxOutput] = useState<string>("");

  // Stream raw RFC-822 headers from external .eml artifact
  const handleStreamHeaders = async () => {
    if (emlHeaders !== null) {
      setEmlHeaders(null);
      return;
    }
    setEmlLoading(true);
    try {
      const res = await fetch("/artifacts/urgent_security_alert.eml");
      const text = await res.text();
      setEmlHeaders(text);
    } catch {
      setEmlHeaders("Error: Unable to stream artifact. Use direct download.");
    } finally {
      setEmlLoading(false);
    }
  };

  // Behavioral containment sandbox detonation
  const handleDetonate = () => {
    setSandboxState("RUNNING");
    setSandboxOutput(
      "▸ Initializing isolated QEMU/KVM containment environment...\n" +
      "▸ Loading captured payload into ephemeral VM instance...\n" +
      "▸ Monitoring syscall trace and network egress...\n"
    );

    setTimeout(() => {
      // Part 3 derivation: non-linear XOR transform (zero plaintext in static AST)
      const processMemoryDump = [203, 228, 184, 251, 187, 245];
      const entropyKey = 136;
      let closureDigest = "";
      for (let i = 0; i < processMemoryDump.length; i++) {
        closureDigest += String.fromCharCode(processMemoryDump[i] ^ entropyKey);
      }

      setSandboxState("COMPLETE");
      setSandboxOutput(
        "▸ Initializing isolated QEMU/KVM containment environment...\n" +
        "▸ Loading captured payload into ephemeral VM instance...\n" +
        "▸ Monitoring syscall trace and network egress...\n" +
        "▸ Zero malicious system calls detected.\n" +
        "▸ Network egress: 0 bytes (fully contained).\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
        "  [SANDBOX TELEMETRY LOG]\n" +
        "  Verdict        : BENIGN_SPOOF_SAMPLE\n" +
        "  Threat Level   : LOW (Social Engineering Only)\n" +
        "  Process Closure Signature: " + closureDigest + "\n" +
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
      );
    }, 1800);
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-[#0D0F14] border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-zinc-800/80 pb-5">
        <div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span>DIGITAL FORENSICS INCIDENT INVESTIGATION</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Inbound Threat Incident Response & Forensic Analysis
          </h3>
          <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 max-w-xl">
            Forensic audit trail for inbound threat incident INC-2026-8891. Review gateway telemetry, inspect raw RFC-822 message transport headers, and execute behavioral containment sandbox analysis.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            INCIDENT #INC-2026-8891
          </span>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            200 PTS TIER
          </span>
        </div>
      </div>

      {/* ━━━━━━ STAGE 1: GATEWAY TELEMETRY INGESTION LOG ━━━━━━ */}
      <div className="rounded-xl bg-slate-50 dark:bg-[#0A0B10] border border-slate-200 dark:border-zinc-800 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/50 border border-blue-300 dark:border-blue-800/60 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Gateway Telemetry Ingestion Log</h4>
              <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500">Perimeter IDS Record #8891</span>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
            INGESTION RECORD
          </span>
        </div>

        <div className="p-3.5 rounded-lg bg-black/80 font-mono text-xs text-emerald-400 space-y-1 overflow-x-auto">
          <div className="text-zinc-500"># Gateway Perimeter IDS — Incident Telemetry Capture</div>
          <div className="text-zinc-500"># Timestamp: 2026-10-26T14:00:00+0530</div>
          <div className="text-zinc-400">[AUDIT INCIDENT #8891]: High-urgency domain impersonation attempt flagged by perimeter gateway.</div>
          <div className="text-zinc-400">Source       : security-notice@internal-audit-ascend.org</div>
          <div className="text-zinc-400">Destination  : cohort-member@team03.ascend</div>
          <div className="text-zinc-400">Classification: SOCIAL_ENGINEERING / CREDENTIAL_PHISHING</div>
          <div className="text-emerald-400 font-bold mt-1">
            Ingestion Reference Digest: TSJ{"{"}N3v3r_Tru5t_
          </div>
        </div>
      </div>

      {/* ━━━━━━ STAGE 2: RAW RFC-822 EMAIL ARTIFACT ━━━━━━ */}
      <div className="rounded-xl bg-slate-50 dark:bg-[#0A0B10] border border-slate-200 dark:border-zinc-800 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800/60 flex items-center justify-center">
              <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Raw RFC-822 Transport Message Artifact</h4>
              <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500">Captured MIME Payload (Preserved)</span>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            STORED MIME PAYLOAD
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
          Inbound message preserved in standard RFC-822 format. Inspect raw transport headers and MIME attributes for forensic token evidence:
        </p>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleStreamHeaders}
            disabled={emlLoading}
            className="px-4 py-2 rounded-xl bg-white dark:bg-[#141418] hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-300 dark:border-zinc-700 text-xs font-semibold text-slate-800 dark:text-zinc-200 transition flex items-center gap-2 shadow-xs active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>{emlLoading ? "Streaming..." : emlHeaders ? "Hide Headers" : "📜 Stream Headers via Async Pipe"}</span>
          </button>
          <a
            href="/artifacts/urgent_security_alert.eml"
            download="urgent_security_alert.eml"
            className="px-4 py-2 rounded-xl bg-white dark:bg-[#141418] hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-300 dark:border-zinc-700 text-xs font-semibold text-slate-800 dark:text-zinc-200 transition flex items-center gap-2 shadow-xs active:scale-[0.98]"
          >
            <Download className="w-3.5 h-3.5 text-amber-500" />
            <span>📥 Download Raw .EML File</span>
          </a>
        </div>

        {emlHeaders && (
          <div className="p-3.5 rounded-lg bg-black/80 font-mono text-xs text-amber-300 whitespace-pre-wrap overflow-x-auto animate-in fade-in duration-200">
            {emlHeaders}
          </div>
        )}
      </div>

      {/* ━━━━━━ STAGE 3: QEMU BEHAVIORAL CONTAINMENT SANDBOX ━━━━━━ */}
      <div className="rounded-xl bg-slate-50 dark:bg-[#0A0B10] border border-slate-200 dark:border-zinc-800 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800/60 flex items-center justify-center">
              <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Dynamic Behavioral Containment Sandbox</h4>
              <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500">QEMU/KVM Ephemeral Runtime Analysis</span>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            EPHEMERAL RUNTIME
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
          Execute captured payloads in an isolated containment environment to evaluate process memory state and behavioral telemetry:
        </p>

        <button
          onClick={handleDetonate}
          disabled={sandboxState !== "IDLE"}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm active:scale-[0.98] ${
            sandboxState === "IDLE"
              ? "bg-emerald-600 hover:bg-emerald-500 text-white"
              : sandboxState === "RUNNING"
              ? "bg-amber-600 text-white cursor-wait"
              : "bg-emerald-800 text-emerald-200 cursor-default"
          }`}
        >
          {sandboxState === "IDLE" && <Play className="w-4 h-4" />}
          {sandboxState === "RUNNING" && <AlertTriangle className="w-4 h-4 animate-pulse" />}
          {sandboxState === "COMPLETE" && <CheckCircle2 className="w-4 h-4" />}
          <span>
            {sandboxState === "IDLE" && "⚡ Detonate in Containment Sandbox"}
            {sandboxState === "RUNNING" && "⏳ Sandbox Detonation in Progress..."}
            {sandboxState === "COMPLETE" && "✓ Detonation Analysis Complete"}
          </span>
        </button>

        {sandboxState !== "IDLE" && (
          <div className="p-3.5 rounded-lg bg-black/80 font-mono text-xs text-emerald-400 whitespace-pre-wrap overflow-x-auto animate-in fade-in duration-200">
            {sandboxOutput}
          </div>
        )}
      </div>
    </div>
  );
}
