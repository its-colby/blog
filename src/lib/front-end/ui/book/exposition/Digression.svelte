<script lang="ts">
    import * as T from "$lib/book";
    import Accordion from "$lib/front-end/ui/utils/Accordion.svelte";
    import Prose from "./Prose.svelte";


    let { digression }: { digression: T.Digression } = $props();
</script>

{#snippet details(paragraphs: T.Prose[])}
    <div>
        {#each paragraphs as paragraph}
            <Prose 
                prose={paragraph} 
                style_class="note"
            />
        {/each}
    </div>
{/snippet}

{#snippet header(hovered: boolean, title: string)}
    <h4 class={hovered ? "hovered" : ""}>
        {title}
    </h4>
{/snippet}


<aside>
    <Accordion 
        header={header} 
        details={details} 
        header_data={digression.title} 
        details_data={digression.paragraphs} 
        --chevron-color={"var(--text-neutral)"}
        --chevron-color-hovered={"var(--text-contrast)"}
    />
</aside>

<style>
    aside {
        display: flex;
        flex-direction: column;
        gap: 10px;

        border-color: var(--text-neutral);
        border-width: 1px;
        border-style: solid;
        border-radius: 10px;

        padding: 10px;
    }

    h4 {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.5;
        color: var(--text-neutral);

        margin: 0;
    }

    h4.hovered {
        color: var(--text-contrast);
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        padding-top: 10px;
        padding-left: 40px;
        padding-right: 40px;
    }
</style>