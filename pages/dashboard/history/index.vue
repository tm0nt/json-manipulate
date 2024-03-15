<template>
  <v-app>
    <NavBar />
    <v-container>
      <v-row>
        <v-col offset="2">
          <h1>Dashboard</h1>
          <v-chip class="text-subtitle-1 mt-4" variant="outlined"
            >Veja seu histórico de edição</v-chip
          >
          <v-toolbar
            color="rgb(0,0,0,0)"
            class="mx-auto mb-4"
            height="10"
          ></v-toolbar>
          <v-btn
            prepend-icon="mdi-delete"
            @click="dialogDeleteAll = true"
            color="error"
            >APAGAR HISTÓRICO</v-btn
          >
          <v-dialog v-model="dialogDeleteAll" width="400" persistent>
            <v-card
              title="Deseja apagar todo histórico?"
              prepend-icon="mdi-delete"
              rounded="xl"
              subtitle="Não terá como reverter"
              flat
            >
              <v-card-actions>
                <v-btn @click="dialogDeleteAll = false">NÃO</v-btn>
                <v-btn>SIM</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Nome</th>
                <th class="text-left">Última edição</th>
                <th class="text-left">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in 3" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
                <td><v-btn color="primary">SALVAR</v-btn></td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
const dialogDeleteAll = ref(false);
</script>
<script>
import NavBar from "../../components/navbar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
