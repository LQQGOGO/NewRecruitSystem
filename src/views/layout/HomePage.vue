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
  <div class="container">
    <div class="channel">
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
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8460"
              width="200"
              height="200"
            >
              <path
                d="M128 0l888.832 0-72.704 843.776-376.832 115.712-358.4-115.712zM839.68 254.976l21.504-128-572.416-1.024 36.864 384 372.736 0 0 100.352-124.928 44.032-130.048-46.08-8.192-54.272-102.4 1.024 15.36 135.168 219.136 76.8 230.4-72.704 29.696-309.248-405.504 0-10.24-130.048 428.032 0z"
                p-id="8461"
              ></path>
            </svg>
          </span>
        </div>
      </div>
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
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9495"
              width="200"
              height="200"
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
              class="icon"
              viewBox="0 0 1084 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6566"
              width="200"
              height="200"
            >
              <path
                d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z"
                p-id="6567"
              ></path>
            </svg>
          </span>
        </div>
      </div>
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
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="10634"
              width="200"
              height="200"
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
    </div>
    <div class="introduction"></div>

    <!-- 卡车装饰部分 -->
    <div class="loader">
      <div class="truckWrapper">
        <div class="truckBody">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 198 93"
            class="trucksvg"
          >
            <path
              stroke-width="3"
              stroke="#282828"
              fill="#F83D3D"
              d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
            ></path>
            <path
              stroke-width="3"
              stroke="#282828"
              fill="#7D7C7C"
              d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
            ></path>
            <path
              stroke-width="2"
              stroke="#282828"
              fill="#282828"
              d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"
            ></path>
            <rect
              stroke-width="2"
              stroke="#282828"
              fill="#FFFCAB"
              rx="1"
              height="7"
              width="5"
              y="63"
              x="187"
            ></rect>
            <rect
              stroke-width="2"
              stroke="#282828"
              fill="#282828"
              rx="1"
              height="11"
              width="4"
              y="81"
              x="193"
            ></rect>
            <rect
              stroke-width="3"
              stroke="#282828"
              fill="#DFDFDF"
              rx="2.5"
              height="90"
              width="121"
              y="1.5"
              x="6.5"
            ></rect>
            <rect
              stroke-width="2"
              stroke="#282828"
              fill="#DFDFDF"
              rx="2"
              height="4"
              width="6"
              y="84"
              x="1"
            ></rect>
          </svg>
        </div>
        <span class="truckName">GGG </span>
        <div class="truckTires">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
            class="tiresvg"
          >
            <circle
              stroke-width="3"
              stroke="#282828"
              fill="#282828"
              r="13.5"
              cy="15"
              cx="15"
            ></circle>
            <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
            class="tiresvg"
          >
            <circle
              stroke-width="3"
              stroke="#282828"
              fill="#282828"
              r="13.5"
              cy="15"
              cx="15"
            ></circle>
            <circle fill="#DFDFDF" r="7" cy="15" cx="15"></circle>
          </svg>
        </div>
        <div class="road"></div>

        <svg
          xml:space="preserve"
          viewBox="0 0 453.459 453.459"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          version="1.1"
          fill="#000000"
          class="lampPost"
        >
          <path
            d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993
c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514
c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16
c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914
h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75
v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795
V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z
M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017
h78.747C231.693,100.736,232.77,106.162,232.77,111.694z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  margin: 0 auto;
}
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
  --button-color: #222;
  --tooltip-color: #fff;
  width: var(--width);
  height: var(--height);
  background: var(--button-color);
  position: relative;
  text-align: center;
  border-radius: 0.5em;
  font-family: 'Arial';
  transition: background 0.7s;
}

.button::before {
  position: absolute;
  content: attr(data-tooltip);
  width: var(--tooltip-width);
  height: var(--tooltip-height);
  background-color: #555;
  font-size: 0.9rem;
  color: #fff;
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
  border-top-color: #555;
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
  color: #fff;
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

.button:hover {
  background: #222;
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

/* 实验室介绍部分 */
.introduction {
  width: 100%;
  height: 50rem;
  background-color: #fff;
}

/* 卡车装饰样式 */
.loader {
  position: fixed;
  top: 89vh;
  left: 0;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
}

.truckWrapper {
  width: 550px;
  height: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  overflow-x: hidden;
}
/* truck upper body */
.truckBody {
  width: 180px;
  height: fit-content;
  margin-bottom: 6px;
  animation: motion 1s linear infinite;
}
/* truck suspension animation*/
@keyframes motion {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* truck's name */
.truckName {
  position: absolute;
  top: 35px;
  left: 230px;
  font-weight: bold;
  animation: motion 1s linear infinite;
}

/* truck's tires */
.truckTires {
  width: 130px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 15px;
  position: absolute;
  bottom: 0;
}
.truckTires svg {
  width: 24px;
}

.road {
  width: 100%;
  height: 1.5px;
  background-color: #282828;
  position: relative;
  bottom: 0;
  align-self: flex-end;
  border-radius: 3px;
}
.road::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 100%;
  background-color: #282828;
  right: -50%;
  border-radius: 3px;
  animation: roadAnimation 1.4s linear infinite;
  border-left: 10px solid white;
}
.road::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 100%;
  background-color: #282828;
  right: -65%;
  border-radius: 3px;
  animation: roadAnimation 1.4s linear infinite;
  border-left: 4px solid white;
}

.lampPost {
  position: absolute;
  bottom: 0;
  right: 30%;
  height: 90px;
  animation: roadAnimation 3.4s linear infinite;
}

@keyframes roadAnimation {
  0% {
    transform: translateX(300px);
  }
  100% {
    transform: translateX(-350px);
  }
}
</style>
