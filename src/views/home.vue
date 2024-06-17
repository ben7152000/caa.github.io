<template>
  <div>
    <div class="nav-bar">Commercial Pilot</div>
    <img src="../assets/logo.png" alt="logo" class="logo">
    <div class="bottom-info">
      <div class="select-practice">
        <span>Commercial Airplane</span>
      </div>
      <div class="select-topic">
        <div :class="['tab', { active: activeTopic === 'study' }]" @click="changeTopic('study')">Study</div>
        <div :class="['tab', { active: activeTopic === 'test' }]" @click="changeTopic('test')">Test</div>
      </div>
      <button class="btn-start">Start</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTopic = ref('study')

const changeTopic = (topic) => {
  activeTopic.value = topic
}
</script>

<style scoped>
.nav-bar {
  background: #000000;
  color: #FFFFFF;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px 0;
}

.logo {
  width: 250px;
  height: 250px;
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
  margin: 40px auto 20px;
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
</style>
