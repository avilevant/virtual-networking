cardSelect = (event)=>{
    // console.log('reading data' ,event.target.value,'  ',event.target.name)
    if(this.state.arrayOfCards.length<numberOfCards){
        const newVal = event.target.value
        if(!this.state.arrayOfCards.includes(newVal)){
            const newArr =[...this.state.arrayOfCards, newVal]
            this.setState({arrayOfCards:newArr})
            
        }     
             
        setTimeout(()=>{
            console.log(this.state.arrayOfCards)
        },0)  
        // console.log(this.state.cardNum)
    }
    else{
        console.log(`choose only ${numberOfCards} cards`)
        
        event.preventDefault()
        
    }

}

          
          
          
          
          
          
          <div className='choseCards'>
           <h1 className="header" >choose your cards for display</h1>

           <div className='card'>
            <input type="Checkbox" name='callBusiness' value="callBusiness"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">call the business</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='sendSms' value="sendSms"
           
            onChange={this.cardSelect}></input>
            <label htmlFor="">send the business an sms</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='sendWhatsApp' value="sendWhatsApp"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">send the business a whatsApp Message</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='sendEmail' value="sendEmail"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">send the business an email</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='navigate' value="navigate"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">navigate to business</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='faceBook' value="faceBook"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">watch the business faceBook page</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='webSite' value="webSite"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">open the business webSite</label>
           </div>

           <div className='card'>
            <input type="Checkbox" name='youTube' value="youTube"
            
            onChange={this.cardSelect}></input>
            <label htmlFor="">watch the business youTube page</label>
           </div>

           <div className='card'>
           <input type="Checkbox" name='instagram' value="instagram"
           
           onChange={this.cardSelect}></input>
           <label htmlFor="">watch the business instagram page</label>
          </div>

          <div className='card'>
           <input type="Checkbox" name='linkDin' value="linkDin"
           onChange={this.cardSelect}></input>
           <label htmlFor="">watch the business linkDin page</label>
          </div>


            </div>
