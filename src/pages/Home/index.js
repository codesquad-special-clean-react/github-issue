import { useState } from 'react';
import styled from 'styled-components'
import Button from '../../components/Butoon';
import Form from '../../components/Form';
import { LabelItem, Labels } from '../../components/Label';
import { Tab, TabWrapper } from '../../components/Tab';



const Home = () => {
    const [activeTab, setActiveTab] = useState('labels');
    const [labels, setLabels] = useState([]);
    const [isForm, setIsForm] = useState(false);

    const handleCreateLabels = ({name, description, color}) => {
        console.log(name, color, description)
        setLabels([...labels, {name, description, color}])
    }

    const handleNewLabel = () => setIsForm(!isForm)

    const onDeleteLabel = (deleteIndex) => {
        const filteredLabels = labels.filter((_, index) => index !== deleteIndex)
        setLabels(filteredLabels)
    }

    const handleEditLabel = ({id, name, color, description}) => {
        labels[id] = {name, color, description}
        setLabels([...labels])
    }

    const labelList = labels.map(({name, description, color}, index) => <LabelItem key={index} id={index} labelName={name} labelColor={color} labelDescription={description} onDelete={() => {onDeleteLabel(index)}} onEdit={handleEditLabel} />)

    return (
        <Container>
            <Nav>
                <TabWrapper>
                    <Tab text={'Labels'} isActive={activeTab === 'labels'} onClick={() => setActiveTab('labels')}/>
                    <Tab text={'Milestone'} isActive={activeTab === 'milestone'} onClick={() => setActiveTab('milestone')} />
                </TabWrapper>
                <Button btnType={'primary'} onClick={handleNewLabel}>New Label</Button>
            </Nav>
            {isForm && <Form handleCreateLabels={handleCreateLabels} onClose={() => setIsForm(false)}/>}
            <Section>
                <Labels count={labels.length}>
                    {labelList}
                </Labels>
            </Section>
        </Container>
    )
}


export default Home;

const Container = styled.main`
    padding: 16px 40px 16px 40px;
    height: 100vh;
`

const Nav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 16px;
`

const Section = styled.section``