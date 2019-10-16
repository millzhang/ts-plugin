# milk-plugin

> 基于 typescirpt 的 js 插件组件库

### 用法

```js
// 1. 安装
npm install milk-plugin --save
// 2. 导入插件
import {Utils} from 'milk-plugin'
// 3. 使用
Utils.formatDate()
```

### API

1. `Utils`工具包


| 方法名 | 描述 | 入参 |
| :--: | -- | -- |
| `getURLParams` | 获取当前连接的参数| `(name?:string)` |
| `formatDate`| 格式化日期(默认解析当前本地时间) | `(datetime?: number | Date, format?: string)` |
| `getDevice` | 获取当前设备类型 | - |

2. `CanvasUtil`相关操作

`CanvasUtils`是个实体类，使用需要实例化`new CanvasUtil`

| 方法名 | 描述 | 入参 |
| :--: | -- | -- |
| `compressImage` | 图片压缩(默认质量分为0.5) | `(imgUrl: string, quality?: number)` |

### 更多类型 Define

[详见类型定义](/src/main.d.ts)