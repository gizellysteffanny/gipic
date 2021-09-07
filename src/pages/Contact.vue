<template>
   <div>
     <gp-header :hasSearch="false" />


      <main>
         <h2>Contact me!</h2>
      </main>
   </div>
</template>

<script>
   import Header from '../components/Header.vue';

   export default {
      components: {
         'gp-header': Header
      },
      
   };
</script>

<style>

</style>