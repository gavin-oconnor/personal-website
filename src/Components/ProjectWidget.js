import React from 'react'

const ProjectWidget = ({img,heading,caption,click,index}) => {
  return (
    <div onClick={() => click(index)} className="widget-container">
        <img src={img}/>
        <div className="widget-text-container">
        <h3>{heading}</h3>
        <p>{caption}</p>
        </div>
        
    </div>
  )
}

export default ProjectWidget