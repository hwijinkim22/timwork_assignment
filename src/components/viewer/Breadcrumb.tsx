"use client";

import { useAppSelector } from "@/store/hooks";
import { Drawing } from "@/types/drawing";

interface BreadcrumbProps {
  drawings: Record<string, Drawing>;
}

export default function Breadcrumb({ drawings }: BreadcrumbProps) {
  const selectedDrawingId = useAppSelector(
    (state) => state.drawing.selectedDrawingId
  );

  const selectedDiscipline = useAppSelector(
    (state) => state.drawing.selectedDiscipline
  );

  const seletedRevision = useAppSelector(
    (state) => state.drawing.selectedRevision
  );

  const currentDrawing = drawings[selectedDrawingId];

  return (
    <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="text-gray-600">전체 배치도</span>

        {selectedDrawingId !== "00" && (
          <>
            <span className="text-gray-300">›</span>
            <span className="text-gray-600">{currentDrawing?.name}</span>
          </>
        )}

        {selectedDiscipline && (
          <>
            <span className="text-gray-300">›</span>
            <span className="text-gray-600">{selectedDiscipline}</span>
          </>
        )}

        {seletedRevision && (
          <>
            <span className="text-gray-300">›</span>
            <span className="text-blue-500 font-medium">{seletedRevision}</span>
          </>
        )}
      </div>
    </div>
  );
}
