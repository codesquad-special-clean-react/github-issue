const LabelButtonField = ({ disabled = false, onClick, label, style }) => (
  <button disabled={disabled} style={style} onClick={onClick}>
    {label}
  </button>
);

export default LabelButtonField;
