<template>
  <v-app>
    <NavBar />
    <v-container>
      <v-row>
        <v-col offset="2">
          <h1>Dashboard</h1>
          <v-chip class="text-subtitle-1 mt-4" variant="outlined">Edite arquivos</v-chip>
          <v-divider class="my-10 mx-auto mb-4"></v-divider>
          <v-row>
            <v-col cols="12" md="6">
              <UploadJson/>
            </v-col>
            <v-col cols="12" md="6">
            <UploadJson/>
          </v-col>
          </v-row>
       
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import UploadJson from "./UploadJson.vue";
import NavBar from "../../components/navbar.vue";

export default {
  components: {
    NavBar,
    UploadJson
  },
};
</script>
