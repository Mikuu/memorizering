import { get, post, del, put } from '@/utils/http-utils'
import memorizendConfig from '@/configs/memorizend'

const buildUrl = resourcePath => {
  return `${memorizendConfig.HOST}${memorizendConfig.BATH_PATH}${resourcePath}`
}

export const getWordsT0 = async () => {
  const url = buildUrl(memorizendConfig.PATH_TIMEWORDS_T0)

  return await get(url)
}

export const completeWordsT0 = async wids => {
  const url = buildUrl(memorizendConfig.PATH_TIMEWORDS_T0)
  const payload = { complete: wids }

  return await post(url, payload)
}

export const getWordsT1 = async () => {
  const url = buildUrl(memorizendConfig.PATH_TIMEWORDS_T1)

  return await get(url)
}

export const completeWordsT1 = async wids => {
  const url = buildUrl(memorizendConfig.PATH_TIMEWORDS_T1)
  const payload = { complete: wids }

  return await post(url, payload)
}

export const getWordsT2 = async () => {
  const url = buildUrl(memorizendConfig.PATH_TIMEWORDS_T2)

  return await get(url)
}

export const completeWordsT2 = async wids => {
  const url = buildUrl(memorizendConfig.PATH_TIMEWORDS_T2)
  const payload = { complete: wids }

  return await post(url, payload)
}

export const getWordsT3 = async () => {
  const url = buildUrl(memorizendConfig.PATH_TIMEWORDS_T3)

  return await get(url)
}

export const completeWordsT3 = async wids => {
  const url = buildUrl(memorizendConfig.PATH_TIMEWORDS_T3)
  const payload = { complete: wids }

  return await post(url, payload)
}

export const getWordsCrossDays = async () => {
  const url = buildUrl(memorizendConfig.PATH_TIMEWORDS_CROSS_DAYS)

  return await get(url)
}

export const completeWordsCrossDays = async wids => {
  const url = buildUrl(memorizendConfig.PATH_TIMEWORDS_CROSS_DAYS)
  const payload = { complete: wids }

  return await post(url, payload)
}

export const initialize = async () => {
  const url = buildUrl(memorizendConfig.PATH_CONFIG_INIT)

  return await post(url)
}

export const getConfig = async () => {
  const url = buildUrl(memorizendConfig.PATH_CONFIG)

  return await get(url)
}

export const updateConfig = async config => {
  const url = buildUrl(memorizendConfig.PATH_CONFIG)
  const payload = { config }

  return await post(url, payload)
}
