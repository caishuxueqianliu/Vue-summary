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
<div>
        month: <input type="text" name="month" v-model='month'/><br>
        email: <input type="text" name="email" v-model='email' /><br>
<input type="button" value="shuju" @click='sub'>

  <form action="/api/upload" method="post" enctype="multipart/form-data">
     
         

            file:  <input type="file" name="file" accept="image/*" multiple='multiple'><br>
            file1:  <input type="file" name="file1" accept="image/*" multiple='multiple'><br>
            file2:  <input type="file" name="file2"  accept="image/*" multiple='multiple'><br>
        
    
           cwbg:<input type="file" name="filex"  multiple='multiple'><br>
        xs:  <input type="file" name="files"  multiple='multiple'><br>
         <input type="submit" value="上传文件" @click='submit'>
    
    </form>
    </div>
</template>
<script>
import {reqSubmit} from '../api/index.js'
export default {
    data(){
        return{
        month:'',
        email:''
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
    
    sub(){


     reqSubmit(this.month,this.email)
    }
    },
    components:{
 
    }
}


</script>
<style>
   
</style>