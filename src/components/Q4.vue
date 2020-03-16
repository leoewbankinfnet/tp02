<template>
  <div class="Q4">
    <section id="Q4">
    <h1>TP 02 - Questão 4</h1> 
    <b-button  class='btn btn-primary btn-lg m-2  '  size="lg" @click="mostrarhome"> Voltar </b-button>
    <p> Crie um componente que possua um quadrado com uma cor enviada por uma propriedade. Após isso, crie um input
         que será utilizado para definir a cor que será enviada como parâmetro ao componente. 
         Ao alterar o valor de hexadecimal no input, o quadrado deve mudar para a cor correspondente. </p>
    </section>
  
    <form>

      <div class="form-group">
        <label for="cor">Cor em Hexadecimal </label>
        <input
          type='text'
          class="form-control"
          id='cor'
          placeholder="Digite a cor em hexadecimal"
          v-model="color"
          required
        />
      
      </div>

    </form>




    <section id='quadrado' v-bind:style="{'background-color':color}">
     
    </section>

  </div>
</template>

<script>
export default {
  name: 'Q4',
  data: function(){
    return{
      color:'#ff0000',

    }
  },
  props: {
  },
  computed:{
  },
  components:{},
  methods:{
    mostrarhome(){
      this.$router.push({name:'home'})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Q4{
   display:block;
  text-align:center;
  margin:0 auto;
  margin-top:50px;
  width:1000px;
  font-size: 20px;
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

#quadrado{
  display:block;
  height:500px;
  width:500px;
  border:5px solid red;
  margin: 0 auto;
  margin-top: 20 px;

  
}
</style>
