/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'

const Note = () => {
  const router = useRouter();
  //this id will be matching the [id] from the file name
  //params will be an array /notes/1/2/3
  const { id } = router.query;
  
  //for programmatic routing use the router.push method
  
  return (
    <div sx={{variant: 'containers.page'}}>
      <button onClick={() => router.push('/')}>Go Home</button>
      <button onClick={() => router.push('/notes')}>Go to Notes Index</button>  
      <h1>Note: {id} </h1>
    </div>
  )
}

export default Note;

