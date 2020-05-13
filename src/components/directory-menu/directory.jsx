import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';
import CardList from '../card-list/card-list';



class Directory extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            cards:CardList
        }
    }

    cardRender(){

        return this.state.cards.map(({title,icon,id,callback})=>(
            <MenuItem key={id} title={title} icon={icon} onClick={callback} />
        ))



    }

    

    componentDidMount(){
        fetch('http://localhost:3003/personalprofile')
        .then(response => response.json())
        .then((data)=>{
           const userArray = JSON.parse(data.business_arrayofcards.replace('{','[').replace('}',']'));
           const personalCards = CardList.filter(card=> userArray.includes(card.id.toString()))
           
           this.setState({cards:personalCards})
        
        })
    }


    render(){
        return(
            <div className="directory-menu">
                <div className="cover-image"></div>
              {this.cardRender() }
             
            </div>
        )
    }

}

export default Directory;
