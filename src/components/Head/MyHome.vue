<template>
  <div>
      <h3>子组件{{ss}}</h3>
      <button @click='fn'>345</button>
  </div>
</template>

<script>
export default {
    name:"MyHome",
    props:['ss'],
    data(){
        return{
            aa:"子传父"
        }
    },
    methods:{
        fn(){
            let aa=this.aa
            this.$emit('eventff',aa)
        }
    }
}
</script>

<style>

</style>