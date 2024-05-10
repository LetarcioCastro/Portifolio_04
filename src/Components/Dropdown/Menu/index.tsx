
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import { btnStyle } from '../../Button';
import { BiCheck } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export default function DropdownMenu({ children, ...props }: DropdownPrimitive.DropdownMenuProps) {

  return (
    <DropdownPrimitive.Root {...props}>
      {children}
    </DropdownPrimitive.Root>
  );
};


export function DropdownMenuTrigger({ children, className, ...props }: DropdownPrimitive.DropdownMenuTriggerProps) {

  return (
    <DropdownPrimitive.Trigger className={btnStyle('data-[state=open]:border-zinc-400 dark:data-[state=open]:border-zinc-600', className)} {...props}>
      {children}
    </DropdownPrimitive.Trigger>
  )

}

DropdownMenu.Trigger = DropdownMenuTrigger

export function DropdownMenuContent({ children, ...props }: DropdownPrimitive.DropdownMenuContentProps) {

  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content
        className="z-50 min-w-52 shadow-lg text-zinc-800 dark:text-zinc-100 dark:shadow-zinc-950 bg-zinc-100/60 dark:bg-zinc-900/60 backdrop-blur rounded-md p-2 border border-zinc-300 dark:border-zinc-700"
        sideOffset={5}
        asChild
        {...props}
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            bounce: 0
          }}
        >
          {children}
          <DropdownPrimitive.Arrow asChild>
            <svg className='h-2 w-auto' viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M195.008 292.512C197.383 296.074 202.617 296.074 204.992 292.512L400 0H0L195.008 292.512Z" className='fill-zinc-300 dark:fill-zinc-700' />
            </svg>
          </DropdownPrimitive.Arrow>
        </motion.div>
      </DropdownPrimitive.Content>
    </DropdownPrimitive.Portal>
  )

}

DropdownMenu.Content = DropdownMenuContent

export function DropdownMenuRadioGroup({ children, ...props }: DropdownPrimitive.MenuRadioGroupProps) {

  return (
    <DropdownPrimitive.RadioGroup {...props}>
      {children}
    </DropdownPrimitive.RadioGroup>
  )

}

DropdownMenu.Radio = DropdownMenuRadioGroup

export function DropdownMenuRadioItem({ children, className, ...props }: DropdownPrimitive.MenuRadioItemProps) {

  return (
    <DropdownPrimitive.RadioItem
      className={twMerge('rounded flex items-center px-[5px] h-8 relative pl-7 select-none outline-none data-[disabled]:text-zinc-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-zinc-800 data-[highlighted]:text-zinc-100 dark:data-[highlighted]:bg-zinc-300 dark:data-[highlighted]:text-zinc-900', className)}
      {...props}
    >
      <DropdownPrimitive.ItemIndicator className="absolute left-0 w-7 inline-flex items-center justify-center">
        <BiCheck />
      </DropdownPrimitive.ItemIndicator>
      {children}
    </DropdownPrimitive.RadioItem>
  )

}

DropdownMenuRadioGroup.Item = DropdownMenuRadioItem

export function DropdownMenuSeparator() {

  return (
    <DropdownPrimitive.Separator className="h-[1px] bg-zinc-300 dark:bg-zinc-600 m-2" />
  )

}

DropdownMenu.Separator = DropdownMenuSeparator