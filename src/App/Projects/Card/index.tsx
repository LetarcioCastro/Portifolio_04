import { HTMLAttributes, ImgHTMLAttributes, createContext, useContext, useRef } from "react"
import { useAppContext } from "../../../Contexts/app"
import { useScroll, useTransform, motion, HTMLMotionProps, useAnimationControls, MotionValue, motionValue } from "framer-motion"
import { twMerge } from "tailwind-merge"
import { Link as RouterLink, LinkProps } from "react-router-dom"
import { btnStyle } from "../../../Components/Button"
import { BsArrowRight } from "react-icons/bs"
import { translation } from "../../../Globals/translations"

export function Header({ children }: { children: string }) {

  return (
    <div className='flex h-10 pt-3 box-content bg-zinc-200/50 dark:bg-zinc-950/40'>
      <div className='flex items-center justify-center gap-2 h-full border-b border-zinc-300 dark:border-zinc-800 pl-4 pr-1'>
        <div className='h-3 w-3 rounded-full bg-green-500 dark:bg-green-600' />
        <div className='h-3 w-3 rounded-full bg-yellow-500 dark:bg-yellow-600' />
        <div className='h-3 w-3 rounded-full bg-red-500 dark:bg-red-600' />
      </div>
      <div className='h-full'>
        <svg className="w-auto h-full" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 150C150 67.1573 217.157 0 300 0V0V400H0V400C82.8427 400 150 332.843 150 250V200V150Z" className='fill-zinc-50 dark:fill-zinc-900' />
          <path d="M3.20193e-05 395V395C82.8427 395 150 327.843 150 245L150 200L150 155.001C150 72.2386 217.238 5.22412 300 5.49998V5.49998" stroke-width="10" className='stroke-zinc-300 dark:stroke-zinc-800' />
        </svg>
      </div>
      <div className='flex items-center justify-center h-full bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-300 dark:border-zinc-800 text-lg'>
        {children}
      </div>
      <div className='h-full'>
        <svg className="w-auto h-full" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150.174 150C150.174 67.1573 83.0164 0 0.173737 0V0V400H300.174V400C217.331 400 150.174 332.843 150.174 250V200V150Z" className='fill-zinc-50 dark:fill-zinc-900' />
          <path d="M300.465 395V395C217.622 395 150.465 327.843 150.465 245L150.465 200L150.465 155.001C150.465 72.2386 83.2269 5.22412 0.465211 5.49998V5.49998" className='stroke-zinc-300 dark:stroke-zinc-800' stroke-width="10" />
        </svg>
      </div>
      <div className='flex-1 h-full border-b border-zinc-300 dark:border-zinc-800' />
    </div>
  )

}

export function Link({ children, className, ...props }: LinkProps) {

  return (
    <RouterLink className={btnStyle('group/link', className)} {...props}>
      {children || translation.projects.link} <BsArrowRight className="group-hover/link:translate-x-1 transition-transform h-5 w-auto" />
    </RouterLink>
  )

}

export function Techs({ children, ...props }: HTMLAttributes<HTMLDivElement> & { children: string[] }) {

  return (
    <div className="flex gap-3 flex-wrap" {...props}>
      {
        children?.map?.((tech, index) => {

          return (
            <span
              key={index}
              className="px-4 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 bg-opacity-70 text-zinc-500 dark:text-zinc-300 dark:font-light text-sm"
            >
              {tech}
            </span>
          )

        })
      }
    </div>
  )

}

const projectContext = createContext<{ scrollY: MotionValue }>({ scrollY: motionValue(0) })

export function Container({ children, ...props }: HTMLAttributes<HTMLDivElement>) {

  const containerRef = useRef<HTMLDivElement | null>(null)
  const { viewRef } = useAppContext()

  const { scrollY } = useScroll({
    layoutEffect: false,
    container: viewRef,
  })

  return (
    <div {...props} ref={containerRef} className='relative container max-w-screen-lg flex flex-col mb-[20vh]'>
      <projectContext.Provider value={{ scrollY }}>
        {children}
      </projectContext.Provider>
    </div>
  )

}

