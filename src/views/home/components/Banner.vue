<template>
  <div class="banner-container">
    <div class="banner-background"></div>
    <div class="banner-panel">
      <div class="banner-panel-background"></div>
      <div class="banner-title">
        <h1>享保障小額終身壽險</h1>
      </div>
      <div class="banner-subTitle">
        <h3>為最心愛的家人，預留一份溫暖的愛</h3>
      </div>
      <div class="banner-action">
        <button class="banner-btn-outline">保單試算</button>
        <button class="banner-btn-fill">立即投保</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "src/assets/scss/variable.scss";
@import "src/assets/scss/btn.scss";

.banner-container {
  width: 100%;
  margin-bottom: 2rem;
  @include rwd($leptop) {
    height: 25rem;
    background-image: url("src/assets/img/family.jpg");
    background-size: cover;
    background-position: 50% 50%;
    z-index: -1;
  }

  .banner-background {
    height: 20rem;
    width: 100%;
    background-image: url("src/assets/img/family.jpg");
    background-size: cover;
    background-position: 50% 50%;
    @include rwd($leptop) {
      height: 25rem;
      display: none;
    }
  }

  .banner-panel {
    width: 100%;
    height: 20rem;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 1rem;
    @include rwd($leptop) {
      height: 25rem;
      width: 40%;
      padding-left: 2rem;
      padding-right: 4rem;
      // position: absolute;
      // top: 0;
      // left: 0;
    }

    .banner-panel-background {
      position: absolute;
      top: 0;
      right: -50%;
      width: 200%;
      height: 20rem;
      z-index: -1;
      background: -webkit-linear-gradient(
        to top,
        rgb(186, 229, 231),
        rgb(21, 186, 153)
      );
      background: linear-gradient(
        to top,
        rgb(186, 229, 231),
        rgb(21, 186, 153)
      );
      border-radius: 0 0 50% 50%;

      @include rwd($leptop) {
        position: absolute;
        z-index: 0;
        height: 40rem;
        top: -30%;
        left: 0;
        background: -webkit-linear-gradient(
          to top,
          rgb(200, 230, 232) 30%,
          rgb(16, 159, 130)
        );
        background: linear-gradient(
          to top,
          rgb(200, 230, 232) 30%,
          rgb(16, 159, 130)
        );
        border-radius: 0 50% 50% 0;
        width: 100%;
      }
      @include rwd($pc) {
        height: 50rem;
        top: -12rem;
        background: -webkit-linear-gradient(
          to top,
          rgb(200, 230, 232) 30%,
          rgb(16, 159, 130)
        );
        background: linear-gradient(
          to top,
          rgb(200, 230, 232) 30%,
          rgb(16, 159, 130)
        );
      }
    }

    // transform: translateX(-12rem);

    .banner-title {
      z-index: 1;
      color: $white;
      font-size: 1.4rem;
      padding-bottom: 1rem;
      text-align: center;
      text-shadow: 0.1em 0.1em 0.4em $black;
      @include rwd($leptop) {
        text-align: right;
      }
    }

    .banner-subTitle {
      z-index: 1;
      color: $white;
      font-size: 1.4rem;
      padding-bottom: 1rem;
      text-align: center;
      text-shadow: 0.1em 0.1em 0.4em $black;
      @include rwd($leptop) {
        text-align: right;
      }
    }

    .banner-action {
      z-index: 1;
      padding-top: 1rem;
      width: 100%;
      display: flex;
      gap: 2rem;
      justify-content: center;
      @include rwd($leptop) {
        width: 100%;
        justify-content: right;
      }

      // padding-left: 12rem;
      .banner-btn-outline {
        @extend %outline-btn;
        width: 30%;
        font-size: 1.6rem;
        padding: 0.5rem 0;
        max-width: 12rem;
        @include rwd($leptop) {
          width: 50%;
          max-width: 12rem;
        }
      }

      .banner-btn-fill {
        @extend %fill-btn;
        width: 30%;
        font-size: 1.6rem;
        padding: 0.5rem 0;
        max-width: 12rem;

        @include rwd($leptop) {
          width: 50%;
          max-width: 12rem;
        }
      }
    }
  }
}
</style>
