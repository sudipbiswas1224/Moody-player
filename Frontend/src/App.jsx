import React, { useState } from 'react'
import FaceExpressionDetector from './components/FaceExpressionDetector'
import Songs from './components/Songs'

const App = () => {
  const [moodSongs, setmoodSongs] = useState([]);
  return (
    <>
    <FaceExpressionDetector setmoodSongs = {setmoodSongs}/>
    <Songs moodSongs = {moodSongs} />
    </>
  )
}

export default App