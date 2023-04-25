import person1 from '../icons_assets/R.jpg'
import person2 from '../icons_assets/Image.jpg'
import person3 from '../icons_assets/person-1.jpg'


function Testimonials() {
    const testimony = [
        {
            rating: 7.5,
            img:person1,
            name: 'Kyle',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit blanditiis nisi. Neque, sit odit!'
        },
        {
            rating: 9.5,
            img:person2,
            name: 'Rose',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit blanditiis nisi. Neque, sit odit!'
        },
        {
            rating: 8.0,
            img:person3,
            name: 'Beth',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit blanditiis nisi. Neque, sit odit!'
        },
    ]
  return (
    <div className='testimonials'>
        <h1 className="testimonials-heading">Testimonials</h1>
        <div className="testimony-body">
        {testimony.map((item, index) => {
            return <div className="testimony-content" key={index}>
                <h3>{item.rating}</h3>
                <div className="testimony-details">
                    <img src={item.img} alt="I like it" />
                    <p>{item.name}</p>
                </div>
                <p>{item.description}</p>
            </div>
        })}
        </div>
    </div>
  )
}

export default Testimonials