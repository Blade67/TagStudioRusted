<script lang="ts">
    import Home from '$components/icons/home.svelte';
    import Tag from '$components/icons/tag.svelte';
    import Settings from '$components/icons/settings.svelte';
    import LibraryDrawer from '$components/library-drawer.svelte';
</script>

<style>
    .active {
        @apply bg-gradient-to-b from-sidebar-top-gradient to-sidebar-bottom-gradient text-white;
    }
    .inactive {
        @apply bg-white/0 text-white/75 transition-colors hover:bg-white/5;
    }
</style>

<aside class="flex h-full w-min flex-grow flex-col justify-between bg-base py-8">
    <div class="flex flex-col gap-8 px-3">
        <a
            href="/"
            title="Home"
            class:active={window.location.pathname === '/'}
            class:inactive={window.location.pathname !== '/'}
            class="inline-flex min-h-14 w-14 items-center justify-center rounded-2xl"
        >
            <Home />
        </a>
        <div title="Libraries" class="inline-flex min-h-14 w-14 items-center justify-center rounded-2xl">
            <LibraryDrawer />
        </div>
        <a
            href="/tags"
            title="Tags"
            class:active={window.location.pathname === '/tags'}
            class:inactive={window.location.pathname !== '/tags'}
            class="inline-flex min-h-14 w-14 items-center justify-center rounded-2xl"
        >
            <Tag />
        </a>
    </div>
    <div class="flex flex-col px-3">
        <a
            href="/settings"
            title="Settings"
            class:active={window.location.pathname === '/settings'}
            class:inactive={window.location.pathname !== '/settings'}
            class="inline-flex min-h-14 w-14 items-center justify-center rounded-2xl"
        >
            <Settings />
        </a>
    </div>
</aside>
