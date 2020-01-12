<template>
  <div> 
    <div class="stars">
        <div class="star" ref="star"  v-for="(item,index) in starsCount" :key="index"></div>

    </div>


    <div class="box">

<transition 
    enter-active-class="animated rubberBand"
    leave-active-class="animated rubberBand"
  >


    <div class='login'  v-if="show">


<el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
  

  <el-form-item  prop="username">
    <el-input class="srk" type="text" placeholder="username" autocomplete="off"></el-input>
  </el-form-item>


  <el-form-item prop="password">
    <el-input class="srk" type="password" placeholder="password"autocomplete="off"></el-input>
  </el-form-item>





</el-form>


  </div>
         
  </transition>
       

<transition
    enter-active-class="animated rubberBand"
    leave-active-class="animated rubberBand"
  >

       <div class='login'  v-if="shows">
          

<el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
  

  <el-form-item  prop="username">
    <el-input type="text" class="srk" placeholder="username"  autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item  prop="password">
    <el-input type="text" class="srk" placeholder="password"  autocomplete="off"></el-input>
  </el-form-item>


  <el-form-item  prop="checkPass">
    <el-input type="password" class="srk" placeholder="password" autocomplete="off"></el-input>
  </el-form-item>



</el-form>
          
  </div>

    </transition>


</div>   

        <div class="item"> 
  <el-button type="primary" size="medium" @click="showx()">登录</el-button>
    <el-button type="primary"size="medium"@click="showy()">注册</el-button>

</div>
         </div>
</template>
<script>
export default {
    data(){
        return{
            starsCount: 800,
            distance: 800,
             show: true,
             shows:false
        }
    },
    created(){
        
    },
    mounted(){
        let _this = this;
        // 原生js
        let _starList = document.getElementsByClassName("star")
        let starArr = Array.prototype.slice.call(_starList)
        // vue
        let starList = this.$refs.star
        // 遍历添加样式
        starArr.forEach(item => {
            var s = 0.2 + (Math.random() * 1);
            var thisDistance = _this.distance + (Math.random() * 300);
            item.style.transformOrigin = `0 0 ${thisDistance}px`
            item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${(Math.random() * 360)}deg) rotateX(${(Math.random() * -50)}deg) scale(${s},${s})`
        })
    },
    methods:{
        showx(){
          this.show=false;
          this.shows=true;
        },
        showy(){
           this.shows=false;
          this.show=true;
        }
    }
}
</script>
<style lang="less"type>
.srk{
  width: 400px;

}
el-form{
  align-items: center;
  justify-content: center;
}
          body {
            background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #75517d, #1b2947);
            background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
            background-attachment: fixed;
            overflow: hidden;
        }
        
        @keyframes rotate {
            0% {
                transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
            }
            100% {
                transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
            }
        }
        
        .stars {
          
            transform: perspective(500px);
            transform-style: preserve-3d;
            position: absolute;
            bottom: 0;
            perspective-origin: 50% 100%;
            left: 50%;
            animation: rotate 90s infinite linear;
        }
        
        .star {
            width: 2px;
            height: 2px;
            background: #F7F7B6;
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: 0 0 -300px;
            transform: translate3d(0, 0, -300px);
            backface-visibility: hidden;
        }
        .box{
          display: flex;        
     justify-content: center;
            margin-top: 20%;
           }
        .login{
             position: absolute;
           
             height: 200px;
             width: 600px;
             opacity: 0.5;
             border-radius: 15px;
          
              
        }

     </style>