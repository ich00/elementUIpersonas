<template>
  <div id='persona-edit'>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>EDITAR DATOS PERSONA</strong></h3>
        </div>
        <div class="pull-right">
          <router-link :to="'/personas/'" class="btn btn-default">
            Volver a la lista personas
          </router-link>
        </div>
      </div>
    </div>
    <hr class="top">
    <div id="loaderEditPersona" class="loader" v-if='!callWSEnd'></div>
    <div class="row" v-else>
      
     
      <div class="col-md-12" v-if="!personas.nombre">
        <div class="alert alert-success">
          NO EXISTE LA MIERDA QUE BUSCAS! {{idElem}}
        </div>
      </div>
      <div class="col-md-12" v-else>
        <div class="panel panel-default">
          <div class="panel-body">
            <form @submit.prevent="updatePersona(personas)">
              <div class="row">
                <div class="form-group col-md-12">
                  <hr>
                </div>
                <div class="form-group col-md-3">
                  <label for="title">ID</label>
                  <input type="text" v-model="personas.id" class="form-control" disabled>
                </div>
                <div class="form-group col-md-9">
                  <label for="Author">Nombre</label>
                  <input type="text" v-model="personas.nombre" class="form-control">
                </div>
                <div class="form-group col-md-6">
                  <label for="Category">Apellido1</label>
                  <input type="text" v-model="personas.apellido1" class="form-control">
                </div>
                <div class="form-group col-md-6">
                  <label for="Category">Apellido2</label>
                  <input type="text" v-model="personas.apellido2" class="form-control">
                </div>
                <div class="form-group col-md-4">
                  <label for="Category">Teléfono</label>
                  <input type="number" v-model="personas.telefono" class="form-control">
                </div>
                <div class="form-group col-md-4">
                  <label for="Category">DNI</label>
                  <input type="text" v-model="personas.dni" class="form-control">
                </div>
                <div class="form-group col-md-12">
                  <button type="submit" class="btn btn-lg btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'persona-edit',
  data () {
    return {
      personas: {},
      mensaje: [],
      callWSEnd: false,
      idElem: ''
    }
  },
  computed: mapGetters({
    messages: 'messages'
  }),
  methods: {
    getPersonaById: function (id) {
      console.log('call ws')
      this.idElem = id
      this.axios.get('https://pruebas-3751.restdb.io/rest/vuetest/' + id, {
        headers: {
          'cache-control': 'no-cache',
          'x-apikey': '5a5893537d7ef24c5cf08c1c',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }

      })
      .then((response) => {
        this.personas = response.data
        this.callWSEnd = true
        console.log('343434 ' + this.personas)
      })
      .catch((error) => {
        console.log('entra al error')
        console.log(error)
      })

      console.log('end ws')
    },
    ...mapActions([
      'updatePersona'
    ])
  },
  created () {
    this.getPersonaById(this.$route.params.id)
  }
}
</script>

