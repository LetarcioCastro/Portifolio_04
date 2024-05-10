import { HTMLAttributes } from "react";
import { createStyle } from "../../Utils";

export const btnStyle = createStyle`
    rounded-full
    flex gap-3 items-center justify-center px-4 py-2
    bg-zinc-50  dark:bg-zinc-900 hover:bg-zinc-800 hover:text-zinc-100 dark:hover:bg-zinc-300 dark:hover:text-zinc-900
    cursor-pointer border border-zinc-300 hover:border-zinc-800 dark:border-zinc-800 dark:hover:border-zinc-300 
`

export default function Button({ className, children, ...props }: HTMLAttributes<HTMLButtonElement>) {

  return (
    <button className={btnStyle(className)} {...props}>
      {children}
    </button>
  )

}