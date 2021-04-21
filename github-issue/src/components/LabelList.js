import '../css/LabelList.css';

function LabelList() {
    const temp = {
        backgroundColor: "#a2eeef",
        color: "black"
    };

  return (
    <div className="label-list-container">
        <ul className="label-list">
            <li className="label-title">
                <div><b>8 labels</b></div>
            </li>
            <li className="label-item">
                <div className="label-name">
                    <div>bug</div>
                </div>
                <div className="description">Something isn't working</div>
                <div className="label-buttons" >
                    <div className="edit">Edit</div>
                    <div className="delete">Delete</div>
                </div>
            </li>
            <li className="label-item">
                <div className="label-name">
                    <div style={temp}>feature</div>
                </div>
                <div className="description">New feature or request</div>
                <div className="label-buttons" >
                    <div className="edit">Edit</div>
                    <div className="delete">Delete</div>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default LabelList;
