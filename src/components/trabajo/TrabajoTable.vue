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
          {{ messageTrabajo }}
        </div>
      </div>
    </div>
    <div class="top" >
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID Trabajo</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="trabajo in trabajos">
          <td><div class="text-center">{{ trabajo.id }}</div></td>
          <td>{{ trabajo.nombre }}</td>
          <td>{{ trabajo.descripcion }}</td>
         
          <td>
            <!--<router-link v-bind:to="'/trabajos/edit/' + trabajo._id" class="btn btn-sm btn-warning">
              Editar Trabajo
            </router-link>-->
            <button @click="deleteTrabajo(trabajo)" class="btn btn-sm btn-danger">
              Borrar Trabajo
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

  export default {
    name: 'persona-table',
    computed: mapGetters({
      personas: 'allPersonas',
      messagePersona: 'messagePersona',
      finish: 'finish'
    }),
    methods: mapActions([
      'deletePersona'
    ]),
    created () {
      this.$store.dispatch('getAllPersonas',
        { sort:
          {field: 'id', method: -1}
        })
    }
  }

</script>