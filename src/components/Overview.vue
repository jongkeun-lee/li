<template>
  <main>
    <div
      class="container"
      :class="{ dark: dark === true, blue: blue === true, red: red === true }"
    >
      <section>
        <h2>에라히는...</h2>
        <ul>
          <li></li>
          <li></li>
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
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "Overview",
  data() {},
  props: {
    dark: Boolean,
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/css/home.scss";
</style>