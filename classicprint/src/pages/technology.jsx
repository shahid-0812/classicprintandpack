import "../styles/technology.css"
import techCard from "../api/technologyCard.json";
import TechCard from "../components/techCard";


function Technology() {
    return (
        <>
            <div className="tech-heading">
                <h1>TECHNOLOGY</h1>
            </div>
            <div className="tech-container">
                {
                    techCard.map((curElem) => {
                        return (
                            <TechCard key={curElem.id} curElem={curElem} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Technology;