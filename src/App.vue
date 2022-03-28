<template>
  <div id="app">
    <MyHead></MyHead>
    <button @click="allfn">并发请求</button>
    <MyHome :ss="mess" @eventff="fs"></MyHome>
    {{ aa }}
    <MyCarts :cart="cart"></MyCarts>
    <MyProducts @cartfn="ff"></MyProducts>
  </div>
</template>

<script>
import MyHead from "./components/Head/MyHead";
import MyHome from "./components/Head/MyHome";
import MyCarts from "./MyCarts/MyCarts";
import MyProducts from "./MyProducts/MyProducts";
import axios from "axios";
export default {
  name: "App",
  components: {
    MyHead,
    MyHome,
    MyCarts,
    MyProducts,
  },
  data() {
    return {
      mess: "父串子",
      aa: "",
      cart: null,
    };
  },
  methods: {
    allfn() {
      let a1 = axios.get("http://localhost:3000/products");
      let a2 = axios.get("http://localhost:3000/carts");
      axios.all([a1,a2]).then((res) => console.log(res));
    }, //并发请求
    ff(mes) {
      this.cart = mes;
    },
    fs(a) {
      this.aa = a;
    },
  },
  created(){
    //跨域报错
    axios.get('/api')
    .then(res=>console.log(res))

  }
};
</script>