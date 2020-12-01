import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function Toggle() {
  return (
    <div className="toggle">
      <span>Library</span>
      <FontAwesomeIcon icon={faMusic} />
    </div>
  )
}
