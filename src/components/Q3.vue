<template>
  <div class="Q3">
    <section id="Q3">
        <h1>TP 02 - Questão 3</h1> 
        <b-button  class='btn btn-primary btn-lg m-2  '  size="lg" @click="mostrarhome"> Voltar </b-button>
        <p>Crie um componente que receba, no corpo, um texto e as propriedades de uma cor (em hexadecimal) e um tamanho em pixels (em números), 
            e exiba o texto de acordo com os parâmetros passados. Todas as propriedades devem ser obrigatórias e você deve utilizar Slots.
    
        </p> 
    </section>

    <div class="col-12">
       <form>
         <div class="form-group">
           <label for="texto.conteudo">Texto</label>
           <input
             type="text"
             class="form-control"
             id="texto.conteudo"
             placeholder="Digita o texto"
             v-model="texto.conteudo"
            
             required
           >
         </div> 
         <div class="form-group">
           <label for="cor">Cor</label>
           <input
             type="text"
             class="form-control"
             id="cor"
             placeholder="Digite a cor"
             v-model="texto.cor"
             
             required
           >
         </div>
           <div class="form-group">
           <label for="pixel">Pixels</label>
           <input
             type="number"
             class="form-control"
             id="pixel"
             placeholder="Digite o tamanho em pixels"
             v-model="texto.pixel"
             required
           >
         </div>
       </form>
    </div>
    <pre v-bind:style="{color:texto.cor,width:pixel}">
         Texto Formatado: {{ texto.conteudo}}
    </pre>
        
  </div>
</template>

<script>
export default {
  name: 'Q3',
  data:function(){
    return{
      texto:{
        conteudo:'',
        cor:'#ff0000',
        pixel:''+'px'

      }
    }
  },
  props: {
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
.Q3{
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
</style>
