import * as T from "$lib/book";
import { z_x_chapter } from "./z_x";

export const maximal_ideals = T.BookChapter.from_subchapters(
    [z_x_chapter],
    "Maximal Ideals"
)
