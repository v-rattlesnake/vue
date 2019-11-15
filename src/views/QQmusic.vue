<template>
    <div class="qqMusic">
        <btns></btns>
        <ul>
            <li>
                <music-list></music-list>
            </li>
            <li v-for="(val,ind) in musicLists" :key="ind">
                <music-list>
                    <template v-slot:index="index">{{ ind+1 }}</template>
                    <template v-slot:name="name">{{ val.a }}</template>
                    <template v-slot:zuozhe="zuozhe">{{ val.b }}</template>
                    <template v-slot:time="time">3:44</template>
                    <template v-slot:likes="likes">{{ val.c }}</template>
                    <template v-slot:play="play">
                        <div class="listCaozuo">
                            <span>播放</span>
                            <span>下架</span>
                            <span>删除</span>
                        </div>
                    </template>
                </music-list>
            </li>
        </ul>
    </div>
</template>

<script>
    import btns from "../components/btn"
  import musicList from "../components/QQmusic/QQmusicList"
  export default {
    name: "QQmusic",
    data(){
      return {
        musicLists:[{
          a:"阿斯顿发",
          b:"asdfasd",
          c:"dfasdfasdf",
          d:"999"
        },{
          a:"adsf",
          b:"a311sd",
          c:"46546dfasdf",
          d:"9"
        },{
          a:"ad3213sf",
          b:"a311sd21",
          c:"46546sdf",
          d:"98"
        }]
      }
    },
    components:{
      musicList,
      btns
    }
  };
</script>

<style scoped lang="less">
.qqMusic{
    padding: 0 1rem;
    background: #f5f5f5;
    ul{
        background: rgba(0,0,0,.05);
        li{
            padding: 0 1rem;
            &:nth-of-type(2n){
                background: rgba(255,255,255,.4);
            }
            .listCaozuo{
                display: flex;
                justify-content: space-around;
            }
        }
    }
}
</style>