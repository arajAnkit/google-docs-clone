"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
  const params = useParams();
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_pFdL9Wop3EPXPl2_xtIXbXWTuiWmWuW1D_65PWG5FqSiSHFy--pJlPHaLRR7RYUw"
      }
    >
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
