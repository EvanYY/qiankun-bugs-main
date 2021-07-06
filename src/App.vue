<template>
  <div>
    <div class="button" @click="create">点击我创建一个</div>
  </div>
  <ul>
    <li v-for="(item, index) in list" :key="item.key">
      <div class="text" @click="remove(index)">close</div>
      <MicroContainer :base="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import MicroContainer from '@/qk-compose/micro-container.vue'
import { genNonDuplicateId } from '@/utils/gen-non-duplicateId'

interface Node {
  key: string
  microName: string
  data?: string
}

export default defineComponent({
  name: 'App',
  components: { MicroContainer },
  setup() {
    const list: Node[] = reactive([])
    const create = () => {
      list.push({
        key: genNonDuplicateId(20),
        microName: 'pro_lowcode_flow_front',
        data: `hello ${genNonDuplicateId(8)}`,
      })
    }
    const remove = (index: number) => {
      list.splice(index, 1)
    }
    return {
      list,
      create,
      remove,
    }
  },
})
</script>

<style lang="less" scoped>
body * {
  box-sizing: border-box;
}
.button {
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid #ececec;
}
.text {
  cursor: pointer;
  padding: 5px 10px;
}
ul {
  display: flex;
  flex-wrap: wrap;

  li {
    width: 300px;
    padding: 10px;
    margin: 20px;
    background-color: red;
  }
}
</style>
