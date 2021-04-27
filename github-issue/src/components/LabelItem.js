import "../css/LabelItem.css";
import { useState, useEffect } from 'react';
import {fetchLabels, labelApi} from "../api/LabelApi";

function LabelItem({}) {
    const [labels, setLabels] = useState("");
    let items = "";

    const getLabels = () => {
        fetchLabels("http://localhost:3001/labels")
            .then((data) => {
                setLabels(data);
            })
            .then(() => {
                makeLabelItems();
            })
    }

    const onClickDelete = async ({currentTarget}) => {
        const id = currentTarget.closest("li.label-item").getAttribute("data-id");

        await labelApi('http://localhost:3001/labels', id);
        await getLabels();
    }

    const makeLabelItems = () => {
        if (labels.length <= 0) return null;

        items = labels.map( ({ id, name, desc, color, deleteBool }) => {
            return (
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
            )
        });
    }

    makeLabelItems();

    useEffect( ()=> {
        getLabels();
    }, [])


    return (
        <>
            {items}
        </>
    );
}

export default LabelItem;
