<script setup lang="ts">
import { CopyrightIcon } from '@placetopay/iconsax-vue/bold';
import { SCaption, SRadio, SComboboxBlock, SComboboxOption, SBadge } from '@placetopay/spartan-vue';
import { FlagIcon, COUNTRIES } from '../lib';
import { ref } from 'vue';

const flag = ref('CO');
const size = ref('L');

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

        <section class="flex gap-4 bg-gray-100 w-fit p-4 rounded shadow mx-auto mt-4">
            <div class="flex flex-col gap-4 border-2 border-gray-300 border-dashed py-1 px-2 rounded items-center justify-center">
                <div class="flex flex-col items-center">
                    <FlagIcon :flag="flag" :size="size" />
                    <SCaption variant="info">Default</SCaption>
                </div>
                <div class="flex flex-col items-center">
                    <FlagIcon :flag="flag" :size="size" class="rounded-full" />
                    <SCaption variant="info">Border Radius</SCaption>
                </div>
                <div class="flex flex-col items-center">
                    <FlagIcon :flag="flag" :size="size" class="star" />
                    <SCaption variant="info">Clip Path</SCaption>
                </div>
            </div>

            <div class="flex flex-col gap-4 py-1 px-2">
                <div class="flex gap-4 *:text-center *:font-semibold">
                    <div>
                        <SRadio v-model="size" value="S" />
                        <span>S</span>
                    </div>
                    <div>
                        <SRadio v-model="size" value="M" />
                        <span>M</span>
                    </div>
                    <div>
                        <SRadio v-model="size" value="L" />
                        <span>L</span>
                    </div>
                </div>

                <SComboboxBlock
                    search="auto"
                    class="w-28"
                    v-model="flag"
                    :displayButtonText="(code: string) => code"
                    helpText="ISO 3166-1 alpha-2"
                >
                    <SComboboxOption :value="code" v-for="(data, code) in COUNTRIES">
                        {{ code }}
                    </SComboboxOption>
                </SComboboxBlock>

                <hr/>

                <p class="text-xl">
                    {{ COUNTRIES[flag].name }}
                    <span class="text-xs text-gray-500">{{ COUNTRIES[flag].num }}</span>
                </p>
            </div>
        </section>

        <h2 class="font-semibold text-2xl my-4">All Flags</h2>
        <section class="grid grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-x-6 gap-y-4">
            <template v-for="(data, code) in COUNTRIES">
                <article tabindex="0" class="group focus-visible:outline-none flex flex-col">
                    <button
                        class="relative bg-gray-100 border shadow-sm rounded-md flex justify-center items-center p-4 cursor-pointer group group-hover:scale-110 group-focus-visible:scale-110 active:scale-100 duration-100 ease-in-out"
                        @click="selectFlag(code)"
                    >
                        <SBadge color="yellow" pill size="sm" border class="font-semibold absolute -right-4 -top-2">
                            {{ code }}
                        </SBadge>
                        <FlagIcon
                            :flag="code"
                            :size="size"
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
