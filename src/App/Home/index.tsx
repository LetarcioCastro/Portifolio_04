import { BsArrowDown, BsBoxArrowUpRight } from "react-icons/bs";
import VCAdvocaciaPrint from '../../../public/Images/cvadvocacia_print.png'
import { useScrollView } from "../../Utils";
import { btnStyle } from "../../Components/Button";
import * as Project from "../Projects/Card";
import { translation, useLanguage } from "../../Globals/translations";

export default function Home({ }) {

  useLanguage()

  useScrollView({
    top: 0
  })

  return (
    <div className="flex flex-col items-center w-full">
      <div className='container max-w-screen-lg h-screen flex flex-col gap-10 justify-center'>
        <h1 className='text-7xl max-w-3xl font-medium'>
          {translation.home.title}
        </h1>
        <p className='text-3xl max-w-3xl text-zinc-500 dark:text-zinc-400' >
          {translation.home.desc}
        </p>
        <div className='flex gap-5'>
          <a className={btnStyle('px-5 py-3 text-lg')}>
            {translation.words.curriculum} <BsBoxArrowUpRight />
          </a>
          <a className={btnStyle('px-5 py-3 bg-transparent dark:bg-transparent border-0 text-lg')}>
            {translation.words.projects} <BsArrowDown className='text-xl' />
          </a>
        </div>
      </div>
      <Project.Container>
        <Project.Card title="Castro Vieira Advocacia" header="CV Advocacia" className="group">
          <Project.Title>
            Castro Vieira Advocacia
          </Project.Title>
          <Project.Desc>
            {translation.projects.cva.desc}
          </Project.Desc>
          <Project.Link to='/projects/CVadvocacia' />
          <Project.Techs>
            {['php', 'Laravel', 'MySql', 'HTML', 'CSS', 'JavaScript', 'React', 'Radix UI']}
          </Project.Techs>
          <Project.Img src={VCAdvocaciaPrint} />
        </Project.Card>
        <Project.Card title="Castro Vieira Advocacia" header="CV Advocacia" className="group">
          <Project.Title>
            Castro Vieira Advocacia
          </Project.Title>
          <Project.Desc>
            {translation.projects.cva.desc}
          </Project.Desc>
          <Project.Link to='/projects/CVadvocacia' />
          <Project.Techs>
            {['php', 'Laravel', 'MySql', 'HTML', 'CSS', 'JavaScript', 'React', 'Radix UI']}
          </Project.Techs>
          <Project.Img src={VCAdvocaciaPrint} />
        </Project.Card>
        <Project.Card title="Castro Vieira Advocacia" header="CV Advocacia" className="group">
          <Project.Title>
            Castro Vieira Advocacia
          </Project.Title>
          <Project.Desc>
            {translation.projects.cva.desc}
          </Project.Desc>
          <Project.Link to='/projects/CVadvocacia' />
          <Project.Techs>
            {['php', 'Laravel', 'MySql', 'HTML', 'CSS', 'JavaScript', 'React', 'Radix UI']}
          </Project.Techs>
          <Project.Img src={VCAdvocaciaPrint} />
        </Project.Card>
        <Project.Card title="Castro Vieira Advocacia" header="CV Advocacia" className="group">
          <Project.Title>
            Castro Vieira Advocacia
          </Project.Title>
          <Project.Desc>
            {translation.projects.cva.desc}
          </Project.Desc>
          <Project.Link to='/projects/CVadvocacia' />
          <Project.Techs>
            {['php', 'Laravel', 'MySql', 'HTML', 'CSS', 'JavaScript', 'React', 'Radix UI']}
          </Project.Techs>
          <Project.Img src={VCAdvocaciaPrint} />
        </Project.Card>
        <Project.Card title="Castro Vieira Advocacia" header="CV Advocacia" className="group">
          <Project.Title>
            Castro Vieira Advocacia
          </Project.Title>
          <Project.Desc>
            {translation.projects.cva.desc}
          </Project.Desc>
          <Project.Link to='/projects/CVadvocacia' />
          <Project.Techs>
            {['php', 'Laravel', 'MySql', 'HTML', 'CSS', 'JavaScript', 'React', 'Radix UI']}
          </Project.Techs>
          <Project.Img src={VCAdvocaciaPrint} />
        </Project.Card>
      </Project.Container>
    </div>
  )

}

