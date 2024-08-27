<script lang="ts">
    import CollapsibleContainer from '$components/collapsible-container.svelte';
    // import Caret from '$components/icons/caret.svelte';
    import { History, LibraryBig, SlidersHorizontal } from 'lucide-svelte';

    /* let fakeData = [
        {
            name: 'Curriculum_Vitae_2012.pdf',
            size: '3.2 MB',
            lastModified: '02/9/2012'
        },
        {
            name: 'party-invite.docx',
            size: '989 KB',
            lastModified: '02/9/2013'
        },
        {
            name: 'solar-system.pptx',
            size: '10.3 MB',
            lastModified: '24/12/2023'
        },
        {
            name: 'budget-estimate-Q1.xlsx',
            size: '2 MB',
            lastModified: '07/1/2024'
        },
        {
            name: 'poster.docx',
            size: '765 KB',
            lastModified: '02/9/2013'
        },
        {
            name: 'poster.docx',
            size: '765 KB',
            lastModified: '02/9/2013'
        },
        {
            name: 'poster.docx',
            size: '765 KB',
            lastModified: '02/9/2013'
        }
    ]; */

    /* const programs: Programs = {
        docx: 'Microsoft Word',
        pdf: 'Adobe Acrobat',
        pptx: 'Microsoft PowerPoint'
    }; */

    let scrollPercentage = $state<number>(0);
    let shadowLeft = $derived<boolean>(scrollPercentage > 1);
    let shadowRight = $derived<boolean>(scrollPercentage < 100);

    const getScrollPercent = (e: any) => {
        const scrollPercent = (e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)) * 100;
        // console.log(Math.round(scrollPercent));

        return Math.round(scrollPercent);
    };
</script>

<style>
    ::-webkit-scrollbar {
        @apply h-2 w-2;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        @apply rounded-full bg-black/20;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        @apply rounded-full bg-lighter/50;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        @apply bg-lighter;
    }
</style>

<div class="grid h-full w-full grid-cols-6 gap-4 overflow-hidden">
    <div class="col-span-5 flex flex-grow flex-col gap-8 overflow-y-scroll pr-4 text-white">
        <CollapsibleContainer label={'Recently Accessed'}>
            {#snippet icon()}
                <History class="h-8 w-8" />
            {/snippet}
            {#snippet endHeader()}
                <History />
            {/snippet}
            {#snippet body()}
                <div
                    onscroll={(e) => (scrollPercentage = getScrollPercent(e))}
                    class="relative overflow-x-auto overflow-y-hidden whitespace-nowrap px-4 pb-2 pt-4"
                >
                    {#each Array(25) as _, i}
                        <div class="mr-4 inline-block h-40 w-40 overflow-hidden rounded-2xl bg-slate-600">
                            <img src="https://picsum.photos/200/200?random={i}" alt="" class="h-full w-full bg-cover" />
                        </div>
                    {/each}
                </div>
                <span
                    class:opacity-0={!shadowLeft}
                    class="absolute left-0 top-0 h-full w-20 bg-gradient-to-l from-transparent to-base transition-opacity"
                ></span>
                <span
                    class:opacity-0={!shadowRight}
                    class="absolute right-0 top-0 h-full w-20 bg-gradient-to-r from-transparent to-base"
                ></span>
            {/snippet}
        </CollapsibleContainer>

        <CollapsibleContainer label={'Random Pictures'}>
            {#snippet icon()}
                <LibraryBig class="h-8 w-8" />
            {/snippet}
            {#snippet endHeader()}
                <button class="flex h-8 w-8 items-center justify-center">
                    <SlidersHorizontal />
                </button>
            {/snippet}
            {#snippet body()}
                <div onscroll={(e) => (scrollPercentage = getScrollPercent(e))} class="relative px-4 pb-2 pt-4">
                    {#each Array(300) as _, i}
                        <div class="mr-4 inline-block h-40 w-40 overflow-hidden rounded-2xl bg-slate-600">
                            <img
                                src="https://picsum.photos/200/200?random={25 + i}"
                                alt=""
                                class="h-full w-full bg-cover"
                            />
                        </div>
                    {/each}
                </div>
                <span
                    class:opacity-0={!shadowLeft}
                    class="absolute left-0 top-0 h-full w-20 bg-gradient-to-l from-transparent to-base transition-opacity"
                ></span>
                <span
                    class:opacity-0={!shadowRight}
                    class="absolute right-0 top-0 h-full w-20 bg-gradient-to-r from-transparent to-base"
                ></span>
            {/snippet}
        </CollapsibleContainer>
    </div>
    <div class="col-span-1 flex flex-col bg-red-500"></div>
</div>
