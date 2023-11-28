export default function Card({ card, handleSelect }){
    if(!card)
    return <div className='card' />;

    return (
        <>
            <div className='card'>
                <img src={card.kuva} />
                <ul className="stat-list">
                {card.stats.map((statsRivi, index) => (
                    <li className="stat-list-item" onClick={()=> handleSelect && handleSelect(index)}
                    key={index}>
                      <span>{statsRivi.name}</span> 
                      <span>{statsRivi.value}</span> 
                      </li>
                     )) }
                </ul>
            </div>
        </>
    );
}