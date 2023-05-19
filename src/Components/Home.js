import React from 'react'
import HomeRow from './HomeRow'
import { BrowserView, MobileView } from 'react-device-detect'

const Home = () => {
  const points = 
    [
      [
        {text:"Finance, Computer Science, and Climate Technology",bullets:[]},
        {text:"I have been investing and researching the stock market",bullets:[]},
        {text:"since early 2020. During this time, I also taught myself",bullets:[]},
        {text:"Python and fell in love with programming. The climate",bullets:[]},
        {text:"is an issue I am very passionate about, and I plan",bullets:[]},
        {text:"to combine my interests and skill in finance and",bullets:[]},
        {text:" programming to eventually start or invest in",bullets:[]},
        {text:"companies focused on a greener future.",bullets:[]},
      ],
      [
        {text:"Major: Finance & Computer Science",bullets:[]},
        {text:"GPA: 4.0",bullets:[]},
        {text:"Graduation Year: 2026",bullets:[]},
        {text:"Clubs & Activities",bullets:["Finance Association","Peer Math Tutor (Self-Employed)"]},
        {text:"Relevant Coursework",bullets:["Contemporary Business Issues, Microeconomics","Macroeconomics, Object Oriented C++","Introduction to Spreadsheets"]}
      ],
    [
      {text:"Languages: Python, Javascript, Java",bullets:[]},
      {text:"Frameworks: React, Flask, Pygame",bullets:[]},
      {text:"Tools: Excel, Powerpoint, Photoshop, Final Cut Pro",bullets:[]},
    ]

    ]
  return (
    <>
    <BrowserView>
    <div className="home-container">
      <HomeRow order={0} heading={"Interesed in..."}text={points[0]} img={require("../Assets/Interests.png")}/>
      <HomeRow order={1} heading={"Freshman at Santa Clara University"} text={points[1]} img={require("../Assets/scu.png")}/>
      <HomeRow order={0} heading={"Skills..."} text={points[2]} img={require("../Assets/skills.png")}/>
    </div>
    </BrowserView>
    <MobileView>
      <h2 className="m-home-heading">Interested In...</h2>
      <p className="m-home-text">Finance, Computer Science, and Climate Technology
      </p><p className="m-home-text"> I have been investing and researching the stock market since early 2020. During this time, I also taught myself Python and fell in love with programming. The climate is an issue I am very passionate about, and I plan to combine my interests and skill in finance and programming to eventually start or invest in companies focused on a greener future.</p>
      <h2 className="m-home-heading">Freshman at Santa Clara University</h2>
      <p className="m-solo-text">Major: Finance & Computer Science</p>
      <p className="m-solo-text">GPA: 4.0</p>
      <p className="m-solo-text">Graduation Year: 2026</p>
      <p className="m-list-heading">Clubs & Activities</p>
      <ul>
        <li>Finance Association</li>
        <li>Self-Employed Math & Computer Science Tutor</li>
      </ul>
      <p className="m-list-heading">Relevant Coursework</p>
      <ul>
        <li>Contemporary Business Issues</li>
        <li>Microeconomics</li>
        <li>Macroeconomics</li>
        <li>Object Oriented C++</li>
      </ul>
      <h2 className="m-home-heading">Skills...</h2>
      <p className="m-solo-text">Languages: Python, Javascript, Java</p>
      <p className="m-solo-text">Frameworks: React, Flask, Pygame</p>
      <p className="m-solo-text">Tools: Excel, Powerpoint, Photoshop, Final Cut Pro</p>

      </MobileView>
    </>
  )
}

export default Home