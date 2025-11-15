interface TypeBadgeProps {
  type: string
}

const TypeBadge = ({ type }: TypeBadgeProps) => {
  const getBadgeConfig = (type: string) => {
    if (type.includes('Keynote')) {
      return { label: 'Keynote Lecture', className: 'bg-green-100 text-green-800' }
    }
    if (type.includes('Lecture')) {
      return { label: 'Lecture', className: 'bg-green-100 text-green-800' }
    }
    if (type.includes('Workshop')) {
      return { label: 'Workshop', className: 'bg-orange-100 text-orange-800' }
    }
    if (type.includes('Panel')) {
      return { label: 'Panel', className: 'bg-purple-100 text-purple-800' }
    }
    if (type.includes('General')) {
      return { label: 'General', className: 'bg-gray-100 text-gray-800' }
    }
    return null
  }

  const badgeConfig = getBadgeConfig(type)

  if (!badgeConfig) {
    return null
  }

  return <span className={`Pill ${badgeConfig.className}`}>{badgeConfig.label}</span>
}

export default TypeBadge
