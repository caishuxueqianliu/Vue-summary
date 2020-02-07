<template>
  <div> 


<!-- <stars></stars> -->

    <div class="box">

    <div class="item">
  <el-button v-model='state' size="medium" @click="showx()">{{state}}</el-button>

</div>

<transition 
    enter-active-class="animated rollIn"
    leave-active-class="animated rollOut"
  >
 <div class='login'  v-if="show">
<el-form ref="loginFormRef" label-width="100px" class="demo-ruleForm" >
    <el-form-item  >
    <p>login</p>
  </el-form-item>

  <el-form-item >
    <el-input class="srk" type="text" placeholder="username" v-model=" loginForm.username" name="username"></el-input>
  </el-form-item>


  <el-form-item >
    <el-input class="srk" type="password" placeholder="password" v-model="loginForm.password" name='password'></el-input>
  </el-form-item>
 
  <el-form-item >

<div class='yzmall'>

  <img :src="url" @click="qh()"></src>

 <el-input class="yzm" type="text" placeholder="验证码" v-model="loginForm.yzm" name='yzm'></el-input>

</div>

  </el-form-item>

 <el-form-item >
<el-button class='submit' @click="submitlogin">login</el-button>
  </el-form-item>

</el-form>


  </div>
         
  </transition>

<transition
  enter-active-class="animated rollIn"
    leave-active-class="animated rollOut"
  >

       <div class='logins'  v-if="shows">
          

<el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
  
    <el-form-item  >
    <p>register</p>
  </el-form-item>
  <el-form-item  >
  
    <el-input type="text" class="srk"  placeholder="username" v-model="registerFrom.username" ></el-input>
  </el-form-item>

  <el-form-item  >
    <el-input type="text" class="srk" placeholder="password"  v-model="registerFrom.password"></el-input>
  </el-form-item>


  <el-form-item  >
    <el-input  type="password" class="srk" placeholder="ispassword" v-model="registerFrom.ispassword"></el-input>
  </el-form-item>

  <el-form-item >
   <div class='yzmall'>

  <img :src="url" @click="qh()"></src>

 <el-input class="yzm" type="text" placeholder="验证码" v-model="registerFrom.yzm" name='yzm'></el-input>

</div>
  </el-form-item>
    <el-form-item >
<el-button class='submit' @click="submitregister">register</el-button>
  </el-form-item>
</el-form>
          
  </div>

    </transition>


 </div>  

    



</div>
 
</template>
<script>
  
  import qs from 'qs'
  import stars from '../components/stars.vue'
export default {
    data(){
        return{
              state:"切换注册",
              loginForm:{
                 username:'',
                 password:'',
                 yzm:''
              },
             registerFrom:{
                 username:'',
                 password:'',
                 ispassword:'',
                 yzm:''
             },
            
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
           this.shows=!this.shows;
          this.show=!this.show;
          this.username=this.password=''
          if(this.show===true){
            this.state="切换注册"
          }
          else if(this.show===false){

             this.state="切换登录"
          }
         
          //this.state="切换登陆"
        },
        submitlogin(){


 // this.$refs.loginFormRef.validate(async valid=>{
 //  // console.log(valid);
 //   if(!valid) return;

 //this.$http.post('http://localhost:3000/login',this.loginForm);
 // this.$http.post("login",this.loginForm).then((res)=>{
 //  console.log(res)
 // })
 this.$http({
                method: 'post',
                url: '/login',
                data: this.loginForm,
                headers: {
                   "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    //'token': localStorage.getItem('token') //缓存的token
                },
                transformRequest: [function (data) {   
                 return qs.stringify(data)
  }],
            }).then((res)=>{
                console.log(res.data);
            }).catch(console.log('errs'))

            
        }
//  headers: {

//                 "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"

//             }

 //  this.$http.get("http://localhost:3000/").then((data)=>{
 //    console.log(data)
 //  })
   // if(res.meta.status!==200)return this.$message.error('登陆失败')
   // this.$message.success('登陆成功');
 // console.log(res);
//将token存储到本地session存储中
 //window.sessionStorage.setItem("token",res.data.token);
//编程式导航
 //this.$router.push("/home");
 // });
        

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
  color:yellow;

}
.el-form{
  align-items: center;
  justify-content: center;
}



        .box{
             display: flex;
         justify-content: center;
    
           
            height: 100%;
           }
        .login{
             position: absolute;
      
             height: 300px;
             width: 600px;
             opacity: 1;
             border-radius: 15px;
                margin-top: 215px;
      
        }
                .logins{
             position: absolute;
      
             height: 300px;
             width: 600px;
             opacity: 1;
             border-radius: 15px;
             margin-top: 215px;
      
        }
       .item{
 z-index:999;
position: absolute;
margin-top: 225px;
margin-left: 150px;

     
     
       }

       .el-button{
         background-color: #ffffff00;
         color: white;
         opacity: 1;
       }

   .submit{

    width: 400px;
    font-size: 18px;
    color: white;
    
}
.yzmall{
  width: 400px;

display: flex;

position: relative;
}

.yzm{
left: 120px;
.el-input__inner{
  width: 160px;
  background-color: #ffffff00;
  color:yellow;
}
}
     </style>   
