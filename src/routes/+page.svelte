<script lang="ts">
    import CollapsibleContainer from '$components/collapsible-container.svelte';
    // import Caret from '$components/icons/caret.svelte';
    import Recent from '$components/icons/recent.svelte';

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
</script>

<div class="flex h-full w-full flex-row gap-8">
    <div class="flex flex-grow flex-col text-white">
        <CollapsibleContainer label={'Recently Accessed'}>
            {#snippet icon()}
                <Recent />
            {/snippet}
            {#snippet endHeader()}
                <Recent />
            {/snippet}
        </CollapsibleContainer>
    </div>
    <div class="flex w-96 flex-col bg-red-500"></div>
</div>
