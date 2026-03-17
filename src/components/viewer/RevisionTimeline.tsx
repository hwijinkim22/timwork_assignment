"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedRevision } from "@/store/slices/drawingSlice";
import { Drawing, Revision } from "@/types/drawing";

interface RevisonTimelineProps {
  drawings: Record<string, Drawing>;
}
export default function RevisionTimeline({ drawings }: RevisonTimelineProps) {
  const dispatch = useAppDispatch();

  const selectedDrawingId = useAppSelector(
    (state) => state.drawing.selectedDrawingId
  );

  const selectedDiscipline = useAppSelector(
    (state) => state.drawing.selectedDiscipline
  );

  const selectedRevision = useAppSelector(
    (state) => state.drawing.selectedRevision
  );

  if (!selectedDiscipline || selectedDrawingId === "00") return null;

  const currentDrawing = drawings[selectedDrawingId];

  const discipline = currentDrawing.disciplines[selectedDiscipline];

  const getRevisions = (): Revision[] => {
    if ("regions" in discipline) {
      return Object.values(discipline.regions).flatMap(
        (region) => region.revisions
      );
    }
    return discipline.revisions;
  };

  const revisions = getRevisions();

  return (
    <div className="border-t border-gray-200 bg-white px-4 py-3">
      <h3 className="text-xs font-semibold text-gray-400 mb-3">리비전 이력</h3>

      <div className="flex items-center gap-2">
        {revisions.map((revision, index) => (
          <div key={revision.version} className="flex items-center gap-2">
            <button
              onClick={() => dispatch(setSelectedRevision(revision.version))}
              className={`flex flex-col items-center px-3 py-2 rounded-lg border transition-colors
              ${
                selectedRevision === revision.version
                  ? "border-blue-500 bg-blue-50 text-blue-600"
                  : "border-gray-200 hover:border-gray-300 text-gray-600"
              } 
              `}
            >
              <span className="text-xs font-semibold">{revision.version}</span>
              <span className="text-xs text-gray-400 mt-1">
                {revision.date}
              </span>
            </button>

            {index < revisions.length - 1 && (
              <span className="text-gray-300 text-sm">→</span>
            )}
          </div>
        ))}
      </div>

      {selectedRevision && (
        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs font-semibold text-gray-500 mb-1">변경 내역</p>
          {revisions.find((r) => r.version === selectedRevision)?.changes
            .length === 0 ? (
            <p className="text-xs text-gray-400">초기 설계</p>
          ) : (
            revisions
              .find((r) => r.version === selectedRevision)
              ?.changes.map((change, i) => (
                <p key={i} className="text-xs text-gray-600">
                  • {change}
                </p>
              ))
          )}
        </div>
      )}
    </div>
  );
}
