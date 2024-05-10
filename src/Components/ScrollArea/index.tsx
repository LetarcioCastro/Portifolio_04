import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { LegacyRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export default function ScrollArea({ children, className, setRef, ...props }: ScrollAreaPrimitive.ScrollAreaViewportProps & { children?: ReactNode, className?: string, setRef?: LegacyRef<HTMLDivElement> }) {

  return (
    <ScrollAreaPrimitive.Root className="relative overflow-hidden">
      <ScrollAreaPrimitive.Viewport className={twMerge("relative", className)} ref={setRef} {...props}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        className="z-50 flex select-none touch-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="vertical"
      >
        <ScrollAreaPrimitive.Thumb className="flex-1 bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-600 rounded-[10px] relative" />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Scrollbar
        className="flex select-none touch-none p-0.5  bg-zinc-700 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="horizontal"
      >
        <ScrollAreaPrimitive.Thumb className="flex-1 bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-600 rounded-[10px] relative" />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner className="bg-zinc-700" />
    </ScrollAreaPrimitive.Root>
  )

}