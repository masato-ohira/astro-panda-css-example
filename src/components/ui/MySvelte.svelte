<script lang="ts">
  import { css } from '@@/styled-system/css'
  import MdTagFaces from 'svelte-icons/md/MdTagFaces.svelte'
  import { center, grid } from '@@/styled-system/patterns'
  import { take } from 'lodash-es'

  const name: string = 'This is svelte'

  type TodoType = {
    userId: number
    id: number
    title: string
    completed: boolean
  }

  const fetchData = async (url: string): Promise<TodoType[]> => {
    const res = await fetch(url)
    const json = await res.json()
    return take(json, 16)
  }
</script>

<div>
  {#await fetchData('https://jsonplaceholder.typicode.com/todos')}
    <p>ロード中...</p>
  {:then items}
    <div
      class={grid({
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 8,
      })}
    >
      {#each items as item}
        <div>
          <img
            class={css({
              display: 'block',
              width: '100%',
              height: 'auto',
            })}
            src={`https://placehold.jp/eeeeee/222222/400x400.png?text=${item.id}`}
            alt=""
          />
          <p
            class={css({
              pt: 3,
              lineHeight: 1.4,
            })}
          >
            {item.title}
          </p>
        </div>
      {/each}
    </div>
  {/await}
</div>
