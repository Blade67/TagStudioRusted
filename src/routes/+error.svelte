<script lang="ts">
    import { page } from '$app/stores';

    setTimeout(() => {
        location.href = '/';
    }, 3000);
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
