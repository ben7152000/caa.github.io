<template>
  <div class="subject-page">
    <div class="nav-bar">
      <span class="back" @click="exitQuiz">Exit Quiz</span>
      <span>{{ activeIndex + 1 }} of {{ questionCounts }}</span>
      <span class="grade">Grade</span>
    </div>
    <div class="question">
      <span class="title">QUESTION</span>
      <div class="content">{{ question.title }}</div>
    </div>
    <div class="options">
      <span class="title">ANSWER CHOICES</span>
      <van-radio-group v-model="checked" shape="dot">
        <van-radio
            :name="option.option"
            v-for="option of question.options"
            :class="[checkAnswer(option.option)]"
            @click="selectOption(option.option)"
        >
          <span :key="option.id">{{ option.text }}</span>
        </van-radio>
      </van-radio-group>
    </div>
    <div class="navigation">
      <span :class="[{ disable: activeIndex === 0 }]" @click="goPrev">Prev</span>
      <span :class="[{ disable: activeIndex === questionCounts - 1 }]" @click="goNext">Next</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import chineseLawData from '../data/chinese/law/law.json'

const router = useRouter()
const route = useRoute()

const questionData = {
  chinese: {
    law: chineseLawData
  },
  english: {
    law: chineseLawData
  }
}

const activeIndex = ref(0)
const checked = ref('')

const exitQuiz = () => {
  router.push('/subjects')
}

const goPrev = () => {
  if (activeIndex.value === 0) return
  activeIndex.value--
  checked.value = ''
}

const goNext = () => {
  if (activeIndex.value === questionCounts.value - 1) return
  activeIndex.value++
  checked.value = ''
}

const selectOption = (option) => {
  checked.value = option
}

const checkAnswer = (option) => {
  if (!checked.value || checked.value !== option) return ''
  return checked.value === question.value.answer ? 'text-green' : 'text-red'
}

const lang = computed(() => localStorage.getItem('lang'))
const testTopic = computed(() => route.params.testTopic)
const questionCounts = computed(() => questionData[lang.value][testTopic.value].questions.length)
const question = computed(() => questionData[lang.value][testTopic.value].questions[activeIndex.value])
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

.subject-page {
  padding-top: 60px;
  background: #eee;
  height: 100%;
}

.back {
  position: absolute;
  left: 20px;
}

.grade {
  position: absolute;
  right: 20px;
}

.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #000000;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 20px 16px 0;
  gap: 16px;
  color: #1989fa;
}

.disable {
  color: #4d4d4d;
}

.title {
  color: #9b9999;
  padding-left: 20px;
  margin-bottom: 10px;
}

.question,
.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 40px;
}

.content {
  width: 100%;
  text-align: start;
  background: #cbc3c3;
  padding: 30px 20px;
}

.van-radio-group {
  width: 100%;
}

.van-radio {
  width: 100%;
  padding: 10px 20px;
  background: #cbc3c3;
  border-bottom: 1px solid #eee;
}

::v-deep(.van-radio__icon--dot) {
  border-color: #000 !important;
}

.text-green::v-deep(.van-radio__label) {
  color: #32c77a !important;
}

.text-red::v-deep(.van-radio__label) {
  color: #d30e0e !important;
}
</style>
