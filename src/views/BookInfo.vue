<template>
  <section class="infoBook">
    <main class="wraper">
      <article :style="{ background: book.color }" class="top">
        <h2>Title</h2>
        <h3>{{ book.title }}</h3>
        <h2>Author</h2>
        <h3>{{ book.author }}</h3>
      </article>
      <aside class="generlInfo">
        <h3>Plote</h3>
        <p>{{ book.plot }}</p>

        <section class="specificInfo">
          <article>
            <h6>Pages</h6>
            <p>
              <b>{{ book.pages }}</b>
            </p>
          </article>
          <article>
            <h6>Audience</h6>
            <p>
              <b>{{ book.audience }}</b>
            </p>
          </article>
        </section>
        <p>Back</p>
        <router-link to="/">&#8617;</router-link>
      </aside>
    </main>
  </section>
</template>

<script>
export default {
  name: "BookInfo",

  computed: {
    book() {
      return this.$store.getters.books(this.$route.params.id);
      //return this.books.filter((book) => book.id == this.$route.params.id)[0];
    },
  },
};
</script>

<style lang="scss">
.infoBook {
  display: flex;
  justify-content: center;
  align-items: center;

  .wraper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;

    .top {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 300px;
      border: 2px solid black;
    }
    .generlInfo {
      width: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: rgb(223, 222, 222);
      text-align: center;
      border-radius: 1.4rem;
      .specificInfo {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: rgb(182, 69, 69);
      }
    }
    article > h2 {
      font-size: 3rem;
    }
    aside > h3 {
      text-align: center;
    }
  }
}
</style>
