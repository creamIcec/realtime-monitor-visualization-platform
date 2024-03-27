import type { MultiTabsSetting } from '@/types/config'

import { computed } from 'vue'

import { useAppStore } from '@/store/modules/app'

export function useMultipleTabSetting() {
  const appStore = useAppStore()

  const getShowMultipleTab = computed(() => appStore.getMultiTabsSetting.show)

  const getShowMultipleTabIcon = computed(() => appStore.getMultiTabsSetting.showIcon)

  const getShowQuick = computed(() => appStore.getMultiTabsSetting.showQuick)

  const getShowRedo = computed(() => appStore.getMultiTabsSetting.showRedo)

  const getShowFold = computed(() => appStore.getMultiTabsSetting.showFold)

  function setMultipleTabSetting(multiTabsSetting: Partial<MultiTabsSetting>) {
    appStore.setProjectConfig({ multiTabsSetting })
  }
  return {
    setMultipleTabSetting,
    getShowMultipleTab,
    getShowMultipleTabIcon,
    getShowQuick,
    getShowRedo,
    getShowFold
  }
}
