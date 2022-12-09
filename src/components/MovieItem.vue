<template>
  <div class="movie-item mb-3">
    <div class="movie-item__poster" :style="posterBackground"></div>
    <div class="movie-info__wrap d-flex flex-column justify-content-between">
      <div class="movie-item__info">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <div class="movie-item__controls row no-gutters">
        <div class="col">
          <BButton class="btn" size="md" variant="outline-light">
            Edit
          </BButton>
        </div>
        <div class="col">
          <BButton class="btn" size="md" variant="outline-light">
            Remove
          </BButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    posterBackground() {
      return {
        "background-image": `url(${this.movie.Poster})`,
      };
    },
  },
};
</script>

<style scoped lang="sass">
.movie-item
  position: relative
  cursor: pointer
  border-radius: 5px
  overflow: hidden
  transition: all 0.3s ease
  height: 400px

  &:hover
    box-shadow: 0px 5px 30px rgba(0,0,0,0.7)
    transform: scale(1.02)

    &:hover .movie-info__wrap
      opacity: 1
      background-color: rgba(0,0,0,.7 )

  &__poster
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    background-repeat: no-repeat
    background-size: cover
    z-index: -1


.movie-info__wrap
  padding: 20px 10px
  padding: 10px
  height: 100%
  opacity: 0
  transition: all .2s ease


.movie-title
  font-size: 18px
  color: #fff

.movie-year
  font-size: 14px
  color: #fff


.btn
  width: 100%
</style>
