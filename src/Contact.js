import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c1e1572c-571a-493c-9843-2af0d7c821be");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
          title: "Sucess!",
          text: "Message envoyer avec succes!",
          icon: "success"
          });
    }
  };

  return (
    <section className='contact'>
      <form onSubmit={onSubmit}> 
          <h2>Contact Form</h2>
          <div className='input-box'>
              <label>Nom</label>
              <input type='text' name='name' className='field' placeholder='Entrer votre nom' required/>
          </div>
          <div className='input-box'>
              <label>Adresse Email</label>
              <input type='email' name='email' className='field' placeholder='Entrer votre email' required/>
          </div>
          <div className='input-box'>
              <label>Votre message</label>
                <textarea name="message" className='field mess' placeholder='Entrer votre message' required></textarea>
          </div>
          <button type='submit'>Envoyer message</button>
      </form>
    </section>
  )
}

export default Contact