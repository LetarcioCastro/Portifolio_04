import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {

  return (
    <div className={twMerge('relative overflow-hidden rounded bg-zinc-800 bg-opacity-20 text-transparent', className)} {...props}>
      <div
        className="absolute bg-zinc-700 bg-opacity-20 inset-0"
        style={{
          maskImage: 'linear-gradient(to left, #0000, #000, #0000)'
        }}
        ref={(div) => {
          div?.animate({
            transform: ['translateX(-100%)', 'translateX(100%)']
          }, {
            duration: 2000,
            easing: 'linear',
            iterations: Infinity
          })

        }}
      />
    </div>
  )

}