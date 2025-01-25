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
  border-radius: 10px;
  width: 220px;
  height: 300px;
  background-color: rgb(239, 238, 231);
  -webkit-box-shadow: 1px 1px 15px #b9b4b4;
  box-shadow: 1px 1px 15px #b9b4b4;
  -webkit-transform: preserve-3d;
  -ms-transform: preserve-3d;
  transform: preserve-3d;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #000;
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
  font-size: 15px;
  font-weight: 400;
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(78, 116, 68);
}
p span {
  color: rgb(95, 95, 95);
  font-size: 12px;
}
.title {
  position: absolute;
  top: 50px;
  left: 50px;
  font-size: 20px;
  font-weight: 600;
}
.wrong {
  position: absolute;
  bottom: 0;
  right: 5px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid rgb(2, 1, 1);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
