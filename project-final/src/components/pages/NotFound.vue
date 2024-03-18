<template>
  <div>
    <div class="error center">
        <div class="error__desc">
            <h1 class="error__desc_title">404</h1>
            <p class="error__desc_text">We are sorry, but the page
            you requested was not found</p>
            <router-link to="/home" class="error__desc_btn">Back To Home <span class="error__desc_btn-arrow"><svg width="18"    height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
              </svg></span>
            </router-link>
        </div>
        <img src="img/404_photo.jpg" alt="error-img" class="error__image">
    </div>
  </div>
</template>

<script>

export default {
  name: 'NotFound',
  data () {
    return {}
  },
  mounted () { },
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  gap: 80px;
  margin-bottom: 60px;
  &__desc {
    &_title {
      color: #CDA274;
      font-family: DM Serif Display;
      font-size: 250px;
      font-weight: 400;
      line-height: 125%; /* 312.5px */
    }
    &_text {
      width: 60%;
      color: #292F36;
      font-family: DM Serif Display;
      font-size: 35px;
      font-weight: 400;
      line-height: 150%; /* 52.5px */
      letter-spacing: 0.35px;
      margin-bottom: 20px;
    }
    &_btn {
      color: #FFF;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      line-height: 125%; /* 22.5px */
      letter-spacing: 0.36px;
      max-width: 260px;
      padding: 26px 54px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 18px;
      background: #292F36;
      box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
      transition: all 0.3s;
    }
    &_btn-arrow {
      stroke: #CDA274;
      transition: all 0.3s;
    }
    &_btn:hover {
      background:#CDA274;
      color: #292F36;
    }
    &_btn:hover svg{
      stroke: #292F36;
    }
  }
  &__image {
    border-bottom-left-radius: 300px;
    width: 50%;
  }
}
</style>
