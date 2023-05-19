import React from 'react'
import Navbar from './Navbar'
import { BrowserView, MobileView } from 'react-device-detect'


export const Header = () => {
  return (
    <>
    <BrowserView>
      <div className="header-container-container">
        <div className="header-container">
          <h1 className="header-text">
              Gavin O'Connor
          </h1>
          </div>
          <Navbar/>
      
      </div>
    </BrowserView>
    <MobileView>
    <div className="m-header-container-container">
        <div className="m-header-container">
          <h1 className="m-header-text">
              Gavin O'Connor
          </h1>
          </div>
          <Navbar/>
      </div>
    </MobileView>
    </>
    
    
  )
}
