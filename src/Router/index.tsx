import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../App/Home";
import About from "../App/About";
import Contact from "../App/Contact";
import Projects, { projectsRoute } from "../App/Projects";

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-me',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/projects',
        element: <Projects  />,
        children: projectsRoute
      },
    ]
  }
])