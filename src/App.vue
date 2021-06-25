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
        data-bs-target="#navbarDropDown"
        aria-controls="navbarDropDown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon class="me-3" :icon="['fas', 'bars']" />
      </button>

      <div class="collapse navbar-collapse" id="navbarDropDown">
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
  z-index: 1;
  .nav-item {
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
  font-family: "Dosis", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  max-width: 100%;
}
</style>
