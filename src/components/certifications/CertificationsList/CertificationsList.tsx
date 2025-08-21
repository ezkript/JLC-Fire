import { CertificationsListProps } from './CertificationsList.types'
import { useCertificationsListHelper } from './CertificationsList.helper'

export default function CertificationsList({ }: CertificationsListProps) {
  const {} = useCertificationsListHelper()

  return (
    <section>
      {/* Lista de certificaciones */}
    </section>
  )
}

export * from './CertificationsList.types'
