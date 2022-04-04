<template>
  <div class="dropship">
    <section>
      <header v-if="showTitle">
        <h2>
          Customizable Fashion Dropshipping
        </h2>
        <p>Affordable Women Clothing,Accessory,Jewelry,Apparel,Dress,Yoga</p>
      </header>

      <ARow class="fs-mt-8 fs-w-full" type="flex" align="middle">
        <ACol :span="24" :md="16">
          <a
            href="https://fashionexpress.us/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="img" v-lazy="dropship.dropship11" />
          </a>
        </ACol>

        <ACol :span="24" :md="8">
          <div class="links">
            <a
              class="link-item"
              href="https://apps.shopify.com/fashionexpress-dropshipping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgShopify />
            </a>

            <a class="link-item fs-cursor-default">
              <SvgWoocommerce />
            </a>
          </div>
        </ACol>
      </ARow>
    </section>
    <section>
      <header v-if="showTitle">
        <h2>
          Free & Fast Dropshipping (US, UK)
        </h2>
        <p>US Warehouse, Free Shipping, Furniture & Large Goods Suppliers</p>
      </header>
      <ARow class="fs-mt-8 fs-w-full" type="flex" align="middle">
        <ACol :span="24" :md="8" :order="md ? 1 : 0">
          <a
            href="https://dropship.shopflex.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="img" v-lazy="dropship.dropship21" />
          </a>
        </ACol>

        <ACol :span="24" :md="8">
          <div class="links">
            <a
              class="link-item"
              href="https://apps.shopify.com/fashionexpress-dropshipping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgShopify />
            </a>
            <a
              class="link-item"
              href="https://apps.shopify.com/fashionexpress-dropshipping"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgWix />
            </a>

            <a class="link-item fs-cursor-default">
              <SvgWoocommerce />
            </a>
            <a class="link-item fs-cursor-default">
              <SvgSquare />
            </a>
          </div>
        </ACol>
      </ARow>
    </section>

    <section>
      <!-- <header v-if="showTitle"> -->
      <!-- <h2>
          Others
        </h2> -->
      <!-- </header> -->
      <FsList class="fs-mt-8" :list="list" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { dropship } from '@/assets/images'
import { nanoid } from 'nanoid'
import SvgShopify from '../icon/svg-shopify.vue'
import SvgWix from '../icon/svg-wix.vue'
import FsList from '@/components/fs-tools/fs-list.vue'
import SvgWoocommerce from '../icon/svg-woocommerce.vue'
import SvgSquare from '../icon/svg-square.vue'
import { useResponsiveInject } from '@/hooks'
defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
})

const { md } = useResponsiveInject()

const list = [
  {
    id: nanoid(),
    icon: 'https://buk.shopflex.io/image%2F20220322%2F43113.png?alt=media',
    iconProps: { style: { width: '182px' } },
    description:
      'Connects with over 100K Amazon Sellers. USA Fast & Free Shipping.',
    link: 'https://shop.goodmerchan.com/',
  },
  {
    id: nanoid(),
    icon: 'https://buk.shopflex.io/image%2F20220322%2F68723.png?alt=media',
    iconProps: { style: { width: '182px' } },
    description: 'Worldwide warehouses & Fast & Free Shipping.',
    link: 'https://dropshipping.b2seller.com/',
  },
  {
    id: nanoid(),
    icon: 'https://buk.shopflex.io/image%2F20220322%2F15292.png?alt=media ',
    iconProps: { style: { width: '182px' } },
    description: 'Vendorslink - Accessories and Bag',
    link: 'https://app.vendorslink.net/',
  },
  {
    id: nanoid(),
    icon: 'https://www.99diy.com/_nuxt/img/logo.74033dc.png',
    iconProps: { style: { width: '144px' } },
    description: 'Print On Demand- Starts from $9.9',
    link: 'https://99diy.com/',
  },
]
</script>

<style lang="scss" scoped>
h2 {
  @apply fs-text-2xl fs-font-bold fs-text-center;
  .strong {
    @apply fs-text-primary fs-mr-2;
  }
}
p {
  @apply fs-text-lg  fs-text-gray-400 fs-text-center;
}

section {
  @apply fs-mb-32;
  @apply fs-flex fs-items-center fs-flex-col fs-gap-4;

  .img {
    @apply fs-mb-4;
    @apply fs-shadow-xl fs-rounded-lg;
    @apply hover:fs-shadow-2xl;
    width: 800px;
  }

  .links {
    @apply fs-mt-12;
    @apply fs-grid fs-grid-cols-2;

    .link-item {
      margin: auto;
      // @apply fs-rounded-md hover:fs-bg-secondary fs-transition-all;
      padding: 8px;
    }
  }
}
</style>
