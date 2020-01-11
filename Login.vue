<template>
  <div>
  <div class="login">
    

    
    <div class='left'>div</div>
 <div class='content'>div</div>
 <div class='right'>div</div>
 
  </div>
</template>

<script>
export default {
  name: 'Login',
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


.login {

    display:flex;
    flex-direction: row;
    height:100%;
}


.content {
    background: palegoldenrod;
    flex:0.6;
}
.left .right{
  background: paleturquoise;
 flex:0.2;
 display: none;
}




</style>
