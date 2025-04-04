import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/footer.css';

function Footer() {
    return (
        <>
            <footer className="main-footer">
                <div className="social-media-icons">
                    <i className="bi bi-instagram social-icon"></i>
                    <i className="bi bi-facebook social-icon"></i>
                    <i className="bi bi-envelope social-icon"></i>
                </div>
                <h5>&copy; {new Date().getFullYear()} Classic Print & Pack. All rights reserved.</h5>
            </footer >
            <div className="boxes">

                {[
                    { box: 1, backgroundColor: "#54b9fd" },
                    { box: 2, backgroundColor: "#fd4682" },
                    { box: 3, backgroundColor: "#fde642" },
                    { box: 4, backgroundColor: "#54b9fd" },
                    { box: 5, backgroundColor: "#fd4682" },
                    { box: 6, backgroundColor: "#fde642" },
                    { box: 7, backgroundColor: "#54b9fd" },
                    { box: 8, backgroundColor: "#fd4682" },
                    { box: 9, backgroundColor: "#fde642" },
                    { box: 10, backgroundColor: "#54b9fd" },
                ].map((boxes) => (
                    <div key={boxes} className='box' style={{ backgroundColor: boxes.backgroundColor }}></div>
                ))}
            </div>
        </>
    )

}

export default Footer;