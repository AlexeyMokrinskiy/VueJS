<template>
  <div>
    <div class="top center" style="background: url(img/top_photo.jpg)">
        <div class="top__content">
            <h1 class="top__content_header">{{ topTitle }}</h1>
            <p class="top__content_text">{{ topText }}</p>
            <router-link to="/project" class="top__content_button">Get Started <svg width="18" height="17" viewBox="0 0 18 17"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
            stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
            </router-link>
        </div>
    </div>
    <section id="project" class="projects center">
        <h1 class="projects__header">{{ projectsHeader }}</h1>
        <p class="projects__subtitle">{{ projectsSubtitle }}</p>
        <div class="projects__box">
          <div v-for="project in projects" :key="project.id" class="project">
            <img :src="project.img" alt="project_img" :style=project.imgStyle>
            <div class="project__desc">
              <router-link to="/project-details"  class="project__name">{{project.name}}</router-link>
              <p class="project__text">{{ project.desc }}</p>
            </div>
            <router-link to="/project-details" class="next"><svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </router-link>
          </div>
        </div>
    </section>
    <ul class="counter">
      <li v-for="item in counter" :key="item.id" class="counter__item">
        <h1 class="counter__item_num">{{ item.num }}</h1>
        <p class="counter__item_desc">{{ item.desc }}</p>
      </li>
    </ul>
    <section id="blog" class="news center">
      <h1 class="news__title">Articles & News</h1>
      <p class="news__subtitle">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
      <div class="articles">
        <NewsItem v-for="article in articles" :key="article.id" :news-data="article" class="articles__item"/>
      </div>
    </section>
  </div>
</template>

<script>
import NewsItem from '../components/NewsItem.vue'

export default {
  name: 'HomePage',

  data () {
    return {
      topTitle: 'Let Your Home Be Unique',
      topText: 'There are many variations of the passages of orem Ipsum fromavailable, majority.',
      projectsHeader: 'Follow Our Projects',
      projectsSubtitle: 'It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.',
      projects: [
        {
          id: 0,
          img: 'img/projects1.jpg',
          imgStyle: 'borderTopRightRadius: 80px',
          name: 'Modern Kitchen',
          desc: 'Decor / Artchitecture'
        },
        {
          id: 1,
          img: 'img/projects2.jpg',
          imgStyle: 'borderTopLeftRadius: 80px',
          name: 'Modern Kitchen',
          desc: 'Decor / Artchitecture'
        },
        {
          id: 2,
          img: 'img/projects3.jpg',
          imgStyle: 'borderBottomRightRadius: 80px',
          name: 'Modern Kitchen',
          desc: 'Decor / Artchitecture'
        },
        {
          id: 3,
          img: 'img/projects4.jpg',
          imgStyle: 'borderBottomLeftRadius: 80px',
          name: 'Modern Kitchen',
          desc: 'Decor / Artchitecture'
        }
      ],
      counter: [
        {
          num: 12,
          desc: 'Years Of Experiance'
        },
        {
          num: 85,
          desc: 'Success Project'
        },
        {
          num: 15,
          desc: 'Active Project'
        },
        {
          num: 95,
          desc: 'Happy Customers'
        }
      ],
      articles: [
        {
          id: 0,
          img: 'img/news1.jpg',
          theme: 'Kitchen Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022'
        },
        {
          id: 1,
          img: 'img/news2.jpg',
          theme: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December,2022'
        },
        {
          id: 2,
          img: 'img/news3.jpg',
          theme: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022'
        }
      ]
    }
  },
  components: { NewsItem }
}
</script>

<style lang="scss" scoped>
.top {
  height: 758px;
  border-radius: 50px;
  padding-left: 2%;
  display: flex;
  align-items: center;
  margin-bottom: 96px;

  &__content {
    width: 40%;

    &_header {
      color: #292f36;
      font-family: "DM Serif Display";
      font-size: 65px;
      font-weight: 400;
      line-height: 125%;
      margin-bottom: 18px;
    }

    &_text {
      color: #4d5053;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
      margin-bottom: 21px;
    }

    &_button {
      display: flex;
      padding: 26px 49px 26px 48px;
      justify-content: center;
      align-items: center;
      gap: 10px;

      width: 48%;
      border-radius: 18px;
      background: #292f36;
      box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);

      color: #fff;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      line-height: 125%; /* 22.5px */
      letter-spacing: 0.36px;
      transition: all 0.3s;
    }

    &_button svg path {
      transition: all 0.3s;
    }

    &_button:hover {
      color: #000;
      background: #758494;
    }

    &_button:hover svg path {
      stroke: #000;
    }
  }
}
.projects {
  margin-bottom: 96px;
  &__header {
    color: #292f36;
    text-align: center;
    font-family: "DM Serif Display";
    font-size: 50px;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  &__subtitle {
    color: #4d5053;
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
    margin-bottom: 93px;
  }

  &__box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 56px;

    .project {
      position: relative;

      .item1 {
        border-top-right-radius: 80px;
      }

      .item2 {
        border-top-left-radius: 80px;
      }

      .item3 {
        border-bottom-right-radius: 80px;
      }

      .item4 {
        border-bottom-left-radius: 80px;
      }

      .project__desc {
        margin-top: 24px;

        .project__name {
          color: #292f36;
          font-family: "DM Serif Display";
          font-size: 25px;
          font-weight: 400;
          line-height: 125%; /* 31.25px */
          letter-spacing: 0.5px;
          transition: all 0.3s;
        }

        .project__name:hover {
          color: #cda274;
        }

        .project__text {
          color: #4d5053;
          font-size: 22px;
          font-weight: 400;
          line-height: 150%; /* 33px */
          letter-spacing: 0.22px;
        }
      }

      .next {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #f4f0ec;
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 70px;
        height: 70px;
        cursor: pointer;
        transition: all 0.3s;
      }

      .next svg path {
        transition: all 0.3s;
      }

      .next:hover {
        background-color: #cda27442;
      }

      .next:hover svg path {
        stroke: #c07d36;
      }
    }
  }
}
.counter {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 76px;
  background-color: #f4f0ec;
  padding: 150px;
  margin-bottom: 96px;
  list-style-type: none;

  &__item {
    text-align: center;
    max-width: 250px;

    &_num {
      color: #cda274;
      font-family: DM Serif Display;
      font-size: 85px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 106.25px */
      letter-spacing: 1.7px;
    }

    &_desc {
      color: #4d5053;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
    }
  }

  &__item:not(:last-child) {
    border-right: 1px solid #cda274;
    padding-right: 54px;
  }
}
.news {
  text-align: center;

  &__title {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }

  &__subtitle {
    max-width: 810px;
    margin-left: 154px;
    color: #4d5053;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
    margin-bottom: 52px;
  }

  .articles {
    display: flex;
    gap: 27px;
    margin-bottom: 96px;

    &__item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      padding: 21px;
      border-radius: 62px;
      border: 1px solid #e7e7e7;
      box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);

      &_img {
        border-radius: 42px 42px 0 0;
        margin-bottom: 10px;
      }

      &_theme {
        padding: 6px 8px;
        position: absolute;
        top: 250px;
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

      &_next:hover {
        background-color: #cda27442;
      }

      &_next:hover svg path {
        stroke: #cda274;
      }

      &_nextwhite {
        background-color: #fff;
      }
    }
  }
}
</style>
