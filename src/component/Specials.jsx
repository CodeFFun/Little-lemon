import Card from "./Card"


function Specials() {
    
  return (
    <div className='specials'>
        <div className="special-heading">
            <h1>Specials</h1>
            <button className='btn'>Online Menu</button>
        </div>
        <div className="card-container">
        <Card />
        </div>
    </div>
  )
}

export default Specials