# ts-plugin

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
| `formatDate`| 格式化日期 | `(datetime?: number | Date, format?: string)`|
| `getDevice` | 获取当前设备类型 | - |

2. `canvas`相关操作

### 更多类型 Define

-