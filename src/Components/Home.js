import React from 'react'
import HomeRow from './HomeRow'

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
    <div className="home-container">
      <HomeRow order={0} heading={"Interesed in..."}text={points[0]} img={require("../Assets/Interests.png")}/>
      <HomeRow order={1} heading={"Freshman at Santa Clara University"} text={points[1]} img={require("../Assets/scu.png")}/>
      <HomeRow order={0} heading={"Skills..."} text={points[2]} img={require("../Assets/skills.png")}/>
    </div>
  )
}

export default Home