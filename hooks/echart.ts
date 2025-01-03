import { useColorMode, useElementSize } from '@vueuse/core';
import { RadarChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { nextTick, onUnmounted, ref, watch } from 'vue';
import type {
  BarSeriesOption,
  GaugeSeriesOption,
  LineSeriesOption,
  PictorialBarSeriesOption,
  PieSeriesOption,
  RadarSeriesOption,
  ScatterSeriesOption,
} from 'echarts/charts';
import type {
  DatasetComponentOption,
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import type { ComputedRef, Ref } from 'vue';

export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | ScatterSeriesOption
  | PictorialBarSeriesOption
  | RadarSeriesOption
  | GaugeSeriesOption
  | TitleComponentOption
  | LegendComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | ToolboxComponentOption
  | DatasetComponentOption
>;

// 按需引入 解决打包过大问题
echarts.use([
  // TitleComponent,
  LegendComponent,
  TooltipComponent,
  // GridComponent,
  // DatasetComponent,
  // TransformComponent,
  // ToolboxComponent,
  // BarChart,
  // LineChart,
  // PieChart,
  // ScatterChart,
  // PictorialBarChart,
  RadarChart,
  // GaugeChart,
  // LabelLayout,
  // UniversalTransition,
  CanvasRenderer,
]);

/**
 * Echarts hooks function
 * @param options - Chart configuration
 * @param renderFun - Chart rendering function (eg: chart listener function)
 * @description Introduce chart components on demand, unregistered components need to be imported first
 */
export function useEcharts(
  options: Ref<ECOption> | ComputedRef<ECOption>,
  domRef: Ref<HTMLElement>,
  renderFun?: (chartInstance: echarts.ECharts) => void
) {
  const themeMode = useColorMode();

  const initialSize = { width: 0, height: 0 };
  const { width, height } = useElementSize(domRef, initialSize);

  let chart: echarts.ECharts | null = null;

  function canRender() {
    return initialSize.width > 0 && initialSize.height > 0;
  }

  function isRendered() {
    return Boolean(domRef.value && chart);
  }

  function update(updateOptions: ECOption) {
    if (isRendered()) chart!.setOption({ ...updateOptions, backgroundColor: 'transparent' });
  }

  async function render() {
    if (domRef.value) {
      await nextTick();
      chart = echarts.init(domRef.value, themeMode.value);
      if (renderFun) renderFun(chart);
      update(options.value);
    }
  }

  function resize() {
    chart?.resize();
  }

  function destroy() {
    chart?.dispose();
  }

  function updateTheme() {
    destroy();
    render();
  }

  const stopSizeWatch = watch([width, height], ([newWidth, newHeight]) => {
    initialSize.width = newWidth;
    initialSize.height = newHeight;
    if (newWidth === 0 && newHeight === 0) chart = null;
    if (canRender()) {
      if (!isRendered()) render();
      else resize();
    }
  });

  const stopOptionWatch = watch(options, newValue => {
    update(newValue);
  });

  const stopDarkModeWatch = watch(
    () => themeMode.value,
    () => {
      updateTheme();
    }
  );

  onUnmounted(() => {
    destroy();
    stopSizeWatch();
    stopOptionWatch();
    stopDarkModeWatch();
  });

  return {
    domRef,
  };
}
