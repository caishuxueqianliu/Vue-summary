<template>
  <div class="home">
<form action="http://localhost:3000/captcha" method="post">
 <img :src="url" @click="qh()"></src>

 <input style="height:50px" type="text" name="yzm"></input>
<button type="submit" style="height:50px">sumbit</button>

</form>

 </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
data(){
	return{
url:'http://localhost:3000/captcha'
	}
},
mounted(){
     


},
  methods:{
 //  async	yz(){
 //       await this.$http.get("http://localhost:3000/captcha").then((res)=>{
 //     this.yzm=res
 // })     
 // await this.$http.get("http://localhost:3000/").then((res)=>{
 //    console.log(res.data)
 // })

//  await $ajax.get('http://localhost:3000/',(res)=>{
// 	console.log(res)

qh(){

	this.url="http://localhost:3000/captcha?"+Math.random()
}


  	
  }
}
</script>

<style type="text/css">
	
	img{
		width: 100px;
		height: 100px;
	}
</style>