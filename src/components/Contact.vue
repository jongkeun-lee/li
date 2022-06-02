<template>
  <main>
    <div
      class="container"
      :class="{ dark: dark === true, blue: blue === true, red: red === true }"
    >
      <section>
        <h2>프로젝트 의뢰</h2>
        <ul>
          <li></li>
          <li></li>
        </ul>
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
export default {
  name: "Contact",
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