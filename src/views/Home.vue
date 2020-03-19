<template>
<!-- <el-upload
  class="upload-demo"
  drag
  action='/api/upload'
  :data='data'
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
</el-upload> -->
  <form action="/api/upload" method="post" enctype="multipart/form-data">
     
        username: <input type="text" name="username" /><br>
        file:  <input type="file" name="file"><br>
        file2:  <input type="file" name="file2"><br>
         <input type="submit" value="上传文件">
    
    </form>
    
</template>
<script>

export default {
    data(){
        return{
        data:123
        }
    },
    created(){
        
    },
    mounted(){
      
    },
    methods:{
   // logout(){

   // this.$message.success('用户退出成功')
   // window.sessionStorage.clear();
   // this.$router.push('/login')
   // }

    },
    components:{
 
    }
}


</script>
<style>
   
</style>