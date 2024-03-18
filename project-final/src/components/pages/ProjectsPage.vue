<template>
  <div>
    <BannerComp :banner-info="bannerInfo"/>
    <div id="dynamic-component" class="category center">
      <a v-for="category in categories"
      :key="category" :class="['category__name', {active: currentTab === category}]"
      @click="currentTab = category">
      {{ category }}</a>
    </div>
    <keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import ProjectsBathroom from '../blocks/ProjectsBathroom.vue'
import ProjectsKitchen from '../blocks/ProjectsKitchen.vue'
import ProjectsBedroom from '../blocks/ProjectsBedroom.vue'
import ProjectsLivingroom from '../blocks/ProjectsLivingroom.vue'
import BannerComp from '../components/BannerComp.vue'
import ProjectItem from '../components/ProjectItem.vue'

export default {
  name: 'ProjectsPage',
  data () {
    return {
      bannerInfo: {
        banner: 'img/projects_banner.jpg',
        bannerTitle: 'Our Project',
        bannerLinks: ['Home', 'Project']
      },
      currentTab: 'Bedroom',
      categories: ['Bathroom', 'Bedroom', 'Kitchen', 'Livingroom']
    }
  },
  computed: {
    currentTabComponent () {
      return 'projects-' + this.currentTab.toLowerCase()
    }
  },
  components: { BannerComp, ProjectItem, ProjectsBathroom, ProjectsKitchen, ProjectsBedroom, ProjectsLivingroom }
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 200px;

  &__intro {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 503px;
    padding: 41px 78px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;

    &_title {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
    }

    .blog-link {
      color: #4d5053;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
      transition: all 0.3s;
    }

    .blog-link:hover {
      color: #c07d36;
    }

    .blog-link:not(:last-child)::after {
      content: (" / ");
    }
  }
}

.category {
  display: flex;
  width: 855px;
  height: 75px;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  border-radius: 18px;
  border: 1px solid #CDA274;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &__name {
    display: flex;
    padding: 26px 66px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    color: #292F36;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
    cursor: pointer;
    transition: all 0.3s;
  }

  &__name:hover {
    background: #e4c09a;
    color: #fff;
  }

  &__name.active {
  background: #CDA274;
  color: #fff;
}

}

.projects {
  -webkit-column-count: 2; /* Chrome, Safari, Opera */
  -moz-column-count: 2; /* Firefox */
  column-count: 2;
  gap: 27px;
  margin-bottom: 60px;
}
</style>
