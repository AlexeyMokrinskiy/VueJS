<template>
  <div>
    <div class="project-details-swiper center">
      <img class="project-details__img" :src="img" alt="project_photo">
      <div class="nav">
        <div v-for="item in projectImages" :key="item.id"
        @click="chooseImage($event)" class="nav__btns">{{ item.id + 1}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwiperProjects',

  data () {
    return {
      img: 'img/project_details_img1.jpg',
      num: 0,
      projectImages: [
        {
          id: 0,
          img: 'img/project_details_img1.jpg'
        },
        {
          id: 1,
          img: 'img/top_photo.jpg'
        },
        {
          id: 2,
          img: 'img/project_details_img1.jpg'
        }
      ]
    }
  },

  mounted () {
  },

  methods: {
    chooseImage (event) {
      const targetId = Number(event.currentTarget.textContent) - 1
      this.img = this.projectImages[targetId].img
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>

.project-details-swiper {
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  gap: 30px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.project-details__img{
      border-radius: 50px;
      margin-bottom: 96px;
    }
.nav {
  display: flex;
  gap: 30px;
  justify-content: center;
  &__btns {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 50px;
    transition: all 0.3s;
  }
  &__btns:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
</style>
