import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  markers: [],
  isMapVisible: true,
  isSourceVisible: true,
  isLocationSelectionEnabled: false,
  theme: 'streets-v11',
  cursor: 'grab',
  viewState: {
    longitude: -100,
    latitude: 37,
    zoom: 3,
  },
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    addMarker: (state, action) => {
      state.markers = [...state.markers, action.payload];
    },
    setCursor: (state, action) => {
      state.cursor = action.payload;
    },
    setLocationSelectionEnabled: (state, action) => {
      state.isLocationSelectionEnabled = action.payload;
    },
    toggleMapVisibility: (state) => {
      state.isMapVisible = !state.isMapVisible;
    },
    setViewState: (state, action) => {
      state.viewState = action.payload;
    },
    resetViewState: (state) => {
      state.viewState = initialState.viewState;
    },
    toggleSourceVisibility: (state) => {
      state.isSourceVisible = !state.isSourceVisible;
    },
  },
});

export const {
  setTheme,
  addMarker,
  setCursor,
  setLocationSelectionEnabled,
  toggleMapVisibility,
  setViewState,
  resetViewState,
  toggleSourceVisibility,
} = mapSlice.actions;

export default mapSlice.reducer;
