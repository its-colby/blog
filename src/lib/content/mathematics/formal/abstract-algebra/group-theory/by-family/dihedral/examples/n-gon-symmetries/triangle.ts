import * as T from "$book";

export const chapter = T.Exposition.from([
    T.List.numbered([
        T.Prose.parse(`
            Consider the dihedral group D₃, which represents all symmetries of an equilateral triangle.
            This group consists of 6 elements: 3 rotations and 3 reflections.
        `),
        T.Prose.parse(`
            Let's enumerate the elements:
            
            Rotations:
            - r₀: Identity rotation (0°)
            - r₁: Rotation by 120°
            - r₂: Rotation by 240°
            
            Reflections:
            - s₀: Reflection across the vertical line
            - s₁: Reflection across the line through vertex 1
            - s₂: Reflection across the line through vertex 2
        `),
        T.Prose.parse(`
            The group operation table for D₃ is:
            $$
            \\begin{array}{c|cccccc}
            \\circ & r_0 & r_1 & r_2 & s_0 & s_1 & s_2 \\\\
            \\hline
            r_0 & r_0 & r_1 & r_2 & s_0 & s_1 & s_2 \\\\
            r_1 & r_1 & r_2 & r_0 & s_1 & s_2 & s_0 \\\\
            r_2 & r_2 & r_0 & r_1 & s_2 & s_0 & s_1 \\\\
            s_0 & s_0 & s_2 & s_1 & r_0 & r_2 & r_1 \\\\
            s_1 & s_1 & s_0 & s_2 & r_1 & r_0 & r_2 \\\\
            s_2 & s_2 & s_1 & s_0 & r_2 & r_1 & r_0
            \\end{array}
            $$
        `),
        T.Prose.parse(`
            Key properties of D₃:
            1. It is non-abelian (e.g., r₁ ∘ s₀ ≠ s₀ ∘ r₁)
            2. The rotations form a cyclic subgroup of order 3
            3. Each reflection has order 2
            4. The group is generated by any rotation and any reflection
        `),
    ]),
], 
    T.Prose.parse(`Example: D₃ - Symmetries of an Equilateral Triangle`)
); 