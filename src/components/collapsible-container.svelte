<script lang="ts">
    interface ContainerProps {
        label?: string;
        icon?: any;
        endHeader?: any;
    }
    let { label = 'Unnamed Container', icon, endHeader }: ContainerProps = $props();
</script>

<div class="flex w-full flex-col overflow-hidden rounded-2xl bg-red-500">
    <div class="flex w-full flex-row justify-between p-3">
        <div class="flex flex-row items-center gap-4">
            {#if icon}
                {@render icon()}
            {/if}
            <h1 class="text-2xl font-normal">{label}</h1>
        </div>
        {#if endHeader}
            {@render endHeader()}
        {/if}
    </div>
</div>
