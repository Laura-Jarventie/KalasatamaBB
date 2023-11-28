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
  


  function jaaKortit() {
    shuffle(korttipakka);
    return { 
    pelaaja: korttipakka.slice(0, puoliväli),
    vastustaja: korttipakka.slice(puoliväli)
    };
  }


//Fisher-Yates shuffle
function shuffle(array) {
  for ( let i=array.length -1; i >0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}




function App() {

const [kortit, setKortit] = useState(jaaKortit);
const [result, setResult] = useState('');
const [gameState, setGameState] = useState('pelaa');
const [valittuOminaisuus, setSelected] =useState(0);

function vertaaKortteja() {
 const playerStat = kortit.pelaaja[0].stats[0];
 const opponentStat = kortit.vastustaja[0].stats[0];

 if (playerStat.value === opponentStat.value) setResult('tasapeli');
 else if (playerStat.value > opponentStat.value) setResult('voitto');
 else setResult('häviö');

 

 setGameState('result');
}

function uusiKierros() {
setKortit(korttipakka => {
  //tekee kopiot kummankin ekoista korteista
  const pelatutKortit = [{...korttipakka.pelaaja[0]}, {...korttipakka.vastustaja[0]}];
  //kopion korttipakasta ilman ensimmäistä korttia - eli heittää meneen ekat kortit
  const pelaajanKortit = korttipakka.pelaaja.slice(1);
  const vastustajanKortit = korttipakka.vastustaja.slice(1);

  if (result === 'tasapeli'){
    return {
      pelaaja: pelaajanKortit,
      vastustaja: vastustajanKortit,
    };
  }
  if (result === 'voitto'){
    return {
      //kopion omasta pakasta ilman ensimmäsitä korttia ja lisää molempien ekat kortit listan perään
      pelaaja: [...pelaajanKortit, ...pelatutKortit],
      vastustaja: vastustajanKortit,
    };
  }
  if (result === 'häviö'){
    return {
      pelaaja: pelaajanKortit,
      vastustaja: [...vastustajanKortit, ...pelatutKortit]
    };
  }
return korttipakka;
});

  setGameState('pelaa');
  setResult('');
}


  return (
    <>
    
    <h1>KISSAKORTTIPELI</h1>
    
    
    
  <div className='pelialue'>

    <div>
    <h2>omat kortit</h2>
    <ul className='korttirivi'>
      {kortit.pelaaja.map((pelaajanKortti, index) => (
        <li className='korttirivi-kortti pelaaja' key={pelaajanKortti.id}>
          <Card card={index===0 ? pelaajanKortti:null} handleSelect={statsIndex => console.log(statsIndex)}/>
        </li> 
      ))}
    </ul>
    </div>

      <div className='center-area'> 
      <p>{result || 'paina tästä '} </p>
      {
        gameState==='pelaa' ? (
        <PlayButton text={'Pelaa'} handleClick={vertaaKortteja} />
        ) : (
        <PlayButton text={'Seuraava'} handleClick={uusiKierros} />
        )
      }
      </div>

      <div>
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
    </>
   
  )
}

export default App
