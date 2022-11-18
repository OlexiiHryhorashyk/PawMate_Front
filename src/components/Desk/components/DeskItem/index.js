import "./index.css"
function DeskItem(props) {
    return (
        <div className="desk-item">
            <div className="desk-item__img"><img src={props.image} alt=""/></div>
            <div className="desk-item__header">{props.header}</div>
            <div className="desk-item__desc">{props.desc}</div>
        </div>
    )
}

export default DeskItem