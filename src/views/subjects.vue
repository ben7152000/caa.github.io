<template>
  <div class="subjects-page">
    <div class="nav-bar">
      <span class="back" @click="goBack">Back</span>
      <span>Commercial Airplane</span>
    </div>
    <div v-for="subject of activeSubjects" class="subjects">
      <div :key="subject.id" class="subject" @click="goTest(subject.testTopic, subject.finished)">
        <div class="subject-info">
          <span>{{ subject.title }}</span>
          <span class="finished">{{ subject.finished ? '' : '(尚未建置完成)' }}</span>
          <span>Questions: {{ subject.questionCounts }}</span>
        </div>
        <img src="../assets/arrow-right.png" alt="arrow-right" class="arrow">
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { showFailToast } from 'vant'
import { useRouter } from "vue-router";
import ChineseData from '../data/chinese/subjects.json'
import EnglishData from '../data/english/subjects.json'

const router = useRouter()

const activeSubjects = computed(() => {
  return localStorage.getItem('lang') === 'chinese' ? ChineseData.subject : EnglishData.subject
})

const goBack = () => {
  router.push('/')
}

const goTest = (testTopic, finished) => {
  if (!finished) {
    showFailToast('題目尚未建置');
    return
  }
  router.push(`/subjects/${testTopic}`)
}

onMounted(() => {
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.subjects-page {
  padding-top: 60px;
  background: #eee;
  height: 100%;
}

.back {
  position: absolute;
  left: 20px;
}

.subjects {
  position: relative;
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
  span:last-child {
    font-size: 12px;
  }
}

.arrow {
  width: 16px;
  height: 16px;
}

.finished {
  position: absolute;
  bottom: 0;
  right: 50px;
  font-size: 12px;
  color: #d71e1e;
}
</style>
