import createEvent from "./event"

type themeType = 'light' | 'dark'
type themeModeType = 'auto' | themeType

let themeMode: themeModeType = 'auto'

const mediaTheme = matchMedia('(prefers-color-scheme: dark)')
const getCurrentTheme = (): themeType => themeMode == 'auto' ? mediaTheme.matches ? 'dark' : 'light' : themeMode

let theme: themeType = getCurrentTheme()

const updateTheme = (mode: themeType) => {
  document.documentElement.classList.remove(theme)
  document.documentElement.classList.add(mode)
}

updateTheme(theme)

const [useListenerMode, dispatchMode] = createEvent<themeModeType>(() => themeMode)
const [useListenerTheme, dispatchTheme] = createEvent<themeType>(() => theme)

const setTheme = async (mode: themeType) => {
  updateTheme(mode)
  theme = mode
  dispatchTheme()
}

mediaTheme.onchange = ({ matches }) => themeMode == 'auto' && setTheme(matches ? 'dark' : 'light')

export const setThemeMode = (mode: themeModeType) => {
  themeMode = mode
  setTheme(getCurrentTheme())
  dispatchMode()
}

setThemeMode(themeMode)

export const useThemeMode = (): themeModeType => useListenerMode()
export const getThemeMode = (): themeModeType => themeMode
export const useTheme = (): themeType => useListenerTheme()
export const getTheme = (): themeType => theme