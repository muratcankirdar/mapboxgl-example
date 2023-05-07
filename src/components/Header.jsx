import { useDispatch } from 'react-redux';
import { toggleMapVisibility, setTheme } from '../store/map.js';

const Header = () => {
  const dispatch = useDispatch();

  const handleThemeChange = (e) => {
    dispatch(setTheme(e.target.id));
  };

  return (
    <div className="header-buttons">
      <button onClick={() => dispatch(toggleMapVisibility())}>Toggle Map</button>

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
