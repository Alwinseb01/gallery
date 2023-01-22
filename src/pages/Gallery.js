import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageGrid from "../components/ImageGrid"
import UploadImage from "../components/UploadImage"
import "../../src/assets/main.css"


function Gallery() {
    return (
    <div className="h-full px-10 py-10 justify-items-center items-center content-between ">
    <ImageGrid/>
    <UploadImage/>
    </div>
    );

}

export default Gallery;




