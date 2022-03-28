<template>
  <div>
    <h3>购物车组件</h3>
    <ul class="lists">
      <li v-for="(item, index) in carts" :key="index">
        <h5>{{ item.title }}</h5>
        <img :src="item.imgurl" alt="" />
        <div>
          <button @click='deletefn(item.id)'>删除到购物车</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import instance from '../request/api.js'
export default {
  name: "MyCarts",
  props: ["cart"],
  data() {
    return {
      carts: null,
    };
  },
  methods: {
    async addcart() {
      let obj = this.cart
      await instance.post('/carts',obj)//qs.stringify(obj)
      this.getcarts();
    },
    // 获取购物车数据
    async getcarts() {
      let { data } = await instance.get("/carts");
      this.carts = data;
    },
    async deletefn(id){
      await instance.delete("/carts/"+id) //数据库数据删了
      this.getcarts()
    }
  },
  created() {
    this.getcarts();
  },
  watch:{
    cart() {
      this.addcart();
    },
  },
};
</script>

<style scoped>
ul,
li {
  list-style: none;
}
.lists {
  display: flex;
}
.lists > li {
  flex: 1;
}
.lists button {
  width: 200px;
  height: 60px;
  font-size: 20px;
}
</style>>
