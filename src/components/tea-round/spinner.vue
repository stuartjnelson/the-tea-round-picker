<template lang='html'>
    <div class="band">
        <p v-for="(user, index) in users" :key="index">
            {{ user.name }}
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            users: {
                required: true,
                type: Array
            }
        }
    };
</script>

<style lang='scss' scoped>
</style>
