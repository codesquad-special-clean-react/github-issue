import "../css/LabelItem.css";
import { useState, useEffect } from 'react';
import {fetchLabels, deteleLabel} from "../api/LabelApi";

function LabelItem({labels}) {
    const onClickDelete = async ({currentTarget}) => {
        const id = currentTarget.closest("li.label-item").getAttribute("data-id");

        await deteleLabel('http://localhost:3001/labels', id);
        await getLabels();
    }

    const getLabels = () => {
        fetchLabels("http://localhost:3001/labels")
        .then((data) => {
            labels = data;
        })
    }

    let items = labels.map( ({ id, name, desc, color }) => {
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

    return (
        <>
            {items}
        </>
    );
}

export default LabelItem;
