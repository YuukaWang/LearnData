import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    // 读书笔记架构更换到 docsify，不能使用相对链接
    { text: "读书笔记", icon: "fa6-brands:readme", link: "https://yuukawang.github.io/LearnData/reading/" },
    // 指定显示页面
    {
      text: "🧰 应用手册",
      icon: "",
      prefix: "/apps/",
      link: "",
      collapsible: true,
      children: [
        "Applist.md",
        "toolbox.md",
        "encrypt03.md",
        {
          text: "其他",
          icon: "fa6-solid:code-compare",
          collapsible: true,
          children: ["design.md"],
        },
      ],
    },
    {
      text: "🌐 页面开发",
      icon: "",
      prefix: "/web/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🏗️ 网站部署",
      icon: "",
      prefix: "/deploy/",
      link: "",
      collapsible: true,
      children: [
        "Static.md",
        "CloudServices.md",
        "VPS.md",
        {
          text: "部署工具",
          icon: "fa6-brands:windows",
          collapsible: true,
          children: ["GitHub.md", "Cloudflare.md", "MySQL.md", "DNS.md"],
        },
      ],
    },
    {
      text: "🔡 代码编程",
      icon: "",
      prefix: "/code/",
      collapsible: true,
      children: [
        "README.md",
        {
          text: "Basic",
          icon: "fa6-solid:cube",
          collapsible: true,
          children: ["Markdown.md", "Electron.md", "AutoHotkey.md", "Regex.md"],
        },
        {
          text: "FrondEnd",
          icon: "fa6-solid:object-group",
          collapsible: true,
          children: ["Vue.md", "HTML.md", "Javascript.md", "Python.md"],
        },
      ],
    },
    {
      text: "🛖 生活记录",
      icon: "",
      prefix: "/family/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🔑 加密目录",
      icon: "",
      prefix: "/encrypt/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "🌏 地球科学",
      icon: "",
      prefix: "/geoscience/",
      collapsible: true,
      children: [
        "README.md",
        {
          text: "🌐 网课笔记",
          icon: "",
          collapsible: true,
          children: [
            "README.md",
            {
              text: "第二学期选修课",
              icon: "",
              collapsible: true,
              children: ["01 辐射与温度.md", "02 地球历史的温度变化.md", "03 水的重要性.md", "04 地球的物质组成.md", "05 地球化学基础.md",
                         "06 生命与生命元素.md", "07 比较行星学.md", "08 行星与深空探测.md"],
            },
          ],
        },
        {
          text: "📜 历年真题",
          icon: "",
          collapsible: true,
          children: ["18国初.md", "18国决.md", "19国初.md", "19国决.md", "21国初", "21国决", "23国初", "23国决", "24国初", "24国决", "24国际赛"],
        },
        {
          text: "🗑 其余杂项",
          icon: "",
          collapsible: true,
          children: ["2024学年第一学期期末考试.md"],
        },
      ],
    },
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ],
  // 专题区（独立侧边栏）
  "/apps/topic/": "structure",
  // 如果你不想使用默认侧边栏，可以按照路径自行设置。但需要去掉下方配置中的注释，以避免博客和时间轴出现异常。_posts 目录可以不存在。
  /*"/_posts/": [
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
  ], */
});
