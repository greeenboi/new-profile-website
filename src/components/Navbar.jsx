import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
 display: flex;
 justify-content: center;

`;

const Container = styled.div`
    width: 1400px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 0px;
    height: auto;
`;
const Links = styled.div`
   display: flex;
   align-items: center;
   gap:40px;
`;
const Logo = styled.img`
    height: 50px;
    
`;
const List = styled.ul`
    display: flex;
    gap:20px;
    list-style: none;
`;
const ListItem = styled.li`
    cursor: pointer;  
`;
const Icon = styled.img`
    width: 30px;
    cursor: pointer;   
    
    
    

    
`;
const Button = styled.button`
    align-items: center;
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;   
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;  
    display: flex;    
    left: 10px;
    padding: 10px 20px;
    transition: background-color 400ms, border-color 400ms;    
`;

const Wrapper = styled.div`
    &:hover .button_class{
        background-color: rgba(100,108,255,0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
    } 
`;

const Icons = styled.div`
    
`;


const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/logo.png"/>
            <Icon src="./img/search.png"/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>stuff</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            
            <Icons >               

                <Wrapper>
                    <Button className="button_class">Support Me</Button>
                </Wrapper>
                
                
            </Icons>
        </Container>
    </Section>
    
  )
}

export default Navbar