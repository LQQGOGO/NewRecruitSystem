<template>
  <div class="gradient-text">
    <slot></slot>
  </div>
</template>

<style scoped>
.gradient-text {
    color: transparent;
    background: -webkit-linear-gradient(30deg, #32c5ff 25%, #b620e0 50%, #f7b500 75%, #20e050 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: auto;
    animation: gradientText 300s infinite linear;
    -webkit-animation: gradientText 300s infinite linear;
}

@keyframes gradientText {
    0% {
        background-position: 0;
    }
    100% {
        background-position: 28000px;
    }
}
</style>
