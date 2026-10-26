"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ShieldAlert, CheckCircle2, ArrowLeft, Lock, ArrowRight, ShieldCheck } from "lucide-react";

function VerifyContent() {
  const params = useSearchParams();
  const token = params.get("session_proof");

  // Dynamic cipher stream for Gate 04 (Zero plaintext in AST / compilation bundle)
  const CIPHER_STREAM = [
    39, 54, 41, 36, 32, 32, 0, 53, 15, 47, 25, 0, 127, 84, 2, 70, 44, 49, 
    35, 52, 66, 1, 0, 63, 92, 26, 40, 27, 10, 11, 66, 2, 1, 68, 30
  ];

  const isValidToken = token === "sec_qr_flow_9821";

  let decryptedToken = "";
  if (isValidToken && token) {
    for (let i = 0; i < CIPHER_STREAM.length; i++) {
      decryptedToken += String.fromCharCode(CIPHER_STREAM[i] ^ token.charCodeAt(i % token.length));
    }
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200 relative z-20">
      {/* Top Nav Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          href="/achievements"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#141418] border border-slate-200 dark:border-zinc-800 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
          <span>Return to Achievement Registry</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
          <Lock className="w-3.5 h-3.5" />
          <span>OPTICAL PROOF ATTESTATION</span>
        </div>
      </div>

      {!isValidToken ? (
        /* ACCESS DENIED STATE (Shown if token is invalid or missing) */
        <div className="rounded-2xl bg-white dark:bg-[#0E0E11] border border-rose-500/30 p-8 sm:p-10 space-y-5 text-center shadow-md">
          <div className="w-14 h-14 rounded-2xl bg-rose-100 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800">
              UNAUTHORIZED ACCESS // 403 FORBIDDEN
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
              Missing Optical Session Handshake Proof
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-[#8B8B9A] max-w-lg mx-auto leading-relaxed">
            Direct navigation to this deep verification route without an authorized optical session token is restricted by perimeter access policy. Valid session credentials required.
          </p>
          <div className="pt-2">
            <Link
              href="/security"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-zinc-800 hover:bg-slate-800 dark:hover:bg-zinc-700 text-white text-xs font-bold transition shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Security Portal</span>
            </Link>
          </div>
        </div>
      ) : (
        /* AUTHORIZED PROOF STATE (Shown ONLY when session_proof === 'sec_qr_flow_9821') */
        <div className="rounded-2xl bg-white dark:bg-[#0E0E11] border border-emerald-500/30 p-8 sm:p-10 space-y-6 shadow-md animate-in zoom-in-95 duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-zinc-800/80 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  OPTICAL SESSION VERIFIED
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Handshake Proof Confirmed
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                150 PTS AUTHENTICATED
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#141418] border border-slate-200 dark:border-zinc-800 font-mono text-xs space-y-1.5 text-slate-700 dark:text-zinc-300">
            <div>Session Proof : <span className="text-blue-500 font-bold">{token}</span></div>
            <div>Routing       : /core/audit/verify</div>
            <div>Consensus     : Optical Handshake Level-H Validated ✅</div>
            <div>Status        : Authoritative Session Ingestion Confirmed</div>
          </div>

          <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-6 text-center space-y-2">
            <div className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              AUTHORITATIVE TSJ FLAG AWARDED:
            </div>
            <div className="text-lg sm:text-2xl font-mono font-black text-emerald-700 dark:text-emerald-300 tracking-wider select-all break-all">
              {decryptedToken}
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Achievement Registry</span>
            </Link>
            <Link
              href="/core/audit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-md shadow-blue-600/20"
            >
              <span>Inspect Cryptographic Audit Trail &rarr;</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DeepAuditVerifyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center text-xs font-mono text-zinc-400 animate-pulse">
          Validating Optical Proof Token...
        </div>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}
