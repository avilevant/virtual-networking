import React, {useState} from 'react';
import {storage} from '../../firebase/firebase';
import './photo-upload.scss';
import Cookies from 'js-cookie';



  

const UploadToFirebase =()=>{
    
    const [image,setImage]=useState(null);
    const [image2,setImage2]=useState(null);
    const [url1,setUrl1]=useState('');
    const [url2,setUrl2]=useState('');
    const [progress, setProgress] = useState(0)
    const token =  Cookies.get('token')
   
    // console.log(token)

 
  

    const handleChange = event=>{
           

        if(event.target.files[0]){
            //update state for both images
            image===null?setImage(event.target.files[0]) : setImage2(event.target.files[0])
            
            //preview before upload
            const imagePreview = new FileReader()

            if(event.target.name === 'background'){
                imagePreview.addEventListener("load",()=>setUrl1(imagePreview.result),false)
            }else{
                imagePreview.addEventListener("load",()=>setUrl2(imagePreview.result),false)
            }
            imagePreview.readAsDataURL(event.target.files[0])
            
        }
    }
     
    const filesToUpdate = [
    {
        image: image,
        setUrl: setUrl1, 
        index: 1
    },
    {
        image: image2,
        setUrl: setUrl2,
        index: 2
    }]

//upload both images
    const handleUpload = (props) =>{
        
        
        filesToUpdate.forEach(fileToUpdate=>{
            const uploadTask = storage.ref(`images/${fileToUpdate.image.name}`).put(fileToUpdate.image);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress)
            },
            error => {console.log(error)},
            ()=>{
                //get url from storage for reference
                storage
                    .ref('images')
                    .child(fileToUpdate.image.name)
                    .getDownloadURL()
                    .then(url=>{
                       console.log('before updating url: ' ,'url: ' ,url)
                           fileToUpdate.setUrl(url);
                        
                        return (url);
                    })
                    .then( url=> fetch('https://afternoon-thicket-58274.herokuapp.com/uploadImg/' + fileToUpdate.index, {
                        method: 'post',
                        headers: {'Content-Type': 'application/json', 'Authorization':'Bearer '+token },
                        body: JSON.stringify({
                            url:url
                        })
            
                    })
                    // .then(response =>response.json())
                    .then(response =>response.text())
                    .then(data=> {
                            console.log(data)
                           
                        })
                      )
        }
        )})
       
        
    }
    

    

    return(
    <div>
        <div className='progressBar'>
        
        <progress value={progress} max="100" />
        <p>Upload Progress Bar</p>
        </div>

    <div className='imageUpload'>
       
      <div className='backgroundImg'>
      <input type="file" name='background' onChange={handleChange}  />
      <p>Your background Image - optional</p>
      </div>

      <div>
      <img src={url1 || "https://via.placeholder.com/155"} alt='imagePreview' className='img' />
      </div>

      <div className='smallImg'>
      <input type="file" name='smallImg' onChange={handleChange}/>
      <p>Your Profile/Logo Image - must have!</p>
      </div>
    
      <div>
      <img src={url2 || "https://via.placeholder.com/150"} alt='imagePreview' className='img' />
      </div>
      
     
      
     

      </div>
      <button onClick={handleUpload} className='buttonImgUpload'>Upload Your Images</button>
        </div>
    )

}

export default UploadToFirebase;