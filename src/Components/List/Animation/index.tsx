import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export function ListAnimation({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {

  const list: ReactNode[] = (children instanceof Array ? children : [children])

  return (
    <div className={twMerge('flex gap-5 flex-wrap', className)} {...props}>
      {
        list.map((child, index) => {

          return (
            <div
              className="flex"
              key={index}
            >
              {child}
            </div>
          )

        })
      }
    </div>
  )

}