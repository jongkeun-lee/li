<template>
  <main>
    <div class="container" :class="{ dark: dark === true }">
      <div>
        <button>둘러보기</button>
        <button>연락하기</button>
      </div>

      <!-- <section>
        <h2>에라히는...</h2>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </section>
      <section>
        <h2>프로젝트 의뢰</h2>
        <ul>
          <li>
            <p>li.metasecond@gmail.com</p>
          </li>
          <li>
            <p>010-7722-6189</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>참여 프로젝트</h2>
        <ul>
          <li>
            <p>현대백화접</p>
          </li>
          <li>
            <p>우미 린</p>
          </li>
          <li>
            <p>FREDIT</p>
          </li>
          <li>
            <p>삼성물산</p>
          </li>
          <li>
            <p>쌤플러스</p>
          </li>
        </ul>
      </section> -->
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  props: {
    dark: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/home.scss";
</style>