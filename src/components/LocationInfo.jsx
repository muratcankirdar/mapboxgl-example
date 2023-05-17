import '../App.css';
import { useDispatch } from 'react-redux';
import { setCursor, setLocationSelectionEnabled, resetViewState } from '../store/map';

const LocationInfo = () => {
  const dispatch = useDispatch();

  const enableMarker = () => {
    dispatch(setCursor('crosshair'));
    dispatch(setLocationSelectionEnabled(true));
  };

  return (
    <>
      <div className="location">
        <p>Location info</p>
        <div className="location-info-buttons">
          <button onClick={enableMarker}>Enable Marker Selection</button>
          <button onClick={() => dispatch(resetViewState())}>Reset Map View</button>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
