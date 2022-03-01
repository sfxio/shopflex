const mobileDetectCache = Object.create(null)
export function isMobile(agent, defaultVal = false) {
  if (!agent) {
    return defaultVal
  }
  const agents = ['Android', 'iPhone', 'iPad']
  return agents.some(item => agent.includes(item))
}

export function mobileDetect(
  ua: string,
  defaultVal = {
    isTablet: false,
    isPhone: false,
    isAndroid: false,
    isPC: true,
    isMobile: false,
  },
): {
  isTablet: boolean
  isPhone: boolean
  isAndroid: boolean
  isPC: boolean
  isMobile: boolean
} {
  if (mobileDetectCache[ua]) {
    return mobileDetectCache[ua]
  }
  if (!ua) {
    return defaultVal
  }
  const _isMobile = isMobile(ua)
  const isAndroid = /(?:Android)/.test(ua)
  const isFireFox = /(?:Firefox)/.test(ua)

  const isTablet =
    /(?:iPad|PlayBook)/.test(ua) ||
    (isAndroid && !/(?:Mobile)/.test(ua)) ||
    (isFireFox && /(?:Tablet)/.test(ua))

  const isPhone = /(?:iPhone)/.test(ua) && !isTablet
  const isPC = !isPhone && !isAndroid

  return {
    isTablet,
    isPhone,
    isAndroid,
    isPC,
    isMobile: _isMobile,
  }
}
