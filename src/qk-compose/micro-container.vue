<template>
  <div class="design-frame">
    <div :id="containerId">1</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import loadMicroApp, { handleStart } from './qiankun-main'
export default defineComponent({
  name: 'MicroContainer',
  props: {
    base: {
      type: Object,
      required: true,
    },
  },
  setup(props: any) {
    const containerId = ref(props.base.key)
    let container: any = null
    onMounted(() => {
      container = handleStart(
        props.base.microName,
        document.getElementById(props.base.key) as any
      )
    })
    onBeforeUnmount(() => {
      console.log(
        '🚀 ~ file: micro-container.vue ~ line 28 ~ onBeforeUnmount ~ container',
        container
      )
      try {
        container?.unmount()
      } catch (error) {
        console.log(
          '🚀 ~ file: micro-container.vue ~ line 36 ~ onBeforeUnmount ~ error',
          error
        )
      }
    })
    return { containerId }
  },
})
</script>

<style lang="less" scoped>
.design-frame {
  width: 100%;
  height: 300px;
  overflow: auto;
}
</style>
