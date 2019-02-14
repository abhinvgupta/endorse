import express from "express"
import cors from "cors"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import serialize from "serialize-javascript"
import App from '../shared/App'
import styleMap from './styleMap'
import router from './router'

var subdomain = require('express-subdomain')
const allowedDomains = ['isha', 'drishti']
const app = express()

app.use(cors())
app.use(express.static("public"))
app.use(subdomain('isha', router));

const getSubdomain = (subdomains) => {
  if (subdomains.length == 0) {
    return null
  }
  else if (subdomains.length == 1) {
    if (allowedDomains.includes(subdomains[0]) ) {
      return subdomains[0]
    } else {
      return 'invalid'
    }
  } else {
    return 'invalid'
  }
}

app.get("*", (req, res, next) => {
  console.log(req.subdomains, 'subdomains')
  let subdomain = getSubdomain(req.subdomains)
  if (subdomain == 'invalid') {
    res.send('Invalid domain')
  }
  subdomain = subdomain ? subdomain : 'root'
  console.log(subdomain, 'domain')
  const domainStyle = styleMap[subdomain]
  const markup = renderToString(
      <App style = {domainStyle} test= 'one' />
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${domainStyle.title}</title>
        <meta name=${domainStyle.meta.name} content=${domainStyle.meta.content}>
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})

/// /*
//   1) Just get shared App rendering to string on server then taking over on client.
//   2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
//   3) Instead of static data move to dynamic data (github gists)
//   4) add in routing.
// */