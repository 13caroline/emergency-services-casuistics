<template>
  <div id="login">
    <v-card color="#34b2b7" flat height="100px" tile>
      <v-toolbar extended extension-height="100" color="#34b2b7" dark>
        <v-toolbar-title class="font-weight-light"
          >Serviço de Urgência</v-toolbar-title
        >

        <v-spacer></v-spacer>
        
        <v-btn icon to="/menu">
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn text @click="terminar()" class="text-capitalize">
          <v-icon class="mr-2">logout</v-icon> Terminar Sessão
        </v-btn>
      </v-toolbar>
    </v-card>

    <v-card class="mx-auto" width="1300">
      <v-row>
        <v-col >
          <v-row no-gutters>
            <v-card class="mt-4 ml-4" height="250" width="460" outlined>
              <v-img
                class = "ml-2"
                src="@/assets/Destinos de Alta.png"
                aspect-ratio="1.8"
                contain
              ></v-img>
            </v-card>
            <v-card class="mt-4 ml-4" height="250" width="460" outlined>
              <v-img
              class = "mt-1"
                src="@/assets/Destino dos Doentes Admitidos no SU.png"
                aspect-ratio="1.9"
                contain
              ></v-img>
            </v-card>
          </v-row>
          <v-row no-gutters>
            <v-card class="mt-4 ml-4" height="250" width="350" outlined>
              <v-img
                class = "mt-3 ml-2"
                src="@/assets/Destino dos Doentes por Idade.png"
                aspect-ratio="1.5"
                contain
              ></v-img>
            </v-card>
            <v-card class="mt-4 ml-4" height="250" width="520" outlined>
              <v-img
                class = "mt-n6"
                src="@/assets/Destino dos Doentes por Prioridade.png"
                aspect-ratio="1.6"
                contain
              ></v-img>
            </v-card>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-card class="mt-4 mr-6 ml-0" outlined>
            <v-card-title>Informações Relacionadas</v-card-title>
            <v-row v-for="(btn, index) in buttons" :key="index">
              <v-btn
                class="ml-2 text-decoration-underline text-capitalize"
                color="#34b2b7"
                :to="btn.to"
                text
                >{{ btn.title }}</v-btn
              >
            </v-row>
          </v-card>
        </v-col>
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
      buttons: [
        { title: "Casuística", to: "/casuisticas" },
        { title: "Causas", to: "/casuistica/causas" },
        { title: "Admissões", to: "/casuistica/admissoes" },
      ],
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