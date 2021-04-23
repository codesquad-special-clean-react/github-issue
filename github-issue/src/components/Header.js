import "../css/Header.css";
import "../css/button.css";

function Header() {
    return (
        <div className="header-container">
            <tabGroup className="tab-style">
                <button className="left active">Lables</button>
                <button className="right">Milestones</button>
            </tabGroup>
            <buttonGroup>
                <button className="button-style green">New label</button>
            </buttonGroup>
        </div>
    );
}

export default Header;
