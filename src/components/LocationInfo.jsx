import '../App.css';
import { useDispatch } from 'react-redux';
import { setCursor, setLocationSelectionEnabled } from '../store/map';

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
        <button onClick={enableMarker}>Enable Marker Selection</button>
      </div>
    </>
  );
};

export default LocationInfo;
