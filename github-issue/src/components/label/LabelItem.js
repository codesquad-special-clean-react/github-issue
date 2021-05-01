import "../../css/LabelItem.css";
import React, {useState} from "react";
import NewLabel from "./NewLabel";

function LabelItem({labels, addLabelAPI, deleteLabel}) {
    const [editYn, setEditYn] = useState(false);
    const onClickDelete = async ({currentTarget}) => {
        const id = currentTarget.closest("li.label-item").getAttribute("data-id");

        deleteLabel('http://localhost:3001/labels', id);
    }

    let items = labels.map( ({ id, name, desc, color }) => {
        return (
            <>
                <li className="label-item" key={id} data-id={id}>
                    <div className="label-name">
                        <div style={{backgroundColor: color}}>{name}</div>
                    </div>
                    <div className="description">{desc}</div>
                    <div className="label-buttons">
                        <div className="edit">Edit</div>
                        <div className="delete" onClick={onClickDelete}>Delete</div>
                    </div>
                </li>
                {editYn && <NewLabel />}
            </>
        )
    });

    return (
        <>
            {items}
        </>
    );
}

export default LabelItem;
