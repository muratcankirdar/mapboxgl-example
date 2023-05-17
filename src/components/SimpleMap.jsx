import { useMemo, useRef } from 'react';
import Map, { Marker, MapProvider, Source, Layer } from 'react-map-gl';
import { useSelector, useDispatch } from 'react-redux';
import { addMarker, setLocationSelectionEnabled, setCursor, setViewState } from '../store/map.js';

const token =
  'pk.eyJ1IjoiY2FydG9kYmluYyIsImEiOiJja202bHN2OXMwcGYzMnFrbmNkMzVwMG5rIn0.Zb3J4JTdJS-oYNXlR3nvnQ';

const SimpleMap = () => {
  const mapRef = useRef(null);
  const markers = useSelector((state) => state.map.markers);
  const theme = useSelector((state) => state.map.theme);
  const cursor = useSelector((state) => state.map.cursor);
  const isLocationSelectionEnabled = useSelector((state) => state.map.isLocationSelectionEnabled);
  const isMapVisible = useSelector((state) => state.map.isMapVisible);
  const isSourceVisible = useSelector((state) => state.map.isSourceVisible);
  const viewState = useSelector((state) => state.map.viewState);
  const dispatch = useDispatch();

  const geojson = {
    type: 'FeatureCollection',
    features: [{ type: 'Feature', geometry: { type: 'Point', coordinates: [-122.4, 37.8] } }],
  };

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf',
    },
  };

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

      dispatch(addMarker({ lat, lng }));
      dispatch(setLocationSelectionEnabled(false));
      dispatch(setCursor('grab'));
    }
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

            {isSourceVisible && (
              <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
              </Source>
            )}
          </Map>
        </MapProvider>
      )}
    </div>
  );
};

export default SimpleMap;
