import { LayoutGroup, useScroll, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { btnStyle } from "../../Components/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { ReactNode, useRef } from "react";
import MenuActions from "./Menu";
import { translation, useLanguage } from "../../Globals/translations";
import { useAppContext } from "../../Contexts/app";

function HeaderLink({ to, children }: { to: string, children: ReactNode }) {

  const { pathname } = useLocation()

  return (
    <Link to={to} className='group relative px-2 cursor-pointer h-full flex items-center'>
      {
        pathname == to && (
          <motion.div
            layoutId='link.background'
            className='absolute inset-x-0 bottom-[-1px] h-[2px] bg-zinc-900 dark:bg-zinc-50 rounded'
            initial={{ y: 0 }}
          />
        )
      }
      <span
        className='relative z-10 text-zinc-500 dark:text-zinc-400 data-[highlight=true]:text-zinc-800 dark:data-[highlight=true]:text-zinc-100 group-hover:text-zinc-800 dark:group-hover:text-zinc-100 font-medium dark:font-normal'
        data-highlight={pathname == to}
      >
        {children}
      </span>
    </Link>
  )

}

export default function Header({ }) {

  useLanguage()
  const { viewRef } = useAppContext()
  const headerRef = useRef<HTMLDivElement | null>(null)
  const topRef = useRef(0)

  const { scrollY } = useScroll({
    layoutEffect: false,
    container: viewRef
  })

  const y = useTransform(() => {

    const y = scrollY.get()
    const headerHeight = -(headerRef.current?.offsetHeight || 64)

    const diff = topRef.current - y

    if (diff <= headerHeight) {
      topRef.current = y + headerHeight
      return headerHeight
    }

    if (diff >= 0) {
      topRef.current = y
      return 0
    }

    return diff

  })

  return (
    <motion.div
      ref={headerRef}
      className='fixed top-0 inset-x-0 flex justify-center bg-white/20 dark:bg-zinc-950/30 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 z-20'
      style={{
        y,
      }}
      onFocus={() => y.set(0)}
    >
      <div className='container max-w-screen-lg flex justify-between items-center h-16'>
        <div className='flex gap-5 items-center text-lg leading-none tracking-wider h-full'>
          <LayoutGroup>
            <HeaderLink to='/'>
              {translation.words.home}
            </HeaderLink>
            <HeaderLink to='/about-me'>
              {translation.words.about_me}
            </HeaderLink>
            <HeaderLink to='/contact'>
              {translation.words.contact}
            </HeaderLink>
          </LayoutGroup>
        </div>
        <div className='flex gap-3 items-center'>
          <MenuActions />
          <a className={btnStyle()}>
            Linkedin <BsBoxArrowUpRight />
          </a>
          <a className={btnStyle()}>
            Github <BsBoxArrowUpRight />
          </a>
        </div>
      </div>
    </motion.div>

  )

}