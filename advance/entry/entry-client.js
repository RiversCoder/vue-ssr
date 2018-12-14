/* entry-client.js */
import { createVM } from '../src/main'


const vm = createVM()

//同步服务端数据信息
if(window.__INITIRAL_STATE__){
    console.log(window.__INITIRAL_STATE__);
    vm.$store.replaceState(JSON.parse(window.__INITIRAL_STATE__));
}

// 绑定app根元素
window.addEventListener('load',(e) => {
    vm.$mount('#app');
});

