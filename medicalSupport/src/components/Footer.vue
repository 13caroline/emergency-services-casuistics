<template>
  <div>
    <v-card flat color = "transparent" height = "200"></v-card>
  <v-footer
      dark
      padless
      absolute
    >
      <v-card
        class="flex px-16"
        flat
        color=""
      > 
        <v-card-text class="pt-4 pb-0 white--text text-center">
          <v-row align="center">
            <v-col cols="3">
              <v-img 
                src="@/assets/logo.png"
                max-height="300"
                max-width="300"
            />
            </v-col>

            <v-col cols = "9">
              <v-row align="center">
                <v-col
                  cols="3"
                >
                  <div class="text-left ml-16">
                    <div>
                      <p class="text-sm-left ml-16 overline font-weight-thin mt-8" >Relatórios</p>
                    </div>
                    <div>
                      <v-btn
                        text
                        rounded
                        small
                        class="font-weight-light caption white--text text-capitalize ml-13"
                        to="/casuisticas"
                        id="no-background-hover"
                      >
                      Casuística
                      </v-btn>
                    </div>
                    <div >
                      <v-btn
                        text
                        rounded
                        small
                        class="font-weight-light caption white--text text-capitalize ml-13"
                        to="/qualidadedados"
                        id="no-background-hover"
                      >
                      Qualidade de Dados
                      </v-btn>
                    </div>
                  </div>
                </v-col>

                <v-col
                  cols="3"
                >
                  <div class="text-left ml-4">
                    <div>
                      <p class="text-sm-left ml-16 overline font-weight-thin mt-8">Informações</p>
                    </div>
                     <div class="mt-2">
                      <v-btn
                        text
                        small
                        rounded
                        disabled
                        class="font-weight-light caption white--text text-capitalize ml-13"
                        id="no-background-hover"
                      >
                      Sobre
                      </v-btn>
                    </div>
                    <div>
                      <v-btn
                        text
                        small
                        rounded
                        class="font-weight-light caption white--text text-capitalize ml-13"
                        disabled
                        id="no-background-hover"
                      >
                      Entre em Contacto
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-divider></v-divider>
         
            <v-spacer></v-spacer>
            <p class = "caption font-weight-light text-right mt-5">Copyright &copy; 2021 Todos os direitos reservados.</p>
     
        </v-card-text>
      </v-card>
    </v-footer>
    </div>
</template>


<script>
  export default {
    data: () => ({
    }),
  }
</script>


<style>
  #no-background-hover::before {
    background-color: transparent !important; 
  }

  #text {
    text-align:justify;  
    text-justify:inter-character;
  }

</style>