import '/src/index.css';
import Header from './components/Header.jsx';
import Cta from './components/Cta.jsx';
import DestinationCards from './components/DestinationCards.jsx';
import TicketCounter from './components/TicketCounter.jsx';
import Hero from './components/Hero.jsx';
import WeatherSelector from './components/WeatherSelector.jsx';

function App() {

  
  return (
    <>
      <Header />
      <Hero />
      <WeatherSelector />
      <TicketCounter />
      <DestinationCards  headerText="Explore Destinations" />
      <Cta />
    </>
  )
}

export default App
