import { ReactNode } from "react";
import { LogoList } from "../../Components/Logo/Card";
import * as Cards from "../../Components/Logo";
import { useScrollView } from "../../Utils";
import { translation, useLanguage } from "../../Globals/translations";

function InfoCard({ title, children }: { title: string, children: ReactNode }) {

  return (
    <div className="flex flex-col">
      <h3 className="text-zinc-600 dark:text-zinc-400 text-lg">
        {title}
      </h3>
      <span className="text-6xl font-medium">
        {children}
      </span>
    </div>
  )

}

export default function About({ }) {

  useLanguage()

  useScrollView({
    top: 0,
  })

  return (
    <div className="container max-w-5xl flex flex-col gap-16 mt-32">
      <div className="flex flex-col gap-9">
        <h1 className="text-7xl font-semibold">
          Letárcio de<br /> Castro Duarte
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg">
          {translation.about.desc}
        </p>
      </div>
      <div className="flex gap-14 flex-wrap">
        <InfoCard title={translation.words.experience}>
          20+
        </InfoCard>
        <InfoCard title={translation.words.years}>
          2 anos
        </InfoCard>
        <InfoCard title={translation.words.clients}>
          4+
        </InfoCard>
      </div>
      <div className="flex flex-col gap-10 items-start">
        <LogoList title={translation.words.languages}>
          <Cards.PHP />
          <Cards.MySql />
          <Cards.JavaScript />
          <Cards.TypeScript />
          <Cards.HTML />
          <Cards.CSS />
        </LogoList>
        <LogoList title={translation.skills_tree.frontend_libs}>
          <Cards.React />
          <Cards.ReactRouter />
          <Cards.Axios />
          <Cards.FramerMotion />
          <Cards.RadixUI />
          <Cards.Tailwindcss />
        </LogoList>
        <LogoList title={translation.skills_tree.backend_libs}>
          <Cards.Laravel />
          <Cards.NodeJs />
        </LogoList>
        <LogoList title={translation.skills_tree.tools}>
          <Cards.VScode />
          <Cards.Git />
          <Cards.Vite />
          <Cards.Figma />
        </LogoList>
      </div>
    </div>
  )

}



