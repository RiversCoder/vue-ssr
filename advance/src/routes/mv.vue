<template>
    <section class="mv">
        mv
        <div>{{mvInfo}}</div>
    </section>
</template>


<script scoped>
    export default {
        sendRequest(store){
            return store.dispatch('getInfo');
        },
        computed: {
            mvInfo(){
                return this.$store.state.info;
            }
        }
    }
</script>

<style stylus="less" scoped>
    
</style>