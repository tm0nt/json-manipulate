<template>
  <v-navigation-drawer v-model="drawer" permanent expand-on-hover rail>
    <v-list-item title="Cesar" nav>
      <template v-slot:prepend>
        <v-avatar cover classs="text-center">C</v-avatar>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home"
        to="/dashboard/"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-history"
        to="/dashboard/history"
        title="Histórico"
        value="account"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-logout"
        title="Logout"
        value="products"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
<script setup>
const logout = () => {
  return navigateTo("/");
};
</script>
