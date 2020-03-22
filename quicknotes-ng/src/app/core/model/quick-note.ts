/**
 * @description Interface
 * @author ShortThirdMan USA Inc
 */
export interface IQuickNote {
    id: number;
    title: string;
    content: string;
    createdAt: any;
    lastUpdated: any;
    isSelected?: boolean;
}

/**
 * @description `QuickNote` implementing `IQuickNote`
 * @author ShortThirdMan USA Inc
 */
export class QuickNote implements IQuickNote {
    id: number;
    title: string = '';
    content: string = '';
    createdAt: any = undefined;
    lastUpdated: any = undefined;
    isSelected?: boolean = false;
}

export type QuickNotes = Array<QuickNote>;

export const CURRENT_DATE: Date = new Date();

export const CURRENT_YEAR: any = new Date().getFullYear();

export let RANDOM_TIMESTAMP: any = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));

export const QUICK_NOTES_DATA: Array<QuickNote> = [
    {
        id: 1,
        title: "What is Lorem Ipsum?",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        createdAt: RANDOM_TIMESTAMP,
        lastUpdated: null
    },
    {
        id: 2,
        title: "Why do we use it?",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        createdAt: RANDOM_TIMESTAMP,
        lastUpdated: null
    },
    {
        id: 3,
        title: "Usages - I",
        content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: RANDOM_TIMESTAMP,
        lastUpdated: null
    },
    {
        id: 4,
        title: "Origin - I",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        createdAt: RANDOM_TIMESTAMP,
        lastUpdated: null
    },
    {
        id: 5,
        title: "Origin - II",
        content: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
        createdAt: RANDOM_TIMESTAMP,
        lastUpdated: null
    },
    {
        id: 6,
        title: "References - I",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        createdAt: RANDOM_TIMESTAMP,
        lastUpdated: null
    },
    {
        id: 7,
        title: "References - II",
        content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        createdAt: RANDOM_TIMESTAMP,
        lastUpdated: null
    }
];
