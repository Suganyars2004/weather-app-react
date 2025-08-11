import './App.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './Components/Searchbar'
import Weather from './Components/Weather';
function App() {
   return (
    <div className='container'>
      <h1>Weather Forecast</h1>
      <Searchbar/>
      <div>
        <Weather city="Chennai" temparature="32" condition="Sunny" icon="https://openweathermap.org/img/wn/01d@2x.png"/>
      </div>
    </div>
  );
}
export default App