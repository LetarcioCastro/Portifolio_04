import { HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { btnStyle } from "../../Components/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Skeleton from "../../Components/Skeleton";
import { translation } from "../../Globals/translations";

type propsType = {
  children?: ReactNode,
}


export function Container({ children, ...props }: HTMLAttributes<HTMLDivElement>) {

  return (
    <div className="container max-w-5xl mt-32 flex flex-col gap-16" {...props}>
      {children}
    </div>
  )

}

export function Title({ children }: propsType) {

  return (
    <h1
      className="text-6xl font-semibold"
    >
      {children}
    </h1>
  )

}

export function Desc({ children }: propsType) {

  return (
    <p
      className="text-2xl text-zinc-500 dark:text-zinc-400"
    >
      {children}
    </p>
  )

}

export function RepoLink({ children }: propsType) {

  return (
    <a
      className={btnStyle()}
    >
      {children || translation.words.repository} <BsBoxArrowUpRight />
    </a>
  )

}

export function Image({ src, aspect }: propsType & { src: string, aspect?: string | number }) {

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-zinc-800"
    >
      <Skeleton className='absolute inset-0 h-full w-full' />
      <img
        src={src}
        className='relative w-full h-auto object-cover'
        onLoad={({ target }: any) => target.style.opacity = '1'}
        style={{
          opacity: 0,
          aspectRatio: aspect
        }}
      />
    </div>
  )

}

export function Paragraph({ title, children }: { title: string } & propsType) {

  return (
    <div className='flex flex-col gap-5'>
      <motion.h2
        className='text-2xl font-semibold'
      >
        {title}
      </motion.h2>
      <motion.p
        className='text-zinc-600 dark:text-zinc-300'
      >
        {children}
      </motion.p>
    </div>
  )

}