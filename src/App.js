import React,{Component} from "react";
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.state={
      input:'',
      imgUrl:'',
      box : {},
      Agedata:'',
      Genderdata:'',
      Ethnicitydata:''
    }
  }

  getFaceDetection(){

// URL of image to use. Change this to your image.
const IMAGE_URL = this.state.input;

const raw = JSON.stringify({
  "user_app_id": {
    "user_id": "clarifai",
    "app_id": "main"
  },
  "inputs": [
      {
          "data": {
              "image": {
                  "url": IMAGE_URL
              }
          }
      }
  ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + '3c737aca1ff94fb49f28934fd7192cbc'
    },
    body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)
    .then(response => response.json())
    .then(result => this.displayFaceBox(this.calFaceLocation(result)))
    .catch(error => console.log('error', error));
  
  }

  getAge(){
  const IMAGE_URL = this.state.input;

const raw = JSON.stringify({
  "user_app_id": {
    "user_id": "clarifai",
    "app_id": "main"
  },
  "inputs": [
      {
          "data": {
              "image": {
                  "url": IMAGE_URL
              }
          }
      }
  ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + '3c737aca1ff94fb49f28934fd7192cbc'
    },
    body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch(`https://api.clarifai.com/v2/models/age-demographics-recognition/versions/fb9f10339ac14e23b8e960e74984401b/outputs`, requestOptions)
    .then(response => response.json())
    .then(result => this.getAgedeails(result))
    .catch(error => console.log('error', error));

  }

  getGender(){

// URL of image to use. Change this to your image.
const IMAGE_URL = this.state.input;

const raw = JSON.stringify({
  "user_app_id": {
    "user_id": "clarifai",
    "app_id": "main"
  },
  "inputs": [
      {
          "data": {
              "image": {
                  "url": IMAGE_URL
              }
          }
      }
  ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + '3c737aca1ff94fb49f28934fd7192cbc'
    },
    body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch(`https://api.clarifai.com/v2/models/gender-demographics-recognition/versions/ff83d5baac004aafbe6b372ffa6f8227/outputs`, requestOptions)
    .then(response => response.json())
    .then(result => this.getGenderdeails(result))
    .catch(error => console.log('error', error));
  
  }

  getEthnicity(){

// URL of image to use. Change this to your image.
const IMAGE_URL = this.state.input;

const raw = JSON.stringify({
  "user_app_id": {
    "user_id": "clarifai",
    "app_id": "main"
  },
  "inputs": [
      {
          "data": {
              "image": {
                  "url": IMAGE_URL
              }
          }
      }
  ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + '3c737aca1ff94fb49f28934fd7192cbc'
    },
    body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch(`https://api.clarifai.com/v2/models/ethnicity-demographics-recognition/versions/b2897edbda314615856039fb0c489796/outputs`, requestOptions)
    .then(response => response.json())
    .then(result => this.getEthnicitydeails(result))
    .catch(error => console.log('error', error));
  
  }

  onInputChange=(event)=>{
    this.setState({input : event.target.value});
  }

  calFaceLocation=(data)=>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height)
    }
  }
    

  displayFaceBox=(box)=>{
    this.setState({box : box});
  }

  getAgedeails=(data)=>{
    const Age = data.outputs[0].data.concepts[0].name;
    this.setState({Agedata : Age});
  }

  getGenderdeails=(data)=>{
    const Gender = data.outputs[0].data.concepts[0].name;
    this.setState({Genderdata : Gender});
  }

  getEthnicitydeails=(data)=>{
    const Ethnicity = data.outputs[0].data.concepts[0].name;
    this.setState({Ethnicitydata : Ethnicity});
  }

  onButtonSubmit=(event)=>{

  this.setState({imgUrl : this.state.input});

  this.getFaceDetection();   
  this.getAge();
  this.getGender();
  this.getEthnicity();

  
  }


  render(){
  return (
    <div className="App">
    <ParticlesBg type="square" bg={true} />
    <Nav/>
    <Logo/>
    <Rank/>
    <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
    <FaceRecognition
     imgUrl={this.state.imgUrl}
     box = {this.state.box}
     Agedata = {this.state.Agedata}
     Genderdata = {this.state.Genderdata}
     Ethnicitydata = {this.state.Ethnicitydata}
     />
    </div>
  );
  }
}

export default App;
