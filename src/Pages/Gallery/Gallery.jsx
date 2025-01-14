// import React, { useState } from 'react';
// import './Gallery.css';
// import images from '../../Data/ImageData';
// import CategoryFilter from '../../components/CategoryFilter';
// import ImageList from '../../components/ImageList';
// import Modal from '../../components/Modal/Modal';

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedImage, setSelectedImage] = useState(null);

//   const filteredImages = selectedCategory === 'All'
//     ? images
//     : images.filter((image) => image.category === selectedCategory);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div>
//       <h1 className="imageGallery_heading">Image Gallery</h1>
//       <CategoryFilter
//         selectedCategory={selectedCategory}
//         onCategoryChange={handleCategoryChange}
//       />
//       <ImageList images={filteredImages} onImageClick={handleImageClick} />
//       {selectedImage && (
//         <Modal image={selectedImage} onClose={handleCloseModal} />
//       )}
//     </div>
//   );
// };

// export default Gallery;


import  { useEffect, useState } from 'react';
import './Gallery.css';
import CategoryFilter from '../../components/CategoryFilter';
import ImageList from '../../components/ImageList';
import Modal from '../../components/Modal/Modal';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  // const filteredImages = selectedCategory === 'All'
  //   ? images
  //   : images.filter((image) => image.category === selectedCategory);

  useEffect(()=>{
    const fetchImages=async()=>{
      try{
        const response=await fetch('http://localhost:3500/api/image');
        const data=await response.json();
        console.log(data);
        
        setImages(data.imageData);
        setFilteredImages(data.imageData)
      }
      catch(e){
        console.error(e);
        
      }
    }
    fetchImages();
  },[])
  useEffect(()=>{
    if(selectedCategory==='All'){
      setFilteredImages(images)
    }
    else{
      setFilteredImages(images.filter((image)=>image.category===selectedCategory));
    }
  },[selectedCategory,images])
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h1 className="imageGallery_heading">Image Gallery</h1>
      
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ImageList images={filteredImages} onImageClick={handleImageClick} />
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}

    </div>
  );
};

export default Gallery;
