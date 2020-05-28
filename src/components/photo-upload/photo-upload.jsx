import React, {useState} from 'react';
import {storage} from '../../firebase/firebase';

const UploadToFirebase =()=>{
    const [image,setImage]=useState(null);
    const [url,setUrl]=useState('');
    const [progress, setProgress] = useState(0)

    const handleChange = event=>{
        if(event.target.files[0]){
            setImage(event.target.files[0])
            const imagePreview = new FileReader()
            imagePreview.addEventListener("load",()=>setUrl(imagePreview.result),false)
            imagePreview.readAsDataURL(event.target.files[0])
            
        }
    }

    const handleUpload = () =>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
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
                    .child(image.name)
                    .getDownloadURL()
                    .then(url=>{
                        console.log(url)
                        setUrl(url)
                    })
            }
        )

        // fetch('http://localhost:3003/signin', {
        //     method: 'post',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         email:this.state.email,
        //         password:this.state.password
        //     })

        // })
        // .then(response =>response.json())
        // .then(data=> {
            
        //     if(data.id){
        //         this.props.history.push('/personalprofile'); 
        //         this.returnId(data.id)
        //     } else (
        //             prompt('user name or password incorrect')
        //         )
        //     }
        // )

    }
    console.log("image: ", image)


    return(
        <div>
        <progress value={progress} max="100"/>
        <br/>
        <br/>
        <input type="file" onChange={handleChange}/>
        {/*<button onClick={handleUpload}>upload</button>*/}
        <br/>
        <br/>
        <img src={url} alt='imagePreview'/>
       
        <br/>
        <br/>
        <br/>
        <br/>

        <progress value={progress} max="100"/>
        <br/>
        <br/>
        <input type="file" onChange={handleChange}/>
          {/*<button onClick={handleUpload}>upload</button>*/}
        <br/>
        <br/>
        <img src={url} alt='imagePreview'/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button onClick={handleUpload}>upload</button>
        </div>
    )

}

export default UploadToFirebase;