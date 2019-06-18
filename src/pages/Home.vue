<template>
    <section class="band band--off-white">
        <div class="homepage">
            <header>
                <h1 class="heading--alpha heading--center">Ready Vue Boilerplate</h1>
            </header>
        </div>
    </section>
</template>

<script>
    export default {
    };
</script>

<style lang="scss" scoped>
    .homepage {
        @include container;
        @include flex-col(center, center);
        min-height: 50vh;
    }
</style>
