import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pruebas-3751.restdb.io/rest',
  headers: { 'cache-control': 'no-cache',
    'x-apikey': '5a5893537d7ef24c5cf08c1c',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

function getPersonasApi (cb) {
  let uriBase = 'vuetest'
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
function getPersonaApiGlobal (variables, cb) {
  let uriBase = 'vuetest'

  var queryVariables = gestionVariables(variables)
  if (queryVariables !== '') {
    uriBase += '?' + queryVariables
  }

  api.get(uriBase)
  .then((response) => {
    cb(response.data)
  }).catch((error) => {
    console.log(error)
  })
}
function getPersonaApiSort (sort, cb) {
  let uriBase = 'vuetest?sort=' + sort.field + '&dir=' + sort.method
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
/*
function getPersonaApiFind (find, cb) {
  let uriBase = 'vuetest?q={"' + find.field + '":"' + find.value + '"}'
 if (type === 'h') {
    uriBase += '/h={"$' + field + '":' + val + '}'
  }  else if (type === 'q') {
    uriBase += 'q={"' + field + '":"' + val + '"}'
  }
  api.get(uriBase)
   .then((response) => {
     cb(response.data)
   }).catch((error) => {
     console.log(error)
   })
}
*/

function savePersonaApi (data, cb) {
  api.post('/vuetest', data)
  .then(function (response) {
    cb(response)
  })
  .catch((error) => {
    console.log(error)
  })
}

function updatePersonaApi (idpersona, data, cb) {
  api.put('vuetest/' + idpersona, data)
  .then((response) => {
    cb({ status: 201 })
  })
  .catch((error) => {
    console.log(error)
  })
}
function deletePersonaApi (idpersona, cb) {
  api.delete('vuetest/' + idpersona)
  .then((response) => {
    cb(response)
  })
  .catch((error) => {
    console.log(error)
  })
}

function getPersonaById (idpersona, cb) {
  api.get('vuetest/' + idpersona)
  .then((response) => {
    cb(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
}

function gestionVariables (variables) {
  // var result = ''
  // let i = 0
  for (var key in variables) {
    var value = variables[key]
    var queryAux = ''
    var cont = 0

    // Leo la que venga e intento rellenar
    if (key === 'sort') {
      queryAux = 'sort=' + value.field + '&dir=' + value.method
    } else if (key === 'find') {
      queryAux = 'q={'
      for (var elem in value) {
        var values = value[elem]
        var field = values['field']
        var dataValue = values['value']
        if (dataValue !== '') {
          if (cont === 0) {
            queryAux += '"' + field + '":"' + dataValue + '"'
            cont++
          } else {
            queryAux += ',"' + field + '":"' + dataValue + '"'
          }
          console.log('lilili')
          console.log(cont)
        }
      }
      queryAux += '}'
    }
    return queryAux
  }
}
export default {
  getPersonas: (cb) => getPersonasApi(cb),
  savePersona: (data, cb) => savePersonaApi(data, cb),
  deletePersona: (idpersona, cb) => deletePersonaApi(idpersona, cb),
  updatePersona: (idpersona, data, cb) => updatePersonaApi(idpersona, data, cb),
  getPersonaById: (idpersona, cb) => getPersonaById(idpersona, cb),
  getPersonaApiSort: (sort, cb) => getPersonaApiSort(sort, cb),
  getPersonaApiGlobal: (variables, cb) => getPersonaApiGlobal(variables, cb)
}
