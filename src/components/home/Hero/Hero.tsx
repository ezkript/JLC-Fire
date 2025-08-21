import { HeroProps } from './Hero.types'
import { useHeroHelper } from './Hero.helper'

export default function Hero({ }: HeroProps) {
  const {} = useHeroHelper()

  return (
    <section>
      {/* Contenido del hero */}
    </section>
  )
}

export * from './Hero.types'
