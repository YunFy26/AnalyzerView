/** @type {import('tailwindcss').Config} */
export default {
  /**
   * 指定 Tailwind CSS 应该扫描哪些文件以收集类名
   * 确保 Tailwind CSS 生成的 CSS 文件中只包含项目中实际使用到的样式
   */
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    /**
     * 自定义主题
     */
    theme: {
      /**
       * 自定义颜色 --> 直接定义，会覆盖默认的主题配置
       */
      colors: {
        
      },
      
      extend: {
        /**
         * 自定义主题 --> 在默认主题的基础上进行扩展
         */
        colors: {
          primary: '#0070f3',
        },

      },
    },
    plugins: [],
  }