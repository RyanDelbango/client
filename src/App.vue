<template>
  <v-app>
    <v-toolbar color = "blue lighten-5">
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">FSHD Wheelchair Use Probability Model</span>
      </v-toolbar-title>
    </v-toolbar>
<v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
