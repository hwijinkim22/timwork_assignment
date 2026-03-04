"use client";

import AppShell from "@/components/layout/AppShell";
import DrawingList from "@/components/sidebar/DrawingList";
import { getMetadata } from "@/lib/metadata";
import { Metadata } from "@/types/drawing";
import { useEffect, useState } from "react";

export default function Home() {
  const [metadata, setMetadata] = useState<Metadata | null>(null);

  useEffect(() => {
    getMetadata().then(setMetadata);
  }, []);

  if (!metadata) return <div>로딩 중 ...</div>;

  return (
    <AppShell sidebar={<DrawingList drawings={metadata.drawings} />}>
      <div className="p-4">메인 영역</div>
    </AppShell>
  );
}
