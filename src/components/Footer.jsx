import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiReplit } from 'react-icons/si'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 100vw;    
    background-color:#000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:10px 0px;
    height: 3rem;
`;
const Links = styled.div`
   display: flex;
   align-items: center;
   gap:40px;
`;

const List = styled.ul`
    display: flex;
    gap:20px;
    list-style: none;
`;
const ListItem = styled.li`
    cursor: pointer;  
`;
const Desc = styled.p`
  font-size:20px;
  font-weight:normal;
  font-style:oblique;
  background-color:#00000006;
  color: rgba(10,10,10,0.7);
  -webkit-text-stroke: 1px rgba(250,250,250,0.2);
`;
const Button = styled.button`
    align-items: center;
    width: 100%;
    display: flex;  
    flex-direction: row;
    backdrop-filter: blur(3px);
    background-color: rgba(200, 200, 200, 0.25);
    border: 1px solid rgba(80, 80, 80, 0.1);
    border-radius: 6px;   
    
    cursor: pointer;        
    justify-content: center;
    padding: 8px;
    transition: background-color 400ms, border-color 400ms;   
`;
const Wrapper = styled.div`
    &:hover .button_class{
        background-color: rgba(100,108,255,0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
    } 
`;


const Footer = () => {
  return (
    <Section>
        <Container>
        <Links>
        <Desc>
            My Socials -
        </Desc>
            <List>
                <ListItem onClick={() => window.open("https://github.com/greeenboi")}><FaGithub /></ListItem>
                <ListItem  onClick={() => window.open('https://www.instagram.com/suvangs/')}><FaInstagram/></ListItem>
                <ListItem  onClick={() => window.open('http://replit.com/@greeenboi1/')}><SiReplit/></ListItem>
                <ListItem  onClick={() => window.open('https://www.linkedin.com/in/suvan-gowri-shanker-596943261/')}><FaLinkedinIn/></ListItem>
            </List>
        </Links>
        <Wrapper>
            <Button className='button_class' onClick={() => window.open("https://pdf.ac/1B5JKO")}>
                My Resume
            </Button>
        </Wrapper>
        
        </Container>
    </Section>
  )
}

export default Footer