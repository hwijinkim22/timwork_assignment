import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DrawingState {
  selectedDrawingId: string;
  selectedDiscipline: string;
  selectedRevision: string;
}

const initialState: DrawingState = {
  selectedDrawingId: "00",
  selectedDiscipline: "",
  selectedRevision: "",
};

const drawingSlice = createSlice({
  name: "drawing",
  initialState,
  reducers: {
    setSelectedDrawingId: (state, action: PayloadAction<string>) => {
      state.selectedDrawingId = action.payload;
      state.selectedDiscipline = "";
      state.selectedRevision = "";
    },

    setSelectedDiscipline: (state, action: PayloadAction<string>) => {
      state.selectedDiscipline = action.payload;
      state.selectedRevision = "";
    },

    setSelectedRevision: (state, action: PayloadAction<string>) => {
      state.selectedRevision = action.payload;
    },
  },
});

export const {
  setSelectedDrawingId,
  setSelectedDiscipline,
  setSelectedRevision,
} = drawingSlice.actions;

export default drawingSlice.reducer;
