import Icon from '../../icons';
const LabelColorField = ({ label, data, onClick, onChange }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      width: '25%',
    }}
  >
    <p>{label}</p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <button style={{ width: '27px', height: '27px' }} onClick={onClick}>
        {Icon('refresh')}
      </button>
      <input
        type="color"
        style={{ width: '85%', height: '27px' }}
        value={data}
        onChange={onChange}
      />
    </div>
  </div>
);

export default LabelColorField;
