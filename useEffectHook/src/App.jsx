import React,{useRef} from 'react'


function App() {
  const topRef = useRef(null)

  function scrollToTop(){
    topRef.current.scrollIntoView({behavior:'smooth'});
  }
  return (
    <>
      <div ref={topRef}>1</div>
      <div>1</div>
      <div>1</div>
      <button onClick={scrollToTop}>Go to top</button>
    </>
  )
}

export default App
