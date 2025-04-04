import "../styles/services.css";
import "../styles/ServiceCard.css";
import serviceCard from "../api/serviceCard.json";
import ServiceCard from "../components/serviceCard";

function Services() {
    return (
        <>

            <div className="service-content">
                <h1>Services of Classic Print </h1>
            </div>
            <div className="columns">
                {serviceCard.map((curElem) => {
                    return (
                        <ServiceCard key={curElem.id} curElem={curElem} />
                    )
                })
                }
            </div >
        </>

    )
}
export default Services;