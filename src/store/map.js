import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  markers: [],
  isMapVisible: true,
  isMarkerEnabled: false,
  theme: 'streets-v11',
  cursor: 'grab',
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.theme = action.payload;
    },
    addMarker: (state, action) => {
      state.markers = [...state.markers, action.payload];
    },
    removeMarker: (state, action) => {
      state.markers = state.markers.filter((marker) => marker !== action.payload);
    },
    setCursor: (state, action) => {
      state.cursor = action.payload;
    },
    setMarkerEnabled: (state, action) => {
      state.isMarkerEnabled = action.payload;
    },
    setMapVisible: (state, action) => {
      state.isMapVisible = action.payload;
    },
    toggleMapVisibility: (state) => {
      state.isMapVisible = !state.isMapVisible;
    },
  },
});

export const {
  setTheme,
  addMarker,
  removeMarker,
  setCursor,
  setMarkerEnabled,
  setMapVisible,
  toggleMapVisibility,
} = mapSlice.actions;

export default mapSlice.reducer;
