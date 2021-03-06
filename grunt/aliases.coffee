module.exports =
  default: [
    "buildDev"
    "express"
    "watch"
  ]

  staging: [
    "buildDev"
    "testem:ci:dev"
  ]

  deploy: [
    "build"
    "gh-pages:deploy"
  ]

  beta: [
    "build"
    "gh-pages:beta"
  ]

  quick: [
    "express"
    "watch"
  ]

  production: [
    "build"
  ]

  build: [
    "buildDev"
    "buildDist"
  ]

  ci: [
    "build"
  ]

  buildDev: [
    "clean:dev"
    "bowercopy"
    "vendor"
    "config"
    "html"
    "html2js"
    "css"
    "scripts"
    "dataModels"
    "assets"
    "autoprefixer"
  ]

  buildDist: [
    "clean:dist"
    "copy:dist"
    "cssmin"
  ]
  
  css: [
    "compass"
  ]

  dataModels: [
    "yaml"
    "concat:json"
    "copy:json"
  ]

  assets: [
    "newer:copy:images"
    "copy:fonts"
    "copy:video"
  ]

  scripts: [
    "jshint"
    "concat:app"
  ]

  vendor: [
    "concat:vendor"
  ]

  html: [
    "copy:html"
  ]
  
  config: [
    "copy:config"
  ]

  test: [
    "testem:run:basic"
  ]
