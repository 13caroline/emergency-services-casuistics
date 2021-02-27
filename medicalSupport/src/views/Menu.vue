<template>
  <div id="login">
      <v-card
        color="#34b2b7"
        flat
        height="100px"
        tile
    >
    <v-toolbar
      extended
      extension-height="100"
      color="#34b2b7"
      dark
    >
      <v-toolbar-title class="font-weight-light"
          >Serviço de Urgência</v-toolbar-title
        >

      <v-spacer></v-spacer>

      <v-btn text @click="terminar()" class="text-capitalize">
          <v-icon class="mr-2">logout</v-icon> Terminar Sessão
        </v-btn>
    </v-toolbar>
  </v-card>
    
    <v-card class = "mx-auto" width = "1300" height = "450">
        <v-row align="center" justify="center">
           <v-card height="300" width = "300" outlined class = "mt-16 mx-10">
                <v-btn class="ml-16 mt-14 text-decoration-underline text-capitalize" color = "#34b2b7" to='/casuisticas' text> <h2>Casuística </h2></v-btn>
                  <v-img
                    max-height="150"
                    max-width="150"
                  class = "mt-5 ml-16"
                  src="@/assets/casuistica.png"
                > 
                  </v-img>
           </v-card>
           <v-card height="300" width = "300" outlined class = "mt-16 mx-10">
             <v-card-title>
                <v-btn class="ml-3 mt-10 text-decoration-underline text-capitalize" color = "#34b2b7" to='/qualidadedados' text> <h2>Qualidade de Dados </h2></v-btn>
                <v-img
                    max-height="150"
                    max-width="150"
                  class = "mt-5 ml-13"
                  src="@/assets/qualidade.png"
                > 
                </v-img>
             </v-card-title>
              
           </v-card>
        </v-row>
    </v-card>
    <v-card flat height = "100" color = "transparent"></v-card>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: "login",
  data() {
    return {
        buttons:[
            {title:'Casuística', to: "/casuisticas"},
            {title:'Qualidade de Dados', to: "/qualidadedados"},

        ]
    };
  },
  components: {
    Footer
  },
  methods: {
    terminar: function () {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#login {
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f5f5f5;
  background-size: cover;
}


</style>