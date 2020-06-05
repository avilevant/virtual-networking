import React, {useState} from 'react';
import {storage} from '../../firebase/firebase';
import './photo-upload.scss';
import {withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';


// const App = () => {
//     const [step, setStep] = React.useState(0);
//     const onChange = nextStep => {
//       setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
//     };
  
//     const onNext = () => onChange(step + 1);
//     const onPrevious = () => onChange(step - 1);
  
//     return (
//       <div>
//         <Steps current={step}>
//           <Steps.Item title="Finished" description="Description" />
//           <Steps.Item title="In Progress" description="Description" />
//           <Steps.Item title="Waiting" description="Description" />
//           <Steps.Item title="Waiting" description="Description" />
//         </Steps>
//         <hr />
//         <div header={`Step: ${step + 1}`}>
//           <h1>fuck off</h1>
//         </div>
//         <hr />
//         <div>
//           <button onClick={onPrevious} disabled={step === 0}>
//             Previous
//           </button>
//           <button onClick={onNext} disabled={step === 3}>
//             Next
//           </button>
//         </div>
//       </div>
//     );
//   };
  

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
                        
                        
                    })
                    .then( fetch('https://afternoon-thicket-58274.herokuapp.com/uploadImg', {
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
        // const C_id = Cookies.get('C_id')
        // this.props.history.push(`/personalprofile/${C_id}`)

    }
    

    

    return(
    <div>

        <progress value={progress} max="100" className='progressBar'/>
        <p>Upload Progress Bar</p>

    <div className='imageUpload'>
       
      <div className='backgroundImg'>
      <input type="file" name='background' onChange={handleChange}  />
      <p>Your background Image</p>
      </div>

      <div>
      <img src={url1 || "https://via.placeholder.com/155"} alt='imagePreview' className='img' />
      </div>

      <div className='smallImg'>
      <input type="file" name='smallImg' onChange={handleChange}/>
      <p>Your Profile/Logo Image</p>
      </div>
    
      <div>
      <img src={url2 || "https://via.placeholder.com/150"} alt='imagePreview' className='img' />
      </div>
      
     
      
     

      </div>
      <button onClick={handleUpload}>upload</button>
        </div>
    )

}

export default withRouter(UploadToFirebase);