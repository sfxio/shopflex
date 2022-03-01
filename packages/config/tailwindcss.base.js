const colors = require('tailwindcss/colors')
const path = require('path')

module.exports = {
  prefix: 'fs-',
  purge: [
    path.resolve(__dirname, '../ui/**/*.vue'),
    path.resolve(__dirname, '../theme/**/*.{css,scss}'),
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1600px',
        '3xl': '2080px',
      },

      fontSize: {
        'fs-xs': 'var(--fs-fs-xs)', //12px
        'fs-sm': 'var(--fs-fs-sm)', //14px
        'fs-base': 'var(--fs-fs-base)', //16px
        'fs-lg': 'var(--fs-fs-lg)', //18px
      },
      fontWeight: {
        'fw-extralight': 'var(--fs-fw-extralight)', //200
        'fw-light': 'var(--fs-fw-light)', //300
        'fw-normal': 'var(--fs-fw-normal)', //400
        'fw-medium': 'var(--fs-fw-medium)', //500
        'fw-semibold': 'var(--fs-fw-semibold)', //600
        'fw-bold': 'var(--fs-fw-bold)', //700
        'fw-extrabold': 'var(--fs-fw-extrabold)', //700
      },
      colors: {
        'c-primary': 'var(--fs-c-primary)',
        'c-secondary': 'var(--fs-c-secondary)',
        'c-black-pure': 'var(--fs-c-black-pure)',
        'c-black': 'var(--fs-c-black)',
        'c-black-light': 'var(--fs-c-black-light)',
        'c-white': 'var(--fs-c-white)',
        'c-white-pure': 'var(--fs-c-white-pure)',
        'c-body': 'var(--fs-c-body)',
        'c-text': 'var(--fs-c-text)',
        'c-text-muted': 'var(--fs-c-text-muted)',
        'c-text-disabled': 'var(--fs-c-text-disabled)',
        'c-link': 'var(--fs-c-link)',
        'c-link-hover': 'var(--fs-c-link-hover)',
        'c-gray': 'var(--fs-c-gray)',
        'c-gray-base': 'var(--fs-c-gray-base)',
        'c-info': 'var(--fs-c-info)',
        'c-info-light': 'var(--fs-c-info-light)',
        'c-warning': 'var(--fs-c-warning)',
        'c-warning-light': 'var(--fs-c-warning-light)',
        'c-danger': 'var(--fs-c-danger)',
        'c-danger-light': 'var(--fs-c-danger-light)',
        'c-success': 'var(--fs-c-success)',
        'c-success-light': 'var(--fs-c-success-light)',

        'dodger-blue': {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#bbdcff',
          300: '#8cc7ff',
          400: '#56a7ff',
          500: '#2f83ff',
          600: '#286df8',
          700: '#114ce4',
          800: '#153eb8',
          900: '#173991',
        },
        transparent: 'transparent',
        canvas: '#fffe6',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
      },
      spacing: {
        's-2xs': 'var(--fs-s-2xs)', // 4px
        's-xs': 'var( --fs-s-xs)', // 8px
        's-sm': 'var(--fs-s-sm)', // 16px
        's-base': 'var(--fs-s-base)', // 24px
        's-lg': 'var(--fs-s-lg)', // 32px
        's-xl': 'var(--fs-s-xl)', // 40px
        's-2xl': 'var(--fs-s-2xl)', // 80px
        's-3xl': 'var(--fs-s-3xl)', // 160px
        px: '1px',
        0: '0px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        90: '22.5rem',
        96: '24rem',
        102: '25.5rem',
        108: '27rem',
      },
      animation: {
        none: 'none',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
      zIndex: {
        auto: 'auto',
        0: 0,
        1: 1,
        2: 2,
        '-1': -1,
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        'offcanvas-backdrop': 1040,
        offcanvas: 1045,
        'modal-backdrop': 1050,
        modal: 1055,
        popover: 1070,
        tooltip: 1080,
      },

      fontFamily: {
        'ff-primary': 'var(--fs-ff-primary)', // "Roboto", serif
        'ff-secondary': `var(--fs-ff-secondary)`, // "Raleway", sans-serif
      },
    },
  },
}
