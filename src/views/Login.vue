<template>
  <div class='all'> 


<stars></stars>

    <div class="box">

    <div class="item">
  <el-button v-model='state' size="medium" @click="showx()">{{state}}</el-button>

</div>

<transition 
    enter-active-class="animated rollIn"
    leave-active-class="animated rollOut"
  >
 <div class='login'  v-if="show">
<el-form ref="loginFormRef" :model='loginForm' label-width="100px" class="demo-ruleForm" :rules="loginRules" >
    <el-form-item  >
    <p>login</p>
  </el-form-item>

  <el-form-item prop="username" >
    <el-input class="srk" type="text" placeholder="username" v-model="loginForm.username" name="username"></el-input>
  </el-form-item>


  <el-form-item prop="password">
    <el-input class="srk" type="password" placeholder="password" v-model="loginForm.password" name='password'></el-input>
  </el-form-item>
 
  <el-form-item prop="captcha">

<div class='yzmall'>

  <img :src="url" @click="qh()"></src>

 <el-input class="yzm" type="text" placeholder="验证码" v-model="loginForm.captcha" name='captcha'></el-input>

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
          

<el-form ref="registerFormRef" :model='loginForm'label-width="100px" class="demo-ruleForm" :rules="registerRules">
  
    <el-form-item  >
    <p>register</p>
  </el-form-item>
  <el-form-item prop="username">
  
    <el-input type="text" class="srk"  placeholder="username" v-model="loginForm.username" ></el-input>
  </el-form-item>

  <el-form-item  prop="password">
    <el-input type="text" class="srk" placeholder="password"  v-model="loginForm.password"></el-input>
  </el-form-item>


  <el-form-item  prop="ispassword">
    <el-input  type="password" class="srk" placeholder="ispassword" v-model="ispassword"></el-input>
  </el-form-item>

  <el-form-item prop="captcha" >
   <div class='yzmall'>

  <img :src="url" @click="qh()"></src>

 <el-input class="yzm" type="text" placeholder="验证码" v-model="loginForm.captcha" name='captcha'></el-input>

</div>
  </el-form-item>
    <el-form-item >
<el-button class='submit' @click='submitregister()'>register</el-button>
  </el-form-item>
</el-form>
          
  </div>

    </transition>


 </div>  

    



</div>
 
</template>
<script>
  
 import {reqLogin,reqRegister} from '../api/index.js'
  import stars from '../components/stars.vue'
export default {
    data(){

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (value.length>6) {
            callback(new Error('请输入合适的位数'))
          }
          callback();
        }
      };
        return{
              state:"切换注册",
                loginForm:{
                 username:'',
                 password:'',
                 captcha:""
                   },
                 ispassword:'',
               
                
             show: true,
             shows:false,
             url:'http://localhost:3000/captcha',
             loginRules: {
               username: [
               { required: true, trigger: 'blur', message: '请输入用户名' } ,
              { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
             ],
               password: [{ validator: validatePass, trigger: 'blur' }],
               captcha: [ 
               { required: true, trigger: 'blur', message: '请输入验证码' } ,
              { min:4 , max: 4, message: '长度为4字符', trigger: 'blur' }
               ]
             },
             registerRules:{
               username: [
               { required: true, trigger: 'blur', message: '请输入用户名' } ,
              { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
             ],
               password: [{ validator: validatePass, trigger: 'blur' }],
               ispassword: [{ validator: validatePass, trigger: 'blur' }],
                captcha: [ 
               { required: true, trigger: 'blur', message: '请输入验证码' } ,
              { min:4 , max: 4, message: '长度为4字符', trigger: 'blur' }
               ]


             }
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

this.$refs.loginFormRef.validate(async valid=>{
  // console.log(valid);
   if(!valid) return;
      const result=await reqLogin(this.loginForm)
  this.url="http://localhost:3000/captcha?"+Math.random()
this.$refs.loginFormRef.resetFields();
this.ispassword=''
        if(result.data.code===0) {
 window.sessionStorage.setItem("token",result.data.data.token);
 this.$message.success('用户登录成功')
this.$router.push('/home')
}else{
 this.$message.error('用户登录失败')


}})
 // this.$refs.loginFormRef.validate(async valid=>{
 //  // console.log(valid);
 //   if(!valid) return;

 //this.$http.post('http://localhost:3000/login',this.username,this.password,this.captcha);
 // this.$http.post("login",this.loginForm).then((res)=>{
 //  console.log(res)
 // })
 // this.$http({
 //                method: 'post',
 //                url: '/login',
 //                data:this.username,
 //                headers: {
 //                   "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
 //                    //'token': localStorage.getItem('token') //缓存的token
 //                }
                

 //            }).then((res)=>{
 //                console.log(res.data);
 //            }).catch(console.log('errs'))

    // this.$http.post('http://localhost:3000/login',this.loginForm);   
        },
  submitregister(){
this.$refs.registerFormRef.validate(async valid=>{
  // console.log(valid);
   if(!valid) return;
  const result= await reqRegister(this.loginForm)
    this.url="http://localhost:3000/captcha?"+Math.random()
    this.$refs.registerFormRef.resetFields();
        if(result.data.code===0) {
          const user = result.data.data
          // 将user保存到vuex的state
         // this.$store.dispatch('recordUser', user)
        this.$message.success('用户注册成功')
          // 去个人中心界面
      }    
      else {
         this.$message.error('用户注册失败')
      }
    })
  }

    },
    components:{
      stars
    }
}
</script>

<style lang="less"type>
 .all{
            background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #75517d, #1b2947);
            background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
            background-attachment: fixed;
            overflow: hidden;
            z-index: 999;
            width:100%;
           height: 720px;

        }
    
        @keyframes rotate {
            0% {
                transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
            }
            100% {
                transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
            }
        }
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

.el-form-item__error{
 font-size: 15px;
 color:blue;
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
left: 90px;
.el-input__inner{
  width: 160px;
  background-color: #ffffff00;
  color:yellow;
}
}
     </style>   
