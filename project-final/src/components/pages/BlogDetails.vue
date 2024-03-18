<template>
    <div id="blog-details" class="blog-details-box">
      <BannerComp :banner-info="bannerInfo"/>
      <div class="blog-details center">
        <div class="articles-box">
          <article
            class="article-item"
            v-for="article in sortedArticle"
            :key="article.id"
            :id="article.id"
          >
            <h2 class="article-item__heading">{{ article.title }}</h2>
            <img
              class="article-item__img"
              :src="article.src"
              :alt="article.alt"
            />
            <div class="article-item__edition">
              <p class="article-item__edition_date">{{ article.date }}</p>
              <nav class="article-item__edition_breadcrumbs">
                <p class="article-item__edition_path">Interior </p>
                <p class="article-item__edition_path">Home</p>
                <p class="article-item__edition_path">Decore</p>
              </nav>
            </div>
            <p class="article-item__text">{{ article.text1 }}</p>
            <ol v-if="article.list" class="article-item__list">
              <li v-for="list_item in article.list" :key="list_item.id" class="article-item__list_li">{{ list_item.text }}</li>
            </ol>
            <p class="article-item__text">{{ article.text2 }}</p>
            <div v-if="article.quotes && article.text3"  class="quote">
              <img class="quote__quotes"
              :src="article.quotes"
              alt="quotes"/>
              <p class="quote__text">{{ article.text3 }}</p>
            </div>
          </article>
        </div>

        <aside class="sidebar">
          <h3 class="sidebar__heading">{{ title }}</h3>
          <div class="sidebar__tags">
            <div v-for="tag in tags" :key="tag.id">
              <button
                @click="filterArticles"
                :id="tag.id"
                class="sidebar__tags_link"
              >
                {{ tag.text }}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
</template>

<script>

import BannerComp from '../components/BannerComp.vue'

export default {
  name: 'BlogDetails',
  data () {
    return {
      sortedArticle: [
        {
          id: 'kitchen',
          title: 'Let’s Get Solution for Building Construction Work',
          src: 'img/blog_details_article.jpg',
          alt: 'article_img',
          date: '26 December,2022',
          text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
          quotes: 'img/quotes.svg',
          text3: 'The details are not the details. They make the design.'
        }
      ],
      articles: [
        {
          id: 'kitchen',
          title: 'Let’s Get Solution for Building Construction Work',
          src: 'img/blog_details_article.jpg',
          alt: 'article_img',
          date: '26 December,2022',
          text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
          quotes: 'img/quotes.svg',
          text3: 'The details are not the details. They make the design.'
        },
        {
          id: 'kitchen',
          title: 'Design sprints are great',
          src: 'img/blog_details_article2.jpg',
          alt: 'article_img',
          date: '26 December,2022',
          text1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          text2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          list: [
            {
              id: 1,
              text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
            },
            {
              id: 2,
              text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
            },
            {
              id: 1,
              text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
            }]
        },
        {
          id: 'bedroom',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          src: 'img/top_photo.jpg',
          alt: 'article_img',
          date: '26 December,2022',
          text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'
        },
        {
          id: 'building',
          title: 'Best For Any Office & Business Interior Solution',
          src: 'img/news2.jpg',
          alt: 'article_img',
          date: '26 December,2022',
          text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'
        },
        {
          id: 'architecture',
          title: 'Let’s Get Solution for Building Construction Work',
          src: 'img/projects2.jpg',
          alt: 'article_img',
          date: '26 December,2022',
          text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'
        },
        {
          id: 'kitchen-planning',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          src: 'img/news1.jpg',
          alt: 'article_img',
          date: '26 December,2022',
          text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
          text2: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'
        }
      ],
      tags: [
        {
          id: 'kitchen',
          text: 'Kitchen'
        },
        {
          id: 'bedroom',
          text: 'Bedroom'
        },
        {
          id: 'building',
          text: 'Building'
        },
        {
          id: 'architecture',
          text: 'Architecture'
        },
        {
          id: 'kitchen-planning',
          text: 'Kitchen Planning'
        }
      ],
      bannerInfo: {
        banner: 'img/blog_details_banner.jpg'
      },
      title: 'Tags',
      isActiveStyle: {
        color: '#fff',
        backgroundColor: '#292f36'
      }
    }
  },
  methods: {
    filterArticles (e) {
      this.sortedArticle = this.articles.filter((article) => article.id === e.target.id)
    }
  },
  components: { BannerComp }
}
</script>

<style lang="scss">

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 200px;
}

.blog-details {
  display: flex;
  flex-direction: row;
  gap: 57px;
  margin-bottom: 60px;

  .article-item {
    width: 800px;

    &__heading {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%; 
      letter-spacing: 1px;
      margin-bottom: 21px;
    }

    &__img {
      border-radius: 50px;
      margin-bottom: 40px;
      width: 100%;
    }

    &__edition {
      display: flex;
      justify-content: space-between;
      color: #4d5053;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: 0.16px;
      margin-bottom: 48px;

      &_breadcrumbs {
        display: flex;
        gap: 8px;
      }

      &_path {
        color: #4d5053;
      }

      &_path:not(:last-child)::after {
        content: (" / ");
      }
    }

    &__text {
      color: #4d5053;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
      margin-bottom: 35px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 32px;
      margin-bottom: 44px;
      list-style-type: none; 
      counter-reset: my-counter; 

      &_li {
        color: #4d5053;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%; 
        letter-spacing: 0.22px;
      }

      &_li::before {
        content: counter(my-counter); 
        counter-increment: my-counter; 
        color: #cda274;
        font-family: DM Serif Display;
        font-size: 20px;
        font-weight: 400;
        line-height: 125%; 
        letter-spacing: 0.4px;
        margin-right: 14px; 
      }
    }
  }

  .quote {
    display: flex;
    width: 800px;
    padding: 53px 227px;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    background: #f4f0ec;
    margin-bottom: 28px;

    &__text {
      width: 350px;
      color: #cda274;
      text-align: center;
      font-family: DM Serif Display;
      font-size: 24px;
      font-style: italic;
      font-weight: 400;
      line-height: 125%; /* 31.25px */
      letter-spacing: 0.5px;
    }
  }

  .sidebar {
    &__heading {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%; /* 31.25px */
      letter-spacing: 0.5px;
      margin-bottom: 24px;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      width: 335px;

      &_link {
        display: flex;
        padding: 9px 30px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border: none;
        border-radius: 10px;
        background: #f4f0ec;

        color: #292f36;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        line-height: 125%; /* 22.5px */
        letter-spacing: 0.36px;
        transition: all 0.3s;
      }

      &_link:hover {
        color: #fff;
        background: #292f36;
      }
    }

    .active {
      color: #fff;
      background: #292f36;
    }
  }
}
</style>
