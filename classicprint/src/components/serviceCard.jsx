import "../styles/ServiceCard.css"
import { motion } from "framer-motion";
function ServiceCard(props) {

    const { heading, info, list, images, bgcolor } = props.curElem;
    return (
        <>

            <motion.div
                initial={{ opacity: 0, y: 50 }} // Start invisible and below
                whileInView={{ opacity: 1, y: 0 }} // Fade in and move to position
                transition={{ duration: 1 }} // Animation duration
                viewport={{ once: true, amount: 0.5 }}
                className="column-content" style={{ border: `0.5rem solid ${bgcolor}` }}>
                <div className="details">
                    <h1>{heading}</h1>
                    <p>{info}</p>
                    <ul>
                        {list && list.map((item, index) => ( // Ensure list exists before mapping
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="service-images">
                    {images && images.map((img, index) => (
                        <img src={img} key={index} alt="Image" />
                    ))}
                </div>
            </motion.div>
        </>
    )
}

export default ServiceCard;