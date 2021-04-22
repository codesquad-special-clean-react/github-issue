import styled from 'styled-components'


const TabWrapper = ({
    children
}) => {
    return (
        <TabWrapperContainer>
            {children}
        </TabWrapperContainer>
    )
}

const Tab = ({text, onClick, isActive = false}) => {
    return (
        <TabContainer onClick={onClick} isActive={isActive}>{text}</TabContainer>
    )
}

export {
    TabWrapper,
    Tab
}

const TabWrapperContainer = styled.ul`
    display: flex;
    border: 1px solid #ebebeb;
    border-radius: 4px;
`

const TabContainer = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: ${({isActive}) => isActive ? '#1890ff' : '#fff'};
    color: ${({isActive}) => isActive ? '#fff' : '#666'};
    font-size: 14px;
    cursor: pointer;
    &:hover {
        color: ${({isActive}) => isActive ? '#fff' : '#999'};
    }
`