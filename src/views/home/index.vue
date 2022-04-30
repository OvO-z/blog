<template>
  <div>
    <!-- banner -->
    <div class="home-banner" :style="cover">
    </div>
  </div>
</template>


<script>
    export default {
        computed: {
            cover() {
            var cover = "https://static.talkxj.com/config/0bee7ba5ac70155766648e14ae2a821f.jpg";
            // this.$store.state.blogInfo.pageList.forEach(item => {
            //     if (item.pageLabel == "home") {
            //     cover = item.pageCover;
            //     }
            // });
            return "background: url(" + cover + ") center center / cover no-repeat";
            }
        }
    }
</script>

<style lang='scss' scoped>
    .home-banner {
        position: absolute;
        top: -60px;
        left: 0;
        right: 0;
        height: 100vh;
        background-attachment: fixed;
        text-align: center;
        color: #fff !important;
        animation: header-effect 1s;
    }
</style>