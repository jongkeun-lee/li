<template>
  <main>
    <div
      class="container"
      :class="{ dark: dark === true, blue: blue === true, red: red === true }"
    >
      <section>
        <div class="contact_wrap">
          <div class="contact_form">
            <div class="head">
              <h2>프로젝트 의뢰</h2>
              <span>Contact Us</span>
            </div>
            <form>
              <ul>
                <li id="selectProject">
                  <dl>
                    <dt>프로젝트를 선택해주세요. <span>중복선택 가능</span></dt>
                    <dd>
                      <div class="check_wrap">
                        <span><input type="checkbox" id="projectType1"/><label for="projectType1">Advertising n DigitalFilm</label></span>
                        <span><input type="checkbox" id="projectType2"/><label for="projectType2">Advertising n DigitalFilm</label></span>
                        <span><input type="checkbox" id="projectType3"/><label for="projectType3">Advertising n DigitalFilm</label></span>
                        <span><input type="checkbox" id="projectType4"/><label for="projectType4">Advertising n DigitalFilm</label></span>
                        <span><input type="checkbox" id="projectType5"/><label for="projectType5">Advertising n DigitalFilm</label></span>
                        <span><input type="checkbox" id="projectType6"/><label for="projectType6">Advertising n DigitalFilm</label></span>
                      </div>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>의뢰 정보를 입력해주세요.</dt>
                    <dd>
                      <div class="inp_wrap">
                        <span><input type="text" placeholder="이름"></span>
                        <span><input type="text" placeholder="기업/단체명"></span>
                        <span><input type="text" placeholder="연락처(-없이)"></span>
                        <span><input type="text" placeholder="이메일"></span>
                      </div>
                      <span>
                        <input type="radio" id="agree">
                        <label for="agree"><button><em>개인정보보호정책</em></button>에 동의합니다.</label>
                      </span>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>어떤 프로젝트인가요?</dt>
                    <dd>
                      <div class="uploadfile_wrap">
                        <textarea @keyup="resize($event.target)" v-bind:style="{ height : textAreaHeight+'px'}" placeholder="내용을 적어주세요..."></textarea>
                        <div class="addfile_wrap">
                          <UploadFile />
                        </div>
                      </div>
                    </dd>
                  </dl>
                </li>
              </ul>
            </form>
            <div class="btn_wrap">
              <button type="submit" class="btn_sb">프로젝트 문의 등록</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>연락처</h2>
        <ul>
          <li>
            <p>li.metasecond@gmail.com</p>
          </li>
          <li>
            <p>010-7722-6189</p>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import UploadFile from './commons/Upload.vue'

export default {
  name: "Contact",
  data() {
    return {
      textAreaHeight : 100,

    }
  },
  props: {
    dark: Boolean,
  },
  components : {
    UploadFile,

  },
  methods: {
    resize(area) {
      this.textAreaHeight = area.scrollHeight;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/css/home.scss";
</style>