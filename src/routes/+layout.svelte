<script lang="ts">
    import Sidebar from '$lib/sidebar.svelte';
    import Window from '$lib/window.svelte';
    import '../app.css';

    let { children } = $props();
</script>

<div class="flex h-screen max-h-full w-screen flex-col overflow-hidden bg-gradient-to-bl from-lighter to-base">
    <Window />
    <div class="flex min-h-0 w-full min-w-0 flex-auto flex-row">
        <Sidebar />
        <div class="w-full flex-auto p-8">
            {@render children()}
        </div>
    </div>
</div>
