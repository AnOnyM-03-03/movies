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
          />
        </BCol>
      </template>
      <template v-else>
        <div>Empty List</div>
      </template>
    </BRow>
  </BContainer>
</template>

<script>
import MovieItem from "./MovieItem";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    MovieItem,
  },
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    ...mapGetters("movies", ["isSearch"]),
    listTitle() {
      return this.isSearch ? `Search result` : "IMDB Top 250";
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
