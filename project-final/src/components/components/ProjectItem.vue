<template>
  <div>
    <article class="project">
        <img class="project__img" :src="projectData.img" alt="project_img">
        <div class="project__details">
            <div class="project__details_desc">
             <h3 class="project__name">{{ projectData.name }}</h3>
             <nav class="project__breadcrumbs">
               <a v-for="link in projectData.links" :key="link.id" href="#" class="project__link">{{link}}</a>
             </nav>
            </div>
            <a href="#" class="project__next"><svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
        </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: ['projectData'],
  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss">
.project {
    page-break-inside: avoid; //для избежания разрыва блока при переносе
    break-inside: avoid; // во вторую колонку
    &__img {
      margin-bottom: 22px;
    }
    &__details{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 27px;
    }
    &__link {
      color: #4d5053;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
      transition: all 0.3s;
    }

    &__link:hover {
      color: #c07d36;
    }

    &__link:not(:last-child)::after {
      content: (" / ");
    }

    &__next {
      width: 52px;
      height: 52px;
      padding: 15px 20px;
      border-radius: 50%;
      background-color: #f4f0ec;
      transition: all 0.3s;
    }

    &__next svg path {
      transition: all 0.3s;
    }

    &__next:hover {
        background-color: #CDA274;
    }

    &__next:hover svg path {
        stroke: #fff;
    }
}

</style>
