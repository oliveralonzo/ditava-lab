import { personTypes, type PersonType } from "./constants";

export const getPersonType = (entry: { id: string }): PersonType => {
    const folder = entry.id.split("/")[0];
    if (!personTypes.includes(folder as PersonType)) {
        throw new Error(`Person "${entry.id}" must be inside a faculty, student, or alumni folder.`);
    }
    return folder as PersonType;
};

export const sortBySlug = <T extends { slug: string }>({
    entries,
    descending = false,
}: {
    entries: T[];
    descending?: boolean;
}) => {
    return entries.sort((a, b) =>
        descending
            ? b.slug.localeCompare(a.slug)
            : a.slug.localeCompare(b.slug)
    );
};