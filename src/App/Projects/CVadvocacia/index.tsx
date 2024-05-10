import CVAdvocaciaPrint from '../../../../public/Images/cvadvocacia_print.png'
import * as Cards from "../../../Components/Logo";
import { LogoList } from '../../../Components/Logo/Card';
import { translation, useLanguage } from '../../../Globals/translations';
import { Container, Desc, Image, Paragraph, RepoLink, Title } from '../utils';

export default function CVadvocacia({ }) {

  useLanguage()

  return (
    <Container>
      <div className="flex flex-col items-start gap-6">
        <Title>
          Castro Vieira<br /> Advocacia
        </Title>
        <Desc>
          {translation.projects.cva.desc}
        </Desc>
        <RepoLink />
      </div>
      <Image src={CVAdvocaciaPrint} aspect={269 / 190} />
      <div className='flex gap-10 w-full'>
        <Paragraph title={translation.words.problem}>
          {translation.projects.cva.problem}
        </Paragraph>
        <Paragraph title={translation.words.solution}>
          {translation.projects.cva.solution}
        </Paragraph>
      </div>
      <div className='flex flex-col gap-12'>
        <LogoList title={translation.words.languages}>
          <Cards.PHP />
          <Cards.MySql />
          <Cards.JavaScript />
          <Cards.HTML />
          <Cards.CSS />
        </LogoList>
        <LogoList title={translation.skills_tree.frontend_libs}>
          <Cards.React />
          <Cards.ReactRouter />
          <Cards.Axios />
          <Cards.RadixUI />
        </LogoList>
        <LogoList title={translation.skills_tree.backend_libs}>
          <Cards.Laravel />
          <Cards.NodeJs />
        </LogoList>
        <LogoList title={translation.skills_tree.backend_libs}>
          <Cards.VScode />
          <Cards.Git />
          <Cards.Vite />
          <Cards.Figma />
        </LogoList>
      </div>
    </Container>
  )

}