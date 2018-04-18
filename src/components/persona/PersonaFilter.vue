<template>
	<div id='persona-filter'>
	<div class="top">
		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-body">
						<h3> Filtrar por: </h3>
						<form @submit.prevent = "personaFilter(filtro)">
							
						<div class="col-md-6">
							<label> Nombre </label>
						<input type="text" v-model="filtro.datos.nombre" class="form-control" placeholder="Nombre a buscar">
						</div>
						<div class="col-md-3">
							<label> Apellido1 </label>
						<input type="text" v-model="filtro.datos.apellido1" class="form-control" placeholder="Apellido1 a buscar">
						</div>
						<div class="col-md-3">
							<label> Apellido2 </label>
						<input type="text" v-model="filtro.datos.apellido2" class="form-control" placeholder="Apellido2 a buscar">
						</div>
						<div class="col-md-6">
							<label> Teléfono </label>
						<input type="text" v-model="filtro.datos.telefono" class="form-control" placeholder="Teléfono a buscar">
						</div>
						<div class="col-md-6">
							<label> DNI </label>
						<input type="text" v-model="filtro.datos.dni" class="form-control" placeholder="DNI a buscar">
						</div>
						<div class="row">
							<div class="col-md-6">
                 				 <button type="submit" class="btn btn-lg btn-success">
                    			Filtrar
                  	 			</button>
                    		</div>
                    		<div class="col-md-6">
                 	 			<button v-on:click='resetForm' class="btn btn-lg btn-danger"> Resetear</button>
                 	 			<button type="reset" class="btn btn-lg btn-info">Reset</button>
                    		</div>
                		</div>
          		</form>
              </div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'persona-filter',
  data () {
    return {
      filtro: {
        datos: { nombre: '',
          apellido1: '',
          apellido2: '',
          telefono: '',
          dni: ''
        }
      }
    }
  },
  methods: {
    ...mapActions(['personaFilter']),
    resetForm: function (e) {
      e.preventDefault()
      let json = this.$data.filtro.datos
      for (let dato in json) {
        json[dato] = ''
      }
    }
  }
}
</script>