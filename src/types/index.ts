export interface INotes {
    id: string;
    title: string;
    note: string;
    date: string;
}
export type TCardNotes = {
    data: INotes;
    onDelete: () => void;
    onUpdate: () => void;
}