import React from 'react'
import SVG from 'react-inlinesvg'
import { toAbsoluteUrl } from './AssetHelpers'
type Props = {
  className?: string
  path: string
  svgClassName?: string
}

const MYSVG: React.FC<Props> = ({ className = '', path, svgClassName = 'h-8 w-8' }) => {
  return (
    <span className={`svg-icon ${className}`}>
      <SVG src={toAbsoluteUrl(path)} className={svgClassName} />
    </span>
  )
}

export { MYSVG }
