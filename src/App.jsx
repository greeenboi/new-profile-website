import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from "styled-components";
import { useEffect } from "react";


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behaviour: smooth ;
  overflow-y: auto; 
  scrollbar-width: none;
  
  
  color: white;

  &::-webkit-scrollbar{
    display: none;
  }
`;


const loader = document.querySelector('.loader');

const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

function App({ hideLoader }) {

  useEffect(hideLoader, []);

  

  return (
    <Container>
      
      <Hero />
      <Who id="about"/>
      <Works />
      <Contact />
      
    </Container>
  )
}

export default App
