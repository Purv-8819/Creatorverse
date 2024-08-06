import { useState, useEffect } from 'react'
import { supabase } from '../client';
import Header from '../components/Header';
import Card from '../components/Card';
import "./ShowCreators.css"
import "../index.css"

function ShowCreators() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    async function getTodos() {
      const { data: creators } = await supabase.from('creators').select()

      if (creators.length > 1) {
         setCreators(creators)
      }
    }

    getTodos()
  }, [])

  return (
    <div className='view-container'>
      <Header></Header>
      {/* <h1>SHOW CREATORS</h1> */}
      <div className='creator-container'>
        {creators.map((creato) => (
          <Card key={creato.id} creator={creato}/>
        ))}
      </div>
      {creators.length == 0 && <h1 className='title'>NO CREATORS ADDED</h1>}
    </div>
  )
}
export default ShowCreators



