"use client";

import { useAppSelector } from "@/store/hooks";
import { Drawing } from "@/types/drawing";
import Image from "next/image";

interface DrawingViewerProps {
  drawings: Record<string, Drawing>;
}

export default function DrawingViewer({ drawings }: DrawingViewerProps) {
  const selectedDrawingId = useAppSelector(
    (state) => state.drawing.selectedDrawingId
  );

  const selectedDiscipline = useAppSelector(
    (state) => state.drawing.selectedDiscipline
  );

  const currentDrawing = drawings[selectedDrawingId];

  const getImageSrc = () => {
    if (selectedDrawingId === "00" || !selectedDiscipline) {
      return `/data/drawings/${currentDrawing.image}`;
    }

    const discipline = currentDrawing.disciplines[selectedDiscipline];

    if (discipline.image) {
      return `/data/drawings/${discipline.image}`;
    }

    if ("revisions" in discipline && discipline.revisions.length > 0) {
      return `/data/drawings/${discipline.revisions[0].image}`;
    }

    return `/data/drawings/${currentDrawing.image}`;
  };
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-100 p-4">
      <div className="relative w-full h-full">
        <Image
          src={getImageSrc()}
          alt={currentDrawing.name}
          fill
          className="object-contain"
        ></Image>
      </div>
    </div>
  );
}
