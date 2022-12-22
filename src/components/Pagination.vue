<template>
  <div class="movies-pagination d-flex justify-content-center">
    <BPagination
      v-model="currentPageModel"
      :per-page="moviesPerPage"
      :total-rows="total"
      prev-text="prev"
      next-text="next"
    />
  </div>
</template>

<script>
export default {
  name: "MoviePagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit("pageChanged", value);
      },
    },
  },
};
</script>

<style scoped>
.movies-pagination {
  margin-top: 30px;
}
.movies-pagination >>> .pagination .page-item .page-link {
  background-color: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}
.movies-pagination >>> .pagination .page-item.active .page-link {
  background-color: #fff;
  border-color: #fff;
  color: #000;
}
.movies-pagination >>> .pagination .page-item.disabled .page-link {
  color: lightgray;
}
</style>
