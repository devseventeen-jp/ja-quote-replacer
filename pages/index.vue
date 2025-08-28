<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">全角のダブルクォートからダブルミニュートに置換</h1>

    <textarea v-model="inputText" class="w-full h-40 p-2 border" placeholder="ここに日本語テキストを貼り付けてください"></textarea>

    <div class="my-4">
      <button @click="replaceQuotes" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        「＂」→「〝〟」に変換
      </button>
      <button @click="downloadText" class="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        結果をダウンロード
      </button>
    </div>

    <h2 class="text-lg font-semibold mb-2">変換後のテキスト</h2>
    <textarea v-model="outputText" class="w-full h-40 p-2 border" readonly></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputText = ref('')
const outputText = ref('')

function replaceQuotes() {
  // 全角で"…" や “…” などのパターンに対応
  const quotePattern = /[“”＂]([^“”＂]*?)[“”＂]/g
  outputText.value = inputText.value.replace(quotePattern, '〝$1〟')
}

function downloadText() {
  const blob = new Blob([outputText.value], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'converted.txt'
  a.click()
  URL.revokeObjectURL(url)
}
</script>
