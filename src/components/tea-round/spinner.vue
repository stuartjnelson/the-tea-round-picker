<template lang='html'>
    <div>
        <h2 class="heading--charlie landmark">Tea Makers</h2>

        <ul class="users-list" v-if="users">
            <li class="users-list__item" v-for="(user, index) in users" :key="index">
                {{ user.name }}

                <button class="users__remove-btn" @click="removeUser(user.id)">Remove</button>
            </li>
        </ul>

        <button class="btn btn--secondary" @click="chooseTeaMaker()">Choose Tea Maker</button>
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
            },
            chooseTeaMaker() {
                // 1. Getting all ids for users
                const userIds = this.users.map(user => user.id);

                // 2. Randomly selecting an ID
                const teaMakerId = userIds[Math.floor(Math.random() * userIds.length)];

                // 3. Emiting event to be user in `App.vue`
                EventBus.$emit('chooseTeaMaker', teaMakerId);
            }
        }
    };
</script>

<style lang='scss' scoped>
    @keyframes fade-in {
        0% { opacity: 0; }

        100% { opacity: 1; }
    }

    .users-list {
        @include inline-list($half-spacing-unit);
        margin-bottom: $half-spacing-unit;
    }

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
