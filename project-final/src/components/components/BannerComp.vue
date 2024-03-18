<template>
  <div>
    <div class="banner">
      <img :src="bannerInfo.banner" alt="banner_img" class="banner__img">
      <div v-if="bannerInfo.bannerTitle || bannerInfo.bannerLinks" class="banner__intro">
        <h2 class="banner__intro_title">{{bannerInfo.bannerTitle}}</h2>
        <nav class="banner__intro_breadcrumbs">
          <router-link class="blog-link" to="/home">Home</router-link>
          <router-link class="blog-link" :to="`/${bannerInfo.bannerLinks[1].toLowerCase()}`">{{ bannerInfo.bannerLinks[1] }}</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComp',
  props: ['bannerInfo'],

  data () {
    return {}
  }
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
</style>
