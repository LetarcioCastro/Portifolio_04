
import { HTMLAttributes, ReactNode } from "react";
import { ListAnimation } from "../../List/Animation";

export function LogoList({ children, title, ...props }: HTMLAttributes<HTMLDivElement> & { title: string }) {

  return (
    <div className="flex flex-col gap-3 items-start">
      <h2
        className="text-lg text-zinc-600 dark:text-zinc-400"
      >
        {title}
      </h2>
      <ListAnimation {...props}>
        {children}
      </ListAnimation>
    </div>
  )

}

export default function CardLogo({ children, title }: { children?: ReactNode, title?: ReactNode }) {

  return (
    <div className="group flex flex-col bg-zinc-100 hover:bg-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-300 hover:text-zinc-100 dark:hover:text-zinc-800 py-4 px-5 min-w-24 max-w-44 rounded-lg gap-5 items-center justify-center border border-zinc-300 dark:border-zinc-800 hover:border-zinc-800 dark:hover:border-zinc-300 cursor-default">
      <div className="flex items-center justify-center flex-1">
        {children}
      </div>
      {title}
    </div>
  )

}