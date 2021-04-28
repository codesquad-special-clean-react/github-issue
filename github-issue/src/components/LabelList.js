import "../css/LabelList.css";
import React, {useState, useEffect} from "react";
import LabelItem from "./LabelItem";
import {fetchLabels} from "../api/LabelApi";

function LabelList() {
    const [labels, setLabels] = useState([]);

    const getLabels = () => {
        fetchLabels("http://localhost:3001/labels")
            .then((data) => {
                setLabels(data);
            })
            .then(() => {
                // makeLabelItems();
            })
    }

    useEffect( ()=> {
        getLabels();
    }, []);

    return (
        <div className="label-list-container">
            <ul className="label-list">
                <li className="label-title">
                    <div>
                        <b>{labels.length} labels</b>
                    </div>
                </li>
                <LabelItem labels={labels}/>
            </ul>
        </div>
    );
}

export default LabelList;
