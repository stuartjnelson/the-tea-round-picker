<template>
    <section class="band">
        <app-form></app-form>

        <app-spinner :users="users"></app-spinner>
    </section>
</template>

<script>
    import Form from '@/components/tea-round/form.vue';
    import Spinner from '@/components/tea-round/spinner.vue';


    export default {
        props: {
            users: {
                required: true,
                type: Array
            },
            teaMaker: {
                type: Object
            }
        },
        components: {
            appForm: Form,
            appSpinner: Spinner
        }
    };
</script>

<style lang="scss" scoped>
</style>
