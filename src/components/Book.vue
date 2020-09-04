
<template>
  <section :style="{background: book.color}" class="book" @click="goTo(book.id)">
    <h1>{{book.title}}</h1>
    <h4>{{book.author}}</h4>
    
  </section>
</template>

<script>
export default {
  name: "Book",
  props: {
    book: Object,
  },
  methods: {
    goTo(id) {
      this.$router.push(`/BookInfo/${id}`);
    },
  },
};
</script>

<style lang="scss">
 .book{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 300px;
   height: 400px;
   
   h1{
     text-align: center;
     font-size: 1.5rem;
   }
 }
</style>