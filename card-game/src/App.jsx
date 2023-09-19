import './App.css'
import Card from './Components/Card.jsx'

function App() {

  const pelaajanKortti = {
    kuva: 'http://placekitten.com/120/100'
  };

  return (
    <>
      <Card card={pelaajanKortti}/>
    </>
  )
}

export default App
