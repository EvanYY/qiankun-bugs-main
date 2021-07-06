import {
  addGlobalUncaughtErrorHandler,
  loadMicroApp,
  // removeGlobalUncaughtErrorHandler,
} from 'qiankun'
import { handleConfig, PORT } from './micro-handle-map'
/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: any) => {
  const { message: msg } = event
  // 加载失败时提示
  if (msg?.includes('diedinstatusLOADING_SOURCE_CODE')) {
    // eslint-disable-next-line no-alert
    throw Error('子应用加载失败，请检查应用是否可运行')
  }
})

export const getEntrys = async (name: string) => {
  const isDev = process.env.NODE_ENV === 'development'
  if (isDev) {
    //   try {
    //     const res = await fetch(process.env.VUE_APP_MICRO_URL + PORT[name])
    // return process.env.VUE_APP_MICRO_URL + PORT[name]
    return 'http://localhost:5555'
    // } catch (error) {
    //   return process.env.VUE_APP_MICRO_URL + PORT[name]
    //   // return 'https://www.baidu.com'
    // }
  } else {
    return ''
  }
}

export const handleStart = async (name: string, container: any) => {
  console.log(
    '🚀 ~ file: qiankun-main.ts ~ line 30 ~ handleStart ~ container',
    container
  )
  console.log('🚀 ~ file: qiankun-main.ts ~ line 30 ~ handleStart ~ name', name)
  if (!handleConfig[name] || !container)
    throw Error('手动注册名或 container 不存在')
  const entry = await getEntrys(name)
  const config = { ...handleConfig[name], container, entry }
  console.log(
    '🚀 ~ file: qiankun-main.ts ~ line 37 ~ handleStart ~ config',
    config
  )
  return loadMicroApp(config, {})
}

export default loadMicroApp
