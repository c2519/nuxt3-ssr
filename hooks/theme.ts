import { genMixColor } from './gen-color';

// 主题配置类型定义
export interface Theme {
  // 这里留出可拓展空间（如banner图，背景图，文案，标题等），将主题色嵌套在对象内
  colors?: {
    primary?: string;
    success?: string;
    warning?: string;
    danger?: string;
    error?: string;
    info?: string;
  };
}

// 默认主题配置
export const defaultThemeConfig: Theme = {
  colors: {
    primary: '#409eff',
    success: '#67c23a',
    warning: '#e6a23c',
    danger: '#f56c6c',
    error: '#f56c6c',
    info: '#909399',
  },
};

// 本地缓存 key
const THEME_KEY = 'theme';

// 获取本地缓存主题
export function getTheme(): Theme {
  const theme = localStorage.getItem(THEME_KEY);
  return theme ? JSON.parse(theme) : defaultThemeConfig;
}

// 设置css变量
function setStyleProperty(propName: string, value: string) {
  document.documentElement.style.setProperty(propName, value);
}

function updateBrandExtendColorsVar(color: string, name: string) {
  // 生成混合色
  const { DEFAULT, dark, light } = genMixColor(color);
  // 每种主题色由浅到深分为五个阶梯以供开发者使用。
  setStyleProperty(`--${name}-lighter-color`, light[5]);
  setStyleProperty(`--${name}-light-color`, light[3]);
  setStyleProperty(`--${name}-color`, DEFAULT);
  setStyleProperty(`--${name}-deep-color`, dark[2]);
  setStyleProperty(`--${name}-deeper-color`, dark[4]);

  // elementPlus主题色更新
  setStyleProperty(`--el-color-${name}`, DEFAULT);
  setStyleProperty(`--el-color-${name}-dark-2`, dark[2]);
  setStyleProperty(`--el-color-${name}-light-3`, light[3]);
  setStyleProperty(`--el-color-${name}-light-5`, light[5]);
  setStyleProperty(`--el-color-${name}-light-7`, light[7]);
  setStyleProperty(`--el-color-${name}-light-8`, light[8]);
  setStyleProperty(`--el-color-${name}-light-9`, light[9]);
}

// 更新主题色到css变量
function updateThemeColorVar({ colors }: Theme) {
  // 遍历当前主题色，生成混合色，并更新到css变量（tailwind + elementPlus）
  for (const brand in colors) {
    updateBrandExtendColorsVar(colors[brand as keyof Theme['colors']] as string, brand);
  }
}

// 设置主题
export function setTheme(data: Theme = defaultThemeConfig) {
  const oldTheme = getTheme();

  // 将传入配置与旧的主题合并，以填补缺省的值
  data = deepMerge(oldTheme, data || {});

  // 将缓存到浏览器
  localStorage.setItem(THEME_KEY, JSON.stringify(data));

  // 将主题更新到css变量中，使之生效
  updateThemeColorVar(data);
}
