<script setup lang="ts">
import { CopyrightIcon } from '@placetopay/iconsax-vue/bold';
import { SCaption, SRadio, SComboboxBlock, SComboboxOption, SBadge } from '@placetopay/spartan-vue';
import { FlagIcon } from '../lib';
import { ref } from 'vue';
import countries from './countries';

const flag = ref('co');
const shape = ref('sqr');

const selectFlag = (code: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    flag.value = code;
};
</script>

<template>
    <main class="container mx-auto py-4 px-8">
        <a
            class="absolute right-8 h-7 w-7 sm:h-10 sm:w-10 fill-black hover:scale-110 duration-200"
            target="_blank"
            href="https://github.com/placetopay-org/iconsax-vue"
        >
            <Fragment set:html="{githubSvg}" />
        </a>
        <h1 class="text-2xl text-center">Flagicons <span class="text-[#42b883] font-bold">Vue</span></h1>

        <div
            class="w-fit mx-auto relative text-sm bg-emerald-50 border border-emerald-100 shadow-sm rounded px-2 py-1 flex"
        >
            <CopyrightIcon class="absolute w-5 h-5 text-[#42b883] -right-2 -top-2" />
            <p class="text-center">
                All flags from
                <a class="text-[#42b883]" target="_blank" href="https://flagicons.lipis.dev/">FlagIcons</a>
            </p>
        </div>

        <p class="text-center text-gray-500">A web sandbox for the @placetopay/flagicons-vue package.</p>
        <p class="text-center text-gray-500">Version: 0.0.1</p>

        <section class="flex gap-4 mt-4 justify-center bg-gray-100 w-full p-4 rounded-xl shadow">
            <FlagIcon
                :flag="flag"
                :shape="shape"
                height="200"
                class="border-4 border-gray-300 p-2 border-dashed rounded-xl"
            />
            <div class="flex flex-col gap-2">
                <div class="flex gap-4">
                    <SComboboxBlock
                        search="auto"
                        class="w-36"
                        v-model="flag"
                        :displayButtonText="(code: string) => code"
                        helpText="ISO 3166-1-alpha-2 code"
                    >
                        <SComboboxOption :value="code" v-for="(data, code) in countries">
                            {{ code }}
                        </SComboboxOption>
                    </SComboboxBlock>

                    <div class="space-y-2">
                        <SRadio v-model="shape" value="rec">rec (4x3)</SRadio>
                        <SRadio v-model="shape" value="sqr">sqr (1x1)</SRadio>
                    </div>
                </div>

                <div class="flex-1 flex flex-col justify-between items-start">
                    <p class="text-2xl">
                        {{ countries[flag].name }}
                        <span class="text-sm text-gray-500">{{ countries[flag].capital }}</span>
                    </p>
                    <p class="text-sm text-gray-600">{{ countries[flag].continent }}</p>

                    <div class="flex gap-4 mt-2">
                        <div class="flex flex-col items-center">
                            <FlagIcon :flag="flag" :shape="shape" height="60" class="rounded-full" />
                            <SCaption variant="info">class="rounded-full"</SCaption>
                        </div>
                        <div class="flex flex-col items-center">
                            <FlagIcon :flag="flag" :shape="shape" height="60" class="star" />
                            <SCaption variant="info">clip-path</SCaption>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <h2 class="font-semibold text-2xl my-4">All Flags</h2>
        <section class="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-6 gap-y-4">
            <template v-for="(data, code) in countries">
                <article tabindex="0" class="group focus-visible:outline-none flex flex-col">
                    <button
                        class="relative bg-gray-100 border shadow-sm rounded-md flex justify-center items-center p-4 cursor-pointer group group-hover:scale-110 group-focus-visible:scale-110 active:scale-100 duration-100 ease-in-out"
                        @click="selectFlag(code)"
                    >
                        <SBadge color="yellow" pill size="sm" border class="font-semibold absolute -right-4 -top-2">{{
                            code
                        }}</SBadge>
                        <FlagIcon
                            :flag="code"
                            :shape="shape"
                            height="40"
                            class="group-hover:scale-150 group-focus-visible:scale-150 duration-100 ease-in-out"
                        />
                    </button>
                    <p class="text-xs text-center mt-2 text-gray-500 group-hover:text-gray-900">{{ data.name }}</p>
                </article>
            </template>
        </section>
    </main>
</template>

<style>
.star {
    clip-path: polygon(50% 0%, 70% 30%, 100% 35%, 80% 60%, 80% 90%, 50% 80%, 20% 90%, 20% 60%, 0% 35%, 30% 30%);
}
</style>
