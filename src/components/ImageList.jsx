// import React, { useState } from 'react';

// const ImageList = ({ images, onImageClick }) => {
//   const[editingImage,setEditingImage]=useState(null);
//   const[editFormData, setEditFormData]=useState({});
//   const handleEditButton=(image)=>{
//     setEditingImage(image);
//     setEditFormData({...image};)

//   }
//   return (
//     <div className="image-container">
//       {images.map((image) => (
//         <div
//           key={image.name}
//           className="image-card"
//           onClick={() => onImageClick(image)}
//         >
//           <img src={image.url} alt={image.name} className="image-thumbnail" />
//           <p className="image-name">{image.name}</p>
//           <div><button className='btn btn-success' onClick={()=>handleEditButton(image)}>Edit</button> <button className='btn btn-danger'>Delete</button></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageList;

import React, { useState } from 'react';
import axios from 'axios'

const ImageList = ({ images, onImageClick }) => {
  const [editingImage, setEditingImage] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleEditButton = (image) => {
    setEditingImage(image);
    setEditFormData({
      ...image,
      name: Array.isArray(image.name) ? image.name[0] : image.name // Ensure it's a single string
    });
  }

  const handleEditSubmit = async () => {
    try {
      console.log(editFormData);

      const response = await axios.put(`http://localhost:3500/api/image/${editingImage.image_id}`, editFormData);
      alert(response.data.message);
      setEditingImage(null);
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleInputChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
    // let value = e.target.value;
  
    // // If the value is an array, convert it to a string
    // if (Array.isArray(value)) {
    //   value = value.join(', ');
    // }
  
    // setEditFormData({
    //   ...editFormData,
    //   [e.target.name]: value,
    // });
  }

  return (
    <div className="image-container">
      {images.map((image) => (
        <div
          key={image.name}
          className="image-card"
          onClick={() => onImageClick(image)}
        >
          {editingImage?.image_id === image.image_id ? (
            <div className="edit-form">
              <input type="text" name='name' value={editFormData.name} onChange={handleInputChange} placeholder='Name' />
              <input type="text" name='description' value={editFormData.description} onChange={handleInputChange} placeholder='Description' />
              <button onClick={handleEditSubmit} className='btn btn-success'>Save</button>
              <button onClick={() => setEditingImage(null)} className='btn btn-secondary'>Cancel</button>
            </div>
          ) : (
            <>
              <img src={image.url} alt={image.name} className="image-thumbnail" />
              <p className="image-name">{image.name}</p>
              <div>
                <button className='btn btn-success' onClick={() => handleEditButton(image)}>Edit</button>
                <button className='btn btn-danger'>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageList;
