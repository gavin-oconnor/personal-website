import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const WidgetPopup = ({img, heading, caption, click, link}) => {
  return (
    <div className="widget-popup-container">
        <dialog open>
          <div className="x-header">
            <div className="x-left-spacer"/>
            <div className="x-spacer"/>
            <div className="x">
              <AiFillCloseCircle onClick={() => click(-1)}/>
            </div>
          </div>
          <div className="popup-img-container">
            <img src={img}/>
          </div>
          {link !== "" ? <a className="github-link" href={link} target="_blank" rel="noopener noreferrer">
            <h2>{heading}</h2>
          </a> : <h2>{heading}</h2>}
          
            <p>{caption}</p>
        </dialog>
    </div>
  )
}

export default WidgetPopup