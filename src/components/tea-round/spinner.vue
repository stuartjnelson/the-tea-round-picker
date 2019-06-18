<template lang='html'>
    <div class="band">
        <ul v-if="users">
            <li v-for="(user, index) in users" :key="index">
                {{ user.name }}

                <button class="users__remove-btn" @click="removeUser(user.id)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { EventBus } from '@/event-bus';

    export default {
        props: {
            users: {
                required: true,
                type: Array
            }
        },
        methods: {
            removeUser(userId) {
                EventBus.$emit('removeUser', userId);
            }
        }
    };
</script>

<style lang='scss' scoped>
    .users__remove-btn {
        @include get-color(grey, dark);
        @include fsz(tiny);
        border: 2px solid get-color(grey, dark);
        line-height: 1;
        padding: $quarter-spacing-unit / 2;
        transition: 0.15s linear border-color, 0.15s linear color;

        &:focus {
            @include get-color(black);
            border-color: get-color(error);
            outline: 0;
        }

        @include mq(medium) {
            &:hover {
                @include get-color(black);
                border-color: get-color(error);
            }
        }
    }
</style>
