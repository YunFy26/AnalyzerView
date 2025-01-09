<template>
  <nav class="navbar">
    <div class="nav-content">
      <router-link to="/" class="nav-title-link">
        <h1 class="nav-title">WebAnalyzer</h1>
      </router-link>
      <a
        href="https://github.com/YunFy26/WebAnalyzer"
        target="_blank"
        class="github-link"
        title="View on GitHub"
      >
        <img src="@/assets/github.svg" alt="GitHub" class="github-icon" />
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: rgba(8, 8, 33, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);
  height: 70px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.nav-content {
  width: 90%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-title-link {
  text-decoration: none;
  transition: opacity 0.3s;
}

.nav-title {
  font-size: clamp(1.8em, 2.5vw, 2.2em);
  font-weight: 600;
  margin: 0;
  letter-spacing: 1.5px;
  background: linear-gradient(to left, #fff, #66a6ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.github-link {
  display: flex;
  align-items: center;
  transition: all 0.3s;
  padding: 8px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
}

.github-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.github-icon {
  width: 28px;
  height: 28px;
}
</style>
