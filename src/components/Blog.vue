<template>
    <h1> Blog Content From Blog Router  </h1>
   <b> Blog ID  {{ this.$route.params.id}}</b> 
   <!-- params->id means , your dynamic params  -->
</template>

<script>
   export default {
   mounted(){
    console.log(this.$route);
   },
   };
</script>

<style>

</style>