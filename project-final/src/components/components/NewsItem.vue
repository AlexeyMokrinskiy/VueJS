<template>
  <div class="blog-news__item">
    <img class="blog-news__item_img" :src=newsData.img alt="news_photo">
    <p class="blog-news__item_theme">{{ newsData.theme }}</p>
    <router-link to="/blog" class="blog-news__item_title">{{ newsData.title }}</router-link>
    <div class="blog-news__item_date">
      <p class="blog-news__item_datetext">{{ newsData.date }}</p>
      <router-link to="/blog" class="blog-news__item_next"><svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: ['newsData'],

  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.blog-news {
  &__item {
    width: 32%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    margin-bottom: 30px;
    transition: all 0.3s;

    &_img {
      width: 100%;
      border-radius: 42px 42px 0 0;
      margin-bottom: 10px;
    }

    &_theme {
      padding: 6px 8px;
      position: absolute;
      top: 47%;
      left: 40px;
      border-radius: 8px 8px 8px 0px;
      background: #fff;
      color: #4d5053;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.16px;
    }

    &_title {
      margin-bottom: 30px;
      max-width: 305px;
      text-align: left;
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%; /* 31.25px */
      letter-spacing: 0.5px;
      transition: all 0.3s;
    }

    &_title:hover {
      color: #cda274;
    }

    &_date {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &_datetext {
      align-items: center;
      color: #4d5053;
      font-family: Jost;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.16px;
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
  }

  &__item:hover {
    background: #f4f0ec;
  }

  &__item:hover .blog-news__item_next {
    background-color: #fff;
    transition: all 0.3s;
  }
}
</style>
