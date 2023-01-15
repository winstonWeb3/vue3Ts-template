<template>
  <div class="container">
    页面停留时间 {{ time }}秒
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import {usePageListener } from '@/hooks/bugPoints'
// import { ElNotification} from "element-plus";

const result  = usePageListener('ceshi')
const time = ref(0)
const myTime = setInterval(() =>{
  time.value +=1
},1000)
onBeforeUnmount(()=>{
  // ElNotification({
	// 		title: "埋点信息",
	// 		message: result,
	// 		type: "warning"
	// 	});
  clearInterval(myTime)
})
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
}
</style>
