import { ref,onUnmounted } from "vue";
import {getErrorInfo} from './getErrorInfo'
import getUserIp from './getUserIp'
import getNativeBrowserInfo from './getNativeBrowserInfo'
import sendData from './sendData'

/**
 * @description 错误埋点-页面监听
 * */
export const usePageListener = (componentName: string) => {
    // 监测单组件文档页面停留时间，进行埋点
    const startTime = ref<Date>();
    const readTime = ref<number>(0);
    startTime.value = new Date(); // 保存进入页面的时间戳
    console.log(startTime.value)
    getErrorInfo();// 上报错误
    onUnmounted(async () =>{
      const endTime = new Date();
      readTime.value = Math.round(
        Math.abs((startTime.value as Date).getTime() - endTime.getTime()) / 1000
      );
      console.log('销毁', componentName, readTime.value);
      let trackInfo = {
        componentName,
        leaveTime: readTime.value,
      };
      if(readTime.value > 5){
        const userDeviceInfo = (await getUserIp()) as object; // 用户个人相关信息
        console.log(userDeviceInfo)
        const nativeBrowserInfo = (await getNativeBrowserInfo()) as object; // 浏览器原生的信息
        trackInfo = { ...trackInfo, ...userDeviceInfo, ...nativeBrowserInfo };
        console.log(trackInfo);
        // 将收集到的数据发送给后端
        const result = await sendData(trackInfo);
        return result
      }
    }
    );
};
