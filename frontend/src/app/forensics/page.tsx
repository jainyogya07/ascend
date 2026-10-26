"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ForensicsRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/core/audit");
  }, [router]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center text-xs font-mono text-zinc-400 animate-pulse">
      Routing to Cryptographic Audit Trail...
    </div>
  );
}
