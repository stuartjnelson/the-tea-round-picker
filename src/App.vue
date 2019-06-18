<template>
    <main id="app" class="app">
        <app-banner></app-banner>

        <section class="band band--off-white">
            <div class="app__hero">
                <header>
                    <h1 class="heading--alpha heading--center landmark">The Tea Round Picker</h1>
                </header>

                <transition
                    name="fade"
                    mode="out-in"
                >
                    <p v-if="getTeaMakersName !== undefined">
                        Todays tea maker is <span class="text--primary">{{ getTeaMakersName }}</span>
                    </p>
                </transition>
            </div>
        </section>

        <div class="app__content">
            <transition
                name="fade"
                mode="out-in"
            >
                <router-view :users="users" />
            </transition>
        </div>

        <app-footer></app-footer>
    </main>
</template>

<script>
    import { EventBus } from '@/event-bus';

    import Banner from '@/components/shared/Banner.vue';
    import Footer from '@/components/shared/Footer.vue';

    // Importing `scss` to create base styles & util classes
    import '@/assets/scss/main.scss';

    export default {
        data() {
            return {
                users: [],
                teaMaker: {}
            };
        },
        components: {
            appBanner: Banner,
            appFooter: Footer,
        },
        computed: {
            getTeaMakersName() {
                return this.teaMaker.name;
            }
        },
        created() {
            // @TODO: Check if user name exists
            EventBus.$on('addUser', userName => {
                // 1. Getting number of users
                const numberUsers = this.users.length;

                // 2. If not the first users then get the id of the last users to be
                //    created and add 1. The reason being it keeps each users ID unique.
                const id = (numberUsers === 0 ? 0 : this.users[numberUsers - 1].id + 1);

                this.users.push({
                    id,
                    name: userName
                });
            });


            EventBus.$on('removeUser', userId => {
                this.users = this.users.filter(user => user.id !== userId);
            });
        }
    };
</script>

<style lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.5s;
        transition-property: opacity;
        transition-timing-function: ease-in-out;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }

    .app__content { @include container; }

    .app__hero {
        @include container;
        @include flex-col(center, center);
        min-height: 50vh;
    }
</style>
