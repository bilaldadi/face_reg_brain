import React from "react";
import './FaceRe.css';

const FaceRecognition = ({imgUrl , Agedata , Genderdata , Ethnicitydata , box}) => {
    return (
        <div className="ma cf ">

            <div className=" fl tc absolute mt3 ml7">
                <img id="inputimage" src= {imgUrl} alt="" width="500px" height="auto"/>
                <div className="bounding-box" style={{top: box.topRow , right: box.rightCol , bottom: box.bottomRow , left: box.leftCol}}></div>
            </div>

            <div className="fr tc shadow-5 mt4 mr7"> 
                <h3>Details will be shown here</h3>
                <h3>----------------------------</h3>
                <h4>Age Range : {Agedata} </h4>
                <h4>Gender : {Genderdata}</h4>
                <h4>Ethnicity : {Ethnicitydata} </h4>
            </div> 

        </div>
    );
}

export default FaceRecognition;