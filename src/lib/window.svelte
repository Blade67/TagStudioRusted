<script lang="ts">
    let version: string = $state('4.2.0a');
</script>

<div class="flex flex-initial flex-row justify-between bg-base text-white">
    <div class="flex flex-row items-center gap-4 px-4 py-2 font-light">
        <img src="/tag-studio-tag.png" alt="TagStudio" class="h-6 w-6" />
        <h1>TagStudio &mdash; v{version}</h1>
    </div>
    <div class="flex flex-row items-center">
        <!-- Minimize -->
        <div class="inline-flex h-10 w-12 cursor-pointer items-center justify-center hover:bg-white/10">
            <div class="mx-3 inline-block w-4 scale-75 border-y"></div>
        </div>
        <!-- Maximize -->
        <div class="inline-flex h-10 w-12 cursor-pointer items-center justify-center hover:bg-white/10">
            <div class="mx-3 inline-block h-4 w-4 scale-75 border-2"></div>
        </div>
        <!-- Close -->
        <div class="inline-flex h-10 w-12 cursor-pointer items-center justify-center hover:bg-white/10">
            <div class="mx-3 inline-block h-4 w-4 scale-75">
                <div class="relative h-full w-full rotate-45">
                    <span class="absolute top-1/2 inline-block w-5 -translate-x-px border-y"></span>
                    <span class="absolute left-1/2 inline-block h-5 -translate-y-px border-x"></span>
                </div>
            </div>
        </div>
    </div>
</div>
