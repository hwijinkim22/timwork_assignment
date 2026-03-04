"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedDrawingId } from "@/store/slices/drawingSlice";
import { Drawing } from "@/types/drawing";

interface DrawingListProps {
  drawings: Record<string, Drawing>;
}

export default function DrawingList({ drawings }: DrawingListProps) {
  const dispatch = useAppDispatch();

  const selectedDrawingId = useAppSelector(
    (state) => state.drawing.selectedDrawingId
  );

  const rootDrawing = Object.values(drawings).find((d) => d.parent === null);
  const childDrawings = Object.values(drawings).filter(
    (d) => d.parent === "00"
  );

  return (
    <div className="p-4">
      <h2 className="text-sm font-semibold text-gray-500 mb-3">도면 목록</h2>
      {rootDrawing && (
        <button
          onClick={() => dispatch(setSelectedDrawingId(rootDrawing.id))}
          className={`w-full text-left px-3 py-2 rounded-md text-sm mb-1
          ${
            selectedDrawingId === rootDrawing.id
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100 text-gray-700"
          }
          `}
        >
          {rootDrawing.name}
        </button>
      )}

      <hr className="my-3 border-gray-200" />

      {childDrawings.map((drawing) => (
        <button
          key={drawing.id}
          onClick={() => dispatch(setSelectedDrawingId(drawing.id))}
          className={`w-full text-left px-3 py-2 rounded-md text-sm mb-1
            ${
              selectedDrawingId === drawing.id
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
        >
          {drawing.name}
        </button>
      ))}
    </div>
  );
}
