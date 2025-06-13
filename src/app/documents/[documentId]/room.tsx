'use client';

import { ReactNode } from 'react';

import { useParams } from 'next/navigation';

import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from '@liveblocks/react/suspense';

export function Room({ children }: { children: ReactNode }) {
  const params = useParams();

  return (
    <LiveblocksProvider publicApiKey={process.env.NEXT_PUBLIC_LIVE_BLOCKS_PUBLIC_KEY!}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
