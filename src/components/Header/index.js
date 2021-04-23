import styled from 'styled-components'



const Header = () => {
    return (
        <Container>ISSUES</Container>
    )
}


export default Header;

const Container = styled.header`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3e3e3e;
    font-weight: bold;
    font-size: 24px;
    color: #fff;
`