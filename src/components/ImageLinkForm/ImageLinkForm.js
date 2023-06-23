import React from "react";  
import './ImageLinkForm.css';
import Button from '@mui/material/Button';

const ImageLinkForm = () => {
    return (
        <div>
            <p style={{color: "white"}} className="f3">
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="text"/>
                    <Button className="w-30 grow f4  ph3 pv2 dib white bg-light-purple" variant="contained">Detect</Button>
                    
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm; 