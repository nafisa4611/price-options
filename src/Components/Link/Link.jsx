import React from 'react'

function Link({name, path}) {
    return (
        <div>
            <li className="mx-4 my-2 md:my-0 text-lg hover:text-blue-400 hover:scale-105 transition-transform duration-300">
                <a href={path}>{name}</a>
            </li>
        </div>
      )
}

export default Link
