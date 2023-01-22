
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../assets/main.css"
import axios from 'axios';
import { AiTwotoneDelete } from 'react-icons/ai';


function ImageGrid() {

const images= [
  {
      id: 1,
      url: 'https://blog.hubspot.com/hubfs/image-file-extensions.jpg'    },
  {
      id: 2,
      url: 'https://blog.hubspot.com/hubfs/image-file-extensions.jpg'    },
  {
      id: 3,
      url: 'https://blog.hubspot.com/hubfs/image-file-extensions.jpg'    },
  {
      id: 4,
      url: 'https://blog.hubspot.com/hubfs/image-file-extensions.jpg'    },
  {
      id: 5,
      url: 'https://blog.hubspot.com/hubfs/image-file-extensions.jpg'
  },
  {
      id: 6,
      url: 'https://blog.hubspot.com/hubfs/image-file-extensions.jpg'
  },
]
const [imageList, setImageList] = useState(images);
const [selectedImageId, setSelectedImageId] = useState(null);

  const handleClick = (id) => {
    setSelectedImageId(id);
    console.log(selectedImageId);


  };

  useEffect(() => {
    const getImages = async () => {
      const resp = await axios.get('http://c81b-2401-4900-6284-c8be-f3fa-e1f9-20b8-795d.in.ngrok.io/', {
      headers: {
        'Authorization':'Bearer ' + localStorage.getItem('token')
      }
    })
    setImageList(resp.data)
    console.log(imageList)
    }

    getImages()
    
  }, []);

  const deleteImage = (id) => {
    // axios.delete(`https://url/${id}`)
    //     .then(response => {
    //         const newImages = images.filter(img => img.id !== id);
    //         setImageList(newImages);
    //         setSelectedImageId(null);
    //     })
    //     .catch(error => console.log(error));

    imageList.splice(id, 1);
    setImageList(imageList);
    setSelectedImageId(null);
    console.log(imageList);
}



  const handleDelete = (id) => {
    deleteImage(id);
  };
  
  return (
    <div className="grid grid-cols-3 gap-4 h-full w-full mt-100 ">
      {imageList.map(image => (
       <div key={image.id}>
       <img
          key={image.id}
          src={image.url}
          className={

            `w-64 h-64 object-cover self-center rounded-lg hover:scale-110 ${image.id === selectedImageId && 'show-delete-icon' ? 'bg-gray-200' : ''}`
           }
          onClick={() => handleClick(image.id)}
        />


        <button className={` flex flex-row bg-blue-500 hover:bg-blue-700 hover:scale-110 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline rounded-sm shadow-md content-center items-center self-center  top-0 right-0 ${image.id === selectedImageId && 'show-delete-icon' ? 'block' : 'hidden'}`} onClick={() => handleDelete(image.id)}>
          <AiTwotoneDelete/>
          <text>Delete</text>
        </button>

        
      
        </div>
      ))}
    </div>






  );

    
}

export default ImageGrid;

