<template>
  <div>
    <h3>这是商品组件</h3>
    <ul class="lists">
        <li v-for="(item,index) in products" :key="index">
            <h5>{{item.title}}</h5>
            <img :src="item.imgurl" alt="">
            <div>
                <button @click="addcart(item)">添加到购物车</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import instance from '../request/api.js'
export default {
  name: "MyProducts",
  data() {
    return {
      products: null,
      carts:null
    }
  },
  methods: {   
      async addcart(item){
          let {title,imgurl}=item
        this.$emit('cartfn',{title,imgurl})
      },//添加到购物车逻辑
    async getproducts() {
    let {data}=await instance.get("/products")
    this.products=data
    },
  },
 created() {
      this.getproducts()
  }
}
</script>

<style scoped>
ul,li{
    list-style: none;
}
.lists{display: flex;}
.lists>li{
    flex: 1;
}
.lists button{
    width:200px;
    height: 60px;
    font-size: 20px;
}
</style>