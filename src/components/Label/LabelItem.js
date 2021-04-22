import { useState } from 'react';
import loop from '../../assets/icons/loop.svg'
import styled from 'styled-components'
import { randomColor } from '../../utils/randomColor';
import Button from '../Butoon';

const LabelItem = ({id, labelName, labelDescription, labelColor, onEdit, onDelete}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState(randomColor())

    
    const handleRandomButton = () => {
        setColor(randomColor());
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { name: {value: name}, color: {value: color}, description: {value: description}} = e.target
        if(name && color && description) {
            onEdit({id, name, color, description})
        }
        setIsEdit(false);
    }


    if(isEdit) {
        return (
        <EditContainer>
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
                    <Button type="button" btnType="secondary" onClick={() => setIsEdit(false)}>Cancel</Button>
                    <Button type="submit" btnType="primary">Save Changes</Button>
                </div>
            </LabelForm>
        </EditContainer>
        )
    }

    return (
        <Container>
            <Column>
                <LabelName color={labelColor}>{labelName}</LabelName>
            </Column>
            <Column>
                <Description>{labelDescription}</Description>
            </Column>
            <Column className="btn-warpper">
                <LabelButton onClick={() => setIsEdit(true)}>Edit</LabelButton>
                <LabelButton onClick={onDelete}>Delete</LabelButton>
            </Column>
        </Container>
    )
}


export default LabelItem;

const Container = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 16px;
    color: #666;
    border-bottom: 1px solid #ebebeb;

    &:last-child {
        border-bottom: none;
    }

    .btn-warpper {
        display: flex;
        justify-content: flex-end;
    }
`

const Column = styled.div`
    flex: 1;
`;

const LabelName = styled.span`
    padding: 6px;
    font-size: 14px;
    background-color: ${({color}) => color ? color : 'gray'};
    color: white;
    border-radius: 4px;
`

const Description = styled.p`
    color: #666;
`;

const LabelButton = styled.button`
    margin-left: 8px;
    border: none;
    background-color: #fff;
    color: #333;
    padding: 8px;
    cursor: pointer;

    &:hover {
        color: #666;
    }
`


const EditContainer = styled.div`
    padding: 16px;
    border-radius: 4px;
    border-bottom: 1px solid #ebebeb;
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