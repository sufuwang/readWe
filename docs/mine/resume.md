# 王凯简历

## 基本信息

<Resume />

## 工作经历

### 腾讯/CSIG

- 业务相关：开发 \*\*\*\* 小程序和对应 PC 端
- 技术相关：负责团队内框架升级和维护、CI/CD 建设、数据埋点、产线错误上报及机器人通知
- 组件库相关：参与公司 Tdesign 组件库建设，包括 Tree 组件维护、ImageViewer 组件开发

  Uniapp@2 默认可以分享小程序内所有页面，所以存在通过截屏的方式将用户隐私泄漏出去的可能，若要解决这个问题，需要把所有页面的分享封面均设置一遍；其次 Uniapp@2 与 `@vue/composition-api` 存在不兼容的问题，比如 `ref` 获取不到组件实例；再就是 Webpack 打包耗时太久，使用 Uniapp@3 就显得势在必行。

  在升级过程中主要解决 Vue 和 Uniapp 版本不兼容语法的修复，不兼容特性的修复，包括不同平台下 CSS 选择器的兼容、条件编译改为基于环境变量的动态编译，并做了一些优化，包括自动加载、地址校验、动态编译文件的热更新。这个过程中向 Uniapp 提了很多 Issue，和大佬一起讨论 bug。包括 [兼容标签选择器](https://github.com/dcloudio/uni-app/issues/3085)、[组件⽣命周期函数获取](https://github.com/dcloudio/uni-app/issues/3305)、[Props 更新⻚⾯未重新渲染](https://github.com/dcloudio/uni-app/issues/3648)、[其他 Issue](https://github.com/dcloudio/uni-app/issues?q=is%3Aissue+author%3Asufuwang+)、[Uniapp 升级的 PPT](https://github.com/sufuwang/demo/tree/feature/webpack-react/public)。

  升级前所使用的技术栈是 Vue@2 、 Uniapp@2、Webpack ，升级后所使用的技术栈是 Vue@3、Uniapp@3、Vite。升级前后性能对比如下表格所示
  | 打包工具 | 启动耗时 | 热更新耗时 | 打包耗时 | 主包体积 | 总包体积 |
  | ---------------------------- | -------- | ---------- | -------- | -------- | -------- |
  | Webpack | 59.055 | 6.620 | 146.055 | 2.07MB | 8.20MB |
  | Vite | 23.387 | 6.812 | 26.550 | 1.43MB | 4.95MB |
  | 提升 | 33.668 | 0.192 | 119.505 | 0.64MB | 3.25MB |
  | 提升占比<br />(提升/Webpack) | 57% | 3% | 82% | 31% | 40% |

### Zoom/Chat

- 业务相关：参与 \*\*\*\* 的 SDK 开发
- 技术相关：为方便 SDK 与前端同学联调，开发了一个本地调试工具，将 SDK 和 UI 作为子库引入，建立 Symbolic Link，两个库使用了不同的工具实现了 MonoRepo （Yarn、Pnpm），所以工具需要根据 Npm 工具的特性来实现 Symbolic Link

<script setup>
import Resume from '@comps/Resume';
</script>
