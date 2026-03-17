"use client";

import AppShell from "@/components/layout/AppShell";
import DrawingList from "@/components/sidebar/DrawingList";
import Breadcrumb from "@/components/viewer/Breadcrumb";
import DisciplineTab from "@/components/viewer/DisciplineTab";
import DrawingViewer from "@/components/viewer/DrawingViewer";
import RevisionTimeline from "@/components/viewer/RevisionTimeline";
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
        <Breadcrumb drawings={metadata.drawings} />

        {selectedDrawingId !== "00" && (
          <DisciplineTab drawing={metadata.drawings[selectedDrawingId]} />
        )}
        <DrawingViewer drawings={metadata.drawings} />

        <RevisionTimeline drawings={metadata.drawings} />
      </div>
    </AppShell>
  );
}
