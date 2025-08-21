import { HeaderProps } from './Header.types'
import { useHeaderHelper } from './Header.helper'

export default function Header({ }: HeaderProps) {
  const {} = useHeaderHelper()

  return (
    <header>
      {/* Contenido del header */}
    </header>
  )
}

export * from './Header.types'
