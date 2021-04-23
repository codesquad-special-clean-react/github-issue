import { useLabel } from 'contexts/useLabel';
import { useRef, useState, forwardRef } from 'react';
import LabelBadge from './Label/LabelBadge.styled';

const initialForm = {
  name: 'Label Preview',
  color: '#7058FF',
  description: '',
};

const SubHeaderForm = () => {
  const { dispatch } = useLabel();
  const [form, setForm] = useState(initialForm);
  const formRef = useRef();

  const onAdd = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const newLabel = Object.fromEntries(formData);
    console.log(newLabel);
    dispatch({ type: 'ADD_LABEL', payload: { newLabel } });
  };

  const onChange = (e) => {
    console.log(e.target.name);
  };

  return (
    <>
      <LabelBadge color={form.color} name={form.name} />
      <form onSubmit={onAdd} ref={formRef}>
        <div style={{ display: 'flex' }}>
          {['Label name', 'Description', 'Color'].map((name, index) => (
            <Field name={name} form={form} key={index} onChange={onChange} />
          ))}
          <div>
            <button>Cancel</button>
            <button>Create Label</button>
          </div>
        </div>
      </form>
    </>
  );
};

const Field = ({ name, form, onChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>{name}</label>
      <input
        name={name}
        value={form[name.split(' ')[0].toLowerCase()]}
        onChange={onChange}
      />
    </div>
  );
};

export default SubHeaderForm;
