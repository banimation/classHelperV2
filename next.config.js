/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'

const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')

module.exports = {
  ...withPWA({ dest: "public" }),
  reactStrictMode: false
}
