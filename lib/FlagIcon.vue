<script setup lang="ts">
import * as assets from './svg/index.js';
import type { TFlagIconProps } from './types';

defineProps<TFlagIconProps>();
</script>

<template>
    <component :is="assets[size ?? 'L'][flag]" />
</template>
