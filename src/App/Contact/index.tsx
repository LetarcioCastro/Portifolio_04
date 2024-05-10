import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa6";
import { useScrollView } from "../../Utils";
import { btnStyle } from "../../Components/Button";
import { translation, useLanguage } from "../../Globals/translations";
import { motion } from "framer-motion";

export default function Contact({ }) {

  useLanguage()

  useScrollView({
    top: 0
  })

  return (
    <motion.div
      className="container max-w-5xl flex flex-col gap-16 mt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: 1000 }}
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-semibold">
          {translation.contact.title}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-sm">
          {translation.contact.desc}
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <h3 className="text-zinc-600 dark:text-zinc-400">
            {translation.contact.email}
          </h3>
          <div className="flex gap-6 items-center">
            <span className="text-2xl">
              Letarcio.castro70@gmail.com
            </span>
            <button className={btnStyle('h-10 w-10 -m-3 p-0 rounded-md')}>
              <FaRegCopy className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-zinc-600 dark:text-zinc-400" >
            {translation.contact.number}
          </h3>
          <span className="text-2xl" >
            (55) +88 3265-2343
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-zinc-600 dark:text-zinc-400" >
            {translation.words.location}
          </h3>
          <span className="text-2xl" >
            Limoerio do Norte CE Brasil
          </span>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        <a className={btnStyle()}>
          Currículo <BsBoxArrowUpRight />
        </a>
        <a className={btnStyle()}>
          Linkedin <BsBoxArrowUpRight />
        </a>
        <a className={btnStyle()}>
          Github <BsBoxArrowUpRight />
        </a>
      </div>
    </motion.div>
  )

}