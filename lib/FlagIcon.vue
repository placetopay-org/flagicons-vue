<script setup lang="ts">
import { computed } from 'vue';
import * as assets from './svg/index.js';
import type { TFlagIconProps } from './types';

const props = defineProps<TFlagIconProps>();

const computedWidth = computed(() => {
    if (!props.width && !props.height) return '24';
    return props.width;
});
</script>

<template>
    <component :is="assets[shape ?? 'rec'][flag]" :width="computedWidth" :height="height"/>
</template>
