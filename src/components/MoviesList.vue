<template>
  <BContainer>
    <h3 class="list-title">{{ listTitle }}</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="onMouseOver(movie.Poster)"
            @removeItem="onRemoveItem"
            @showModal="onShowMovieInfo"
          />
        </BCol>
      </template>
      <template v-else>
        <div>Empty List</div>
      </template>
    </BRow>
    <BModal
      body-class="movie-modal_body"
      :id="movieModalIDs"
      size="xl"
      hide-footer
      hide-header
    >
      <MovieModalContent :movie="selectedMovie" />
    </BModal>
  </BContainer>
</template>

<script>
import MovieItem from "./MovieItem";
import MovieModalContent from "./MovieModalContent";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    MovieItem,
    MovieModalContent,
  },
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    movieModalIDs: "movie-info",
    selectedMovieId: "",
  }),

  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    ...mapGetters("movies", ["isSearch"]),
    listTitle() {
      return this.isSearch ? `Search result` : "IMDB Top 250";
    },
    selectedMovie() {
      return this.selectedMovieId ? this.list[this.selectedMovieId] : null;
    },
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await this.$bvModal.msgBoxConfirm(
        `Are you sure delete ${title}?`
      );
      if (isConfirmed) {
        this.removeMovie(id);
      }
    },
    onShowMovieInfo(id) {
      this.selectedMovieId = id;
      this.$bvModal.show(this.movieModalIDs);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
</style>

<style>
.movie-modal_body {
  padding: 0 !important;
}
</style>
