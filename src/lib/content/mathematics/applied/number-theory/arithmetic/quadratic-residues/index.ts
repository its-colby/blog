import * as T from "$book";
import { File } from "$directory";

export const chapter = T.Exposition.as_book([
    T.Prose.parse(`
        residue of a quadratic. 2 mod 7 is quad residue, because 3^2 = 9 = 2 mod 7. 4 is because 5^2 mod 7. 
        
        Imagine homomorphism from $$Z/pZ$$ to the squares subgroup. The kernel is 1 and -1. Thus, by first isomorphism theorem, the squares subgroup is index 2, order $$p-1/2$$. look at non-subgroup of non-squares. look at homomorphism of the regular group quotiented by squares subgroup and mapped to subgroup of 1 and -1. and see which values map to which.
    `),
], T.Prose.parse(`Quadratic Residues`));

export const file = File.from_chapter(chapter);