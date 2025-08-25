import React from 'react'
import './ContactStyles.css'
import Swal from 'sweetalert2'

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5920411f-ecd7-469f-8a84-69433e2aef78");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            event.target.reset();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Failed to send message. Please try again.",
                icon: "error"
            });
            setResult(data.message);
        }
    };

  return (
    <section className='contact'>
        <form onSubmit={onSubmit}>
            <h2>Contact</h2>
            <div className="input-box">
                <label>Full name</label>
                <input name="name" type="text" className='field' placeholder='Enter your name' required />
            </div>
            <div className="input-box">
                <label>Email Address</label>
                <input name="email" type="email" className='field' placeholder='Enter your Email' required />
            </div>
            <div className="input-box">
                <label>Message</label>
                <textarea name="message" className='field mess' placeholder='Enter your Message' required ></textarea>
            </div>
            <br></br>
            <button type='submit'>Send Message</button>
        </form>

    </section>
  )
}

export default Contact