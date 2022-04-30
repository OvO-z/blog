<template>
  <!-- 电脑导航栏 -->
  <v-app-bar app hide-on-scroll flat height="60" :class="navClass">
    <div id="nav">
      <div class="title">
          <router-link to="/">
            QAQ
          </router-link>
        </div>
      <div class="menu">
        <div class="item">
          <a class="btn">主页</a>
        </div>
        <div class="item">
          <a class="btn">标签</a>
        </div>
        <div class="item">
          <a class="btn">分类</a>
        </div>
        <div class="item">
          <a class="btn">生活</a>
          <ul>
            <li>
              <router-link to="/"><span>歌单</span></router-link>
            </li>
            <li>
              <router-link to="/"><i/><span>相册</span></router-link>
            </li>
          </ul>
        </div>
        <div class="item">
          <a class="btn">友链</a>
        </div>
        <div class="item">
          <a class="btn">留言</a>
        </div>
        <div class="item">
          <a class="btn">登录</a>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
    data() {
      return {
        navClass: "",
      };
    },
    mounted() {
      window.addEventListener("scroll", this.scroll);
    },
    methods: {
      scroll() {
        this.scrollTop = 
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        this.navClass = this.scrollTop > 60 ? "nav-fixed":"nav";
      }
    }
}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }

  #nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .nav {
    .menu {
      .btn {
        text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
      }
    }
    .title {
      a {
        text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
      }
    }
  }

  .menu {
    display: flex;
    justify-content: center;
    align-content: flex-end;
    font-size: 18px;
    .item {
      ul {
        position: absolute;
        display: none;
        width: max-content;
        list-style: none;
        margin-top: 8px;
        box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
        background-color: #fff;
        &::before {
          position: absolute;
          top: -8px;
          left: 0;
          width: 100%;
          height: 20px;
          content: "";
        }
        a {
          line-height: 2;
          color: #4c4948 !important;
          text-shadow: none;
          display: block;
          padding: 6px 20px;
          &:hover {
            background: #4ab1f4;
          }
        }
      }
      &:hover {
        ul {
          display: block;
        }
      }
    }
    .btn {
      padding-bottom: 0;
      display: inline-block;
      line-height: 41px;
      padding: 0 20px;
      &:hover {
        color: #49b1f5 !important;
        &::after {
          width: 100%;
        }
      }
    }
  }

  .title {
    display: flex;
    align-items: center;
    a {
      text-shadow: none;
      counter-reset: #fff !important;
      font-size: 36px;
      font-weight: bold;
    }
  }

  

</style>