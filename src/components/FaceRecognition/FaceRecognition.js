import React from "react";

const FaceRecognition = ({imgUrl , Agedata , Genderdata , Ethnicitydata}) => {
    return (
        <div className="center ma cf">
            <div className=" fl w70 tc fl w-50 tc ma4 ">
                <img src= {imgUrl} alt="" width="500px" height="auto"/>
            </div>
            <div className=" fl w-30 tc shadow-5 ma4"> 
                <h3>Deatails will be shown here</h3>
                <h3>----------------------------</h3>
                <h4>Age Range : {Agedata} </h4>
                <h4>Gender : {Genderdata}</h4>
                <h4>Ethnicity : {Ethnicitydata} </h4>
            </div> 
        </div>
    );
}

export default FaceRecognition;