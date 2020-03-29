<template>

<div>

  <div class='inp' >
    <div  class='a' >
      <el-input placeholder='email' type="text" name="email" v-model='datas.email'></el-input>
    </div>
    <div class='a'>
      <div class="block">
    <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份">
    </el-date-picker>
  </div>

    </div>

    <div class='cwbg'>
      <el-select v-model="datas.value" placeholder="下載財務報告的月份">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.label"
      :disabled="item.disabled">
    </el-option>
  </el-select>

    </div>
<div class='c'>
  <el-button  type="success" @click='sub()' size='small'>data準備</el-button>

  </div>
  </div >


 
<div id='pics'>

  <div class='pic'>
    <el-upload
    name='pic1'
drag
 class="upload-demo"
      action='http://localhost:3000/uploads'
  :show-file-list="false"
  :on-success="handleAvatarSuccess1">
  <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

 <span>|{{datas.monthstart}}月|</span>
  </div>


  <div class='pic'>
    <el-upload
drag
 name='pic2'
 class="upload-demo"
      action='http://localhost:3000/uploads'
  :show-file-list="false"
  :on-success="handleAvatarSuccess2">
  <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
 <span>|{{datas.monthstart+1>12?datas.monthstart+1-12:datas.monthstart+1}}月|</span>
  </div>


  <div class='pic'>
    <el-upload
drag
 name='pic3'
 class="upload-demo"
      action='http://localhost:3000/uploads'
  :show-file-list="false"
  :on-success="handleAvatarSuccess3">
  <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

   <span>|{{datas.monthstart+2>12?datas.monthstart+2-12:datas.monthstart+2}}月|</span>

</div>

<div class='pic' v-show='pic4'>
    <el-upload
drag
 name='pic4'
 class="upload-demo"
      action='http://localhost:3000/uploads'
  :show-file-list="false"
  :on-success="handleAvatarSuccess4">
  <img v-if="imageUrl4" :src="imageUrl4" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

 <span>|{{datas.monthstart+3>12?datas.monthstart+3-12:datas.monthstart+3}}月|</span>
</div>

 <div class='pic'>
     <el-upload
drag
 name='skxx'
 class="upload-demo"
      action='http://localhost:3000/uploads'
  :show-file-list="false"
  :on-success="handleAvatarSuccess5">
  <img v-if="imageUrl5" :src="imageUrl5" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

 <span>|收款信息|</span>

 </div>


</div>


<div class='flie'>
  <div class='file1'>
    <el-upload 
name='file1'
  class="upload-demo"
  ref="upload"
  drag

    action='http://localhost:3000/uploads'
      list-type="picture-card"
  :auto-upload="true">
 
 {{cwbg}}
</el-upload>

  </div>
  <div class='file1'>
    <el-upload 
name='file2'
  class="upload-demo"
  drag
    action='http://localhost:3000/uploads'
      list-type="picture-card"
  :auto-upload="true">
  
  <span>{{xsls}}</span>
</el-upload> <!--  <el-button style="margin-left: 10px;" size="small" type="success" @click.prevent="submitUpload">上传到服务器</el-button> 
 -->

  </div>

<!-- 
  <div class='dlxx'>
    
  <el-upload 
name='dlxx'
  class="upload-demo"
  ref="upload"
  drag

    action='/api/uploads'
      list-type="picture-card"
  :auto-upload="true">
</el-upload>

  </div> -->
</div>
 <div class="file1">
  <div class='d1'>
    <el-button type='success' size='small'@click='download'>生成zip</el-button>
  </div>
  <div class='d1'>
<el-button type="success" size='small'><a class='download' :href='url' download="data.zip"  >Download </a></el-button>
    
  </div>

 </div>

 </div>
<!-- <div>

  <form action="/api/upload" method="post" enctype="multipart/form-data">
     
         

            file:  <input type="file" name="file" accept="image/*" multiple='multiple'><br>
            file1:  <input type="file" name="file1" accept="image/*" multiple='multiple'><br>
            file2:  <input type="file" name="file2"  accept="image/*" multiple='multiple'><br>
        
    
           cwbg:<input type="file" name="filex"  multiple='multiple'><br>
        xs:  <input type="file" name="files"  multiple='multiple'><br>
         <input type="submit" value="上传文件" @click='submit'>
    
    </form>


    <hr>
  

    </div> -->
