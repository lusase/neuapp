<script setup lang="ts">
import {ref} from 'vue'
import qrcode from 'qrcode'

const canvas = ref(null)

const toCanvas = () => {
  const input = document.getElementById('input') as HTMLInputElement
  if (!input.value.trim()) return
  qrcode.toCanvas(canvas.value, input.value)
}
</script>
<template>
  <div class="container flex flex-col items-center">
    <label for="input">输入内容</label>
    <textarea id="input" class="border-black bg-gray-100 mb-5" />
    <button class="bg-amber-300 p-1 rounded w-16 hover:bg-amber-200" @click="toCanvas">转化</button>
    <canvas ref="canvas" width="200" height="200"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
