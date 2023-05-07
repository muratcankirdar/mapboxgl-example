import { useState, useMemo } from 'react';
import Map, { Marker } from 'react-map-gl';
// import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { addMarker, setMarkerEnabled } from '../store/map.js';

const token =
  'pk.eyJ1IjoiY2FydG9kYmluYyIsImEiOiJja202bHN2OXMwcGYzMnFrbmNkMzVwMG5rIn0.Zb3J4JTdJS-oYNXlR3nvnQ';

const SimpleMap = () => {
  const markers = useSelector((state) => state.map.markers);
  const theme = useSelector((state) => state.map.theme);
  const cursor = useSelector((state) => state.map.cursor);
  const isMarkerEnabled = useSelector((state) => state.map.isMarkerEnabled);
  const isMapVisible = useSelector((state) => state.map.isMapVisible);
  const dispatch = useDispatch();

  const [viewState, setViewState] = useState({
    longitude: -122,
    latitude: 37,
    zoom: 3.5,
  });

  const onMapClick = (e) => {
    const lngLat = e.lngLat;
    const { lng, lat } = lngLat;

    if (isMarkerEnabled) {
      dispatch(addMarker({ lat, lng }));
      setMarkerEnabled(false);
    }
    console.log(e);
  };

  const renderMarkers = useMemo(
    () =>
      markers.map((marker, index) => (
        <Marker key={index} longitude={marker.lng} latitude={marker.lat} />
      )),
    [markers]
  );

  return (
    <div className="map">
      {isMapVisible && (
        <Map
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          cursor={cursor}
          style={{ width: '100%', height: '100%' }}
          mapStyle={`mapbox://styles/mapbox/${theme}`}
          mapboxAccessToken={token}
          attributionControl={false}
          onClick={onMapClick}
          hash={false}
        >
          {renderMarkers}
          <Marker longitude={-100} latitude={40} anchor="bottom" />
        </Map>
      )}
    </div>
  );
};

export default SimpleMap;
