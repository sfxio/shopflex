export function usePlatform() {
  const hasBinded = (
    platform: keyof typeof platformAbbrChecktBit,
    platformStatus: number,
  ) => {
    return Boolean((1 << platformAbbrChecktBit[platform]) & platformStatus)
  }

  return {
    platformAbbrChecktBit,
    platformAbbrMap,
    abbrPlatformMap,
    hasBinded,
  }
}

export const platformAbbrMap = {
  shopify: 'sho',
  Shopify: 'sho',
  Square: 'squ',
  square: 'squ',
  wix: 'wix',
  Wix: 'wix',
  woocommerce: 'woo',
  WooCommerce: 'woo',
}

export const platformAbbrChecktBit = {
  sho: 0,
  squ: 2,
  wix: 3,
  woo: 4,
}

export const abbrPlatformMap = Object.keys(platformAbbrMap).reduce(
  (prev, key) => {
    if (/^[A-Z]/.test(key)) {
      prev[platformAbbrMap[key]] = key
      return prev
    }
    return prev
  },
  {},
)
