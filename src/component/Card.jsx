import Bruchetta from '../icons_assets/bruchetta.svg'
import GreekSalad from '../icons_assets/greek salad.jpg'
import LemonDesert from '../icons_assets/lemon dessert.jpg'

  function Card() {
    const specials = [
      {
          img: Bruchetta,
          foodItem: 'Bruchetta' ,
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quis illo at expedita ipsam accusamus, amet libero sit labore quo.',
          price: '$15'
      },
      {
          img: GreekSalad,
          foodItem: 'Greek Salad' ,
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quis illo at expedita ipsam accusamus, amet libero sit labore quo.',
          price: '$17.8'
      },
      {
          img: LemonDesert,
          foodItem: 'Lemon Desert' ,
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quis illo at expedita ipsam accusamus, amet libero sit labore quo.',
          price: '$18.9'
      },
  ]

  return (
    <>
       {specials.map((item, index) => {
          return  <div className="card-content" key={index}>
              <img src={item.img} alt='food'/>
              <div className="item-headings" >
                  <h3>{item.foodItem}</h3>
                  <h4>{item.price}</h4>
              </div>
              <p>{item.description}</p>
          </div>
          })}
    </>
  )
}


export default Card