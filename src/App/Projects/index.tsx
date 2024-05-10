import { Outlet, RouteObject } from "react-router-dom";
import CVadvocacia from "./CVadvocacia";
import { useScrollView } from "../../Utils";

export default function Projects({ }) {

  useScrollView({
    top: 0
  })

  return (
    <>
      <Outlet />
    </>
  )

}

export const projectsRoute: RouteObject[] = [
  {
    path: 'CVadvocacia',
    element: <CVadvocacia />
  }
]