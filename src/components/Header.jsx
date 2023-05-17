import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleMapVisibility,
  setTheme,
  setViewState,
  resetViewState,
  toggleSourceVisibility,
} from '../store/map.js';
import locations from '../static/locations.js';
import Select from 'react-select';

const Header = () => {
  const [location, setLocation] = useState(null);
  const dispatch = useDispatch();

  const handleThemeChange = (e) => {
    dispatch(setTheme(e.target.id));
  };

  const handleLocationSelect = (item) => {
    setLocation(item);

    dispatch(
      setViewState({
        longitude: item.longitude,
        latitude: item.latitude,
        zoom: 14,
      })
    );
  };

  const resetLocation = () => {
    if (!location.id) return;

    setLocation(null);
    dispatch(resetViewState());
  };

  return (
    <div className="header">
      <button onClick={() => dispatch(toggleMapVisibility())}>Toggle Map</button>
      <button onClick={() => dispatch(toggleSourceVisibility())}>Toggle Source</button>

      <div
        style={{
          margin: '10px 0',
          display: 'grid',
          gridTemplateColumns: '400px 100px',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Select value={location} onChange={handleLocationSelect} options={locations} />

        <button onClick={resetLocation}>Reset</button>
      </div>

      <div id="menu" onChange={handleThemeChange}>
        <input
          id="satellite-streets-v12"
          type="radio"
          name="theme"
          value="satellite"
          defaultChecked
        />
        <label htmlFor="satellite-streets-v12">satellite streets</label>
        <input id="light-v11" type="radio" name="theme" value="light" />
        <label htmlFor="light-v11">light</label>
        <input id="dark-v11" type="radio" name="theme" value="dark" />
        <label htmlFor="dark-v11">dark</label>
        <input id="streets-v12" type="radio" name="theme" value="streets" />
        <label htmlFor="streets-v12">streets</label>
        <input id="outdoors-v12" type="radio" name="theme" value="outdoors" />
        <label htmlFor="outdoors-v12">outdoors</label>
        <input id="traffic-day-v1" type="radio" name="theme" value="traffic-v1" />
        <label htmlFor="traffic-day-v1">traffic-v1</label>
        <input id="traffic-day-v2" type="radio" name="theme" value="traffic-v2" />
        <label htmlFor="traffic-day-v2">traffic-v2</label>
        <input
          id="navigation-preview-day-v4"
          type="radio"
          name="theme"
          value="navigation-preview-day-v4"
        />
        <label htmlFor="navigation-preview-day-v4">navigation-preview-day-v4</label>
      </div>
    </div>
  );
};

export default Header;
