<template>
  <div id='persona-index'>
    <h2>Listas</h2>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>CRUD DE PERSONAS</strong></h3>
        </div>
        <div class="pull-right">
         <router-link :to="'/personas/new'" class="btn btn-lg btn-default">
            New Data
          </router-link>
          <router-link :to="'/'" class="btn btn-lg btn-primary">
            Back to Homepage
          </router-link>
        </div>
      </div>
    </div>
    <br><br><br>
    <div class='row'>
      <div class="input-container">
        <!--<div class="form-group">
          <label for='searchTerm'>Search:</label>
          <input v-model='buscarNombre' type="text" class='form-control' placeholder="Search term">
        </div>-->
        <PersonaFilter></PersonaFilter>
      </div>
    </div>
    <div v-if="">
      
    </div>
    <div >
      <PersonaTable></PersonaTable>
    </div>
  </div>
</template>

<script>
import PersonaFilter from './PersonaFilter.vue'
import PersonaTable from './PersonaTable.vue'

export default {
  components: {
    PersonaFilter,
    PersonaTable
  }
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
