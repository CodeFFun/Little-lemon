import {useState} from 'react'

function Bookings() {
  const [formGroup, setFormGroup] = useState({
    name:'',
    date: '',
    time: '',
    ocassion: '',
  })

  const onChange = (e) => {
    setFormGroup({
      ...formGroup,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formGroup)
  }

  return (
    <>
     <form className='form-control' onSubmit={onSubmit}>
      <div className="input-space">
        <input type='text' required = 'required' name='name' value={formGroup.name} onChange={onChange} placeholder='Reservation for'/>
      </div>
      <div className="input-space" >
        <input type="date" required='required' name = 'date' onChange={onChange} value={formGroup.date} />
      </div>
      <div className="input-space">
        <input type='time' required = 'required' name='time' onChange={onChange} value={formGroup.time}/>
      </div>
      <div className="input-space" >
        <input type='text' required = 'required'  name = 'ocassion' onChange={onChange} value={formGroup.ocassion} placeholder='ocassion'/>
      </div>
      <input type='submit' value = 'Submit' className='btn'/>
      </form>
    </>
  )
}

export default Bookings