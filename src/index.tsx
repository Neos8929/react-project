import React from 'react'
import ReactDOM from 'react-dom'

import './style/index.less'

const render = () => {
    ReactDOM.render(
        <div>hello world !</div>,
        document.querySelector('#app')
    )
}

render();