import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

export default function LibraryToggle({libraryStatus, setLibraryStatus}) {
  return (
    <button onClick={() => setLibraryStatus(!libraryStatus )} className="library-toggle">
      <span>Library</span>
      <FontAwesomeIcon icon={faMusic} />
    </button>
  )
}
