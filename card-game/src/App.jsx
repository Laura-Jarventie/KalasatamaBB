import './App.css'
import { useState } from 'react';
import Card from './Components/Card.jsx'
import PlayButton from './Components/PlayButton.jsx';

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
    id: crypto.randomUUID(),
  });

  const korttipakka = Array(16).fill(null).map((_,index)=>kortti(index));
  const puoliväli = Math.ceil(korttipakka.length / 2);
  console.log(korttipakka);


  function jaaKortit() {
    shuffle(korttipakka);
    return { 
    pelaaja: korttipakka.slice(0, puoliväli),
    vastustaja: korttipakka.slice(puoliväli)
    };
  }
console.log(jaaKortit())

//Fisher-Yates shuffle
function shuffle(array) {
  for ( let i=array.length -1; i >0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  //const pelaajanKortti = korttipakka[0];
  //const vastustajanKortti = korttipakka[1];


function App() {

const [kortit, setKortit] = useState(jaaKortit);
const [result, setResult] = useState('');


function vertaaKortteja() {
 const playerStat = kortit.pelaaja[0].stats[0];
 const opponentStat = kortit.vastustaja[0].stats[0];

 if (playerStat.value === opponentStat.value) setResult('tasapeli');
 else if (playerStat.value > opponentStat.value) setResult('voitto');
 else setResult('häviö');

 //console.log(result);

}


  return (
    <div>
      <div>
    <h1>KISSAKORTTIPELI</h1>
    <p>{result}</p>
    </div>
    <div className='pelialue'>

    <h2>omat kortit</h2>
    <ul className='korttirivi'>
      {kortit.pelaaja.map((pelaajanKortti, index) => (
        <li className='korttirivi-kortti pelaaja' key={pelaajanKortti.id}>
          <Card card={index===0 ? pelaajanKortti:null}/>
        </li> 
      ))}
    </ul>

      <PlayButton text={'Pelaa'} handleClick={vertaaKortteja} />

      <h2>Vastustajan kortit</h2>
      <ul className='korttirivi vastustaja'>
      {kortit.vastustaja.map((vastustajanKortti, index) => (
        <li className='korttirivi-kortti vastustaja' key={vastustajanKortti.id}>
          <Card card={index===0 ? vastustajanKortti:null}/>
        </li> 
      ))}
      </ul>

      </div>
    </div>
   
  )
}

export default App
