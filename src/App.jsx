import { useState } from 'react'
import './App.css'
import SimpleMap from './components/SimpleMap.jsx'

function App() {
  const [isMapVisible, setMapVisible] = useState(true)
  const [theme, setTheme] = useState('satellite-streets-v12')

  const handleThemeChange = (e) => {
    setTheme(e.target.id)
  }

  return (
    <>
      <div className="grid-container">
        <div className="header-buttons">
          <button onClick={() => setMapVisible(!isMapVisible)}>Toggle Map</button>

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
          </div>
        </div>

        <div className="map">{isMapVisible && <SimpleMap theme={theme} />}</div>

        <div className="location">Location info</div>
      </div>
    </>
  )
}

export default App
