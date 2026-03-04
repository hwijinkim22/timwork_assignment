"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedDiscipline } from "@/store/slices/drawingSlice";
import { Drawing } from "@/types/drawing";

interface DisciplineTabProps {
  drawing: Drawing;
}

export default function DisciplineTab({ drawing }: DisciplineTabProps) {
  const dispatch = useAppDispatch();

  const selectedDiscipline = useAppSelector(
    (state) => state.drawing.selectedDiscipline
  );

  const disciplines = Object.keys(drawing.disciplines);

  return (
    <div className="border-b border-gray-200 bg-white px-4">
      <div className="flex gap-1">
        {disciplines.map((discipline) => (
          <button
            key={discipline}
            onClick={() => dispatch(setSelectedDiscipline(discipline))}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors
              ${
                selectedDiscipline === discipline
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
          >
            {discipline}
          </button>
        ))}
      </div>
    </div>
  );
}
