<template>
  <div id="app">
    <PosterBg :poster="PosterBg" />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviePagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";
import PosterBg from "@/components/PosterBg";
import MoviePagination from "@/components/Pagination";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    MoviePagination,
  },
  data: () => ({
    PosterBg: "",
  }),
  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "currentPage",
      "moviesPerPage",
      "moviesLength",
    ]),
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true,
    },
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onChangePoster(poster) {
      this.PosterBg = poster;
    },
    onPageQueryChange({ page = 1 }) {
      this.changeCurrentPage(Number(page));
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
    },
  },
};
</script>
<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
