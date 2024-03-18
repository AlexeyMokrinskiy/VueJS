<template>
  <div>
    <BannerComp :banner-info="bannerInfo"/>
    <div class="project-details center">
      <h2 class="project-details__title center">{{ projectDetails.name }}</h2>
      <p class='project-details__text center'>{{ projectDetails.desc1 }}</p>
      <p class='project-details__text center'>{{ projectDetails.desc2 }}</p>
      <SwiperProjects/>
    </div>
  </div>
</template>

<script>

import BannerComp from '../components/BannerComp.vue'
import SwiperProjects from '../components/SwiperProjects.vue'

export default {
  name: 'ProjectDetails',
  data () {
    return {
      bannerInfo: {
        banner: 'img/project_details_banner.jpg'
      },
      projectDetails: {
        id: 1,
        name: 'Minimal Look Bedrooms',
        desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
        desc2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
      }
    }
  },
  components: { BannerComp, SwiperProjects }
}
</script>

<style lang="scss" scoped>
.project-details{
    &__title{
      width: 658px;
      color: #292F36;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
      letter-spacing: 1px;
    }
    &__text{
      width: 658px;
      color: #4D5053;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
      margin-bottom: 32px;
    }
}
</style>
