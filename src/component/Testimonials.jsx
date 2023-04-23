import React from 'react'

function Testimonials() {
    const testimony = [
        {
            rating: 7.5,
            img:'',
            name: '',
            description
        },
        {
            rating: 9.5,
            img:'',
            name: '',
            description
        },
        {
            rating: 8.0,
            img:'',
            name: '',
            description
        },
    ]
  return (
    <>
        <h1 className="testimonials-heading">Testimonials</h1>
        <div className="testimonials-content">
            <h3 className="rating"></h3>
            <div className="testimonials-pic">
                <img src="" alt="" />
                <p></p>
            </div>
            <p></p>
        </div>
    </>
  )
}

export default Testimonials