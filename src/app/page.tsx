"use client";

import AppShell from "@/components/layout/AppShell";
import DrawingList from "@/components/sidebar/DrawingList";
import DisciplineTab from "@/components/viewer/DisciplineTab";
import { getMetadata } from "@/lib/metadata";
import { useAppSelector } from "@/store/hooks";
import { Metadata } from "@/types/drawing";
import { useEffect, useState } from "react";

export default function Home() {
  const [metadata, setMetadata] = useState<Metadata | null>(null);

  useEffect(() => {
    getMetadata().then(setMetadata);
  }, []);

  const selectedDrawingId = useAppSelector(
    (state) => state.drawing.selectedDrawingId
  );

  if (!metadata) return <div>로딩 중 ...</div>;

  return (
    <AppShell sidebar={<DrawingList drawings={metadata.drawings} />}>
      <div className="flex flex-col h-full">
        {selectedDrawingId !== "00" && (
          <DisciplineTab drawing={metadata.drawings[selectedDrawingId]} />
        )}
        <div className="p-4">메인 영역</div>
      </div>
    </AppShell>
  );
}
