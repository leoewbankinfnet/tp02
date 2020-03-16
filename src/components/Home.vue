<template>
  <div class="home">

     <h1>TP 02</h1> 
    <b-button  class='btn btn-primary btn-lg m-2' size="lg" @click="mostrarQ3"> Questão 3 </b-button>
    <b-button  class='btn btn-primary btn-lg m-2  '  size="lg" @click="mostrarQ4"> Questão 4 </b-button>
   
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  },
  components:{},
  methods:{
    mostrarQ3(){
      this.$router.push({name:'q3'})
    },
     mostrarQ4(){
      this.$router.push({name:'q4'})
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  display:block;
  text-align:center;
  margin-top:50px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
