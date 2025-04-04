import "../styles/technology.css"

function TechCard(props) {
    const { techHeading, techInfo, box1, box2, box3, img } = props.curElem;
    return (
        <>
            <div className="tech-info">
                <div className="tech-text">
                    <div>
                        <h1>{techHeading}</h1>
                        <p>{techInfo}</p>
                    </div>
                    <div className="tech-boxes">
                        <div className="box">
                            {box1}
                        </div>
                        <div className="box">{box2}</div>
                        <div className="box">{box3}</div>
                    </div>
                </div>
                <div className="tech-img">
                    <img className="img" src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default TechCard;