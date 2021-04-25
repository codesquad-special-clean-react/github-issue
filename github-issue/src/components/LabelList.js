import "../css/LabelList.css";
import LabelItem from "./LabelItem";

function LabelList() {
    return (
        <div className="label-list-container">
            <ul className="label-list">
                <li className="label-title">
                    <div>
                        <b>8 labels</b>
                    </div>
                </li>
                <LabelItem />
            </ul>
        </div>
    );
}

export default LabelList;
