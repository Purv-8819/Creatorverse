import React from 'react';
import { useState, useEffect } from 'react'
import { supabase } from '../client';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';

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
      const { data: creato} = await supabase.from('creators').select().eq('id', here);
      setCreator(Creato);
    }

    getCreator();

    console.log(creator);
  }, [])

  return (
    <div>
      <Header></Header>
      <h1>VIEW CREATOR</h1>
      {/* <h2>{creator.name}</h2> */}
    </div>
  )
}
export default ViewCreator



