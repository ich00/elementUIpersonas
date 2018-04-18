import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pruebas-3751.restdb.io/rest',
  headers: { 'cache-control': 'no-cache',
    'x-apikey': '5a5893537d7ef24c5cf08c1c',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

function getTrabajosApi (cb) {
  let uriBase = 'trabajos'
 /* if (type === 'h') {
    uriBase += '/h={"$' + field + '":' + val + '}'
  }  else if (type === 'q') {
    uriBase += 'q={"' + field + '":"' + val + '"}'
  } */
  api.get(uriBase)
   .then((response) => {
     cb(response.data)
   }).catch((error) => {
     console.log(error)
   })
}

export default {
  getTrabajos: (cb) => getTrabajosApi(cb)
}
