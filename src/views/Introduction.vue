<template>
  <div class="introduction">
    <div class="content" v-if="$route.path === '/intro'">
      <div class="left-section">
        <div class="features">
          <router-link to="/intro/router" class="feature-link">
            <div class="feature-item">
              <h2>Router分析</h2>
              <p>提取Web URL入口路径，与后端方法映射关系</p>
              <p>详细展示对应后端方法的结构信息</p>
            </div>
          </router-link>

          <router-link to="/intro/bean" class="feature-link">
            <div class="feature-item">
              <h2>Bean对象分析</h2>
              <p>静态分析Spring容器管理的所有Bean</p>
              <p>输出Bean的全限定名与注解信息</p>
            </div>
          </router-link>

          <div class="feature-item">
            <h2>依赖注入分析</h2>
            <p>识别所有依赖注入点的位置与类型</p>
            <p>分析Field、Constructor、Setter注入</p>
          </div>

          <div class="feature-item">
            <h2>调用图分析</h2>
            <p>生成从Router开始的完整调用图</p>
            <p>使用dot图直观展示调用关系</p>
          </div>

          <div class="feature-item">
            <h2>切面分析</h2>
            <p>识别切面位置及其影响范围</p>
            <p>对运行时动态代理对象进行建模</p>
          </div>

          <div class="feature-item">
            <h2>漏洞检测</h2>
            <p>基于调用图的漏洞分析</p>
            <p>使用大模型辅助识别安全隐患</p>
          </div>
        </div>
      </div>

      <div class="right-section">
        <div class="action-card">
          <h3>开始使用</h3>
          <p>上传Spring项目JAR包，开始全方位分析</p>
          <router-link to="/analysis" class="start-button">
            上传项目
          </router-link>
          <div class="version">当前版本：v1.1.0</div>
        </div>
      </div>
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<style scoped>
.introduction {
  min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background: #13132B;
}

.content {
  width: 90%;
  max-width: 1200px;
  display: flex;
  gap: 40px;
  margin: 0 auto;
}

.left-section {
  flex: 1;
  max-width: 800px;
  min-width: 0;
  display: flex;
  align-items: center;
}

.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
}

.feature-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.feature-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.feature-item h2 {
  font-size: 1.2em;
  margin: 0;
  background: linear-gradient(to right, #fff, #4459e2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-item p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  font-size: 0.9em;
}

.right-section {
  width: 280px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.action-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  padding: 32px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.action-card h3 {
  font-size: 1.8em;
  margin: 0 0 16px 0;
  background: linear-gradient(to right, #fff, #66a6ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.action-card p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
}

.start-button {
  display: inline-block;
  background: linear-gradient(135deg, #2193b0, #6dd5ed);
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 500;
  transition: all 0.3s;
  border: none;
}

.start-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(33, 147, 176, 0.3);
}

.version {
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9em;
}

@media (max-width: 1400px) {
  .content {
    gap: 40px;
  }
  
  .features {
    gap: 24px;
  }
  
  .feature-item {
    padding: 28px;
    min-height: 200px;
  }

  .right-section {
    width: 300px;
  }
}

@media (max-width: 1200px) {
  .introduction {
    padding: 40px 0;
  }

  .content {
    max-width: 1000px;
  }
  
  .left-section {
    max-width: 700px;
  }
  
  .features {
    gap: 20px;
    grid-template-columns: repeat(2, minmax(200px, 350px));
  }
  
  .feature-item {
    padding: 20px;
    min-height: 140px;
  }

  .right-section {
    width: 260px;
  }
}

@media (max-width: 768px) {
  .introduction {
    padding: 20px;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .content {
    flex-direction: column;
  }

  .right-section {
    width: 100%;
    margin-top: 20px;
  }
}
</style> 