import './style.css'
import '../Hooks/theme'
import ScrollArea from '../Components/ScrollArea';
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { AppProvider } from '../Contexts/app';
import Header from './Header';
import backImage from '../../public/Images/backImage.png'
import backImageLight from '../../public/Images/backImageLight.png'

export default function App({ }) {

  const viewRef = useRef<HTMLDivElement>(null)

  return (
    <ScrollArea
      className='h-screen w-screen bg-zinc-100 text-zinc-800 dark:bg-zinc-950 dark:text-zinc-100'
      setRef={viewRef}
    >
      <div className='fixed inset-0 flex items-center justify-center overflow-hidden'>
        <img src={backImage} className='absolute w-full h-auto object-cover opacity-0 dark:opacity-25' />
        <img src={backImageLight} className='absolute w-full h-auto object-cover opacity-30 dark:opacity-0' />
        <div
          className='absolute inset-0 backdrop-blur dark:backdrop-blur-sm'
        />
      </div>
      <div className='relative flex flex-col w-full items-center pb-9 min-h-screen'>
        <AppProvider value={{ viewRef }}>
          <Header />
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </AppProvider>
        <div className='container max-w-5xl mt-9'>
          <span className='text-lg text-zinc-500'>
            Copyright © 2024 Letarcio de Castro Duarte. All rights reserved.
          </span>
        </div>
      </div>
    </ScrollArea>
  )

}

