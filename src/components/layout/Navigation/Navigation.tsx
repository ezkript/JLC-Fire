import { NavigationProps } from './Navigation.types'
import { useNavigationHelper } from './Navigation.helper'

export default function Navigation({ }: NavigationProps) {
  const {} = useNavigationHelper()

  return (
    <nav>
      {/* Contenido de la navegación */}
    </nav>
  )
}

export * from './Navigation.types'
