<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const currentChannel = ref(route.query.channel || '0')
//切换channel方法
const switchChannel = nav => {
  currentChannel.value = nav
  router.push(`/${nav}`)
}
// 监听路由变化，同步更新 Tab
watch(
  () => route.query.channel,
  newChannel => {
    if (newChannel) {
      currentChannel.value = newChannel
    }
  }
)
</script>

<template>
  <div class="channel">
    <div id="poda">
      <div class="glow"></div>
      <div class="darkBorderBg"></div>
      <div class="darkBorderBg"></div>
      <div class="darkBorderBg"></div>

      <div class="white"></div>
      <div class="border"></div>

      <div id="main">
        <div
          class="button"
          data-tooltip="来学习Web!"
          @click="switchChannel('web')"
        >
          <div class="button-wrapper">
            <div class="text">Web</div>
            <span class="icon">
              <svg
                t="1737100016244"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8460"
                width="16"
                height="16"
                fill="#e65100"
              >
                <path
                  d="M128 0l888.832 0-72.704 843.776-376.832 115.712-358.4-115.712zM839.68 254.976l21.504-128-572.416-1.024 36.864 384 372.736 0 0 100.352-124.928 44.032-130.048-46.08-8.192-54.272-102.4 1.024 15.36 135.168 219.136 76.8 230.4-72.704 29.696-309.248-405.504 0-10.24-130.048 428.032 0z"
                  p-id="8461"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div id="pink-mask"></div>
      </div>
    </div>
    <div id="poda">
      <div class="glow"></div>
      <div class="darkBorderBg"></div>
      <div class="darkBorderBg"></div>
      <div class="darkBorderBg"></div>

      <div class="white"></div>
      <div class="border"></div>

      <div id="main">
        <div
          class="button"
          data-tooltip="来学习Android!"
          @click="switchChannel('android')"
        >
          <div class="button-wrapper">
            <div class="text">Andriod</div>
            <span class="icon">
              <svg
                t="1737100051977"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9495"
                width="200"
                height="200"
                fill="#a5ca3a"
              >
                <path
                  d="M615.878882 177.494507l42.303478-61.521169c1.811252-2.619664 1.146103-6.252401-1.473561-8.063653l-1.054005-0.726547c-2.619664-1.821485-6.231935-1.146103-8.043187 1.473561l-43.521213 63.291488c-28.427446-12.361539-60.139705-19.268856-93.601818-19.268856-31.753191 0-61.950957 6.221702-89.232301 17.426905l-41.587164-60.477396c-1.801019-2.619664-5.423523-3.284813-8.043187-1.473561l-1.054005 0.726547c-2.619664 1.811252-3.284813 5.443989-1.483794 8.073886l40.215934 58.461483c-63.23009 30.300097-108.664885 88.075964-117.915573 156.299789l438.20018 0C720.552873 265.017886 676.919097 208.296023 615.878882 177.494507zM418.217057 265.621637c-12.054547 0-21.837354-9.813506-21.837354-21.908986 0-12.095479 9.782807-21.898753 21.837354-21.898753 12.06478 0 21.837354 9.803273 21.837354 21.898753C440.054411 255.80813 430.281837 265.621637 418.217057 265.621637zM606.710059 265.621637c-12.054547 0-21.837354-9.813506-21.837354-21.908986 0-12.095479 9.782807-21.898753 21.837354-21.898753 12.06478 0 21.837354 9.803273 21.837354 21.898753C628.547413 255.80813 618.774839 265.621637 606.710059 265.621637z"
                  p-id="9496"
                ></path>
                <path
                  d="M260.904195 419.506423l0 179.446975c0 30.760584-19.596314 55.933917-43.562145 55.933917l-9.680477 0c-23.955598 0-43.562145-25.173332-43.562145-55.933917l0-179.446975c0-30.760584 19.606547-55.923684 43.562145-55.923684l9.680477 0C241.307881 363.582739 260.904195 388.745838 260.904195 419.506423z"
                  p-id="9497"
                ></path>
                <path
                  d="M859.896478 420.570661l0 179.446975c0 30.770817-19.596314 55.933917-43.562145 55.933917l-9.680477 0c-23.955598 0-43.562145-25.163099-43.562145-55.933917l0-179.446975c0-30.760584 19.606547-55.923684 43.562145-55.923684l9.680477 0C840.300164 364.646977 859.896478 389.810077 859.896478 420.570661z"
                  p-id="9498"
                ></path>
                <path
                  d="M732.934878 360.830045l0 354.074178c0 24.579815-20.046568 44.687782-44.554752 44.687782l-36.746926 0 0 102.320387c0 30.760584-19.606547 55.923684-43.562145 55.923684l-9.680477 0c-23.955598 0-43.562145-25.163099-43.562145-55.923684l0-102.320387-81.864496 0 0 101.143585c0 30.760584-19.596314 55.933917-43.562145 55.933917l-9.680477 0c-23.955598 0-43.562145-25.173332-43.562145-55.933917l0-101.143585-40.062438 0c-24.508183 0-44.554752-20.107967-44.554752-44.687782l0-354.074178L732.934878 360.830045z"
                  p-id="9499"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div id="pink-mask"></div>
      </div>
    </div>
    <div id="poda">
      <div class="glow"></div>
      <div class="darkBorderBg"></div>
      <div class="darkBorderBg"></div>
      <div class="darkBorderBg"></div>

      <div class="white"></div>
      <div class="border"></div>

      <div id="main">
        <div
          class="button"
          data-tooltip="来学习Ios!"
          @click="switchChannel('ios')"
        >
          <div class="button-wrapper">
            <div class="text">Ios</div>
            <span class="icon">
              <svg
                t="1737099939628"
                viewBox="0 0 1084 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6566"
                width="200"
                height="200"
                fill="#c4c4c4"
              >
                <path
                  d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z"
                  p-id="6567"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div id="pink-mask"></div>
      </div>
    </div>
    <div id="poda">
      <div class="glow"></div>
      <div class="darkBorderBg"></div>
      <div class="darkBorderBg"></div>
      <div class="darkBorderBg"></div>

      <div class="white"></div>
      <div class="border"></div>

      <div id="main">
        <div
          class="button"
          data-tooltip="来学习Server!"
          @click="switchChannel('server')"
        >
          <div class="button-wrapper">
            <div class="text">Server</div>
            <span class="icon">
              <svg
                t="1737100155865"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="10634"
                width="200"
                height="200"
                fill="#f23c3c"
              >
                <path
                  d="M896 128H128a42.666667 42.666667 0 0 0-42.666667 42.666667v256a42.666667 42.666667 0 0 0 42.666667 42.666666h768a42.666667 42.666667 0 0 0 42.666667-42.666666V170.666667a42.666667 42.666667 0 0 0-42.666667-42.666667z m-42.666667 256H170.666667V213.333333h682.666666v170.666667z m42.666667 170.666667H128a42.666667 42.666667 0 0 0-42.666667 42.666666v256a42.666667 42.666667 0 0 0 42.666667 42.666667h768a42.666667 42.666667 0 0 0 42.666667-42.666667v-256a42.666667 42.666667 0 0 0-42.666667-42.666666z m-42.666667 256H170.666667v-170.666667h682.666666v170.666667z"
                  fill=""
                  p-id="10635"
                ></path>
                <path
                  d="M725.333333 256h85.333334v85.333333h-85.333334z m-128 0h85.333334v85.333333h-85.333334z m128 426.666667h85.333334v85.333333h-85.333334z m-128 0h85.333334v85.333333h-85.333334z"
                  fill=""
                  p-id="10636"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div id="pink-mask"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 导航栏样式按钮 */
