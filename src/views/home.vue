<template>
  <div>
    <div class="nav-bar">Commercial Pilot</div>
    <img src="../assets/logo.png" alt="logo" class="logo">
    <div class="bottom-info">
      <div class="select-practice">
        <span>Commercial Airplane</span>
      </div>
      <div class="select-lang">
        <div :class="['tab', { active: activeLang === 'chinese' }]" @click="changeLang('chinese')">Chinese</div>
        <div :class="['tab', { active: activeLang === 'english' }]" @click="changeLang('english')">English</div>
      </div>
      <div class="select-topic">
        <div :class="['tab', { active: activeTopic === 'study' }]" @click="changeTopic('study')">Study</div>
        <div :class="['tab', { active: activeTopic === 'test' }]" @click="changeTopic('test')">Test</div>
      </div>
      <button class="btn-start" @click="goStart">Start</button>
      <div class="copyright">
        Copyright © 2024 Y.C.C.
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const activeLang = ref('chinese')
const activeTopic = ref('study')

const changeLang = (lang) => {
  activeLang.value = lang
}

const changeTopic = (topic) => {
  activeTopic.value = topic
}

const goStart = () => {
  localStorage.setItem('lang', activeLang.value)
  localStorage.setItem('topic', activeTopic.value)
  router.push('/subjects')
}

onMounted(() => {
  localStorage.removeItem('lang')
  localStorage.removeItem('topic')
  localStorage.removeItem('subject')
})
</script>

<style scoped>
.nav-bar {
  background: #000000;
  color: #FFFFFF;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 0;
}

.logo {
  width: 250px;
  height: 250px;
  margin-top: 50px;
}

.bottom-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 80px;
}

.select-practice {
  font-size: 26px;
  color: #ffffff;
}

.select-topic {
  margin: 10px auto 20px;
  display: flex;
  justify-content: center;
}

.select-lang {
  margin: 40px auto 10px;
  display: flex;
  justify-content: center;
}

.tab {
  background: #cc6411;
  font-size: 16px;
  color: #000000;
  padding: 8px 0;
  width: 140px;
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &.active {
    background: #ffffff;
  }
}

.btn-start {
  font-size: 24px;
  font-weight: 600;
  background: none;
  border: none;
  outline: none;
  color: #ffffff;
}

.copyright {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 4px;
  background: #000;
  color: #fff;
  font-size: 12px;
}
</style>