export function Contents({ children: [title, desc, link, techs, img], ...props }: HTMLAttributes<HTMLDivElement> & { children: JSX.Element[] }) {

  return (
    <div className="grid grid-cols-2 gap-10 bg-zinc-50 dark:bg-zinc-900 w-full flex-1 p-10" {...props}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-5 items-start justify-between">
          {title}
          {desc}
          {link}
        </div>
        {techs}
      </div>
      {img}
    </div>
  )

}

export function Card({ children, className, header, ...props }: HTMLMotionProps<'div'> & { children: JSX.Element[], header: string }) {

  const { scrollY } = useContext(projectContext)
  const cardContainerRef = useRef<HTMLDivElement>(null)
  const cardTopRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const hoverActive = useRef<boolean>(false)

  const setCursor = (cursor: string) => cardRef.current && (cardRef.current.style.cursor = cursor)

  const disableHover = (active: boolean = false) => {
    if (!hoverActive.current) return

    animateControl.start({ y: 0 })
    setCursor('default')
    hoverActive.current = active

  }

  const calcProgress = () => {

    const diff = (cardContainerRef.current?.offsetTop || 0) - (cardTopRef.current?.offsetTop || 0)
    const y = diff <= 0 ? 0 : (200 - 200 * Math.exp(-0.0002 * diff))

    if (y < 20) {
      disableHover()
      return y
    }

    hoverActive.current = true
    return y

  }

  const animateControl = useAnimationControls()

  const progress = useTransform(() => {

    scrollY.get()
    return calcProgress()

  })

  const y = useTransform(() => -(progress.get()))
  const scale = useTransform(progress, [0, 200], [1, 0])

  return (
    <>
      <div className="w-full h-0 scroll-mt-[20vh]" ref={cardTopRef} />
      <motion.div
        className='w-full sticky top-[20vh]'
        ref={cardContainerRef}
        style={{
          y,
          scale,
          transformOrigin: 'center top',
        }}
        {...props}
      >
        <motion.div
          className={twMerge('w-full border bg-zinc-50 dark:bg-zinc-900 border-zinc-300 dark:border-zinc-800 rounded-2xl flex flex-col overflow-hidden h-[50vh]', className)}
          ref={cardRef}
          animate={animateControl}
          style={{
            transformOrigin: 'center top',
          }}
          onClick={() => {
            if (!cardContainerRef.current || !cardTopRef.current || !hoverActive.current) return

            cardTopRef.current?.scrollIntoView({
              behavior: 'smooth',
              inline: 'start'
            })

            disableHover()

          }}
          onHoverStart={() => {

            if (!hoverActive.current) return

            setCursor('pointer')
            animateControl.set({ y: 0 })
            animateControl.start({ y: -35 })

          }}
          onHoverEnd={() => disableHover(true)}
        >
          <Header>
            {header}
          </Header>
          <Contents>
            {children}
          </Contents>
        </motion.div>
      </motion.div>
      <div className="w-full h-32 last:hidden" />
    </>
  )

}

export function Title({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {

  return (
    <h1 className="text-3xl" {...props}>
      {children}
    </h1>
  )

}

export function Desc({ children, ...props }: HTMLAttributes<HTMLSpanElement>) {

  return (
    <span className="text-xl text-zinc-700 dark:text-zinc-400" {...props}>
      {children}
    </span>
  )

}

export function Img({ ...props }: ImgHTMLAttributes<HTMLImageElement>) {

  return (
    <div className="overflow-hidden rounded-md scale-[200%] origin-top-left shadow-lg shadow-zinc-900 dark:shadow-zinc-950">
      <img className="w-full h-auto object-cover " draggable={false} {...props} />
    </div>
  )

}
