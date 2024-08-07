//This component should contain the content creator's information (name, url, description, and imageURL (optional)) so it can be displayed on the main page.
import { useState, useEffect } from 'react'
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { supabase } from '../client';
import "./Card.css";
import { Link } from 'react-router-dom';


export default function Card(props){

   if(props.creator == undefined){
      return(<div>
         <h3>USER NOT FOUND</h3>
      </div>)
   }

   const getInfo = () =>{
      window.history.pushState({}, undefined, "/contact");
   }

   async function deleteCreator(){
      const response = await supabase.from('creators').delete().eq('id', props.creator.id);
   }

   return(
      <div className='Card'>
         <div className='Info'>
            <h2>{props.creator.name}</h2>
            <a href={props.creator.url}>
               <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </a>
            <p>{props.creator.description}</p>
         </div>
         <img src={props.creator.imageURL} alt={props.creator.name + "'s picture"}></img>
         <div className='utility'>
            <Link to={"../view?id="+props.creator.id}>
               <FontAwesomeIcon onClick={getInfo}className='icon' icon={faCircleInfo}></FontAwesomeIcon>
            </Link>
            <FontAwesomeIcon onClick={deleteCreator} className='icon' icon={faTrash}></FontAwesomeIcon>
         </div>
      </div>
   );

}
