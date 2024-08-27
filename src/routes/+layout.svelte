<script lang="ts">
    import Sidebar from '$lib/sidebar.svelte';
    import Window from '$lib/window.svelte';
    import '../app.css';

    let { children } = $props();
</script>

<div class="from-lighter to-base flex h-screen max-h-full w-screen flex-col bg-gradient-to-bl">
    <Window />
    <div class="flex min-h-0 w-full min-w-0 flex-auto flex-row">
        <Sidebar />
        <div class="h-full w-full flex-auto flex-grow p-8">
            {@render children()}
        </div>
    </div>
</div>
