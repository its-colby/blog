<script lang="ts">
    import { store } from '$store/breadcumb.svelte';
    import { ChevronRight } from 'lucide-svelte';
</script>

{#if !store.is_home && !store.is_file}
    <div class="breadcrumbs">
        <a href="/" class="breadcrumb">
            <span>Home</span>
        </a>
        {#if store.breadcrumbs.length > 0}
            <span class="separator">
                <ChevronRight size="1rem" />
            </span>
        {/if}
        {#each store.breadcrumbs as webpage, i}
            <a href={webpage.url} class="breadcrumb">
                <span>{webpage.title}</span>
            </a>
            {#if i < store.breadcrumbs.length - 1}
                <span class="separator">
                    <ChevronRight size="1rem" />
                </span>
            {/if}
        {/each}
    </div>
{/if}

<style lang="scss">
    @use '$theme/fonts';

    .breadcrumbs {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: nowrap;
        overflow-x: auto;
        white-space: nowrap;
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
        }
    }

    .breadcrumb {
        text-decoration: none;
        color: var(--text-neutral);
        @include fonts.themed-font('100', 'normal');
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;

        &:hover {
            color: var(--text-brand);
            text-decoration: underline;
        }
    }

    .separator {
        color: var(--text-neutral);
        opacity: 0.7;
        margin: 0 0.25rem;
        flex-shrink: 0;
    }
</style>