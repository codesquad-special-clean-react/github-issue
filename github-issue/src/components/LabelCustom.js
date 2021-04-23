import "../css/LabelCustom.css";
import "../css/button.css";
import "../css/common.css";
import "../css/Header.css";

const LabelCustom = () => {
    return (
        <>
            <div className="label-custom-container new-label-form">
                <div className="label-preview">
                    <span className="tag">Temp Label</span>
                </div>

                {/*<div className="label-name">*/}
                {/*    <div>bug</div>*/}
                {/*</div>*/}

                <div className="label-info">
                    <div className="input-title-style name">
                        <span>Label Name</span>
                        <input type="text" placeholder="Label name" />
                    </div>

                    <div className="input-title-style desc">
                        <span>Description</span>
                        <input type="text" placeholder="Description (optional)" />
                    </div>

                    <div className="input-title-style color">
                        <span>Color</span>
                        <div>
                            <button className="button-style reset-btn"></button>
                            <input type="text" className="color-code" />
                        </div>
                    </div>

                    <button className="button-style cancel-btn">Cancel</button>
                    <button className="button-style green disabled" disabled>
                        Create Label
                    </button>
                </div>
            </div>
        </>
    );
};

export default LabelCustom;
