<template>
  <div> 


<stars></stars>

    <div class="box">



<transition 
    enter-active-class="animated rollIn"
    leave-active-class="animated rollOut"
  >
    <div class='login'  v-if="show">
<el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item  >
    <p>login</p>
  </el-form-item>

  <el-form-item  >
    <el-input class="srk" type="text" placeholder="username" ></el-input>
  </el-form-item>


  <el-form-item >
    <el-input class="srk" type="password" placeholder="password"></el-input>
  </el-form-item>

  <el-form-item >
  <img :src="url" @click="qh()"></src>
  </el-form-item>



</el-form>


  </div>
         
  </transition>

<transition
  enter-active-class="animated rollIn"
    leave-active-class="animated rollOut"
  >

       <div class='login'  v-if="shows">
          

<el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
    <el-form-item  >
    <p>register</p>
  </el-form-item>
  <el-form-item  >
    <el-input type="text" class="srk"  placeholder="username" ></el-input>
  </el-form-item>

  <el-form-item  >
    <el-input type="text" class="srk" placeholder="password"  ></el-input>
  </el-form-item>


  <el-form-item  >
    <el-input type="password" class="srk" placeholder="password" ></el-input>
  </el-form-item>

  <el-form-item >
    <img :src="url" @click="qh()"></src>
  </el-form-item>


</el-form>
          
  </div>

    </transition>

    <div class="item">
  <el-button  size="medium" @click="showy()">登录</el-button>
  <el-button size="medium"@click="showx()">注册</el-button>
</div>
 </div>  

    



</div>
 
</template>
<script>
  import stars from '../components/stars.vue'
export default {
    data(){
        return{
          
             show: true,
             shows:false,
             url:'http://localhost:3000/captcha'
        }
    },
    created(){
        
    },
    mounted(){
      
    },
    methods:{
      qh(){
  this.url="http://localhost:3000/captcha?"+Math.random()
},
        showx(){
          this.show=false;
          this.shows=true;
        },
        showy(){
           this.shows=false;
          this.show=true;
        }

    },
    components:{
      stars
    }
}
</script>
<style lang="less"type>
p{
  color: white;
  opacity: 0.5;

  font-size: 30px;
}
.el-input__inner{
  width: 400px;
  background-color: #ffffff00;

}
.el-form{
  align-items: center;
  justify-content: center;
}



        .box{
             display: flex;
         justify-content: center;
          margin-top: 15%;
           
            height: 100%;
           }
        .login{
             position: absolute;
      
             height: 300px;
             width: 600px;
             opacity: 0.5;
             border-radius: 15px;
      
        }
       .item{
 z-index:999;
position: absolute;
margin-top: 300px;

     
     
       }

       .el-button{
         background-color: #ffffff00;
         color: white;
         opacity: 0.5;
       }


     </style>