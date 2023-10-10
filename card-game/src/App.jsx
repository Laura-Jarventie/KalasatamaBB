import './App.css'
import { useState } from 'react';
import Card from './Components/Card.jsx'

const getRandomInt = (min, max) =>
Math.floor(Math.random() * (max - min + 1) ) + min;

  const kortti = (index) => ({
    kuva: 'http://placekitten.com/120/100?image=' + index,
    stats: [
      {name: 'paino', value: getRandomInt(3,15)},
      {name: 'söpöys', value: getRandomInt(1,100)},
      {name: 'nopeus', value: getRandomInt(1,40)},
      {name: 'ruokahalu', value: getRandomInt(1,5)},
    ],
  });

  const korttipakka = Array(16).fill(null).map((_,index)=>kortti(index));
  console.log(korttipakka);

  const pelaajanKortti = korttipakka[0];
  const vastustajanKortti = korttipakka[1];


function App() {

const [result, setResult] = useState('');


function vertaaKortteja() {
 const playerStat = pelaajanKortti.stats[0];
 const opponentStat = vastustajanKortti.stats[0];

 if (playerStat.value === opponentStat.value) setResult('tasapeli');
 else if (playerStat.value > opponentStat.value) setResult('voitto');
 else setResult('häviö');

 //console.log(result);

}


  return (
    <>
    <h1>KISSAKORTTIPELI</h1>
    <p>{result}</p>
    <p>oma kortti</p>
      <Card card={pelaajanKortti}/>
      <button onClick={vertaaKortteja} type='button'>Pelaa</button>
      <p>Vastustajan kortti</p>
      <Card card={vastustajanKortti}/>
    </>
  )
}

export default App
