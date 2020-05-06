<template>
  <div class="home">
    <div class="head">
      <div class="head-inner">
        <div class="logo">
          <img
            class="headimg"
            src="//www.iqiyipic.com/common/fix/site-v4/sprite-headLogo-nonIndex.png"
            alt
          />
          <i class="yuan"></i>
          <h1 class="img1font">动漫</h1>
        </div>
        <div class="movie">
          <a href class="changemovie">电视剧</a>
          <a href class="changemovie">电影</a>
          <a href class="changemovie">综艺</a>
          <a href class="changemovie">动漫</a>
          <a href class="changemovie">儿童</a>
          <a href class="changemovie">纪录片</a>
          <span class="changemovie">全部</span>
        </div>
        <div class="seachall">
          <div class="seach">
            <input type="text" maxlength="15" name="seach" placeholder="奔跑吧兄弟" />
            <span class="seachspan">
              <a href>热搜榜</a>
            </span>
          </div>
          <div @click="seach" class="seachbtn">
            <span>搜全网</span>
          </div>
        </div>
        <div class="headeritem">
          <div class="headericon">
            <div>
              <i class="iconfont icon-VIP"></i>
            </div>
            <div class="vipfont">VIP</div>
          </div>
          <div class="headericon">
            <div>
              <i class="iconfont icon-shangchuan_huaban"></i>
            </div>
            <div class="icon_font">上传</div>
          </div>
          <div class="headericon">
            <div>
              <i class="iconfont icon-kehuduan"></i>
            </div>
            <div class="icon_font">客户端</div>
          </div>
          <div class="headericon">
            <div>
              <i class="iconfont icon-xiaoxi"></i>
            </div>
            <div class="icon_font">消息</div>
          </div>
          <div class="headericon">
            <div>
              <i class="iconfont icon-lishi"></i>
            </div>
            <div class="icon_font">看过</div>
          </div>
          <div class="headericon">
            <img
              class="touxiang"
              src="//www.iqiyipic.com/common/fix/site-v4/header-userImg-default-green.png"
              alt
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    changepic() {},
    seach() {
      let seach = document.getElementsByName("seach")[0];
      let seach_inner = seach.value || seach.placeholder;
      console.log(seach_inner);
    }
  },
  computed: {},
  mounted() {}
};
</script>
<style scoped>
/*顶部导航栏*/
.head {
  background: #000;
  width: 100%;
  height: 64px;
}
.head-inner {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}
.headimg {
  width: 120px;
  height: 40px;
  margin: 15px auto;
}
.logo {
  color: #00be06;
  display: flex;
}
.img1font {
  margin: auto 0;
}
.yuan {
  width: 4px;
  height: 4px;
  margin: 31px 10px 0;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: #00be06;
}
.changemovie {
  color: #ccc;
  font-size: 15px;
  text-decoration: none;
  margin: 0 10px;
  line-height: 70px;
}
.changemovie:hover {
  color: #00be06;
}
.seachall {
  display: flex;
}
.seach {
  border-radius: 21px 0 0 21px;
  background: #333;
  color: rgb(153, 153, 153);
  width: 324px;
  height: 42px;
  margin-top: 14px;
  font-size: 14px;
}
.seach > input {
  margin-top: 10px;
  margin-left: 15px;
  color: rgb(153, 153, 153);
  background: #333;
  outline: 0;
  border: 0;
  font-size: 16px;
}
.seachspan {
  float: right;
  margin-top: 10px;
}
.seachspan a {
  color: rgb(153, 153, 153);
}
.seachspan ::after {
  clear: both;
  display: block;
}
.seachbtn {
  background: #00be06;
  height: 42px;
  width: 96px;
  margin-top: 14px;
  border-radius: 0 21px 21px 0;
  cursor: pointer;
}
.seachbtn > span {
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  margin-left: 20px;
}
.vipfont {
  color: #dab176;
  font-size: 14px;
  margin-top: -7px;
}
.icon_font {
  font-size: 14px;
  margin-top: -7px;
}
.headericon:hover {
  color: #00be06;
}
.headerpic {
  width: 24px;
}
.headericon {
  margin-top: 5px;
  margin-left: 20px;
  cursor: pointer;
  text-align: center;
  color: #999;
}
.headeritem {
  display: flex;
}
.touxiang {
  border-radius: 50%;
  margin-top: 5px;
}
.iconfont {
  font-size: 24px;
}
.icon-VIP {
  color: #dab176;
  margin-top: -5px;
}
</style>
