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