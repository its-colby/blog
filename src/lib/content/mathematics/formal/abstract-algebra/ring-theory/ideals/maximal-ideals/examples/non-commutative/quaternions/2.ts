import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Elements of the left ideal $$\\langle i \\rangle$$ are of the form $$qi$$, where $$q \\in \\mathbb{H}$$.
        `),
        T.Prose.parse(`
            Consider the larger left ideal $$I$$ generated by both $$i$$ and $$ji$$. Elements of $$I$$ are of the form $$q_1i + q_2(ji)$$ where $$q_1, q_2 \\in \\mathbb{H}$$.
        `),
        T.Prose.parse(`
            Clearly $$\\langle i \\rangle \\subseteq I$$ since every element of $$\\langle i \\rangle$$ is just a special case of an element in $$I$$ (where $$q_2 = 0$$).
        `),
        T.Prose.parse(`
            To show this containment is proper, note that $$ji$$ is in $$I$$ but not in $$\\langle i \\rangle$$. If $$ji$$ were in $$\\langle i \\rangle$$, there would exist some $$q = a+bi+cj+dk$$ such that $$qi = ji$$. Expanding:
            $$(a+bi+cj+dk)i = ai-b+ck-dj$$
            This cannot equal $$ji = k$$ for any values of $$a,b,c,d$$.
        `),
        T.Prose.parse(`
            Finally, $$I$$ is proper because it's not all of $$\\mathbb{H}$$ (for example, $$1$$ is not in $$I$$, as elements of $$I$$ always involve terms with $$i$$).
        `),
        T.Prose.parse(`
            Therefore, $$\\langle i \\rangle$$ is not maximal as it is properly contained in another proper left ideal.
        `),
    ]),
], 
    T.Prose.parse(`Non-Example: $$\\langle i \\rangle$$`)
);