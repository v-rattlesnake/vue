<template>
  <div class="uploading row animated bounceInRight">
    <div class="uploading_con col-lg-6">
      <form>
        <ul>
          <li>
            <div>
              <label for="name">歌曲名称</label>
              <input id="name" type="text" placeholder="例：告白气球" />
            </div>
            <span>*请输入歌曲名称</span>
          </li>
          <li>
            <div>
              <label for="zuozhe">作者</label>
              <input id="zuozhe" type="text" placeholder="例：周杰伦" />
            </div>
            <span>*请输入歌曲作者</span>
          </li>
          <li>
            <div>
              <span>歌词</span>
              <div class="fileLyric">
                <p :style="{ 'z-index': audioUrl.length }"></p>
                <input
                  class="lyric"
                  type="file"
                  accept=".txt"
                  :title="title"
                  @change="audio"
                />
              </div>
            </div>
          </li>
          <li>
            <div>
              <span>音频</span>
              <div class="fileAudio">
                <p
                  :style="{ 'z-index': audioUrl.length }"
                  v-html="audioTitle"
                ></p>
                <input
                  class="audio"
                  type="file"
                  accept=".txt"
                  :title="title"
                  @change="audio"
                />
                <audio :src="audioUrl"></audio>
              </div>
            </div>
          </li>
          <li>
            <div>
              <span>封面</span>
              <div class="fileImg">
                <p>拖拽或点击可上传<br />暂只支持png、jpg、jpeg</p>
                <input
                  class="image"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  title="暂未选择图片"
                  @change="audio"
                />
                <img :src="imageUrl" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div class="btn">
              <btn class-number="3">重置</btn>
              <btn class-number="5">上传</btn>
            </div>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
import btn from "./../components/AppComponents/btn";

export default {
  name: "uploading",
  components: {
    btn
  },
  data() {
    return {
      files: [],
      imageUrl: "",
      audioTitle: "拖拽或点击可上传<br/>暂只支持mp3",
      audioUrl: "",
      title: "暂未选择音频"
    };
  },
  mounted() {
    let img = document.querySelector(".fileImg");
    let audio = document.querySelector(".fileAudio");
    let lyric = document.querySelector(".fileLyric");
    img.addEventListener("dragenter", this.dragenter);
    img.addEventListener("dragover", this.dragenter);
    img.addEventListener("drop", this.drop);
    img.addEventListener("dragleave", this.dragleave);
    audio.addEventListener("dragenter", this.dragenter);
    audio.addEventListener("dragover", this.dragenter);
    audio.addEventListener("drop", this.drop);
    audio.addEventListener("dragleave", this.dragleave);
    lyric.addEventListener("dragenter", this.dragenter);
    lyric.addEventListener("dragover", this.dragenter);
    lyric.addEventListener("drop", this.drop);
    lyric.addEventListener("dragleave", this.dragleave);
  },
  methods: {
    dragenter(e) {
      e.stopPropagation();
      e.preventDefault();
      console.log("进入");
    },
    dragover() {
      console.log(2);
    },
    drop(e) {
      e.stopPropagation();
      e.preventDefault();
      var dt = e.dataTransfer;
      console.log(e);
      console.log(e.target.className, dt.files[0].type.slice(0, 5));
      if (e.target.className !== dt.files[0].type.slice(0, 5)) return;
      console.log(dt.files[0]);
      this.uploadFile(dt.files[0]);
    },
    dragleave(e) {
      e.stopPropagation();
      e.preventDefault();
      console.log("离开");
    },
    img(e) {
      // const file = e.srcElement.files[0];
      // const imgURL = window.URL.createObjectURL(file);
      // this.imageUrl = imgURL;
      //获取文件
      var file = e.target.files[0];
      this.uploadFile(file);
      //创建读取文件的对象
      // var reader = new FileReader();
      //创建文件读取相关的变量
      // var imgFile;
      // reader.onload = e => {
      //   console.log(e);
      //   imgFile = e.target.result;
      //   // console.log(imgFile);
      //   this.imageUrl = imgFile;
      // };
      //正式读取文件
      // reader.readAsDataURL(file);
      e.target.value = "";
    },
    audio(e) {
      var file = e.target.files[0];
      this.uploadFile(file);
      e.target.value = "";
    },
    uploadFile(file) {
      return new Promise((resolve, reject) => {
        var fr = new FileReader();
        var that = this;
        var item = {};
        fr.readAsDataURL(file);
        fr.onload = function() {
          item = {
            src: this.result,
            name: file.name,
            uploadPercentage: 0,
            showPercentage: true
          };
          that.files.push(item);
          var fd = new FormData();
          fd.append("file", file);

          if (file.type.slice(0, 5) === "image") {
            that.imageUrl = item.src;
          } else {
            that.audioUrl = item.src;
            that.audioTitle = "点击试听";
            that.title = "";
          }

          console.log(fd);
          // console.log(item);
          // var xhr = new XMLHttpRequest();
          // xhr.open("POST", "http://192.168.1.39:8080", true);
          // xhr.upload.addEventListener(
          //   "progress",
          //   function(e) {
          //     if (e.loaded == e.total) {
          //       item.uploadPercentage = Math.round(
          //         (e.loaded * 100) / e.total
          //       );
          //       setTimeout(() => {
          //         item.showPercentage = false;
          //       }, 1000);
          //     } else {
          //       item.uploadPercentage = Math.round(
          //         (e.loaded * 100) / e.total
          //       );
          //     }
          //   },
          //   false
          // );
          // xhr.onload = function() {
          //   //   alert("上传完成！");
          // };
          // xhr.send(fd);
        };
      });
    }
  }
};
</script>

<style scoped lang="less">
.uploading {
  background: #f5f5f5;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .uploading_con {
    font-size: 14px;
    color: #758396;
    margin: 0 auto;
    li {
      position: relative;
      line-height: 30px;
      margin: 20px 0;
      > span {
        position: absolute;
        top: 0;
        left: 102%;
        width: 110px;
        color: #f009;
      }
      div {
        display: flex;
        justify-content: space-between;
        label {
          margin: 0;
        }
        div {
          width: 60%;
          max-width: 300px;
          min-height: 100px;
          border: 1px dashed currentColor;
          justify-content: center;
          align-items: center;
          position: relative;
          p {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            line-height: 1;
            position: absolute;
            cursor: pointer;
          }
          input,
          audio {
            position: absolute;
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          img {
            position: relative;
            width: 100%;
          }
        }
        input[type="text"] {
          width: 60%;
          max-width: 300px;
          padding-left: 10px;
          outline: none;
          background: transparent;
          color: #758396;
          border: 1px solid currentColor;
          &::-webkit-input-placeholder {
            /* WebKit browsers */
            color: #aaa;
          }
          &:-moz-placeholder {
            /* Mozilla Firefox 4 to 18 */
            color: #aaa;
          }
          &::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #aaa;
          }
          &::-ms-input-placeholder {
            /* Internet Explorer 10+ */
            color: #aaa;
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .uploading .uploading_con li > span {
    left: unset;
    right: 0;
    width: 60%;
    max-width: 300px;
    top: 25px;
  }
}
</style>

<style lang="less">
.btn button {
  line-height: 24px;
  padding: 0 20px;
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 100, 23, 0.25);
  }
  &:hover {
    background: #f86017;
  }
  &:first-of-type {
    color: #666;
  }
  &:last-of-type {
    color: #f86017;
  }
}
</style>
