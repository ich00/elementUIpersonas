<template>
  <div id="loaderEditPersona" class="loader" v-if="!finish">
  </div>    
  <div id='persona-table' v-else>
  <div v-if="personas.length === 0">
    <div class="col-md-4 text-center">
      <img src="../../assets/ups.png" height="120" width="120">
    </div>
    <div class="col-md-4">
      <h2> NO HAY COINCIDENCIAS </h2>
    </div>
  </div>

  <div v-else>
    <div class="row" v-if='messagePersona'>
      <div class="col-md-12">
        <div class="alert alert-info">
          {{ messagePersona }}
        </div>
      </div>
    </div>
    <div class="top" >
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido1</th>
          <th>Apellido2</th>
          <th>Teléfono</th>
          <th>DNI</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="persona in personas">
          <td><div class="text-center">{{ persona.id }}</div></td>
          <td>{{ persona.nombre }}</td>
          <td>{{ persona.apellido1 }}</td>
          <td>{{ persona.apellido2 }}</td>
          <td>{{ persona.telefono }}</td>
          <td>{{ persona.dni }}</td>
         
          <td>
            <router-link v-bind:to="'/personas/edit/' + persona._id" class="btn btn-sm btn-warning">
              Editar Persona
            </router-link>
            <button @click="deletePersona(persona)" class="btn btn-sm btn-danger" onclick="return confirm('De verdad quieres borrar a esta persona?');">
              Borrar Persona
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
   
  </div>



</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import PersonaNoFind from './PersonaNoFind.vue'

  export default {
    name: 'persona-table',
    computed: mapGetters({
      personas: 'allPersonas',
      messagePersona: 'messagePersona',
      finish: 'finish'
    }),
    methods: {
      makeAdmin: function (persona) {
        console.log('ee')
        console.log(persona)
        // console.log(dialog.elem.item)
        // this.$store.dispatch('deletePersona', persona)
      },
      doNothing: function () {
        console.log('nddd')
      },
      ...mapActions([
        'deletePersona'
      ])
    },
    created () {
      this.$store.dispatch('getAllPersonas',
        { sort:
          {field: 'id', method: -1}
        })
    },
    components: {
      PersonaNoFind
    }
  }

</script>