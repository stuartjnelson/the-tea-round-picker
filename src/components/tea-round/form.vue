<template lang='html'>
    <form class="form" @submit.prevent="addNewUser()">
        <h2 class="heading--charlie landmark">Add a potential tea maker</h2>

        <div class="form__input-container form__input-container--column form__input-container--required" :class="{'form__input-container--error': error}">
            <label for="name" class="form__label">Tea Maker</label>
            <input v-model.trim="user" id="name" class="form__input" type="text">
            <p class="form__err-message" >Please enter a name</p>
        </div>
        <div class="form__input-container">
            <input class="form__input form__input--submit" type="submit" value="Add Potential Tea Maker">
        </div>
    </form>
</template>

<script>
    import { EventBus } from '@/event-bus';

    export default {
        data() {
            return {
                user: '',
                error: false,
            };
        },
        methods: {
            addNewUser() {
                if(this.user.length) {
                    EventBus.$emit('addUser', this.user);

                    this.user = '';
                } else {
                    this.error = true;
                }
            }
        },
        watch: {
            // Resetting error message
            user() {
                if(this.error && this.user.length) {
                    this.error = false;
                }
            }
        }
    };
</script>

<style lang='scss' scoped>
    .form {
        @include mq($until: medium) {
            margin-bottom: $spacing-unit;
        }
    }

    .form__err-message {
        .form__input-container--error & { display: block; }
    }
</style>
