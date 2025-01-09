<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

interface NavItem {
  id: string
  name: string
  icon: string
  desc?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { id: 'project', name: '项目信息', icon: 'folder' },
  {
    id: 'analysis',
    name: '分析选项',
    icon: 'magnifying-glass',
    children: [
      { id: 'router', name: '路由', icon: 'route', desc: '分析URL映射关系' },
      { id: 'bean', name: 'Bean', icon: 'puzzle-piece', desc: '查看Spring Bean定义' },
      { id: 'injection', name: '依赖注入点', icon: 'arrows-to-circle', desc: '分析依赖注入关系' },
      { id: 'callgraph', name: '调用图', icon: 'diagram-project', desc: '查看方法调用关系' },
      { id: 'aspect', name: '切面', icon: 'scissors', desc: '分析AOP切面信息' }
    ]
  },
  {
    id: 'llm',
    name: '大模型',
    icon: 'robot',
    children: [
      { id: 'vulnerability', name: '漏洞检测', icon: 'shield-halved', desc: '检测潜在安全漏洞'}
    ]
  }
]

const expandedItems = ref<Set<string>>(new Set(['analysis', 'llm']))

const toggleExpand = (id: string) => {
  if (expandedItems.value.has(id)) {
    expandedItems.value.delete(id)
  } else {
    expandedItems.value.add(id)
  }
}

const emit = defineEmits<{
  (e: 'select', id: string): void
}>()

// 添加控制侧边栏收起的状态
const isCollapsed = ref(false)

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

const githubUrl = 'https://github.com/YunFy26/WebAnalyzer'
</script>

<template>
  <nav
    class="w-[280px] bg-gradient-to-b from-gray-900 to-gray-900 backdrop-blur-xl border-r border-white/[0.06] h-screen flex flex-col relative transition-all duration-300 ease-in-out shadow-xl"
    :class="{ 'w-[80px]': isCollapsed }"
  >
    <!-- Logo区域 -->
    <div class="h-16 flex items-center px-6 border-b border-white/[0.06]">
      <a 
        :href="githubUrl" 
        target="_blank"
        class="flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <img 
          src="@/assets/github.svg" 
          alt="GitHub" 
          class="w-8 h-8"
        />
        <span 
          v-if="!isCollapsed"
          class="text-xl font-semibold text-white text-center ml-4"
        >
          WebAnalyzer
        </span>
      </a>
    </div>

    <!-- 收起按钮 -->
    <div
      class="absolute -right-3 top-20 w-6 h-6 bg-gray-800/90 border border-white/10 rounded-full flex items-center justify-center cursor-pointer text-white/70 text-sm z-10 hover:bg-gray-700/90 hover:text-white/90 transition-all shadow-lg backdrop-blur-xl"
      @click="toggleCollapse"
    >
      {{ isCollapsed ? '›' : '‹' }}
    </div>

    <!-- 导航内容 -->
    <div class="flex-1 overflow-y-auto py-6 px-4 space-y-2">
      <template v-for="item in navItems" :key="item.id">
        <!-- 主菜单项 -->
        <div
          class="group relative flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200"
          :class="[
            expandedItems.has(item.id)
              ? 'bg-white/[0.06] text-white'
              : 'text-white/70 hover:bg-white/[0.04] hover:text-white',
            { 'justify-center': isCollapsed }
          ]"
          @click="
            item.children ? toggleExpand(item.id) : emit('select', item.id)
          "
        >
          <div class="flex items-center gap-3">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-700/30 shadow-inner"
            >
              <font-awesome-icon
                :icon="item.icon"
                class="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                :class="
                  expandedItems.has(item.id)
                    ? 'text-blue-400'
                    : 'text-white/70 group-hover:text-white'
                "
              />
            </div>
            <span v-if="!isCollapsed" class="text-sm font-medium">{{
              item.name
            }}</span>
          </div>

          <font-awesome-icon
            v-if="item.children && !isCollapsed"
            icon="chevron-down"
            class="w-4 h-4 transition-transform duration-200"
            :class="
              expandedItems.has(item.id)
                ? 'rotate-180 text-blue-400'
                : 'text-white/40'
            "
          />
        </div>

        <!-- 子菜单 -->
        <div
          v-if="item.children && expandedItems.has(item.id)"
          class="mt-2 ml-4 space-y-1 transition-all"
          :class="{ 'ml-0': isCollapsed }"
        >
          <div
            v-for="child in item.children"
            :key="child.id"
            class="group flex items-center p-3 rounded-lg cursor-pointer transition-all hover:bg-white/[0.03]"
            :class="{ 'justify-center': isCollapsed }"
            @click="emit('select', child.id)"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800/50"
              >
                <font-awesome-icon
                  :icon="child.icon"
                  class="w-4 h-4 text-white/60 group-hover:text-blue-400 transition-all"
                />
              </div>
              <div v-if="!isCollapsed" class="flex flex-col">
                <span class="text-sm text-white/80 group-hover:text-white">{{
                  child.name
                }}</span>
                <span class="text-xs text-white/40 group-hover:text-white/60">{{
                  child.desc
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </nav>
</template>
