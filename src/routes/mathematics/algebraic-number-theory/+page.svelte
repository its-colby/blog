<script lang="ts">
    import * as x from "$lib/articles/mathematics/algebraic_number_theory";
    import Container from "$lib/ui/article/Container.svelte";
    import SectionContainer from "$lib/ui/article/section/SectionContainer.svelte";
    import TexContent from "$lib/ui/article/section/Content.svelte";
    import Title from "$lib/ui/article/Title.svelte";
    import SectionTitle from "$lib/ui/article/section/SectionTitle.svelte";

</script>

<Container>
    <Title text={x.metadata.title} />
    <SectionTitle text={x.PREFACE.title} />
    <SectionContainer>
        <TexContent content={x.PREFACE.content} />
    </SectionContainer>

    <SectionTitle text={x.THE_SET_OF_ALGEBRAIC_NUMBERS.title} />
    <SectionContainer>
        <TexContent content={x.THE_SET_OF_ALGEBRAIC_NUMBERS.content} />
    </SectionContainer>

</Container>
