import Map from 'react-map-gl'
import '../App.css'

const token =
  'pk.eyJ1IjoiY2FydG9kYmluYyIsImEiOiJja202bHN2OXMwcGYzMnFrbmNkMzVwMG5rIn0.Zb3J4JTdJS-oYNXlR3nvnQ'

const SimpleMap = ({ theme }) => {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 800, height: 400 }}
      mapStyle={`mapbox://styles/mapbox/${theme}`}
      mapboxAccessToken={token}
      attributionControl={false}
    />
  )
}

export default SimpleMap
