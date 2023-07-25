<script setup lang="ts">
import { css } from '@@/styled-system/css'
// import { FaVuejs } from 'oh-vue-icons/icons'
import { center } from '@@/styled-system/patterns'
const name: string = 'this is vue'

const centerCss = center({
  minH: '50vh',
})
const boxCss = css({
  bgColor: 'teal.100',
  p: 8,
  color: 'teal.600',
  fontSize: '5xl',
  rounded: 'xl',
})
</script>

<template>
  <div :class="centerCss">
    <div :class="boxCss">
      <p>{{ name }}</p>
    </div>
  </div>
</template>
