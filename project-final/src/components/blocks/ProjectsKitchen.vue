<template>
    <div class="projects center">
        <ProjectItem v-for="project in projects" :key="project.img" :project-data="project"/>
    </div>
</template>

<script>
import ProjectItem from '../components/ProjectItem.vue'

export default {
  name: 'ProjectsKitchen',

  data () {
    return {
      projects: [
        {
          img: 'img/projectImg3.jpg',
          name: 'Minimal Kitchen',
          links: ['Decor', 'Artchitecture']
        },
        {
          img: 'img/projectImg1.jpg',
          name: 'Minimal Kitchen',
          links: ['Decor', 'Artchitecture']
        },
        {
          img: 'img/projectImg8.jpg',
          name: 'Classic Minimal Kitchen',
          links: ['Decor', 'Artchitecture']
        },
        {
          img: 'img/projectImg7.jpg',
          name: 'Modern Kitchen',
          links: ['Decor', 'Artchitecture']
        },
        {
          img: 'img/projectImg6.jpg',
          name: 'Minimal Kitchen table',
          links: ['Decor', 'Artchitecture']
        },
        {
          img: 'img/projectImg5.jpg',
          name: 'System Table',
          links: ['Decor', 'Artchitecture']
        },
        {
          img: 'img/projectImg4.jpg',
          name: 'Modern Kitchen',
          links: ['Decor', 'Artchitecture']
        },
        {
          img: 'img/projectImg2.jpg',
          name: 'Modern Kitchen',
          links: ['Decor', 'Artchitecture']
        }
      ]
    }
  },

  mounted () {},

  methods: {},
  components: { ProjectItem }
}
</script>

<style lang="scss" scoped></style>
