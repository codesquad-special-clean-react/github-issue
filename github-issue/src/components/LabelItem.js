import "../css/LabelItem.css";

function LabelItem({labels}) {

    console.log(labels);

    let items = "";
    if (labels.length > 0) {
        items = labels.map( ({ id, name, desc, color, deleteBool }) => (
            <li className="label-item" key={id} data-id={id}>
                <div className="label-name">
                    <div style={{backgroundColor: color}}>{name}</div>
                </div>
                <div className="description">{desc}</div>
                <div className="label-buttons">
                    <div className="edit">Edit</div>
                    <div className="delete">Delete</div>
                </div>
            </li>
        ));
    }

    return (
        <>
            {items}
        </>
    );
}

export default LabelItem;
