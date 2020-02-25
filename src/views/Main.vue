<template>

  <div class="login">  
    <div class='header'>div</div>
    	   <div class='main'>
    <div class='left'>div</div>
 <div class='content'> 
<Highlight :contents='contents' isClass='javascript'/>



 </div>

     </div>
 <div class=footer>div</div>

 
 </div>
</template>

<script>
  import Highlight from '../components/highlight.vue'
export default {
 
  data() {
    return {
  contents:`var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})`
       }
   },

  created() {
    this.getToken()
  },
  mounted() {},
  destroyed() {},
  methods: {

 async getToken(){ 

         await this.$http.get("http://localhost:3000/login").then((datas)=>{
            //console.log(datas)
            this.token=datas.data;
            //console.log(this.token)
          })
      //存储
     await  sessionStorage.setItem('token', JSON.stringify(this.token));
         // localStorage.setItem('key', JSON.stringify(info));
         //获取
         var data1 = JSON.parse(sessionStorage.getItem('token'));
         //var data2 = JSON.parse(localStorage.getItem('key'));
         console.log(data1)

         //删除
         // sessionStorage.removeItem('key');
         // localStorage.removeItem('key');
         // sessionStorage.clear();
         //   localStorage.clear();
      }
  },

computed:{},
watch: {},
components:{
  Highlight
}


}
</script>


<style  lang="less" scoped="" type="text/css">

 @media screen and (max-width: 768px){

.login {
position: absolute;
    display:flex;
    flex-direction: column;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
   
}

.header,.footer {
height:50px; 
    background: pink;
}



.main {
    display:flex;
    flex-direction:column;
    flex:1; 
}

.content {
    background: palegoldenrod;
    flex:1;
}
.left{
  background: paleturquoise;
 flex:0.2;
 display: none;
}


 }


 @media screen and (min-width: 768px){
.login {

    display:flex;
    flex-direction: column;
    height:100%;
}

.header,.footer {
flex:0.1; 
    background: pink;
}

.main {
    display:flex;
    flex-direction:row;
    flex:0.8; 
}

.content {
    background: palegoldenrod;
    flex:0.8;
}

.left{
  background: paleturquoise;
   flex:0.2;
}

.left {
    order:-1;
}
}
</style>
