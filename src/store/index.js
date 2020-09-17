import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import books from "@/assets/childrenbooks.json";

export default new Vuex.Store({
  state: {
    books: books.books,
  },
  mutations: {},
  actions: {},
  getters: {
    books(state) {
      return (bookId) => {
        console.log("bookId", bookId);
        return state.books.filter(book => book.id === parseInt(bookId))[0];
      };
    },
  },
});
