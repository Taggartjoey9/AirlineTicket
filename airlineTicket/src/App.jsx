import Header from './components/Header.jsx';
import Cta from './components/Cta.jsx';
import DestinationCards from './components/DestinationCards.jsx';

function App() {

  return (
    <>
      <Header/>
      <DestinationCards  headerText="Explore Destinations"/>
      <Cta/>
    </>
  )
}

export default App
