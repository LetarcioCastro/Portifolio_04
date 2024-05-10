import { useMemo, useSyncExternalStore } from "react"

type langsType = string

type translationsType = {
  [key: string | number]: translationsType | string,
}

export const createTranslation = <t extends translationsType>({ translations, defaultLang }: { translations: t, defaultLang?: string }) => {

  let listeners: any[] = []
  let lang = defaultLang || navigator.language.split('-')[0] || navigator.language || 'en'
  const translation: any = {}

  const translationBuildLoop = (translations: translationsType, name: string, translation: translationsType) => {
    if (typeof translations != 'object' || Array.isArray(translations)) return

    const obj = {}

    for (let key in translations)
      translationBuildLoop(translations[key] as translationsType, key, obj)

    Object.defineProperty(translation, name, {

      get() {
        return translations[lang] || obj
      },

    })


  }

  const buildTranslation = (translations: translationsType) => {

    for (let key in translations)
      translationBuildLoop(translations[key] as translationsType, key, translation)

    return translation

  }

  buildTranslation(translations)

  const subListener = (listener: any) => {

    listeners.push(listener)

    return () => listeners = listeners.filter(l => l != listener)

  }

  const getLang = () => lang

  const dispatchListener = () => listeners.forEach((listener) => listener())

  const setLanguage = (l: langsType) => {
    lang = l
    dispatchListener()
  }

  const useLanguage = () => useSyncExternalStore(subListener, getLang)

  const useTranslation = (translations: translationsType) => {

    const lang = useLanguage()
    return useMemo(() => buildTranslation(translations), [lang])

  }

  return {
    translation,
    useLanguage,
    setLanguage,
    useTranslation,
  }

}