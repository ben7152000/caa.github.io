<template>
  <div class="subject-page">
    <div class="nav-bar">
      <span class="back" @click="goBack">Back</span>
      <span>Commercial Airplane</span>
    </div>
    <div v-for="subject of activeSubjects" class="subjects">
      <div class="subject">
        <div class="subject-info">
          <span>{{ subject.title }}</span>
          <span>Questions: {{ subject.questionCounts }}</span>
        </div>
        <img src="../assets/arrow-right.png" alt="arrow-right" class="arrow">
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import ChineseData from '../data/chinese/subjects.json'
import EnglishData from '../data/english/subjects.json'

const router = useRouter()

const activeSubjects = computed(() => {
  return localStorage.getItem('lang') === 'chinese' ? ChineseData.subject : EnglishData.subject
})

const goBack = () => {
  localStorage.removeItem('lang')
  localStorage.removeItem('topic')
  router.push('/')
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.subject-page {
  padding-top: 40px;
  background: #eee;
  height: 100%;
}

.back {
  position: absolute;
  left: 20px;
}

.subjects {
  width: 100%;
}

.subject {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  padding: 8px 0 4px;
  margin: 0 20px;
  border-bottom: 1px solid #cccccc;
}

.subject-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.arrow {
  width: 16px;
  height: 16px;
}
</style>