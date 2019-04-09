import { createStore } from 'redux'; // 3. 我们引用 redux 这个库中的 createStore
import reducer from './reducer'; // 4. 我们引用 reducer.js 中导出的数据

// 5. 我们通过 redux 提供的方法 reducer 来构建一个数据存储仓库
const store = createStore(reducer);

// 6. 我们将 store 导出去
export default store;