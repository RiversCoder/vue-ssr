/* entry-client.js */
import { createVM } from '../src/main'


const vm = createVM()

// 绑定app根元素
window.addEventListener('load',(e) => {
    vm.$mount('#app');
});

