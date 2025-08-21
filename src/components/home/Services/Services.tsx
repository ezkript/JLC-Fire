import { ServicesProps } from './Services.types'
import { useServicesHelper } from './Services.helper'

export default function Services({ }: ServicesProps) {
  const {} = useServicesHelper()

  return (
    <section>
      {/* Contenido de servicios */}
    </section>
  )
}

export * from './Services.types'
