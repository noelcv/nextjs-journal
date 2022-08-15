/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'

const Note = ({note}) => {
  const router = useRouter();
  //this id will be matching the [id] from the file name
  //params will be an array /notes/1/2/3
  // const { id } = router.query;
  
  //for programmatic routing use the router.push method
  
  return (
    <div sx={{variant: 'containers.page'}}>
      <button onClick={() => router.push('/')}>Go Home</button>
      <button onClick={() => router.push('/notes')}>Go to Notes Index</button>  
      <h1>Note: {note.title} </h1>
    </div>
  )
}

export default Note;


export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`)
  
  if(!response.ok) {
    res.writeHead(302, {
      Location: '/notes'
    })
    res.end()
    
    return {
      props: {}
    }
  }
  
  const { data } = await response.json();
  
  return {
    props: {
      note: data,
    }
  }
}