<template>
  <div class="subject-page">
    <div class="nav-bar">
      <span class="back" @click="exitQuiz">Exit Quiz</span>
      <span>{{ activeIndex + 1 }} of {{ questionCounts }}</span>
      <span class="grade" @click="gradeQuiz">Grade</span>
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
    <van-action-sheet v-model:show="showExit" :actions="exitActions" @select="exitSelect" description="Exit Quiz?" />
    <van-action-sheet v-model:show="showGrade" :actions="gradeActions" @select="gradeSelect" description="Are you sure you want to submit the quiz?" />
    <van-popup v-model:show="showGradeLists"  position="bottom">
      <div class="popup-grade">
        <div class="nav-bar">
          <span class="back" @click="exit">Exit</span>
          <span>{{ passRate() }}%</span>
        </div>
        <div class="grade-subjects">
          <div v-for="(sub, index) of getGradeLists()" class="grade-subject">
            <span class="grade-number">({{ index + 1 }}.)</span>
            <span :class="['grade-title', checkGradeAnswer(sub.answer, sub.userAnswer)]">{{ sub.title }}</span>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import { useRouter, useRoute } from "vue-router";
import chineseLawData from '../data/chinese/law.json'
import chineseWeightData from '../data/chinese/weight.json'
import chineseCommunication from '../data/chinese/communication.json'
import chineseHuman from '../data/chinese/human.json'
import chineseMaintenance from '../data/chinese/maintenance.json'
import chineseManagement from '../data/chinese/management.json'
import chineseNavigation from '../data/chinese/navigation.json'
import chinesePrinciples from '../data/chinese/principles.json'
import chineseWeather from '../data/chinese/weather.json'
import englishLawData from '../data/english/law.json'
import englishWeightData from '../data/english/weight.json'
import englishCommunication from '../data/english/communication.json'
import englishHuman from '../data/english/human.json'
import englishMaintenance from '../data/english/maintenance.json'
import englishManagement from '../data/english/management.json'
import englishNavigation from '../data/english/navigation.json'
import englishPrinciples from '../data/english/principles.json'
import englishWeather from '../data/english/weather.json'

const router = useRouter()
const route = useRoute()

const activeIndex = ref(0)
const testCount = ref(50)
const checked = ref('')
const showExit = ref(false)
const showGrade = ref(false)
const showGradeLists = ref(false)
const saveSubjectData = ref([])

const lang = computed(() => localStorage.getItem('lang'))
const topic = computed(() => localStorage.getItem('topic'))
const testTopic = computed(() => route.params.testTopic)
const questionCounts = computed(() => topic.value === 'study' ? questionData[lang.value][testTopic.value].questions.length : testCount.value)
const question = computed(() => questionData[lang.value][testTopic.value].questions[activeIndex.value])

const getRandomNumbers = (obj, num) => {
  const _questions = obj.questions.sort(() => 0.5 - Math.random()).slice(0, num)
  return {
    testTopic: obj.testTopic,
    questions: _questions
  };
}

