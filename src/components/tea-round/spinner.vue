<template lang='html'>
    <div class="band">
        <ul class="users-list" v-if="users">
            <li class="users-list__item" v-for="(user, index) in users" :key="index">
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
    @keyframes fade-in {
        0% { opacity: 0; }

        100% { opacity: 1; }
    }

    .users-list { @include inline-list($half-spacing-unit); }

    .users-list__item { animation: fade-in 1 forwards linear 0.2s; }

    .users__remove-btn {
        @include get-color(grey, dark);
        @include fsz(tiny);
        border: 2px solid get-color(grey, dark);
        line-height: 1;
        margin-left: $half-spacing-unit;
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
