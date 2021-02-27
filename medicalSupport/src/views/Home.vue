<template>
  <div id="login">
    <v-card height="220" flat color="transparent">

        <v-app-bar
          absolute
          color="#34b2b7"
          dark
          shrink-on-scroll
          prominent
        >
          <v-toolbar-title class="font-weight-light">Análise de Suporte à Decisão Clínica</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn text class="font-weight-light"> <v-icon small class="mr-1">info</v-icon> Sobre </v-btn>
        </v-app-bar>
    </v-card>

    <v-row align="center" justify="center">
      <v-card
            
            color="rgb(255, 255, 255, 0.85)"
            flat
            width="400"
            height="400"
          >
            <v-img src="@/assets/logo.png" max-width="300" class="ml-10"></v-img>
            <v-card-text class="justify-center">
              <v-form ref="login" lazy-validation>
                <v-text-field
                  background-color="transparent"
                  solo
                  flat
                  dense
                  single-line
                  color="black"
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  prepend-icon="person"
                />
                <v-row align="center" justify="center">
                  <v-card flat width="300">
                    <v-divider></v-divider>
                  </v-card>
                </v-row>
                <v-text-field
                  background-color="transparent"
                  solo
                  flat
                  single-line
                  color="black"
                  prepend-icon="lock"
                  name="password"
                  placeholder="Palavra-Passe"
                  type="password"
                />
              </v-form>
              <v-btn
                tile
                depressed
                x-large
                dark
                block
                color="#34b2b7"
                type="submit"
                @click="loginF()"
              >
                Iniciar Sessão
              </v-btn>
              <v-row>
                <v-btn
                  depressed
                  tile
                  class="ml-2 mt-2 grey--text"
                  x-small
                  color="transparent"
                  @click="toggle"
                  >Registar</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn
                  depressed
                  tile
                  class="mr-3 mt-2 grey--text"
                  x-small
                  color="transparent"
                  @click="toggleTwo"
                  >Esqueceu a palavra-passe?</v-btn
                >
              </v-row>
            </v-card-text>
      </v-card>

    </v-row>

  </div>
</template>


<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    loginF: function() {
      this.$router.push("/menu");
    }

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
  /*background-color: #f5f5f5; */
  background-image: url("../assets/medical.png");
  background-size: cover;
}
</style>
