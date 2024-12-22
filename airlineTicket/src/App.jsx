import '/src/index.css'
import Header from './components/Header.jsx';
import Cta from './components/Cta.jsx';
import DestinationCards from './components/DestinationCards.jsx';
import TicketCounter from './components/TicketCounter.jsx';
import Modal from './components/Modal.jsx';

function App() {

  return (
    <>
      <Header/>
      <TicketCounter />
      <Modal />
      <DestinationCards  headerText="Explore Destinations"/>
      <Cta/>
    </>
  )
}

export default App
