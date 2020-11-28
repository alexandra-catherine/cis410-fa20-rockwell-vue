<template>
<div>
    <h1>Login</h1>
    <div v-if = "this.$route.query.signupsuccess" class="alert alert-success">
        Thanks for signing up, please login now.
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>