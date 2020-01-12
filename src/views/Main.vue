<template>

  <div class="login">  
    <div class='header'>div</div>
    	   <div class='main'>
    <div class='left'>div</div>
 <div class='content'>div</div>

     </div>
 <div class=footer>div</div>

 
 </div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {

       }
   },

  created() {},
  mounted() {},
  destroyed() {},
  methods: {},

computed:{},
watch: {},
components:{}


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
