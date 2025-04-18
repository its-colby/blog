import { Page } from "$lib/articles/utils";
import { Title, Inline, Section, IndexType } from "$lib/tex";

export const metadata = new Page({
    title: "Algebraic Number Theory",
    url: "/mathematics/algebraic-number-theory",
});

import { THE_SET_OF_ALGEBRAIC_NUMBERS_SECTION } from "./algebraic_numbers";
import { PREFACE_SECTION } from "./preface";

export const CONTENT = new Section({
    title: new Title({
        value: metadata.title,
        index_type: IndexType.NONE
    }),
    sections: [
        THE_SET_OF_ALGEBRAIC_NUMBERS_SECTION,
        PREFACE_SECTION,
    ]
});

CONTENT.assign_indices({});