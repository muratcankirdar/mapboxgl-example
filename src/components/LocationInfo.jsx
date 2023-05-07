import '../App.css';
import { useDispatch } from 'react-redux';
import { setCursor } from '../store/map';

const LocationInfo = ({ onEnableMarker }) => {
  const dispatch = useDispatch();

  const enableMarker = () => {
    dispatch(setCursor('crosshair'));
    onEnableMarker();
  };

  return (
    <>
      <div className="location">
        <p>Location info</p>
        <button onClick={enableMarker}>Place marker</button>
      </div>
    </>
  );
};

export default LocationInfo;
