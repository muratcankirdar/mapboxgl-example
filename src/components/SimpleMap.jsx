import { useMemo, useRef } from 'react';
import Map, { Marker, MapProvider } from 'react-map-gl';
import { useSelector, useDispatch } from 'react-redux';
import { addLocation, setLocationSelectionEnabled, setCursor, setViewState } from '../store/map.js';

const token =
  'pk.eyJ1IjoiY2FydG9kYmluYyIsImEiOiJja202bHN2OXMwcGYzMnFrbmNkMzVwMG5rIn0.Zb3J4JTdJS-oYNXlR3nvnQ';

const SimpleMap = () => {
  const mapRef = useRef(null);
  const locations = useSelector((state) => state.map.locations);
  const theme = useSelector((state) => state.map.theme);
  const cursor = useSelector((state) => state.map.cursor);
  const isLocationSelectionEnabled = useSelector((state) => state.map.isLocationSelectionEnabled);
  const isMapVisible = useSelector((state) => state.map.isMapVisible);
  const viewState = useSelector((state) => state.map.viewState);
  const dispatch = useDispatch();

  const onMapClick = (e) => {
    const lngLat = e.lngLat;
    const { lng, lat } = lngLat;

    if (isLocationSelectionEnabled) {
      if (mapRef.current) {
        mapRef.current.flyTo({
          center: [lng, lat],
          zoom: 14,
        });
      }

      dispatch(addLocation({ lat, lng }));
      dispatch(setLocationSelectionEnabled(false));
      dispatch(setCursor('grab'));
    }
  };

  const renderMarkers = useMemo(
    () =>
      locations.map((marker, index) => (
        <Marker key={index} longitude={marker.lng} latitude={marker.lat} />
      )),
    [locations]
  );

  return (
    <div className="map">
      {isMapVisible && (
        <MapProvider>
          <Map
            {...viewState}
            ref={mapRef}
            id="simpleMap"
            onMove={(evt) => dispatch(setViewState(evt.viewState))}
            cursor={cursor}
            style={{ width: '100%', height: '100%' }}
            mapStyle={`mapbox://styles/mapbox/${theme}`}
            mapboxAccessToken={token}
            attributionControl={false}
            onClick={onMapClick}
            hash={false}
          >
            {renderMarkers}
          </Map>
        </MapProvider>
      )}
    </div>
  );
};

export default SimpleMap;
