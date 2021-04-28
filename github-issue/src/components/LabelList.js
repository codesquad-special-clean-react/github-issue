import "../css/LabelList.css";
import React, {useState, useEffect} from "react";
import LabelItem from "./LabelItem";
import {fetchLabels} from "../api/LabelApi";

function LabelList() {
    const [labels, setLabels] = useState([]);
    const [labelsLength, setLabelsLength] = useState(0);

    const getLabels = () => {
        fetchLabels("http://localhost:3001/labels")
            .then((data) => {
                setLabels(data);
                setLabelsLength(data.length);
            })
    }

    useEffect( ()=> {
        getLabels();
    }, [labels]);

    return (
        <div className="label-list-container">
            <ul className="label-list">
                <li className="label-title">
                    <div>
                        <b>{labelsLength} labels</b>
                    </div>
                </li>
                <LabelItem labels={labels}/>
            </ul>
        </div>
    );
}

export default LabelList;
