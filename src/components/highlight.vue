<template>
	<div> 
<pre v-highlight><code :class='isClass'>
  <b>{{contents}}
  </b>
</code></pre>
</div>
</template>


<script>
export default {
 
  data() {
    return {
   
       }
   },

  created() {
 
  },
  mounted() {},
  destroyed() {},
  methods: {

      
  },

computed:{},
watch: {},
components:{},
props:{
	contents:String,
    isClass:String
}

}
</script>


<style   type="text/css">
.javascript{

    position:absolute;
    padding: .4em 1.2em;
    font-size: 1rem;
    line-height: 1.2rem;
    width:600px;
}
 .javascript::before{
    content:'JavaScript';
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    right:0;
    position:absolute;
    color: #ccc;
    text-align: right;
    font-size: 0.8em;
    padding: 5px 10px 0;
    line-height: 15px;
    height: 15px;
    font-weight: 600;
}
.html{

    position:absolute;
    padding: .4em 1.2em;
    font-size: 1rem;
    line-height: 1.2rem;
    width:600px;
}
 .html::before{
    content:'HTML';
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    right:0;
    position:absolute;
    color: #ccc;
    text-align: right;
    font-size: 0.8em;
    padding: 5px 10px 0;
    line-height: 15px;
    height: 15px;
    font-weight: 600;
}
.css{

    position:absolute;
    padding: .4em 1.2em;
    font-size: 1rem;
    line-height: 1.2rem;
    width:600px;
}
 .css::before{
    content:'CSS';
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    right:0;
    position:absolute;
    color: #ccc;
    text-align: right;
    font-size: 0.8em;
    padding: 5px 10px 0;
    line-height: 15px;
    height: 15px;
    font-weight: 600;
}
</style>