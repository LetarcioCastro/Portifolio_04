import { twMerge, ClassNameValue } from "tailwind-merge"
import { useAppContext } from "../Contexts/app"
import { useEffect } from "react"


export const animate = (x: number, y: number, delay?: number) => ({
  initial: { opacity: 0, x, y },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { delay },
})

type styleType = ClassNameValue | TemplateStringsArray

export const createStyle = (...defaultStyles: styleType[]) => (...styles: styleType[]) => twMerge(...defaultStyles as string[], ...styles as string[])

export const useIncrement = (init: number = 0) => {

  const accBranches: { [ket: string]: number } = {}

  return (n: number = 0, branch: string = 'default', branchInherit: string = 'default') => {
    accBranches[branch] ??= accBranches[branchInherit] || init
    return accBranches[branch] += n
  }

}

export const useScrollView = (options: ScrollToOptions, refs: any[] = []) => {

  const { viewRef } = useAppContext()

  useEffect(() => {
    if (!viewRef.current) return

    viewRef.current.scrollTo({
      behavior: 'instant',
      ...options,
    })

  }, [viewRef, ...refs])

  return viewRef.current

}