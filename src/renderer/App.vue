<template>
  <div id="app">
    <v-app>
      <!-- system-bar -->
      <v-system-bar class="mw-system-bar" status color="primary" lights-out dark>
        <v-spacer></v-spacer>
        <v-icon>remove</v-icon>
        <v-icon>check_box_outline_blank</v-icon>
        <v-icon>close</v-icon>
      </v-system-bar>
      <!-- toolbar -->
      <v-toolbar style="padding-top: 24px" dark color="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>refresh</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- router-view -->
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Mockwong'
}
</script>

<style lang="less">
html {
  overflow-y: auto;
}

.mw-system-bar {
  -webkit-app-region: drag;
  cursor: pointer;
  .icon {
    -webkit-app-region: no-drag;
    -webkit-user-select: none;
    &:hover {
      color: #fff !important;
    }
  }
}
</style>
