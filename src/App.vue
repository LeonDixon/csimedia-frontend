<template>
  <nav class="navbar navbar-expand-xs">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img class="logo" src="@/assets/logo.jpg" alt=""
      /></a>
      <div class="nav-item ms-auto me-4">
        <font-awesome-icon :icon="['fas', 'phone']" />
      </div>
      <div class="nav-item me-3">
        <font-awesome-icon :icon="['fas', 'search']" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon class="me-3" :icon="['fas', 'bars']" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><p>Home</p></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "@/components/Home.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
  },
});
</script>

<style lang="scss">
$black: #000;
$dark-pink: #d90f5a;
$caribbean-green: #0de5a8;
$medium-turquoise: #30c4c9;
$burnt-orange: #ff6e27;
$strong-blue: #005bc5;
$vivid-orange: #ffb60b;
$dark-magenta: #4f2958;
$dark-blue: #212d44;
$strong-green: #88c100;

.navbar-brand {
  display: flex;
  justify-content: center;
  margin-left: 15px;
  .logo {
    margin: auto 0;
    height: 80%;
  }
}

nav {
  .nav-item {
    /*margin-right: 20px;*/
    /*&:first-of-type {*/
    /*margin-left: auto;*/
    /*}*/
    font-size: 1.2em;
  }
  .nav-link {
    color: white;
    font-size: 1.2em;
    margin-bottom: 100px;
  }
  div {
    background: $dark-blue;
  }
  button {
    color: white;
    padding: 0;
  }

  .navbar-toggler {
    font-size: 1.2em;
  }
  padding: 0 !important;
  height: 85px;
  background: $dark-blue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  max-width: 100%;
}
</style>
