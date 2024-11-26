import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

// 生成衍生颜色css变量名
function genSimilarColorsName(brandName) {
  return {
    lighter: `var(--${brandName}-lighter-color)`,
    light: `var(--${brandName}-light-color)`,
    DEFAULT: `var(--${brandName}-color)`,
    deep: `var(--${brandName}-deep-color)`,
    deeper: `var(--${brandName}-deeper-color)`,
  };
}

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#1d2129',
      transparent: 'transparent',
      // 直接使用css变量
      primary: genSimilarColorsName('primary'),
      info: genSimilarColorsName('info'),
      success: genSimilarColorsName('success'),
      warning: genSimilarColorsName('warning'),
      danger: genSimilarColorsName('danger'),
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
    presetWind({
      important: 'body',
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
