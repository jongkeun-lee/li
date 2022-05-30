<template>
  <main>
    <section class="intro">
      <i class="tag fc-b">Introduction</i>
      <div class="inner">
        <h1>
          <p><span class="fc-v"><b>L</b><b>i</b></span> <span class="fc-y">{</span></p>
          <p class="ti"><span class="fc-s">에라히 : </span><span class="fc-o">'Professional Front-end Development Team'</span><span class="fc-a">,</span></p>
          <p><span class="fc-y">}</span></p>
        </h1>
      </div>
      <i class="tag cl fc-b">Introduction</i>
    </section>
    <section class="greeting">
      <i class="tag fc-b">Greeting</i>
      <div class="inner">
        <p>반갑습니다.</p>
        <div class="input_wrap">
          <input type="text" placeholder="아무개" class="fc-v"> 님
        </div>
        <div class="btn_wrap">
          <button class="btn_input">입력</button>
          <router-link to="/index" class="btn_skip">넘어가기</router-link>
        </div>
      </div>
      <i class="tag fc-b">Greeting</i>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Intro',
  props: {

  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/intro.scss';
</style>