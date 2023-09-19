export default function Card({ card }){
    return (
        <>
            <div className='card'>
                <img src={card.kuva} />
                <ul className="stat-list">
                  <li className="stat-list-item">
                    <span>Cuteness</span>
                    <span>9</span>
                  </li>
                  <li className="stat-list-item">
                    <span>Weight</span>
                    <span>4kg</span>
                  </li>
                </ul>
            </div>
        </>
    );
}