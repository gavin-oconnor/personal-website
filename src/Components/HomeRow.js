import React from 'react'

const HomeRow = ({heading,text,img,bullets,order}) => {
  return (
    <>
    {
    order === 0 ? 
    <div className="home-row-container">
        <div className="home-row-0" style={{animationName:"left-middle",flex:"3 0 0"}}>
            <h2 className="home-row-heading">{heading}</h2>
            {text.map((words,index) => 
            <>
            <p className="home-row-text">{words.text}</p>
            {words.bullets.map((bwords,index) => <p className="home-row-bullet">{bwords}</p>)}
            </>)}
        </div>
        <div className="home-row-1" stlye={{animationName:"right-middle",flex:"2 0 0"}}>
            <img className="home-row-img" alt="im4g3" src={img}/>
        </div>
    </div> 
    :
    <div className="home-row-container">
      <div className="home-row-0" style={{animationName:"left-middle",flex:"2 0 0"}}>
            <img className="home-row-img" alt="im4g3" src={img}/>
        </div>
        <div className="home-row-0" style={{animationName:"right-middle",flex:"3 0 0"}}>
            <h2 className="home-row-heading">{heading}</h2>
            {text.map((words,index) => 
            <>
            <p key={index} className="home-row-text">{words.text}</p>
            {words.bullets.map((bwords,index) => <p key={index} className="home-row-bullet">{bwords}</p>)}
            </>)}
        </div>
        
    </div>
  }
    </>
  )
}

export default HomeRow