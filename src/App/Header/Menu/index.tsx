import { LuSettings2 } from "react-icons/lu";
import DropdownMenu from "../../../Components/Dropdown/Menu";
import { setLanguage, useLanguage } from "../../../Globals/translations";
import { BrFlagIcon, EsFlagIcon, UsFlagIcon } from "../../../Components/Icons";
import { setThemeMode, useThemeMode } from "../../../Hooks/theme";
import { RxMagicWand, RxMoon, RxSun } from "react-icons/rx";

export default function MenuActions({ }) {

  const lang = useLanguage()
  const mode = useThemeMode()

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger className='h-8 w-8 rounded p-0'>
        <LuSettings2 />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Radio value={lang} onValueChange={(value: any) => setLanguage(value)}>
          <DropdownMenu.Radio.Item value="en" className="gap-2">
            <UsFlagIcon className='w-7 h-auto rounded-sm' /> English
          </DropdownMenu.Radio.Item>
          <DropdownMenu.Radio.Item value="pt" className="gap-2">
            <BrFlagIcon className='w-7 h-auto rounded-sm' /> Português
          </DropdownMenu.Radio.Item>
          <DropdownMenu.Radio.Item value="es" className="gap-2">
            <EsFlagIcon className='w-7 h-auto rounded-sm' /> Español
          </DropdownMenu.Radio.Item>
        </DropdownMenu.Radio>
        <DropdownMenu.Separator />
        <DropdownMenu.Radio value={mode} onValueChange={(value: any) => setThemeMode(value)}>
          <DropdownMenu.Radio.Item value="light" className="gap-2">
            <RxSun className="w-4 h-auto" /> Light
          </DropdownMenu.Radio.Item>
          <DropdownMenu.Radio.Item value="auto" className="gap-2">
            <RxMagicWand className="w-4 h-auto" />  Automatic
          </DropdownMenu.Radio.Item>
          <DropdownMenu.Radio.Item value="dark" className="gap-2">
            <RxMoon className="w-4 h-auto" /> Dark
          </DropdownMenu.Radio.Item>
        </DropdownMenu.Radio>
      </DropdownMenu.Content>
    </DropdownMenu>
  )

}