import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'
import styleMap from '../shared/styleMap.js'

console.log('subdomain', subdomain)
const styleObject = styleMap[subdomain]
hydrate(
    <App style = {styleObject} />,
  document.getElementById('app')
);