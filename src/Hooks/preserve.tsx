import { ReactNode, useMemo } from "react"

export default function Preserve({ deps = [], children }: { deps?: any[], children: ReactNode }) {

  const childrenPreserved = useMemo(() => children, deps)

  return (
    <>
      {childrenPreserved}
    </>
  )

}