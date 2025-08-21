import { FooterProps } from './Footer.types'
import { useFooterHelper } from './Footer.helper'

export default function Footer({ }: FooterProps) {
  const {} = useFooterHelper()

  return (
    <footer>
      {/* Contenido del footer */}
    </footer>
  )
}

export * from './Footer.types'
