<template>
    <header role="banner" class="banner">

        <nav class="banner__nav">
            <ul class="banner__nav-list">
                <router-link class="banner__nav-item banner__nav-item--logo" tag="li" :to="{name: 'home'}">
                    <a class="banner__nav-link">
                        <span class="vh">Home</span>
                        <img svg-inline class="banner__nav-icon" src="@/assets/img/svg/shared/logo.svg" />
                    </a>
                </router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
    };
</script>

<style lang="scss">
    .banner {
        @include get-bgc(black, light);
        @include box($quarter-spacing-unit);
        position: relative;

        @include mq(small) { @include box(15px); }
    }

    .banner__nav { @include container; }

    .banner__nav-list {
        @include inline-list--ib($half-spacing-unit, flex-start, center);
    }

    .banner__nav-item {
        align-items: center;
        display: flex;

        &--logo { flex-grow: 1; }
    }


    .banner__nav-link {
        @include get-color(white);
        align-items: flex-start;
        display: flex;
        flex-grow: 0;

        .banner__nav-item--logo & {
            transform: scale(1);
            transition: transform ease-in-out 0.3s;

            &:focus { transform: scale(1.05); }

            @include mq(medium) {
                &:hover { transform: scale(1.05); }
            }
        }
    }

    .banner__nav-icon {
        fill: get-color(white);
        max-width: 100px;
        width: 100%;

        @include mq(nav-break-1) { max-width: 120px; }
    }
</style>
