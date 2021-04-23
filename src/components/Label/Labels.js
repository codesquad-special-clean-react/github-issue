import styled from 'styled-components';

const Labels = ({count, children}) => {

    return (
        <Container>
            <Header>{`${count} labels`}</Header>
            {children}
        </Container>
    )
}


export default Labels;

const Container = styled.ul`
    border: 1px solid #ebebeb;
    border-radius: 4px;
`

const Header = styled.li`
    padding: 16px;
    font-size: 16px;
    color: #000;
    background-color: #ebebeb;
    border-bottom: 1px solid #ebebeb;
    font-weight: 600;
`