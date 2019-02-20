<template>
  <div>
      <h3>Message</h3>
  </div>

</template>


<script>
export default{
created:function () {
            this.$emit('public_header', true);
            this.$emit('public_footer', true);
        },
        }

</script>


<style>


</style>