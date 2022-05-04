<template>
  <div>
    <!-- banner -->
    <div class="home-banner" :style="cover">
      <div class="banner-container">
        <h1 class="blog-title animated zoomIn">
            Ovo's Blog
        </h1>
        <!-- 一言 -->
        <div class="blog-intro">
          {{ obj.output }} <span class="typed-cursor">|</span>
        </div>
        <!-- 向下滚动 -->
        <div class="scroll-down">
          <v-icon color="#fff" class="scroll-down-effects">
            mdi-chevron-down
          </v-icon>
        </div>
      </div>
    </div>
    <v-row class="home-container">
        <v-card
          class="animated zoomIn article-card"
          style="border-radius: 20px; opacity: 0.85;"
        >
          <!-- 文章信息 -->
          <div class="article-wrapper">
            <!-- 文章标题 -->
            <router-link to="/">MIT 6.824</router-link>
            <!-- 文章基础信息 -->
            <div class="article-info">
              
            </div>
            <!-- 文章内容 -->
          </div>
        </v-card>
      </v-row> 
  </div>
</template>


<script>

  import EasyTyper from "easy-typer-js";

    export default {
        data() {
          return {
            obj: {
              output: "",
              isEnd: false,
              speed: 300,
              singleBack: false,
              sleep: 0,
              type: "rollback",
              backSpeed: 40,
              sentencePause: true
            }
          }
        },
        computed: {
            cover() {
            var cover = "https://static.talkxj.com/config/0bee7ba5ac70155766648e14ae2a821f.jpg";
            // this.$store.state.blogInfo.pageList.forEach(item => {
            //     if (item.pageLabel == "home") {
            //     cover = item.pageCover;
            //     }
            // });
            return "background: url(" + cover + ") center center / cover no-repeat;";
            }
        },
        methods: {
          init() {
            // 一言Api进行打字机循环输出效果
          fetch("https://v1.hitokoto.cn?c=i")
            .then(res => {
              return res.json();
            })
            .then(({ hitokoto }) => {
              this.initTyped(hitokoto);
            });
          },
          initTyped(input, fn, hooks) {
            // eslint-disable-next-line no-unused-vars
            const typed = new EasyTyper(this.obj, input, fn, hooks);
          }
        },
        created() {
          this.init();
        }
    }
</script>

<style lang='scss' scoped>

  a {
    text-decoration: none;
  }

  .home-banner {
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
    height: 100vh;
    background-color: transparent;
    background-position: center center;
    text-align: center;
    color: #fff !important;
    animation: header-effect 1s;
  }

  .banner-container {
    margin-top: 43vh;
    line-height: 1.5;
    color: #eee;
  }

  /** 一言 **/
  .typed-cursor {
    opacity: 1;
    animation: blink 0.7s infinite;
  }
  
  @keyframes  blink{
    0% {
      opacity: 1
    }
    
    50% {
      opacity: 0
    }
    
    100% {
      opacity: 1
    }
    
  }

  /** 向下滑动样式 **/
  .scroll-down {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    i {
      font-size: 2rem;
    }
  }

  /** 向下滑动动画 **/
  .scroll-down-effects {
    color: #eee !important;
    text-align: center;
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
    line-height: 1.5;
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    animation: scroll-down-effect 1.5s infinite;
  }

  @keyframes scroll-down-effect {
    0% {
      top: 0;
      opacity: 0.4;
      filter: alpha(opacity=40);
    }
    50% {
      top: -16px;
      opacity: 1;
      filter: none;
    }
    100% {
      top: 0;
      opacity: 0.4;
      filter: alpha(opacity=40);
    }
  }

  

  // 文章卡片样式
  .article-card {
    display: flex;
    align-items: center;
    height: 280px;
    width: 100%;
    margin-top: 20px;
  }

  .article-wrapper {
    a {
      font-size: 1.75em;
      line-height: 1.4;
      margin-bottom: 0.3rem;
    }
  }

  @media (min-width: 760px) {
    .blog-title {
      font-size: 2.5rem;
    }
    
    .blog-intro {
      font-size: 1.5rem;
    }

    .home-container {
      max-width: 1200px;
      margin: calc(100vh - 48px) auto 28px auto;
    }
  }

  @media (max-width: 759px) {
    .blog-title {
      font-size: 26px;
    }

    .blog-intro {
      font-size: 1.25rem;
      line-height: 2;
    }

    /** 文章布局 */
    .home-container {
        width: 100%;
        margin: calc(100vh - 66px) auto 0 auto;
    }
  }
</style>