import '../css/Header.css';

function Header() {
  return (
    <div className="header-container">
        <tabGroup className="tab-style">
            <button className="left active">Lables</button>
            <button className="right">Milestones</button>
        </tabGroup>
        <buttonGroup className="button-style">
            <button className="green">New label</button>
        </buttonGroup>
    </div>
  );
}

export default Header;
