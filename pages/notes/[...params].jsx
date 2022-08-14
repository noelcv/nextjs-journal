import React from 'react';
import { useRouter } from 'next/router'

const Note = () => {
  const router = useRouter();
  //this id will be matching the [id] from the file name
  //params will be an array /notes/1/2/3
  const { params } = router.query;

  
  return (
    <h1>
      Note
    </h1>
  )
}

export default Note;