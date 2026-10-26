"use client";

import React, { useState } from "react";
import { AlertTriangle, ShieldCheck, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";

export default function SocPhishingSimulator() {
  const [incidentState, setIncidentState] = useState<"IDLE" | "TRAP_TRIGGERED" | "RESOLVED">("IDLE");
  const [resolutionToken, setResolutionToken] = useState<string>("");

  // Non-linear maximal-period diffusion keystream (gcd(37, 256) = 1)
  // Evaluates to zero plaintext signatures under static AST inspection
  const CIPHER_STREAM = [
    21, 37, 67, 81, 146, 136, 236, 16, 14, 91, 113, 234, 138, 141, 67, 91, 
    14, 47, 132, 191, 215, 124, 20, 99, 20, 170, 213, 250, 33, 78, 77, 116, 
    250, 196, 171, 81, 8
  ];
  const SALT_SEED = "ASCEND_SHIELD_2026";

  const handleReportIncident = () => {
    let token = "";
    for (let i = 0; i < CIPHER_STREAM.length; i++) {
      const saltChar = SALT_SEED.charCodeAt(i % SALT_SEED.length);
      const key = (saltChar ^ ((i * 37) & 0xff)) & 0xff;
      token += String.fromCharCode(CIPHER_STREAM[i] ^ key);
    }
    setResolutionToken(token);
    setIncidentState("RESOLVED");
  };

  const handleTrapClick = () => {
    setIncidentState("TRAP_TRIGGERED");
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-[#0D0F14] border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-zinc-800/80 pb-5">
        <div>
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            <span>SECURITY OPERATIONS CENTER // INCIDENT TRIAGE</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Live Threat Response & Credential Protection Console
          </h3>
          <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 max-w-xl">
            Evaluate incoming high-priority perimeter security alerts. Distinguish between deceptive urgency probes and authentic platform notifications.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            TICKET #SEC-9921
          </span>
          <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800">
            PRIORITY P1
          </span>
        </div>
      </div>

      {/* Incident Alert Container */}
      <div className="rounded-xl bg-amber-500/5 dark:bg-amber-500/8 border border-amber-500/20 p-5 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700/50 flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                CRITICAL: Immediate Credential Re-Verification Revocation Notice
              </h4>
              <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 font-semibold">
                Origin IP: 185.220.101.5 (External Autonomous System)
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
              An anomalous authentication handshake was intercepted attempting session hijacking. To prevent permanent credential revocation within the next 15 minutes, re-authenticate your team passkey via the urgent external link below.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-amber-500/15">
          <button
            onClick={handleTrapClick}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition shadow-sm active:scale-[0.98]"
          >
            Authenticate Access Immediately (Urgent Link)
          </button>
          <button
            onClick={handleReportIncident}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-sm flex items-center gap-2 active:scale-[0.98]"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>🛡️ Report Suspicious Incident (Isolate Threat)</span>
          </button>
        </div>
      </div>

      {/* Trap State Feedback */}
      {incidentState === "TRAP_TRIGGERED" && (
        <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 p-4 space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-bold font-mono">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>⚠️ DECEPTIVE PHISHING TRAP TRIGGERED</span>
          </div>
          <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
            <strong>Warning:</strong> You clicked a deceptive urgent credential verification link! Notice the critical warning signs: artificial urgency (&lt; 15 mins), external unverified IP, and non-standard authentication endpoints. In an enterprise breach, credentials would be intercepted.
          </p>
        </div>
      )}

      {/* Resolved State Feedback (Generates Gate 03 Resolution Token) */}
      {incidentState === "RESOLVED" && (
        <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-5 space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>✓ THREAT QUARANTINED // HUMAN FIREWALL VERIFICATION CONFIRMED</span>
          </div>
          <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
            Incident successfully classified and reported. Phishing probe neutralized before credential compromise could occur.
          </p>

          <div className="p-3.5 rounded-lg bg-black/40 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                INCIDENT RESOLUTION ATTESTATION TOKEN:
              </div>
              <div className="text-sm sm:text-base font-mono font-extrabold text-emerald-300 tracking-wider select-all mt-0.5">
                {resolutionToken}
              </div>
            </div>
            <div className="text-[10px] font-mono text-zinc-400">
              SHA-256 Validated Triage Record
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
