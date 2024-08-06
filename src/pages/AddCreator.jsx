import { useState, useEffect } from 'react'
import { supabase } from '../client';
import Header from '../components/Header';
import "./AddCreator.css"


function AddCreator() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [yLink, setYLink] = useState("");
  const [iLink, setILink] = useState("");

  function handleSubmit(e){
    e.preventDefault();

  }

  return (
    <div>
      <Header></Header>
      <form>
        <h2>General Info</h2>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <label>Description</label>
        <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        <h2>Social Media</h2>
        <label>Youtube Link</label>
        <input type='text' value={yLink} onChange={(e)=>{setYLink(e.target.value)}}></input>
        <label>Image Link</label>
        <input type='text' value={iLink} onChange={(e)=>{setILink(e.target.value)}}></input>
        <button type='submit' onClick={handleSubmit}>SUBMIT</button>
      </form>
    </div>
  )
}
export default AddCreator



