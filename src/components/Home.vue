<template>
  <main>
    <div
      class="container"
      :class="{ dark: dark === true, blue: blue === true, red: red === true }"
    >
      <div class="btn_wrap">
        <router-link
          to="/Overview"
          class="button btn1"
          :class="{ on: blue === true }"
          @mouseover="blue = true"
          @mouseout="blue = false"
        >
          <div class="button__deco">
            <div class="button__deco-filler"></div>
          </div>
          <span class="button__text">
            <span class="button__text-inner">Overview</span>
          </span>
        </router-link>
        <router-link
          to="/Contact"
          class="button btn2"
          :class="{ on: red === true }"
          @mouseover="red = true"
          @mouseout="red = false"
        >
          <div class="button__deco">
            <div class="button__deco-filler"></div>
          </div>
          <span class="button__text">
            <span class="button__text-inner">Contact</span>
          </span>
        </router-link>
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
import { gsap } from "gsap";
export default {
  name: "Home",
  data() {
    return {
      blue: false,
      red: false,
    };
  },
  props: {
    dark: Boolean,
  },
  methods: {
    magnetBtn() {
      const buttons = [...document.querySelectorAll(".button")];

      document.addEventListener("mousemove", (e) => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        buttons.forEach((button) => {
          const filler = button.querySelector(".button__deco-filler");
          const text = button.querySelector(".button__text-inner");

          const rect = button.getBoundingClientRect();

          const x = mouseX - (rect.x + rect.width / 2);
          const y = mouseY - (rect.y + rect.height / 2);

          const dist = Math.sqrt(x * x + y * y);
          const angle = Math.atan2(y, x);
          const capped_dist = Math.min(dist, 50);

          const dx = capped_dist * Math.cos(angle);
          const dy = capped_dist * Math.sin(angle);

          const maxDistance = 50;

          const mouseIsInRange =
            e.pageX > rect.x - maxDistance &&
            e.pageX < rect.x + (rect.width + maxDistance) &&
            e.pageY > rect.y - maxDistance &&
            e.pageY < rect.y + (rect.height + maxDistance);

          if (mouseIsInRange) {
            gsap
              .timeline()
              .to(button, {
                duration: 1,
                x: dx,
                y: dy,
              })
              .to(
                filler,
                {
                  y: 0,
                  duration: 1,
                  ease: "power3.easeOut",
                },
                "<"
              )
              .to(
                text,
                {
                  color: "#fff",
                  scale: 1.2,
                },
                "<"
              );
          } else {
            gsap
              .timeline()
              .to(button, {
                duration: 1,
                x: 0,
                y: 0,
              })
              .to(
                filler,
                {
                  y: "75%",
                  duration: 0.5,
                  ease: "power3.easeOut",
                },
                "<"
              )
              .to(
                text,
                {
                  color: "#fff",
                  scale: 1.0,
                },
                "<"
              );
          }
        });
      });
    },
  },
  mounted() {
    this.magnetBtn();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/home.scss";
</style>