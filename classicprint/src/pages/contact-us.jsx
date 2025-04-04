import "../styles/contact.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function ContactUs() {
    return (
        <>
            <div className="contact-form">
                <div className="contact-details">
                    <div className="detail-container">
                        <h1>GET IN TOUCH</h1>
                        <div className="detail-1">
                            <i className="bi bi-pin-map"></i>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi consequatur enim!</p>
                        </div>
                        <div className="detail-1">
                            <i className="bi bi-whatsapp"></i>
                            <p>+91 9974114848</p>
                        </div>
                        <div className="detail-1">
                            <i className="bi bi-facebook"></i>
                            <p>+91 9974114848</p>
                        </div>
                        <div className="detail-1">
                            <i className="bi bi-phone"></i>
                            <p>+91 9974114848</p>
                        </div>
                        <div className="detail-1">
                            <i className="bi bi-envelope"></i>
                            <p>+91 9974114848</p>
                        </div>
                    </div>
                </div>
                <form method="POST" className="form">
                    <h1>Contact Us</h1>
                    <input className="input" type="text" placeholder="Enter Your Name" />
                    <input className="input" type="email" placeholder="Enter Your Email" />
                    <input className="input" type="text" placeholder="Enter Your Number" />
                    <textarea placeholder="Enter Your Message"></textarea>
                    <input className="btn" type="submit" value="Submit" maxLength={200} />
                </form>
            </div>

            {/* Google Maps Embed */}
            <div className="google-maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1298.617134428208!2d72.52097478562243!3d22.98541209963881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739340125790!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </>
    );
}

export default ContactUs;
