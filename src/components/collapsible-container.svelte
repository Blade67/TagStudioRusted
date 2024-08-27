<script lang="ts">
    import { ChevronDown } from 'lucide-svelte';

    interface ContainerProps {
        label?: string;
        icon?: any;
        endHeader?: any;
        body?: any;
        collapsed?: boolean;
    }
    let { label = 'Unnamed Container', icon, endHeader, body, collapsed = $bindable(true) }: ContainerProps = $props();
</script>

<div class="flex w-full flex-none flex-col overflow-hidden rounded-2xl bg-base shadow-xl shadow-black/25">
    <div class="flex w-full flex-row justify-between px-4 py-3 shadow-xl shadow-black/25">
        <div class="flex flex-row items-center gap-2">
            {#if icon}
                {@render icon()}
            {/if}
            <h1 class="text-2xl font-normal">{label}</h1>
        </div>
        <div class="flex flex-row gap-2">
            {#if endHeader}
                {@render endHeader()}
            {/if}
            <button
                onclick={() => (collapsed = !collapsed)}
                class:-rotate-90={!collapsed}
                class="flex h-8 w-8 items-center justify-center transition-transform"
            >
                <ChevronDown />
            </button>
        </div>
    </div>
    {#if body}
        <div class="relative h-full" class:h-0={!collapsed}>
            {@render body()}
        </div>
    {/if}
</div>