.channel {
  margin: 5rem auto 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.button {
  --width: 100px;
  --height: 35px;
  --tooltip-height: 35px;
  --tooltip-width: 100px;
  --gap-between-tooltip-to-button: 18px;
  --button-color: #f2e2c4;
  --tooltip-color: #fff;
  width: var(--width);
  height: var(--height);
  background: var(--button-color);
  position: relative;
  text-align: center;
  border-radius: 0.5em;
  font-family: 'Arial';
  transition: background 0.7s;
  border: none;
}

.button::before {
  position: absolute;
  content: attr(data-tooltip);
  width: var(--tooltip-width);
  height: var(--tooltip-height);
  background-color: #d1c4ac;
  font-size: 0.9rem;
  color: #4f4a43;
  border-radius: 0.25em;
  line-height: var(--tooltip-height);
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
  left: calc(50% - var(--tooltip-width) / 2);
}

.button::after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #d1c4ac;
  left: calc(50% - 10px);
  bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
}

.button::after,
.button::before {
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-wrapper,
.text,
.icon {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #857766;
}

.text {
  top: 0;
}

.text,
.icon {
  transition: top 0.5s;
}

.icon {
  color: #fff;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon svg {
  width: 24px;
  height: 24px;
}

.button:hover .text {
  top: -100%;
}

.button:hover .icon {
  top: 0;
}

.button:hover:before,
.button:hover:after {
  opacity: 1;
  visibility: visible;
}

.button:hover:after {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
}

.button:hover:before {
  bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
}

/* 金色按钮样式 */
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
  max-height: 42px;
  max-width: 112px;
  border-radius: 10px;
  filter: blur(2px);
}

.white::before {
  content: '';
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
  width: var(--width);
  height: var(--height);
  border-radius: 11px;
  filter: blur(0.5px);
}

.border::before {
  content: '';
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
  max-height: 42px;
  max-width: 112px;
}

.darkBorderBg::before {
  content: '';
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
  max-height: 40px;
  max-width: 165px;
}

.glow::before {
  content: '';
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

#main {
  position: relative;
  font-family: 'Courier New', Courier, monospace; /* Retro-style font */
}

@keyframes rotate {
  100% {
    transform: translate(-50%, -50%) rotate(450deg);
  }
}
</style>
