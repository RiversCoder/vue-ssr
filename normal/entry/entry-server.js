import { createVM } from '../src/main.js'

export default context => {
    return new Promise((resolve, reject) => {
        const vm = createVM();

        // 切换路由
        vm.$router.push(context.url);

        // 获取响应路由下的组件，注：router.getMatchedComponents(location?) 返回目标位置或是当前路由匹配的组件数组 （是数组的定义/构造类，不是实例）。通常在服务端渲染的数据预加载时
        const matchedComponent = vm.$router.getMatchedComponents();

        //如果没有组件，则说明该路由不存在，报错404
        if(matchedComponent.length <= 0){
            return reject({code:404});
        }

        resolve(vm);

    })
}