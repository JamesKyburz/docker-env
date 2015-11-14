var exec = require('child_process').exec

module.exports = setEnvironment

function setEnvironment (environment, cb) {
  exec('docker-machine env ' + environment, parse)

  function parse (err, results) {
    if (err) return cb(err)
    results.toString().split(/\n/).forEach(function (line) {
      var match = line.match(/export ([^=]*)="([^"]*)"/)
      if (match) process.env[match[1]] = match[2]
    })
    cb(null)
  }
}
