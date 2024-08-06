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
        <button>EDIT</button>
        <button>DELETE</button>
      </div>
    </div>
  )
}
export default ViewCreator



