import personasApi from '../../api/personas'
import * as mutationType from '../mutation_types'
import router from '../../router'

// initial state
const state = {
  all: [],
  messagePersona: null,
  finish: false
  // object: null
}

// initial getters
const getters = {
  allPersonas: state => state.all,
  messagePersona: state => state.messagePersona,
  finish: state => state.finish
 // objectPersona: state => state.object
}

// initial actions
const actions = {
  // get data from API
  getAllPersonas ({commit}, querys) {
    state.finish = false
   /* personasApi.getPersonas(personas => {
      commit(mutationType.SHOW_ALL_PERSONA, personas)
    }) */
    /* for (var i = 0; i < objeto.length; i++) {
      for (var j = 0; j < objeto.[0]; j++) {
        console.log('yyy')
        console.log(objeto[j])
      }
    } */
    personasApi.getPersonaApiGlobal(querys, (response) => {
      state.finish = true
      commit(mutationType.SHOW_ALL_PERSONA, response)
    })
  },

  savePersona (context, data, bool) {
    personasApi.savePersona(data, (response) => {
      if (response.status === 201) {
        state.messagePersona = 'Persona con nombre:' + data.nombre + ' guardada con éxito'
      }
      router.push({path: '/personas'})
    })
  },
  updatePersona (context, persona) {
    personasApi.updatePersona(persona._id, persona, (response) => {
      if (response.status === 201) {
        state.messagePersona = 'Persona con nombre: ' + persona.nombre + ' actualizada con éxito'
      }
      state.all = []
      router.push({path: '/personas'})
    })
  },
 /*
 getPersonaById (context, idPersona) {
    console.log(idPersona)
    state.object = null
    personasApi.getPersonaById(idPersona, (response) => {
      console.log('Persona by id ' + response)
      state.object = response
    })
  },
  */
  personaFilter (context, filtro) {
    var filtroPersona = {'find': []}
    var datos = filtro.datos
    for (var key in datos) {
      var mapFind = {}
      var value = datos[key]
      if (value) {
        mapFind['field'] = key
        mapFind['value'] = value
        filtroPersona['find'].push(mapFind)
      }
    }
    console.log('test32')
    console.log(filtroPersona)
    context.dispatch('getAllPersonas', filtroPersona)
  },
  deletePersona (context, persona) {
    personasApi.deletePersona(persona._id, (response) => {
      if (response.status === 200) {
        state.messagePersona = 'Persona con nombre ' + persona.nombre + ' borrada con éxito.'
      }
      state.all = []
      context.dispatch('getAllPersonas')
    })
  }
}

// initial mutation
const mutations = {
  [mutationType.SHOW_ALL_PERSONA] (state, personas) {
    state.all = personas
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
