<template>
    <main id="app" class="app">
        <app-banner></app-banner>

        <div class="app__content">
            <transition
                name="fade"
                mode="out-in"
            >
                <router-view />
            </transition>
        </div>

        <app-footer></app-footer>
    </main>
</template>

<script>
    import Banner from '@/components/shared/Banner.vue';
    import Footer from '@/components/shared/Footer.vue';

    // Importing `scss` to create base styles & util classes
    import '@/assets/scss/main.scss';

    export default {
        components: {
            appBanner: Banner,
            appFooter: Footer,
        },
    };
</script>

<style lang="scss" scoped>
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
</style>
