import {React, useState} from 'react';
import styled from 'styled-components';
import "../style.scss";
import Cool from './Cool'
import JS from './JS';
import Reactas from './Reactas';
import Pythona from './Pythona';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  align-items: center;   
  justify-content: space-between;
  content:"";
  background: url("./img/pg2-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  align-content: center;
  align-items: center;  
  display:flex; 
  flex-direction: column;
  justify-content: center;
  
`;

const Top = styled.div`
  display: flex;
  margin-top:2vh;
  flex:2;

`
const Bottom = styled.div`
  display: inline-flex;
  margin-bottom:2vh;
  flex:3;
`
const Left = styled.div`
  display: inline-flex;
  flex:1;
  flex-direction: column;
  justify-content: center;
  cursor: grab;
`

const Right = styled.div`
  display: flex;
  flex:1;
  justify-content: center;
`


const Works = () => {
  const [work, setWork] = useState("")
  return (
    
    <Section  > 
      <Container>
        <Top>
          <div className="slider" x-data="{start: true, end: false}">
            <div className="slider__content" x-ref="slider">
            <div className="slider__item" onClick={()=>setWork("py")}>  
            <img className="slider__image" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=greeenboi&repo=TheraPy&show_icons=true&theme=tokyonight" alt="Image"/>
            <div className="slider__info">
              <h2>A Prize-Winning application for mental health</h2>
            </div>
          </div>
          <div className="slider__item"onClick={()=>setWork("py")}>
            <img className="slider__image" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=greeenboi&repo=Weather-app&show_icons=true&theme=tokyonight" alt="Image"/>
            <div className="slider__info">
              <h2>An App made with customTkinter to show the weather for a certain city</h2>
            </div>
          </div>
          <div className="slider__item"onClick={()=>setWork("py")}>
            <img className="slider__image" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=greeenboi&repo=Snake-Game&show_icons=true&theme=tokyonight" alt="Image"/>
            <div className="slider__info">
              <h2>A game made with pygame and tkinter for fun</h2>
            </div>
          </div>
          <div className="slider__item"onClick={()=>setWork("py")}>
            <img className="slider__image" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=greeenboi&repo=Qr-code-generator-app&show_icons=true&theme=tokyonight" alt="Image"/>
            <div className="slider__info">
              <h2>An App made with customTkinter to convert any url to a Qr code</h2>
            </div>
          </div>
          <div className="slider__item"onClick={()=>setWork("js")}>
            <img className="slider__image" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=greeenboi&repo=weather-website&show_icons=true&theme=tokyonight" alt="Image"/>
            <div className="slider__info">
              <h2>A website made to show the weather in the city</h2>
            </div>
          </div>
          <div className="slider__item"onClick={()=>setWork("py")}>
            <img className="slider__image" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=greeenboi&repo=Volume-control-with-hand-detection&show_icons=true&theme=tokyonight" alt="Image"/>
            <div className="slider__info">
              <h2>An app that helps you to control your device volume using hand gestures</h2>
            </div>
          </div>
          <div className="slider__item"onClick={()=>setWork("js")}>
            <img className="slider__image" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=greeenboi&repo=Firebase-ChatApp&show_icons=true&theme=tokyonight" alt="Image"/>
            <div className="slider__info">
              <h2>A chat app made with wonderful UI and functionality for friends and family </h2>
            </div>
          </div>
          <div className="slider__item"onClick={()=>setWork("py")}>
            <img className="slider__image" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=greeenboi&repo=Python-ChatBot&show_icons=true&theme=tokyonight" alt="Image"/>
            <div className="slider__info">
              <h2>A goofy chatbot made with python and hosted on hunggingface</h2>
            </div>
          </div>
          <div className="slider__item"onClick={()=>setWork("py")}>
            <img className="slider__image" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=greeenboi&repo=Minceraft&show_icons=true&theme=tokyonight" alt="Image"/>
            <div className="slider__info">
              <h2>A simple alpha version of minecraft made with the Ursina engine</h2>
            </div>
          </div>
          <div className="slider__item"onClick={()=>setWork("py")}>
            <img className="slider__image" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/pin/?username=greeenboi&repo=Face-Recognition-project-HAARCASCADES-&show_icons=true&theme=tokyonight" alt="Image"/>
            <div className="slider__info">
              <h2>A simple face detection program made with python</h2>
            </div>
          </div>    
        </div>  
        </div>
      </Top>

      <Bottom>
        <Left>
          {work==="py"?(
            <Pythona />
          ) : work === "js"?(
            <JS />
          ) : work === "react"?(
            <Reactas />
          ) : (
            <Cool />
          )}
        </Left>
        <Right>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Right>
      </Bottom>
      </Container>
    </Section>
  )
}

export default Works