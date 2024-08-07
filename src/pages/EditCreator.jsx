import React from 'react';
import { useState, useEffect } from 'react'
import { supabase } from '../client';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import "./EditCreator.css"

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function EditCreator() {
  let query = useQuery();

  const [creatorName, setName] = useState("");
  const [creatorDescription, setDescription] = useState("");
  const [yLink, setYLink] = useState("");
  const [iLink, setILink] = useState("");
  const [creator, setCreator] = useState({});

  useEffect(() => {
    
    const here = query.get("id");

    async function getCreator() {
      const { data: selected} = await supabase.from('creators').select().eq('id', here);
      setCreator(selected[0]);
    }

    getCreator();
  

    setName(creator.name);
    setDescription(creator.description);
    setYLink(creator.url);
    setILink(creator.imageURL);
  }, [creator.id])

  function handleSubmit(e){
    e.preventDefault();
    if(creatorName != "" && creatorDescription != "" && yLink != ""){
      updateCreator();
    }else{
      alert("One or more fields empty");
    }
  }

  async function updateCreator(){
    const {error} = await supabase.from('creators').update({
      name: creatorName, description: creatorDescription, url: yLink, imageURL: iLink
    }).eq('id', creator.id);
    window.location.assign("/");
  }

  return (
    <div>
      <Header></Header>
      <form>
        <h2>General Info</h2>
        <label>Name</label>
        <input type='text' value={creatorName} onChange={(e)=>{setName(e.target.value)}}></input>
        <label>Description</label>
        <textarea value={creatorDescription} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        <h2>Social Media</h2>
        <label>Youtube Link</label>
        <input type='text' value={yLink} onChange={(e)=>{setYLink(e.target.value)}}></input>
        <label>Image Link</label>
        <input type='text' value={iLink} placeholder='Optional' onChange={(e)=>{setILink(e.target.value)}}></input>
        <button type='submit' onClick={handleSubmit}>SUBMIT</button>
      </form>
    </div>
  )
}
export default EditCreator



