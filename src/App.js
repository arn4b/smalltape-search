import './App.css';
import SearchBar from './Components/SearchBox/SearchBar';

function App() {
  return (
    <div className="App">
      <div className='app-hero'>smalltape - search stocks and marketcaps</div>
      <SearchBar placeholder={"Search for stocks"} className="app-searchbar"/>
    </div>
  );
}

export default App;
