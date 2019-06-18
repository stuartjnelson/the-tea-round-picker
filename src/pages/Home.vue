<template>
    <section class="tea-maker">
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
    .tea-maker {
        @include band;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: $spacing-unit;

        @include mq(medium) {
            flex-direction: row;
            margin: 0 auto;
            max-width: 700px;
        }
    }
</style>
