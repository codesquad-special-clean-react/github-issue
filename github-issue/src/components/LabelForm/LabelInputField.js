const LabelInputField = ({ label, data, onChange }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      width: '25%',
    }}
  >
    <p>{label}</p>
    <input
      value={data}
      onChange={onChange}
      style={{ width: '100%', height: '27px' }}
    />
  </div>
);

export default LabelInputField;
