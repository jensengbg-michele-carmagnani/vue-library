<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <router-view :books="books" />
  </div>
</template>
<script>
import books from "@/assets/childrenbooks.json";
export default {
  name: "App",

  computed: {
    books() {
      return books.books;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
body {
  background: #eee;
  font-family: "Open Sans", sans-serif;

  #app {
    color: #2c3e50;
    display: flex;
    justify-content: center;
    align-content: center;

    #nav {
      padding: 30px;

      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
}
</style>