const questionData = {
  chinese: {
    law: topic.value === 'study' ? chineseLawData : getRandomNumbers(chineseLawData, testCount.value),
    weight: topic.value === 'study' ? chineseWeightData : getRandomNumbers(chineseWeightData, testCount.value),
    communication: topic.value === 'study' ? chineseCommunication : getRandomNumbers(chineseCommunication, testCount.value),
    navigation: topic.value === 'study' ? chineseNavigation : getRandomNumbers(chineseNavigation, testCount.value),
    human: topic.value === 'study' ? chineseHuman : getRandomNumbers(chineseHuman, testCount.value),
    weather: topic.value === 'study' ? chineseWeather : getRandomNumbers(chineseWeather, testCount.value),
    maintenance: topic.value === 'study' ? chineseMaintenance : getRandomNumbers(chineseMaintenance, testCount.value),
    management: topic.value === 'study' ? chineseManagement : getRandomNumbers(chineseManagement, testCount.value),
    principles: topic.value === 'study' ? chinesePrinciples : getRandomNumbers(chinesePrinciples, testCount.value),
  },
  english: {
    law: topic.value === 'study' ? englishLawData : getRandomNumbers(englishLawData, testCount.value),
    weight: topic.value === 'study' ? englishWeightData : getRandomNumbers(englishWeightData, testCount.value),
    communication: topic.value === 'study' ? englishCommunication : getRandomNumbers(englishCommunication, testCount.value),
    navigation: topic.value === 'study' ? englishNavigation : getRandomNumbers(englishNavigation, testCount.value),
    human: topic.value === 'study' ? englishHuman : getRandomNumbers(englishHuman, testCount.value),
    weather: topic.value === 'study' ? englishWeather : getRandomNumbers(englishWeather, testCount.value),
    maintenance: topic.value === 'study' ? englishMaintenance : getRandomNumbers(englishMaintenance, testCount.value),
    management: topic.value === 'study' ? englishManagement : getRandomNumbers(englishManagement, testCount.value),
    principles: topic.value === 'study' ? englishPrinciples : getRandomNumbers(englishPrinciples, testCount.value),
  }
}

const exitActions = [
  { id: 1, name: 'Exit Quiz' },
  { id: 2, name: 'Return to Quiz' }
]

const gradeActions = [
  { id: 1, name: 'Grade Quiz' },
  { id: 2, name: 'Return to Quiz' }
]

const resetData = () => {
  activeIndex.value = 0
  checked.value = ''
  localStorage.setItem('subject', JSON.stringify(saveSubjectData.value))
}

const exit = () => {
  if (topic.value === 'test') {
    router.push('/')
    return
  }
  showGradeLists.value = false
}

const exitQuiz = () => {
  showExit.value = true
}

const exitSelect = (i) => {
  showExit.value = false
  if (i.id === 1) {
    router.push('/subjects')
  }
  if (i.id === 2) {
    resetData()
  }
}

const gradeQuiz = () => {
  showGrade.value = true
}

const gradeSelect = (i) => {
  showGrade.value = false
  if (i.id === 1) {
    showGradeLists.value = true
  }
  if (i.id === 2) {
    resetData()
  }
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
  const localSubject = localStorage.getItem('subject')
  const _subject = JSON.parse(localSubject).map(i => {
    if (i.id === question.value.id) {
      return {
        ...i,
        userAnswer: option
      }
    }
    return i
  })
  localStorage.setItem('subject', JSON.stringify(_subject))
}

const checkAnswer = (option) => {
  const localSubject = localStorage.getItem('subject')
  if (localSubject) {
    JSON.parse(localSubject).forEach(i => {
      if (i.id === question.value.id) {
        checked.value = i.userAnswer
      }
    })
  }
  if (!checked.value || checked.value !== option || topic.value === 'test') return ''
  return checked.value === question.value.answer ? 'text-green' : 'text-red'
}

const checkGradeAnswer = (answer, userAnswer) => {
  if (!userAnswer && topic.value === 'study') return ''
  return answer === userAnswer ? 'text-green' : 'text-red'
}

const getGradeLists = () => {
  return JSON.parse(localStorage.getItem('subject'))
}

const passRate = () => {
  let correct = 0
  getGradeLists().forEach(i => {
    if (i.answer === i.userAnswer) {
      correct++
    }
  })
  return Number((correct / questionCounts.value) * 100).toFixed(2)
}

onMounted(() => {
  localStorage.removeItem('subject')
  localStorage.setItem('subject', JSON.stringify(questionData[lang.value][testTopic.value].questions))
  saveSubjectData.value = questionData[lang.value][testTopic.value].questions
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

.popup-grade {
  background: #eee;
  height: 100%;
}

.grade-subjects {
  padding-top: 50px;
}

.grade-subject {
  padding: 8px 10px 8px 20px;
  text-align: left;
  background: #cbc3c3;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.grade-number {
  margin-right: 8px;
}

.text-green {
  color: #32c77a;
}

.text-red {
  color: #d30e0e;
}
</style>
