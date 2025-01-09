<script setup lang="ts">
import { onMounted } from 'vue'
import hljs from 'highlight.js/lib/core'
import java from 'highlight.js/lib/languages/java'
import 'highlight.js/styles/atom-one-dark.css'
import IntroPageHeader from '@/components/IntroPageHeader.vue'

// 配置 Java 语言
hljs.registerLanguage('java', java)

// 配置高亮选项
hljs.configure({
  languages: ['java'],
  ignoreUnescapedHTML: true
})

onMounted(() => {
  document.querySelectorAll('pre code').forEach(el => {
    el.classList.add('java') // 显式添加 java 类
    hljs.highlightElement(el as HTMLElement)
  })
})
</script>

<template>
  <div class="router-intro">
    <IntroPageHeader
      title="Router分析"
      subtitle="深入分析Spring MVC的路由映射关系"
    />

    <div class="content-section">
      <div class="feature-cards">
        <div class="feature-card">
          <div class="icon">🔍</div>
          <h3>URL映射关系</h3>
          <p>识别所有Controller中的请求映射，包括路径、方法和参数绑定</p>
        </div>
        <div class="feature-card">
          <div class="icon">⚡</div>
          <h3>识别请求类型</h3>
          <p>识别HTTP请求类型：GET、POST、PUT、DELETE等</p>
        </div>
        <div class="feature-card">
          <div class="icon">🔄</div>
          <h3>参数解析</h3>
          <p>解析请求参数的绑定方式和数据类型</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <div class="demo-container">
        <div class="code-window animate-in">
          <div class="window-header">
            <div class="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="title">UserController.java</div>
          </div>
          <pre><code class="language-java">@RestController
@RequestMapping("/api/users")
public class UserController {
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }

    @PutMapping("/{id}")
    public User updateUser(
        @PathVariable Long id,
        @RequestBody User user
    ) {
        return userService.update(id, user);
    }
}</code></pre>
        </div>

        <div class="analysis-section animate-in delayed">
          <div class="endpoints">
            <div class="endpoint">
              <div class="method get">GET</div>
              <div class="path">/api/users/{id}</div>
              <div class="details">
                <div class="detail-item">方法名称：getUser</div>
                <div class="detail-item">参数信息：@PathVariable Long id</div>
                <div class="detail-item">返回类型：User</div>
              </div>
            </div>

            <div class="endpoint">
              <div class="method post">POST</div>
              <div class="path">/api/users</div>
              <div class="details">
                <div class="detail-item">方法：createUser</div>
                <div class="detail-item">参数：@RequestBody User user</div>
                <div class="detail-item">返回：User</div>
              </div>
            </div>

            <div class="endpoint">
              <div class="method put">PUT</div>
              <div class="path">/api/users/{id}</div>
              <div class="details">
                <div class="detail-item">方法：updateUser</div>
                <div class="detail-item">
                  参数：@PathVariable Long id, @RequestBody User user
                </div>
                <div class="detail-item">返回：User</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-intro {
  padding: 0;
  color: white;
  background: #13132b;
  min-height: calc(100vh - 70px);
  width: 100%;
}

/* PageHeader 组件会自动占满宽度 */

.content-section {
  padding: 40px;
  position: relative;
  margin: 40px auto; /* 使用 auto 让内容居中 */
  max-width: 1200px; /* 限制内容最大宽度 */
}

.feature-cards {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 0 auto;
  max-width: 1200px;
}

.feature-card {
  background: #1a1a3a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 24px;
  width: 320px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  background: #1f1f42;
  border-color: rgba(255, 255, 255, 0.15);
}

.icon {
  font-size: 2em;
  margin-bottom: 16px;
}

.feature-card h3 {
  color: #66a6ff;
  margin: 0 0 12px;
  font-size: 1.2em;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.5;
  font-size: 0.95em;
}

.demo-section {
  padding: 40px;
  max-width: 1300px; /* 限制内容最大宽度 */
  margin: 0 auto; /* 使用 auto 让内容居中 */
  background: #13132b;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.demo-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.code-window,
.analysis-section {
  background: #1a1a3a;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 24px;
  height: auto;
  min-height: 400px;
}

/**
 * 外层代码窗口
 */
.code-window {
  background: #13132b;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

/**
 * 代码窗口头部 UserController.java所在部分
 */
.window-header {
  background: #000000;
  padding: 12px 16px;
  display: flex;
  align-items: center;
}

/**
 * 代码窗口头部 macos三个点
 */
.dots {
  display: flex;
  gap: 8px;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dots span:nth-child(1) {
  background: #ff5f56;
}
.dots span:nth-child(2) {
  background: #ffbd2e;
}
.dots span:nth-child(3) {
  background: #27c93f;
}

.title {
  margin-left: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9em;
  font-family: 'Fira Code', monospace;
}

/**
 * 内层代码窗口
 */
pre {
  margin: 0;
  padding: 24px;
  background: #09091c;
}

/**
 * 内层代码窗口代码
 */
code {
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.6;
}

.code-window::before,
pre::before {
  display: none;
}

.analysis-section {
  background: #13132b;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 24px;
}

.endpoints {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.endpoint {
  background: #020205;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 20px;
}

.method {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: 500;
  margin-right: 12px;
}

.get {
  background: #61affe;
}
.post {
  background: #49cc90;
}
.put {
  background: #fca130;
}

.path {
  display: inline-block;
  color: #66a6ff;
  font-family: 'Fira Code', monospace;
  font-size: 1.1em;
  vertical-align: middle;
}

.details {
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.9);
}

.detail-item {
  margin: 8px 0;
  font-size: 0.95em;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .demo-container {
    grid-template-columns: 1fr;
  }

  .code-window,
  .analysis-section {
    max-width: 100%;
    width: 100%;
  }
}

/* IntelliJ IDEA 风格的代码高亮 */
:deep(.hljs) {
  background: #09091c !important;
  color: #a9b7c6;
}

:deep(.hljs-keyword),
:deep(.hljs-class) {
  /* 关键字和类定义 */
  color: #569cd6 !important;
  font-weight: bold;
}

:deep(.hljs-string) {
  /* 字符串 */
  color: #6a8759 !important;
}

:deep(.annotation),
:deep(.hljs-meta),
:deep(.hljs-decorator) {
  /* 注解 */
  color: #ffd700 !important;
}

:deep(.hljs-title.class_),
:deep(.hljs-title.function_) {
  /* 类名和方法名 */
  color: #ffffff !important;
}

:deep(.hljs-params),
:deep(.hljs-variable) {
  /* 参数和变量 */
  color: #ffffff !important;
}

:deep(.hljs-type) {
  /* 类型 */
  color: #f5fffd !important;
}

/* 确保注解中的字符串也是绿色 */
:deep(.annotation .hljs-string),
:deep(.hljs-meta .hljs-string) {
  color: #6a8759 !important;
}

@media (max-width: 768px) {
  .content-section,
  .demo-section {
    padding: 20px;
  }
}

/**
 * 动画效果
 */
.animate-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

.delayed {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