</template>
<script>
import {reqSubmit,reqDownload} from '../api/index.js'
export default {
    data(){
        return{
          cwbg:"財務報告（可選）",
          xsls:'應用流水（可選）',
        value1: '',
        options:[
          {
          value: '选项1',
          label: 1
        }, 
        {
          value: '选项2',
          label: 2
     
        }, 
        {
          value: '选项3',
          label: 3
        },
         {
          value: '选项4',
          label: 4
        },
           {
          value: '选项5',
          label: 5
        },
        { value:'选项6',
          label: 6
        }, 
        {
          value: '选项7',
          label: 7
          
        }, 
        {
          value: '选项8',
          label: 8
        }, 
        {
          value: '选项9',
          label: 9
        }, 
        {
          value: '选项10',
          label: 10
        },
         {
          value: '选项11',
          label: 11
        }, 
        {
          value: '选项12',
          label: 12
        }
        ],

         imageUrl1: '',
         imageUrl2: '',
         imageUrl3: '',
         imageUrl4: '',
         imageUrl5: '',
         pic4:false,
      datas:{
        yearstart:this.yearstart,
        yearend:this.yearend,
        monthstart:this.monthstart,
        monthend:this.monthend,
         email:this.email,
         monthl:this.monthl,
         value:this.value
      },
     
       
}
        
    },
    created(){
        
    },
    mounted(){
    

     
    },
    methods:{
 handleAvatarSuccess1(res, file) {
        this.imageUrl1 = URL.createObjectURL(file.raw);
      },
 handleAvatarSuccess2(res, file) {
        this.imageUrl2 = URL.createObjectURL(file.raw);
      },
       handleAvatarSuccess3(res, file) {
        this.imageUrl3 = URL.createObjectURL(file.raw);
      },
       handleAvatarSuccess4(res, file) {
        this.imageUrl4 = URL.createObjectURL(file.raw);
      },
       handleAvatarSuccess5(res, file) {
        this.imageUrl5 = URL.createObjectURL(file.raw);
      },
    submitUpload() {
        this.$refs.upload.submit();
      },
      
  
    sub(){

     reqSubmit(this.datas)
    },
    
    download(){
      // console.log(this.url)
      reqDownload()

       // window.location.reload();
      
    }
    },
    components:{
 
    },
    watch:{

         value1(val){
           var valstart=val[0].toLocaleString()
           //console.log(monthstart.substring(0, 4))
          // console.log(valstart.split('/'))
           var yearstart=valstart.split('/')[0]
           var monthstart=valstart.split('/')[1]
           var valend=val[1].toLocaleString()
       
           var yearend=valend.split('/')[0]
           var monthend=valend.split('/')[1]

           console.log(yearstart,yearend,monthstart,monthend)
          this.datas.yearstart= parseInt(yearstart)
      this.datas.yearend=  parseInt(yearend)
      this.datas.monthstart= parseInt(monthstart)
        this.datas.monthend=parseInt(monthend)

  if(parseInt(yearstart)===parseInt(yearend)){

   this.datas.monthl=parseInt(monthend)-parseInt(monthstart)+1

  }
else{
this.datas.monthl=parseInt(monthend)+12-parseInt(monthstart)+1
}
console.log(this.datas.monthl)
if(this.datas.monthl===4){

  this.pic4=true
}
else{
  this.pic4=false
}

         }

    },
    computed:{
         url(){
    
     var ur=   'http://localhost:3000/public/'+this.datas.email||''

     return ur+'.zip'
         }
//       yearstart(){
//        // return this.value1[0].toLocaleString().split('/')[0]

//  var valstart=this.value1[0].toLocaleString()

// return valstart.split('/')[0]
//       },
//       yearend(){
//      //  return this.value1[1].toLocaleString().split('/')[0]
//       },
//       monthstart(){
// // return this.value1[0].toLocaleString().split('')[1]
//       },
//       monthend(){
// // return this.value1[0].toLocaleString().split('/')[1]


//       }



    }
}


</script>
<style>
.file1{
  display: flex;
  flex-direction: row;

}
.d1{
    width:71.33px;
    height:32px;
    margin-right:10px;

 border-radius: 3px;
}
.el-button{
    font-size: 15px;
   
    background-color: #85ce61;
}
.download{
  text-decoration: none;
   color:#fff;
    background-color:#85ce61;
  
font-size: 15px;
 
}
.inp{
   margin-top: 10px;
  display: flex;
  flex-direction:row;
  width: 100%;
}
.a{
  width:178px;
  margin-left: 20px;
}
.cwbg{
    margin-left:140px;
}
.c{
  margin-left:20px;
}
#pics{
  margin-top: 10px;
  display: flex;
  flex-direction:row;
  width: 100%;
 
}

.pic{
  height: 200px;
  width:178px;
  margin-left: 20px;
 
}
  .flie{
  margin-top: 5px;
  display: flex;
  flex-direction:column;
  }
 .file1{
  height: 156px;
  margin-left: 20px;
  
 }

   .el-upload-dragger{
    width: 146px;
    height: 146px;

   }
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 146px;
    height: 146px;
    line-height: 146px;
    text-align: center;
  }
  .avatar {
    width: 146px;
    height: 146px;
    display: block;
  }
 
</style>