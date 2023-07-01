import React from 'react'
import styled from 'styled-components'
import Map from './Map';



const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: center;
  background: url("./img/back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  justify-content: space-between;
  display: flex;
`;

const Left = styled.div`
  flex:1;
  display: flex;  
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding-left: 2rem;
  
`;

const Right = styled.div`
  flex:1;
  align-items: right;
  justify-content: flex;
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
`;

const Title = styled.h1`
  font-size: 70px;
  font-family: 'Space Mono', monospace;  
  color: rgba(0,0,0,0.2);
  -webkit-text-stroke: 1px rgba(0,0,0,0.5);
`;

const Form = styled.form`
  display: flex;
  width: 23vw;
  padding:2vw;
  flex-direction: column;
  gap:15px;
  background-color:rgba(0,0,0,0.1);
  border-color: 10px rgba(0,0,0,0.5);
  border-radius:5px 
  color: rgb(20,200,200);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
`

const Input = styled.input`
  padding: 10px;
  background-color: rgba(0,0,0,0.6);
  color:rgba(255,255,255,0.6);
  border:none;
  border-radius:3px;
  
`
const TextArea = styled.textarea`
  padding: 20px;
  background-color: rgba(0,0,0,0.6);
  color:rgba(255,255,255,0.6);
  border:none;
  border-radius:3px;
  
`
const Button = styled.button`
  align-items: center;
  width: 100%;
  display: flex;  
  flex-direction: row;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;   
  
  cursor: pointer;        
  justify-content: center;
  padding: 10px;
  transition: background-color 400ms, border-color 400ms; 

`

const Wrapper = styled.div`
    &:hover .button_class{
        background-color: rgba(100,108,255,0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
    } 
`;

const Div = styled.div`
    align-items: center;
    display: flex;
    padding-top: 30vh;
    padding-left: 15vw;
    
    border-radius:20px;

    cursor: move;
    
    
`

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Title>Contact Me</Title>
          <Form action="https://formsubmit.co/447166fcef88f5ba435b8fe4211486f4" method="POST">            
            <Input type="text" name="Name" placeholder="Name" required/>
            <Input type="email" name="email" placeholder="Email" required/>
            <TextArea type="text" name="message" placeholder="Write your message" rows={5} required/>
            <input type="hidden" name="_subject" value="New submission from your site!"/>
            <input type="hidden" name="_autoresponse" value="Thank You for contacting me!🍧🍧 I will get back to you soon"/>
            <input type="hidden" name="_next" value="https://thankyousuvangs.netlify.app"/>
            <Wrapper><Button type="submit" className='button_class'>Post</Button></Wrapper>
          </Form>    
        </Left>
        <Right>
          <Div className='map_class'>
            <Map />
          </Div>          
        </Right>
      </Container>
    </Section>
  )
}

export default Contact