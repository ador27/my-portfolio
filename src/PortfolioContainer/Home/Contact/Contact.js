import React from 'react';
import './Contact.css';

const Contact = (Email) => {
    return (
        <div>
            <div className="container">
                <form onSubmit="sendEmail()">
                    <h3>Get in Touch</h3>
                    <input type="text" id="name" placeholder="Your Name" required />
                    <input type="email" id="email" placeholder="Your email" required />
                    <input type="text" id="phone" placeholder="Phone Number" required />
                    <textarea id="Message" rows="6" placeholder="How Can I Help You?"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            {/*    <script src="https://smtpjs.com/v3/smtp.js"></script>
            <script>
                function sendEmail(){
                    Email.send({
                        Host: "smtp.yourisp.com",
                        Username: "username",
                        Password: "password",
                        To: 'them@website.com',
                        From: "you@isp.com",
                        Subject: "This is the subject",
                        Body: "And this is the body"
                    }).then(
                        message => alert(message)
                    )
                };
            </script> */}
        </div>
    );
};

export default Contact;