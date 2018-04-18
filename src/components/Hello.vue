<template>
  <el-container class="wrapper">


<!--

EL PROBLEMA ERA EL #APP. AL NO TENER ESTILO NO LO MAQUETA EL 100 % POR LO QUE NINGUN
ELEMENTO APARECE AL 100%. LE HE AÑADIDO DESDE EL APP.VUE QUE ESTÉ AL 100% Y LE HE TENIDO QUE QUITAR
AL #MENU QUE SE USA EN EL-ASIDE COMO CLASE, QUE NO USE EL 100% DE FORMA QUE ASÍ PILLA
EL PORCENTAJE DE EL-MENU


-->


   <el-header height="80px" :style="{ 'background-color': 'rgb(76, 116, 157)' }">
    <ul class="header-operations">
        <li @click="showThemeDialog">ES</li>
        <li
          class="header-download"
          :class="{ 'is-available': canDownload }"
          @click="downloadZip">
          es
        </li>
      </ul>
    </el-header>


    <el-container>
      <el-aside class="menu">
        <el-menu default-active="1">
          <el-menu-item index="1"><router-link :to="'posts'">Ejemplo Posts</router-link></el-menu-item>
          <el-menu-item index="2"><router-link :to="'personas'">Lista Personas </router-link></el-menu-item>
          <el-menu-item index="3"><router-link :to="'trabajos'">Lista de Trabajos</router-link></el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="content">
        <el-form inline :model="query" label-position="right" label-width="60px" class="query-form">
          <el-form-item :label="langConfig.query.name" prop="name">
            <el-input v-model="query.name" :placeholder="langConfig.query.holder"></el-input>
          </el-form-item>
          <el-form-item :label="langConfig.query.name" prop="date">
            <el-date-picker
              v-model="query.date"
              type="daterange"
              :placeholder="langConfig.query.holder">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">search</el-button>
          </el-form-item>
        </el-form>
        <el-table  class="table" :data="tableData['/en-US']"stripe border>
            <el-table-column prop="date" label="Date" sortable width="200"></el-table-column>
            <el-table-column prop="name" label="Name"  width="200"></el-table-column>
            <el-table-column prop="address"label="Address"></el-table-column>
            <el-table-column prop="zip" label="Zip Code" width="200"></el-table-column>
            <el-table-column :label="Operaciones" width="190">
             <template slot-scope="scope">
               <el-button size="mini">Editar</el-button>
               <el-button size="mini" type="danger">Elimimar</el-button>
             </template>
         </el-table-column>
          </el-table>

            <el-table
              :data="tableData2"
              style="width: 100%">
              <el-table-column
                label="Fecha"
                width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="Nombre"
                width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>Name: {{ scope.row.name }}</p>
                    <p>Addr: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                label="Operaciones">
                <template slot-scope="scope">
                  <el-button
                    size="mini">Editar</el-button>
                  <el-button
                    size="mini"
                    type="danger">Eliminar</el-button>
                </template>
              </el-table-column>
            </el-table>

            <div class="block">
               <span class="demonstration">Default</span>
               <el-date-picker
                 v-model="value1"
                 type="date"
                 placeholder="Pick a day">
               </el-date-picker>
             </div>



      </el-main>

   </el-container>


  </el-container>
  <!--<div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Learning basic Vue.js with Vuex State Management</h2>
    <br>
    <router-link :to="'blogs'" class="btn btn-success btn-lg">
      Blog Sample
    </router-link>

    <router-link :to="'posts'" class="btn btn-success btn-lg">
      Post Sample
    </router-link>

    <router-link :to="'personas'" class="btn btn-success btn-lg">
      Lista de Personas
    </router-link>
    <router-link :to="'trabajos'" class="btn btn-success btn-lg">
      Lista de Trabajos
    </router-link>
  </div>-->
</template>

<script>
import tableData from '../table-data'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'CRUD App with Vuex',
      tableData,
      value1: '',
      langConfig: {
        query: {
          name: 'Nombre',
          holder: 'hold'
        }
      },
      tableData2: [{
        date: '2016-05-03',
        name: 'Tom1',
        address: 'No. 189, Grove St, Los Angeles1'
      }, {
        date: '2016-05-02',
        name: 'Tom2',
        address: 'No. 189, Grove St, Los Angeles2'
      }, {
        date: '2016-05-04',
        name: 'Tom3',
        address: 'No. 189, Grove St, Los Angeles3'
      }, {
        date: '2016-05-01',
        name: 'Tom4',
        address: 'No. 189, Grove St, Los Angeles4'
      }],
      query: {
        name: '',
        date: []
      }
    }
  }
}
</script>
