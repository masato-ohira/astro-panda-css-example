<script lang='ts'>
import {css} from '@@/styled-system/css'
import MdTagFaces from 'svelte-icons/md/MdTagFaces.svelte'
import { center } from '@@/styled-system/patterns'
const name: string = 'This is svelte'

</script>

<div class={center({
  minH: '50vh',
})}>
  <div class={css({
    bgColor: 'red.50',
    color: 'red.800',
    py: 6,
    px: 32,
    fontWeight: '500'
  })}>
  <div class={css({
    w: '100px'
  })}>
    <MdTagFaces />
  </div>
    <p>{name}</p>
  </div>
</div>