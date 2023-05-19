import React, { useState } from 'react'
import ProjectWidget from './ProjectWidget'
import WidgetPopup from './WidgetPopup'
import { BrowserView, MobileView } from 'react-device-detect'


const Projects = () => {
  const [activeModal,setActiveModal] = useState(-1)
  const onClick = (index) => {
    setActiveModal(index)
  }
  const projects = [
    {
      img: require("../Assets/mandelbrot.jpg"),
      heading: "Mandelbrot Set Visualizer",
      caption: "Built with Pygame",
      link: "https://github.com/gavin-oconnor/mandelbrot-set-visualizer",
      long: "The Mandelbrot Set is a famous image from complex analysis in mathematics. The white points are part of the set and form a fractal. This project uses python to generate the points of the Mandelbrot Set and visualize them. Fractals have infinite detail, so the program can zoom in on the image an infinite amount."
    },
    {
      img: require("../Assets/djikstra.png"),
      heading: "Djikstra's Algorithm Maze Solver",
      caption: "Built with Pygame",
      link: "https://github.com/gavin-oconnor/Djikstra-s-Maze-Solver",
      long: "This program starts by taking an image of a maze as input and converting it to a set of a points. The program then uses Djikstra's Algorithm to find the shortest path between the start and end of the maze efficiently. The program uses Pygame to draw the path on the image of the maze and return the solved photo.",
    },
    {
      img: require("../Assets/mario.png"),
      heading: "Super Mario Clone",
      caption: "Built with Java and Processing",
      link: "",
      long: "I built this clone of Super Mario for my AP Computer Science Final Project. The clone has features of the real game such as enemies and power-ups. The game is also very customizable as the map is generated from a text file of 1's and 0's."
    },
    {
      img: require("../Assets/poker.png"),
      heading: "Poker Payout Calculator",
      caption: "Built with Python, Javascript, and Flask",
      link: "https://github.com/gavin-oconnor/GavsPokerCalc2.0",
      long: "I built this website because my friend group would often run into trouble when it came time to pay in poker. This website simply takes everyone's buy-ins (in chips or cash) and their final amounts (in chips or cash) and tells everyone who to venmo. This cuts down on confusion as well as the need for a bank."
    },
    {
      img: require("../Assets/whatever.png"),
      heading: "Social Media App",
      caption: "Built with Python, Javascript, and Flask",
      link: "https://github.com/gavin-oconnor/whatever.",
      long: "This project is a full-stack social media application. It supports features like following other users, searching for other users, making posts, and public/private accounts."
    },
    {
      img: require("../Assets/fourier.png"),
      heading: "Fourier Series Drawing",
      caption: "Built with Python and Pygame",
      link:"https://github.com/gavin-oconnor/fourier",
      long: "This project is a visualization of a topic in complex analysis called Fourier Series. This program takes a path then calculates how to draw that path using a group of vectors spinning at different frequencies, lengths, and offsets."
    },
  ]
  return (
    <>
    <BrowserView>
    <div className="project-widgets-container">
        {
          activeModal === -1 ? <div/> : <WidgetPopup img={projects[activeModal].img} link={projects[activeModal].link} heading={projects[activeModal].heading} caption={projects[activeModal].long} click={onClick}/>
        }
        <div className="flex-row">
        <ProjectWidget index={0} click={onClick} img={projects[0].img} heading={projects[0].heading} caption={projects[0].caption}/>
        <ProjectWidget index={1} click={onClick} img={projects[1].img} heading={projects[1].heading} caption={projects[1].caption}/>
        <ProjectWidget index={2} click={onClick} img={projects[2].img} heading={projects[2].heading} caption={projects[2].caption}/>
        </div>
        <div className="flex-row">
        <ProjectWidget index={3} click={onClick} img={projects[3].img} heading={projects[3].heading} caption={projects[3].caption}/>
        <ProjectWidget index={4} click={onClick} img={projects[4].img} heading={projects[4].heading} caption={projects[4].caption}/>
        <ProjectWidget index={5} click={onClick} img={projects[5].img} heading={projects[5].heading} caption={projects[5].caption}/>
        </div>
         
      </div>
        </BrowserView>
        <MobileView>
          <div className="m-flex-column">
          {projects.map((proj) => <ProjectWidget index={-1} click={"click"} img={proj.img} heading={proj.heading} caption={proj.caption}/>)}
          </div>
        </MobileView>
      </>
  )
}

export default Projects