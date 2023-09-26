import './App.css'
import Card from './Components/Card.jsx'



  const pelaajanKortti = {
    kuva: 'http://placekitten.com/120/100',
    stats: [
      {name: 'paino', value: 10},
      {name: 'söpöys', value: 100},
      {name: 'nopeus', value: 5},
      {name: 'ruokahalu', value: 5},
    ],
  };

  const vastustajanKortti = {
    kuva: 'http://placekitten.com/120/100?=image=3',
    stats: [
      {name: 'paino', value: 10},
      {name: 'söpöys', value: 100},
      {name: 'nopeus', value: 5},
      {name: 'ruokahalu', value: 5},
    ],
  };

  function App() {
  return (
    <>
    <p>oma kortti</p>
      <Card card={pelaajanKortti}/>
      <p>Vastustajan kortti</p>
      <Card card={vastustajanKortti}/>
    </>
  )
}

export default App
