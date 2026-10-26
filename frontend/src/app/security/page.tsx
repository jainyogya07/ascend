"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SecurityRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/core/queue");
  }, [router]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center text-xs font-mono text-zinc-400 animate-pulse">
      Routing to Core Verification Workspace...
    </div>
  );
}
