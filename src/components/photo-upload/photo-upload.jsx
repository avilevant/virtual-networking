import React, {useState} from 'react';
import {storage} from '../../firebase/firebase';
import './photo-upload.scss';
import {withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';



const UploadToFirebase =()=>{
    
    const [image,setImage]=useState(null);
    const [image2,setImage2]=useState(null);
    const [url1,setUrl1]=useState('');
    const [url2,setUrl2]=useState('');
    const [progress, setProgress] = useState(0)
    const token =  Cookies.get('token')
    console.log(token)

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
     
    const files =[image,image2]
    

    const handleUpload = () =>{
        files.forEach(file=>{
            const uploadTask = storage.ref(`images/${file.name}`).put(file);

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
                storage
                    .ref('images')
                    .child(file.name)
                    .getDownloadURL()
                    .then(url=>{
                        url1===''?setUrl1(url):setUrl2(url)
                        
                        // setImage(null)
                    })
                    .then( fetch('http://localhost:3003/uploadImg', {
                        method: 'post',
                        headers: {'Content-Type': 'application/json', 'Authorization':'Bearer '+token },
                        body: JSON.stringify({
                            url1:url1,
                            url2:url2
                        })
            
                    })
                    .then(response =>response.json())
                    .then(data=> {
                        
                        
                           
                            console.log(data)
                        
                        }
                    )
            )
            }
        )
        })
        
      

    }
    
    
  


    return(
        <div>
        <progress value={progress} max="100"/>
        <br/>
        <br/>
        <input type="file" name='background' onChange={handleChange}/>
        {/*<button onClick={handleUpload}>upload</button>*/}
        <br/>
        <br/>
        
        
        <img src={url1} alt='imagePreview' className='img'/>
      
        <br/>
        <br/>
      
        <br/>
        <br/>

       
        <br/>
        <br/>
        <input type="file" name='smallImg' onChange={handleChange}/>
        
        <br/>
        <br/>
        
        <img src={url2} alt='imagePreview' className='img' />
        
        
        <br/>
        <br/>
        <br/>
        <br/>
        <button onClick={handleUpload}>upload</button>
        </div>
    )

}

export default withRouter(UploadToFirebase);