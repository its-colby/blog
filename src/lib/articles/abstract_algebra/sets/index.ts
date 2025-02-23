import { Inline, Section, Title } from "$lib/tex";

import { DEFINITION } from "./definition";
import { NUMBERS } from "./numbers";
export const SETS = new Section({
    title: new Title({
        inline: new Inline(["Sets"]),
    }),
    sections: [
        DEFINITION,
        NUMBERS,
    ]
})


// sets of numbers, functions, points, vectors, matrices, polynomials, equivalence classes, sets of sets
// countable, uncountable, finite, infinite, cardinality, subsets, supersets, power sets, cartesion products, set operations (union, etc), empty set, singleton set, closure, well-ordered