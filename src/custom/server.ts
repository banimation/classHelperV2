import * as fs from 'fs'
import path from 'path'
import next from "next"
import * as https from "node:https"
import express from 'express'
import * as ssl from 'ssl-root-cas'
const rootCas = ssl.create()
const httpsOption = {
    key: fs.readFileSync(path.join(__dirname, "../ssl/classhelperv2.kro.kr-key.pem")), 
    cert: fs.readFileSync(path.join(__dirname, "../ssl/classhelperv2.kro.kr-crt.pem"))
}

const hostname = 'localhost'
const port = 80
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.all('*', (req, res) => {
        return handle(req, res)
    })
    https.globalAgent.options.ca = rootCas
    https.createServer(httpsOption, server).listen(443)
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`)
    })
})
