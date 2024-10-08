import React,{useRef} from 'react'
const GotoTop = () => {
    const topRef = useRef(null)

  function scrollToTop(){
    topRef.current.scrollIntoView({behavior:'smooth'});
    topRef.current.style.backgroundColor='red'
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

export default GotoTop
