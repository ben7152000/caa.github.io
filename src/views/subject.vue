<template>
  <div class="subject-page">
    <div class="nav-bar">
      <span class="back" @click="goBack">Back</span>
      <span>Commercial Airplane</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const goBack = () => {
  router.push('/subjects')
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
</style>
