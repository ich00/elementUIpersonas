<template>
  <div id='persona-new'>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>CREANDO NUEVA PERSONA {{persona.nombre}}</strong></h3>
        </div>
        <div class="pull-right">
          <router-link :to="'/personas/'" class="btn btn-default">
            Volver a Lista de Personas
          </router-link>
        </div>
      </div>
    </div>
    <hr class="top">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <form @submit.prevent="savePersona(persona)">
              <div class="row">
                <div class="form-group col-md-12">
                  <hr>
                </div>
                <div class="form-group col-md-6">
                  <label for="title">Nombre</label>
                  <input type="text" v-model="persona.nombre" class="form-control">
                </div>
                <div class="form-group col-md-3">
                  <label for="Author">Primer Apellido</label>
                  <input type="text" v-model="persona.apellido1" class="form-control">
                </div>
                <div class="form-group col-md-3">
                  <label for="Category">Segundo Apellido</label>
                  <input type="text" v-model="persona.apellido2" class="form-control">
                </div>
                <div class="form-group col-md-6">
                  <label for="Category">Teléfono</label>
                  <input type="text" v-model="persona.telefono" class="form-control">
                </div>
                <div class="form-group col-md-6">
                  <label for="Category">DNI</label>
                  <input type="text" v-model="persona.dni" class="form-control">
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
  name: 'persona-new',
  data () {
    return {
      persona: {
        nombre: '',
        apellido1: '',
        apellido2: '',
        telefono: '',
        dni: ''
      }
    }
  },
  computed: mapGetters({
    messages: 'messages'
  }),
  methods: mapActions([
    'savePersona'
  ])
}
</script>

<style lang="scss" scoped>
  hr {
    margin-top: 0px;
    margin-bottom: 0px;

    &.top{
      margin-bottom: 20px;
    }
  }
</style>
