<template>
  <div class="container-fluid">
    <h1>Listado de Apis</h1>
    <b-row class="my-1 justify-content-center">
      <b-col sm="3">
        <b-form-input type="search" placeholder="Buscar" v-model="serachedText"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serachedText: "",
    };
  },
};
</script>

<style scoped>

</style>
