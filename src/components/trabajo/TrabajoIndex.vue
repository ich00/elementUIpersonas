<template>
  <div id='trabajo-index'>
    <h2>Listas</h2>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>Lista de Trabajos</strong></h3>
        </div>
        <div class="pull-right">
         <router-link :to="'/trabajos/new'" class="btn btn-lg btn-default">
            Nuevo Trabajo
          </router-link>
          <router-link :to="'/'" class="btn btn-lg btn-primary">
            Volver a Home
          </router-link>
        </div>
      </div>
    </div>
    <br><br><br>
    
    <div >
      <TrabajoTable></TrabajoTable>
    </div>
  </div>
</template>

<script>

import TrabajoTable from './TrabajoTable.vue'

export default {
  components: {
    TrabajoTable
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
