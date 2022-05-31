<template>
  <header>
    <div class="inner">
      <router-link
        to="/index"
        class="introLogo"
        @mouseover="$emit('darkModeOn')"
        @mouseout="$emit('darkModeOff')"
      >
        <strong> <b>L</b><b>i</b> </strong>
        <em>
          <span class="fc-s">에라히 : </span>
          <span class="fc-o">Professional Front-end Development Team</span>
        </em>
      </router-link>
      <!-- <div>
        <strong>MetaSecond</strong>님 반갑습니다.
      </div> -->
      <!-- <button class="gnb">
        <i></i>
        <i></i>
        <i></i>
      </button> -->
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "../assets/css/header.scss";
</style>