# docker-env

[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/docker-env.svg)](https://greenkeeper.io/)

set docker environment in a node process

a node wrapper for `docker-machine default name --shell=...`

# usage
```javascript
var dockerEnv = require('docker-env')
dockerEnv('default', (err) => {
  if (err) return console.error(err)
  console.log(process.env.DOCKER_HOST)
})
```

# install
```sh
npm install docker-env
```

# license
MIT