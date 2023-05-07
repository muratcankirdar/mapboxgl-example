import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locations: [],
  isMapVisible: true,
  isLocationSelectionEnabled: false,
  theme: 'streets-v11',
  cursor: 'grab',
  viewState: {
    longitude: -122,
    latitude: 37,
    zoom: 3.5,
  },
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    addLocation: (state, action) => {
      state.locations = [...state.locations, action.payload];
    },
    removeLocation: (state, action) => {
      state.locations = state.locations.filter((location) => location !== action.payload);
    },
    setCursor: (state, action) => {
      state.cursor = action.payload;
    },
    setLocationSelectionEnabled: (state, action) => {
      state.isLocationSelectionEnabled = action.payload;
    },
    setMapVisible: (state, action) => {
      state.isMapVisible = action.payload;
    },
    toggleMapVisibility: (state) => {
      state.isMapVisible = !state.isMapVisible;
    },
    setViewState: (state, action) => {
      state.viewState = action.payload;
    },
  },
});

export const {
  setTheme,
  addLocation,
  removeLocation,
  setCursor,
  setLocationSelectionEnabled,
  setMapVisible,
  toggleMapVisibility,
  setViewState,
} = mapSlice.actions;

export default mapSlice.reducer;
