import { useState } from 'react';
import styled from 'styled-components';
import loop from '../../assets/icons/loop.svg'
import { randomColor } from '../../utils/randomColor';
import Button from '../Butoon';


const Form = ({handleCreateLabels, onClose}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState(randomColor())

    
    const handleRandomButton = () => {
        setColor(randomColor());
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, color, description} = e.target
        if(name && color && description) {
            handleCreateLabels({name: name.value, color: color.value, description: description.value})
        }
    }
    

    return (
        <Container>
            <LabelList>
                {name && color && <ExLabel color={color}>{name}</ExLabel>}
            </LabelList>
            <LabelForm action="" onSubmit={onSubmit}>
                <label className="name">
                    Label name
                    <input value={name} name={'name'} onChange={({target}) => setName(target.value)} />
                </label>
                <label className="description">
                    Description
                    <input value={description} name={'description'} onChange={({target}) => setDescription(target.value)} />
                </label>
                <label className="color">
                    Color
                    <div className="colorForm">
                        <RandomColorBtn type="button" onClick={handleRandomButton} color={color}>
                            <img src={loop} alt="loop"/>
                        </RandomColorBtn>
                        <input value={color} name={'color'} onChange={({target}) => setColor(target.value)} />
                    </div>
                </label>
                <div className="buttonWrapper">
                    <Button type="button" btnType="secondary" onClick={onClose}>Cancel</Button>
                    <Button type="submit" btnType="primary">Create Label</Button>
                </div>
            </LabelForm>
        </Container>
    )

}

export default Form;


const Container = styled.div`
    padding: 16px;
    background-color: #ebebeb;
    border: 1px solid #e0e0e0;
    border-radius: 4px;

    margin-bottom: 8px;
`;

const LabelList = styled.div`
    padding-bottom: 8px;
    margin-bottom: 8px;
    display: flex;
    flex-wrap: wrap;
`

const LabelForm = styled.form`
    display: flex;
    justify-content: space-between;
    label {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        color: #666;
        margin-right: 8px;
    }

    .name {
        flex: 1;
    }

    .description {
        flex: 5;
    }

    .color {
        flex: 1;
    }

    .colorForm {
        display: flex;
        img {
            width: 12px;
        }
    }

    .buttonWrapper {
        button {
            margin-left: 8px;
        }
    }
`


const RandomColorBtn = styled.button`
    background-color: ${({color}) => color};
    border: none;
`;

const ExLabel = styled.span`
    padding: 8px;
    border-radius: 4px;
    background-color: ${({color}) => color};
    color: white;
    font-size: 12px;
`