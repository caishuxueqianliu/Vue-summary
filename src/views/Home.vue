<template>


<div>home


 <el-button @click="logout()">退出</el-button>
</div>
  
</template>
<script>

export default {
    data(){
        return{
          
        }
    },
    created(){
        
    },
    mounted(){
      
    },
    methods:{
   logout(){

   this.$message.success('用户退出成功')
   window.sessionStorage.clear();
   this.$router.push('/login')
   }

    },
    components:{
 
    }
}
</script>
