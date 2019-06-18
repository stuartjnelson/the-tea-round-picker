<template lang="html">
    <!--
        @TODO: Ensure that :class"" is '-' seperated and no caps
    -->
    <component
        :is="getIcon"
        class="svg-icon"
        :class="modifierClass"
        :aria-hidden="ariaHidden"
        role="img"
    >
    </component>
</template>

<script>
    export default {
        name: 'SvgIcon',
        props: {
            icon: { type: String, required: true },
            modifierClass: { type: String, required: false },
            ariaHidden: { type: Boolean, default: true },
        },
        computed: {
            getIcon() {
                return () => import(`@/assets/img/svg/${this.icon}.svg`);
            },
        },
    };
</script>

<style lang="scss">
    .svg-icon {
        fill: get-color(black);
        height: $half-spacing-unit;
        width: $half-spacing-unit;

        &--large {
            height: $spacing-unit;
            width: $spacing-unit;
        }



        // # MODIFIER: COLORS
        &--primary { fill: get-color(primary); }
        &--white { fill: get-color(white); }
    }
</style>
