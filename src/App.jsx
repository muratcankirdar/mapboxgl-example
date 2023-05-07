import Header from './components/Header.jsx';
import SimpleMap from './components/SimpleMap.jsx';
import LocationInfo from './components/LocationInfo.jsx';

function App() {
  return (
    <>
      <div className="grid-container">
        <Header />

        <SimpleMap />

        <LocationInfo />
      </div>
    </>
  );
}

export default App;
