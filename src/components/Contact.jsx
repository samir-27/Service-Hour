import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
        <form action="">
            <div>
                <label htmlFor="">Name</label>
                <input type="text" required placeholder='abc'/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" required placeholder='sam25@abc.com'/>
            </div>
            <div>
                <label htmlFor="">Massage</label>
                <input type="text" required placeholder='Tell Us About Your Query'/>
            </div>
            <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
