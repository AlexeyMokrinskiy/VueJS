<template>
  <div>
    <BannerComp :banner-info="bannerInfo"/>
    <BlogLatest v-for="item in latestArticle" :key="item.id" :latest-article="item"/>
    <h2 class="news-title center">Articles & News</h2>
    <div class="blog-news center">
      <NewsItem v-for="item in paginatedArticles" :key="item.id" :news-data="item"/>
    </div>
    <div class="articles-pagination">
      <div v-for="page in totalPages" :key="`page${page}`">
        <router-link class="articles-pagination-item" :to="`/blog/${page}`">
        {{ page }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BannerComp from '../components/BannerComp.vue'
import BlogLatest from '../components/BlogLatest.vue'
import NewsItem from '../components/NewsItem.vue'

export default {
  name: 'BlogPage',

  data () {
    return {
      bannerInfo: {
        banner: 'img/blog_img_placeholder.jpg',
        bannerTitle: 'Articles & News',
        bannerLinks: ['Home', 'Blog']
      },
      latestArticle: [
        {
          id: 1,
          title: 'Latest Post',
          img: 'img/latest-post.jpg',
          postTitle: 'Low Cost Latest Invented Interior Designing Ideas',
          postText1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.',
          postText2: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
          date: '26 December, 2022'
        }
      ],
      articlesNews: [
        {
          id: 0,
          img: 'img/news1.jpg',
          theme: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022'
        },
        {
          id: 1,
          img: 'img/news2.jpg',
          theme: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '22 December,2022'
        },
        {
          id: 2,
          img: 'img/news3.jpg',
          theme: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022'
        },
        {
          id: 3,
          img: 'img/news4.jpg',
          theme: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022'
        },
        {
          id: 4,
          img: 'img/news5.jpg',
          theme: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December,2022'
        },
        {
          id: 5,
          img: 'img/news6.jpg',
          theme: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022'
        },
        {
          id: 6,
          img: 'img/news3.jpg',
          theme: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022'
        },
        {
          id: 7,
          img: 'img/news4.jpg',
          theme: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022'
        },
        {
          id: 8,
          img: 'img/news5.jpg',
          theme: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December,2022'
        },
        {
          id: 9,
          img: 'img/news6.jpg',
          theme: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022'
        },
        {
          id: 10,
          img: 'img/news1.jpg',
          theme: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022'
        },
        {
          id: 11,
          img: 'img/news2.jpg',
          theme: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '22 December,2022'
        },
        {
          id: 12,
          img: 'img/news3.jpg',
          theme: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022'
        },
        {
          id: 13,
          img: 'img/news4.jpg',
          theme: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022'
        },
        {
          id: 14,
          img: 'img/news5.jpg',
          theme: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December,2022'
        },
        {
          id: 15,
          img: 'img/news1.jpg',
          theme: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022'
        },
        {
          id: 16,
          img: 'img/news2.jpg',
          theme: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '22 December,2022'
        }
      ],
      perPage: 6
    }
  },
  computed: {
    currentPage () {
      const page = this.$route.params.page
      return page || 1
    },
    totalPages () {
      return Math.ceil(this.articlesNews.length / this.perPage)
    },
    paginatedArticles () {
      const { currentPage, perPage } = this
      const startIndex = (currentPage - 1) * perPage
      const endIndex = startIndex + perPage
      return this.articlesNews.slice(startIndex, endIndex)
    }
  },
  updated () {
    const page = this.$route.params.page
    if (!(page <= this.totalPages && page >= 1)) {
      this.$router.push('/404')
    }
  },
  components: { BannerComp, NewsItem, BlogLatest }
}
</script>

<style lang="scss" scoped>

.news-title {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  // font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
  margin-bottom: 30px;
}
.blog-news {
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  margin-bottom: 20px;
}

.articles-pagination {
  display: flex;
  gap: 30px;
  justify-content: center;
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-bottom: 200px;
    border: 1px solid #CDA274;
    border-radius: 50px;
    transition: ease-in-out 0.3s;
    color: #171a1d;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%; /* 24px */
    text-transform: capitalize;

  }
  &-item:hover {
    border: none;
    background-color: #F4F0EC;
  }
}
</style>
