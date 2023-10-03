import './App.css'
import Card from './Components/Card.jsx'

const getRandomInt = (min, max) =>
Math.floor(Math.random() * (max - min + 1) ) + min;

console.log(getRandomInt(1,2))

  const pelaajanKortti = {
    kuva: 'http://placekitten.com/120/100?image=' + getRandomInt(1,16),
    stats: [
      {name: 'paino', value: getRandomInt(3,15)},
      {name: 'söpöys', value: getRandomInt(1,100)},
      {name: 'nopeus', value: getRandomInt(1,40)},
      {name: 'ruokahalu', value: getRandomInt(1,5)},
    ],
  };

  const vastustajanKortti = {
    kuva: 'http://placekitten.com/120/100?image=' + getRandomInt(1,16),
    stats: [
      {name: 'paino', value: getRandomInt(3,15)},
      {name: 'söpöys', value: getRandomInt(1,100)},
      {name: 'nopeus', value: getRandomInt(1,40)},
      {name: 'ruokahalu', value: getRandomInt(1,5)},
    ],
  };

  function App() {

function vertaaKortteja() {
 const playerStat = pelaajanKortti.stats[0];
 const opponentStat = vastustajanKortti.stats[0];

 let result= '';

 if (playerStat.value === opponentStat.value) result = 'tasapeli';
 else if (playerStat.value > opponentStat.value) result = 'voitto';
 else result = 'häviö'

 console.log(result);

}


  return (
    <>
    <p>oma kortti</p>
      <Card card={pelaajanKortti}/>
      <button onClick={vertaaKortteja} type='button'>Pelaa</button>
      <p>Vastustajan kortti</p>
      <Card card={vastustajanKortti}/>
    </>
  )
}

export default App
