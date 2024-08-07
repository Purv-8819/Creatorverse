import React from 'react';
import { useState, useEffect } from 'react'
import { supabase } from '../client';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';

import "./ViewCreator.css"




function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ViewCreator() {
  let query = useQuery();
  const [creator, setCreator] = useState({});

  useEffect(() => {
    
    const here = query.get("id");

    async function getCreator() {
      const { data: selected} = await supabase.from('creators').select().eq('id', here);
      setCreator(selected[0]);
    }

    getCreator();
  }, [])

  function editCreator() {
    window.location.assign("/edit?id="+creator.id);
  }

  async function deleteCreator(){
    const response = await supabase.from('creators').delete().eq('id', creator.id);
    window.location.assign("/");
  }

  return (
    <div>
      <Header></Header>
      <div className='container'>
        <img src={creator.imageURL}></img>
        <div className='info-container'>
          <h2>{creator.name}</h2>
          <p>{creator.description}</p>
          <a href={creator.url}>
               <FontAwesomeIcon className='icon' icon={faYoutube} ></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div className='modify'>
        <button onClick={editCreator}>EDIT</button>
        <button onClick={deleteCreator} className='delete'>DELETE</button>
      </div>
    </div>
  )
}
export default ViewCreator



