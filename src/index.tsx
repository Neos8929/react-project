import React from 'react'
import ReactDOM from 'react-dom'

const render = () => {
    ReactDOM.render(
        <div>hello world</div>,
        document.querySelector('#app')
    )
}

render();