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
          <v-icon color="#fff" class="scroll-down-effects" @click="scrollDown">
            mdi-chevron-down
          </v-icon>
        </div>
      </div>
    </div>
    <v-row class="home-container">
        <v-card
          class="animated zoomIn article-card" v-for="index of 5" :key="index">
          <!-- 文章封面图 -->
          <div class="article-cover left-radius">
            <router-link to="/articles/">
              <v-img
                class="on-hover"
                width="100%"
                height="100%"
                src="https://static.talkxj.com/config/0bee7ba5ac70155766648e14ae2a821f.jpg"
              />
            </router-link>
          </div>
          <!-- 文章信息 -->
          <div class="article-wrapper">
            <!-- 文章标题 -->
            <router-link class="article-title" to="/">策略模式初见</router-link>
            <!-- 文章基础信息 -->
            <div class="article-info">
              <span>发表于</span>
              <time>2012</time>
              <span class="article-separtor">|</span>
              <span>更新于</span>
              <span class="article-separtor">|</span>
              <router-link to='/'>分类</router-link>
            </div>
            <div class="article-content">
              请注意，此文章尚未完成。当此文章完结时，此声明将被删除。 原文传送门：Raft Q&A 此文章为原文翻译，非本人原创文章！此外，翻译内的人称均和原文保持一致！
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
            //    cover = item.pageCover;
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
          },
          scrollDown() {
            window.scrollTo({
            behavior: "smooth",
            top: document.documentElement.clientHeight
      });
    },
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

  /** 文章样式 */
  .article-wrapper {
    padding: 0 40px;
    .article-title {
      display: block;
      font-size: 2.14em;
      line-height: 1.4;
      color: #395386;
      margin-bottom: 0.5rem;
    }
    /**文章基本信息 */
    .article-info {
      font-size: 90%;
      color: #858585;
      a {
        color: #858585;
      }
    }
  }

  .left-radius {
    border-radius: 8px 0 0 8px !important;
    order: 0;
  }

  .right-radius {
    border-radius: 0 8px 8px 0 !important;
    order: 1;
  }

  .article-content {
    margin-top: 0.3rem;
  }

  .article-separtor {
    margin: 0 0.3rem;
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

    /**文章卡片样式 **/
    .article-card {
      display: flex;
      align-items: center;
      height: 280px;
      width: 100%;
      margin-top: 20px;
      &:hover .on-hover {
        transform: scale(1.1);
      }
      .on-hover {
        transition: all 0.6s;
      }
    }

    .article-cover {
      overflow: hidden;
      height: 100%;
      width: 45%;
    }

    .article-wrapper {
      padding: 0 2.5rem;
      width: 55%;
      a {
        font-size: 1.5rem;
        transition: all 0.3s;
      }
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

  .article-info {
    font-size: 95%;
    color: #858585;
    line-height: 2;
    margin: 0.375rem 0;
    a {
      font-size: 95%;
      color: #858585 !important;
    }
  } 

  .article-content {
    line-height: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
</style>