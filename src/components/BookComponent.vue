<script setup>
const handleWrong = () => {
  const userConfirmed = window.confirm('信息有误？，是否跳转至登录页？')
  if (userConfirmed) {
    window.location.href = '/login'
  }
}
</script>

<template>
  <div class="book bg">
    <div>
      <p><span>姓名：</span><slot name="name"></slot></p>
      <p><span>专业：</span><slot name="major"></slot></p>
      <p><span>学校：</span><slot name="school"></slot></p>
      <p><span>电话：</span><slot name="phone"></slot></p>
      <p><span>QQ：</span><slot name="qq"></slot></p>
      <div class="wrong" @click="handleWrong">?</div>
    </div>
    <div class="cover bg">
      <div class="title">西安邮电大学</div>
      <p><span>姓名：</span><slot name="name"></slot></p>
    </div>
  </div>
</template>

<style scoped>
.book {
  position: relative;
  border-radius: 0.625rem;
  width: 15vw;
  max-width: 220px;
  height: auto;
  aspect-ratio: 11/15;
  background-color: rgb(239, 238, 231);
  box-shadow: 0.1em 0.1em 1em #b9b4b4;
  transform: preserve-3d;
  perspective: 2000px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  padding: 1rem;
}

.cover {
  top: 0;
  position: absolute;
  background-color: rgb(224, 221, 212);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: 0;
  transform-origin: 0;
  -webkit-box-shadow: 1px 1px 15px#b9b4b4;
  box-shadow: 1px 1px 15px #b9b4b4;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.book:hover .cover {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform: rotatey(-80deg);
  -ms-transform: rotatey(-80deg);
  transform: rotatey(-80deg);
}

p {
  font-size: 1em;
  font-weight: 400;
  padding-bottom: 0.625em;
  border-bottom: 0.125em solid rgb(78, 116, 68);
}

p span {
  color: rgb(95, 95, 95);
  font-size: 0.8em;
}

.title {
  position: absolute;
  top: 15%;
  left: 15%;
  font-size: 1.25em;
  font-weight: 600;
}

.wrong {
  position: absolute;
  bottom: 0.3em;
  right: 0.3em;
  font-size: 1.25em;
  font-weight: 600;
  border: 1px solid rgb(2, 1, 1);
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1200px) {
  .book {
    width: 20vw;
  }
}

@media screen and (max-width: 768px) {
  .book {
    width: 25vw;
  }
}

@media screen and (max-width: 480px) {
  .book {
    width: 30vw;
  }
}
</style>
