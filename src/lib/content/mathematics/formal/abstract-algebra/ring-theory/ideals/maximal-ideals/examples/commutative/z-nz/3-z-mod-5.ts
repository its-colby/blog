import * as T from "$book";

export const chapter = T.Exposition.from([
    new T.List([
        T.Prose.parse(`
            $$\\langle 0 \\rangle = \\{ 0 \\}$$. The zero ideal is the only proper ideal of $$\\mathbb{Z}/5\\mathbb{Z}$$, and thus, is maximal.
        `),
        T.Prose.parse(`
            $$\\langle 1 \\rangle = \\langle 2 \\rangle = \\langle 3 \\rangle = \\langle 4 \\rangle = \\{ 0, 1, 2, 3, 4 \\}$$. No nonzero ideal is maximal, as they are all non-proper ideals.
        `),
    ]),

], T.Prose.parse(`The Maximal Ideals of $$\\mathbb{Z}/5\\mathbb{Z} $$ (a.k.a. $$\\mathbb{F}_5$$)`));
