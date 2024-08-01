import { useState, useEffect } from 'react'
import { supabase } from '../client';
import Header from '../components/Header';

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
    <div>
      <Header></Header>
      <h1>SHOW CREATORS</h1>
      {creators.map((creator) => (
        <li key={creator.id}>{creator.name}</li>
      ))}
    </div>
  )
}
export default ShowCreators



