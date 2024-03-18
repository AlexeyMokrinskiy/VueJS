<template>
  <article class="latest-post center">
    <h2 class="latest-post__title">{{latestArticle.title}}</h2>
    <div class="latest-post__post">
      <img class="latest-post__post_img" :src=latestArticle.img alt="post_image">
      <div class="latest-post__post_content">
        <h3 class="latest-post__post_title">{{ latestArticle.postTitle }}</h3>
        <p class="latest-post__post_text">{{ latestArticle.postText1 }}</p>
        <p class="latest-post__post_text">{{ latestArticle.postText2 }}</p>
        <div class="latest-post__post_date">
          <p class="latest-post__post_datetext">{{ latestArticle.date }}</p>
          <router-link to="/blog-details" class="latest-post__post_next"><svg width="10" height="20" viewBox="0 0 10 20"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" /></svg></router-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProjectBlogLatest',
  props: ['latestArticle'],

  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.latest-post {
  margin-bottom: 156px;

  &__title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    // font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
    margin-bottom: 27px;
  }

  &__post {
    display: flex;
    align-items: center;
    gap: 5%;
    padding: 22px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);

    &_img {
      border-radius: 50px;
    }

    &_content {
      max-width: 41%;
    }

    &_title {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%; /* 31.25px */
      letter-spacing: 0.5px;
      margin-bottom: 22px;
    }

    &_text {
      color: #4d5053;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
      margin-bottom: 41px;
    }

    &_date {
      display: flex;
      width: 100%;
      height: 33px;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    }

    &_datetext {
      color: #4d5053;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }

    &_next {
      width: 52px;
      height: 52px;
      padding: 15px 20px;
      border-radius: 50%;
      background-color: #f4f0ec;
      transition: all 0.3s;
    }

    &_next svg path {
      transition: all 0.3s;
    }

    &_next:hover {
      background-color: #cda27442;
    }

    &_next:hover svg path {
      stroke: #cda274;
    }
  }
}
</style>
