<template>
  <div class="solutions">
    <div class="solution1">
      <header>
        <h2>
          <span class="strong">Zero Code</span>
          <span>
            B2B/Dropshipping Website Builder
          </span>
        </h2>
        <p>
          10 minutes set up to build up your professional B2B/Dropshipping site
          for wholesalers and dropshippers.
        </p>
      </header>

      <img class="fs-mt-12" v-lazy="solutions.solution11" />
    </div>

    <div class="solution2">
      <header>
        <h2>
          <span class="strong">
            Seamless
          </span>
          Storefront Integration
        </h2>
        <p>Overseas e-commerce Omni-Channel B2B SaaS</p>
      </header>

      <ARow class="section" type="flex" align="middle">
        <img v-lazy="solutions.solution21" />
      </ARow>

      <ARow class="section" type="flex" align="middle">
        <ACol :span="24" :lg="6">
          <h3>
            E-commerce Sales Platform
          </h3>
          <p>
            One click to expand more than 600 e-commerce platforms, retail
            channels and offline stores
          </p>
        </ACol>
        <ACol :span="24" :lg="18">
          <img v-lazy="solutions.solution22" />
        </ACol>
      </ARow>

      <ARow class="section" type="flex" align="middle">
        <ACol :order="lg ? 1 : 0" :span="24" :lg="6">
          <h3>Dropshippers</h3>
          <p>
            Connect with more than 10M active sellers on different e-commerce
            platform like Shopify, Wix, WooCommerce, Tiktok and Facebook, etc.
            No need to rely on Ads only.
          </p>
        </ACol>
        <ACol :span="24" :lg="18">
          <img class="lg:fs-max-w-md" v-lazy="solutions.solution23" />
        </ACol>
      </ARow>
    </div>

    <div class="solution3">
      <header>
        <h2>
          <span class="strong">
            Livestream
          </span>
          <span>
            Shopping
          </span>
        </h2>
        <p>
          Live Selling SaaS Solution. One-click to start the live stream
        </p>
      </header>
      <ARow class="section" type="flex" align="middle">
        <img class="fs-mt-24 fs-m-auto" v-lazy="solutions.solution31" />
        <img class="fs-mt-24" v-lazy="solutions.solution32" />
        <!-- <ARow class="section fs-w-full" type="flex" align="middle">
          <ACol flex="3">
            123
          </ACol>
          <ACol flex="7" class="fs-flex fs-justify-end">
            <img style="max-width: 300px;" v-lazy="solutions.solution33" />
          </ACol>
        </ARow> -->
      </ARow>
    </div>
    <div class="solution4">
      <header>
        <h2>
          <span class="strong">
            ShopAI
          </span>
          <span>
            Product Recommendation
          </span>
        </h2>
        <p>
          Maximize your Revenue and Customer Satisfaction with Product
          Recommendations
        </p>
        <div class="fs-flex fs-gap-4 fs-mt-8">
          <a
            href="https://apps.shopify.com/shopai-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgShopify />
          </a>
          <a
            href="https://shoplazza.app/detail/39731/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img v-lazy="shoplazza" style="width: 84px;" />
          </a>
          <!-- <AButton type="link">Install from Shoplazza</AButton> -->
        </div>
      </header>
      <ARow class="section" type="flex" align="middle">
        <a
          style="width: 100%;"
          href="https://ai.shopflex.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="fs-mt-24 fs-m-auto" v-lazy="solutions.solution41" />
        </a>
      </ARow>
    </div>
  </div>
</template>

<script setup lang="ts">
import { solutions } from '@/assets/images'
import SvgShopify from './icon/svg-shopify.vue'
import { shoplazza } from '@/assets/icons'
import { useResponsiveInject } from '@/hooks'
const { lg } = useResponsiveInject()
</script>

<style scoped lang="scss">
.solutions {
  > div {
    margin-bottom: 128px;
  }
  header {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      @apply fs-text-3xl fs-font-bold fs-text-center;

      .strong {
        @apply fs-text-primary fs-mr-2;
      }
    }
    p {
      @apply fs-text-lg fs-mt-4 fs-text-gray-400 fs-text-center;
      max-width: 1000px;
    }
  }

  h3 {
    @apply fs-text-xl fs-font-semibold;
    @apply fs-text-center;
    @apply lg:fs-text-left;
    .strong {
      @apply fs-text-primary;
    }
  }
  p {
    @apply fs-mt-2;
    @apply fs-text-gray-400;
    @apply fs-text-center;
    @apply lg:fs-text-left;
  }

  .section {
    min-height: 400px;
  }
}
</style>
