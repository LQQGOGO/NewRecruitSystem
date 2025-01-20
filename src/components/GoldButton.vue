<template>
<div id="poda">
  <div class="glow"></div>
  <div class="darkBorderBg"></div>
  <div class="darkBorderBg"></div>
  <div class="darkBorderBg"></div>

  <div class="white"></div>
  <div class="border"></div>

  <div id="main">
    <div class="input" name="text" type="text" />
    <div id="pink-mask"></div>
  </div>
</div>
</template>

<style scoped>
.white,
.border,
.darkBorderBg,
.glow {
  max-height: 70px;
  max-width: 314px;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  z-index: -1;
  border-radius: 12px;
  filter: blur(3px);
}

.input {
  background-color: #f2e2c4; /* Muted beige for retro */
  color: #3a2e20; /* Dark brown for contrast */
  border: none;
  width: 303px;
  height: 59px;
  border-radius: 10px;
  font-size: 18px;
}

#poda {
  display: flex;
  align-items: center;
  justify-content: center;
}

#pink-mask {
  pointer-events: none;
  width: 30px;
  height: 20px;
  position: absolute;
  background: #f28e8e; /* Warm coral */
  top: 10px;
  left: 5px;
  filter: blur(20px);
  opacity: 0.8;
  transition: all 2s;
}

#main:hover > #pink-mask {
  opacity: 0;
}

.white {
  max-height: 63px;
  max-width: 307px;
  border-radius: 10px;
  filter: blur(2px);
}

.white::before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(83deg);
  position: absolute;
  width: 600px;
  height: 600px;
  background-repeat: no-repeat;
  background-position: 0 0;
  filter: brightness(1.4);
  background-image: conic-gradient(
    rgba(0, 0, 0, 0) 0%,
    #dcb483,
    rgba(0, 0, 0, 0) 8%,
    rgba(0, 0, 0, 0) 50%,
    #d16e5a,
    rgba(0, 0, 0, 0) 58%
  );
  transition: all 2s;
}

.border {
  max-height: 59px;
  max-width: 303px;
  border-radius: 11px;
  filter: blur(0.5px);
}

.border::before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(70deg);
  position: absolute;
  width: 600px;
  height: 600px;
  filter: brightness(1.3);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-image: conic-gradient(
    #3a2e20,
    #c98f65 5%,
    #3a2e20 14%,
    #3a2e20 50%,
    #f28e8e 60%,
    #3a2e20 64%
  );
  transition: all 2s;
}

.darkBorderBg {
  max-height: 65px;
  max-width: 312px;
}

.darkBorderBg::before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(82deg);
  position: absolute;
  width: 600px;
  height: 600px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-image: conic-gradient(
    rgba(0, 0, 0, 0),
    #725d4a,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0) 50%,
    #d16e5a,
    rgba(0, 0, 0, 0) 60%
  );
  transition: all 2s;
}

#poda:hover > .darkBorderBg::before,
#poda:focus-within > .darkBorderBg::before {
  transform: translate(-50%, -50%) rotate(262deg);
  transition: all 4s; /* Added transition for focus-within */
}

#poda:hover > .glow::before,
#poda:focus-within > .glow::before {
  transform: translate(-50%, -50%) rotate(240deg);
  transition: all 4s; /* Added transition for focus-within */
}

#poda:hover > .white::before,
#poda:focus-within > .white::before {
  transform: translate(-50%, -50%) rotate(263deg);
  transition: all 4s; /* Added transition for focus-within */
}

#poda:hover > .border::before,
#poda:focus-within > .border::before {
  transform: translate(-50%, -50%) rotate(250deg);
  transition: all 4s; /* Added transition for focus-within */
}

.glow {
  overflow: hidden;
  filter: blur(30px);
  opacity: 0.4;
  max-height: 130px;
  max-width: 354px;
}

.glow::before {
  content: "";
  z-index: -2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(60deg);
  position: absolute;
  width: 999px;
  height: 999px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-image: conic-gradient(
    #000,
    #c98f65 5%,
    #000 38%,
    #000 50%,
    #f28e8e 60%,
    #000 87%
  );
  transition: all 2s;
}

.filterBorder {
  height: 42px;
  width: 40px;
  position: absolute;
  overflow: hidden;
  top: 7px;
  right: 7px;
  border-radius: 10px;
}

#main {
  position: relative;
  font-family: "Courier New", Courier, monospace; /* Retro-style font */
}

@keyframes rotate {
  100% {
    transform: translate(-50%, -50%) rotate(450deg);
  }
}

</style>
