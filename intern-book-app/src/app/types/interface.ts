
export interface Book {
    name: string;
    detail: string;
    evaluation: number;
}

export const BOOKS: Book[] = [
    {
        name: '斜陽',
        detail: '人間は、恋と革命のために生まれてきたのだ。',
        evaluation: 80
    },
    {
        name: 'ぼくはイエローでホワイトで、ちょっとブルー',
        detail: 'イギリスに住む著者が息子を通じて人種による文化の違いについて考える、そんな感じの話',
        evaluation: 85
    },
    {
        name: '化物語',
        detail: '西尾維新によって書かれた癖のあるライトノベル',
        evaluation: 85
    },
    {
        name: '呪術廻戦',
        detail: '芥見下々によって描かれた漫画',
        evaluation: 87
    },
    {
        name: '※追加された本※',
        detail: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        evaluation: 0
    }
]
