<template>
  <section class="wrap">
    <h1>Books</h1>
    <div class="books">
      <book id="books" v-for="book in books" :key="book.id" :book="book" />
    </div>
  </section>
</template>

<script>
import book from "@/components/Book.vue";

export default {
  name: "Books",
  components: {
    book,
  },
 
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>
<style lang="scss">
h1 {
  text-align: center;
}
.books {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  #books {
    margin: 2px;
    border: 2px solid black;
    transition: all 0.5s ease;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    filter: brightness(0.6);
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.05);
      filter: brightness(1);
    }
  }
}
</style>
