<script lang="ts">
    import Caret from './icons/caret.svelte';
    import LibraryIcon from './icons/library.svelte';

    let open: boolean = $state(false);
    let libraries: string[] = $state(['foo', 'bar', 'baz']);
</script>

<div class="flex flex-col gap-4" class:bg-black={open} class:bg-opacity-25={open}>
    <button
        onclick={() => (open = !open)}
        class:bg-white={open}
        class:bg-opacity-5={open}
        class="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white/75"
    >
        <LibraryIcon />
        <span
            class:-rotate-90={!open}
            class="absolute bottom-2 right-1 items-center justify-center rounded-full bg-transparent text-white/50 transition-transform"
            ><Caret /></span
        >
    </button>
    {#if open}
        {#each libraries as lib}
            <button
                class="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white/75 hover:bg-white/5"
            >
                <LibraryIcon />
            </button>
        {/each}
    {/if}
</div>
