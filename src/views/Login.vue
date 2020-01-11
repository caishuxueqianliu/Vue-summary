<template>

  <div class="login">
    

    
    <div class='left'>div</div>
 <div class='content'>
   


<form>


      <label for="validationServer01">First name</label>
      <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required pattern="[A-z]{3}">
      <div class="valid-feedback">
        Looks good!
     
    </div>

</form>
 </div>
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
 @media screen and (min-width: 768px){

.login {

    display:flex;
    flex-direction: row;
    height:100%;
}


.content {
    background: palegoldenrod;
    flex:0.6;
}
.left {
  background: paleturquoise;
 flex:0.2;

}
.right{
  background: paleturquoise;
 flex:0.2;

}

}


 @media screen and (max-width: 768px){

.login {

    display:flex;
    flex-direction: row;
    height:100%;
}


.content {
    background: palegoldenrod;
    flex:1;
}
.left {
  background: paleturquoise;
 flex:0;
 display: none;

}
.right{
  background: paleturquoise;
 flex:0;
 display: none;
}

}
</style>
