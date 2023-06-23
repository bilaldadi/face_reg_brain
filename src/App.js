import React,{Component} from "react";
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
    <ParticlesBg type="square" bg={true} />
    <Nav/>
    <Logo/>
    <Rank/>
    <ImageLinkForm/>
   
    </div>
  );
  }
}

export default App;
