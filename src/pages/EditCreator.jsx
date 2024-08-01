import { useState, useEffect } from 'react'
import { supabase } from '../client';
import Header from '../components/Header';

function EditCreator() {
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
      <h1>EDIT CREATOR</h1>
      {creators.map((creator) => (
        <li key={creator.id}>{creator.name}</li>
      ))}
    </div>
  )
}
export default EditCreator



