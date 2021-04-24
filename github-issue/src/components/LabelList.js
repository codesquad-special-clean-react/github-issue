import "../css/LabelList.css";
import React, { useState, useEffect } from "react";
import useFetch from '../util/useFetch';
import LabelItem from "./LabelItem";

function LabelList() {
    const [labels, setLabels] = useState("");

    const setInitData = (initData) => setLabels(initData);

    const loading = useFetch(setInitData, 'http://localhost:3001/labels');

    useEffect( ()=> {
        console.log("새로운 내용이 렌더링됐네요", labels);
    }, [labels])

    return (
        <div className="label-list-container">
            <ul className="label-list">
                <li className="label-title">
                    <div>
                        <b>8 labels</b>
                    </div>
                </li>
                <LabelItem labels={labels} />
            </ul>
        </div>
    );
}

export default LabelList;
