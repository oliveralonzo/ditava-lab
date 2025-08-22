// Person types (used in schema and UI)
export const personTypes = ["faculty", "student", "alumni"] as const;
export type PersonType = typeof personTypes[number];

// Color map (used for cards)
export const colorMap = {
    red: "#DC6150",
    yellow: "#FBC16B",
    blue: "#78ACDB",
    green: "#6DC2AA",
} as const;

export type ColorKey = keyof typeof colorMap;