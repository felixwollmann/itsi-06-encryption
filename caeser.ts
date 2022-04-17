export const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function countLetters(input: string, capAt50 = false): Map<string, number> {

    //     const input =
    //         `URJYRVJJCZTYVALEXVVEKCV
    // ZEMFEYREJTYIZJKZREREUVI
    // JVEUIRLJJVERLWUVDCREUNR
    // IVJYVIICZTYVJNRIJFDDVIX
    // VCSJKREUURJBFIEXILVEUVI
    // YRWVIRLWUVENZVJVEUILEKV
    // ENRIURJYVLRLWYRLWVERLWX
    // VJVKQKLEUURJGRQZVIKVUVI
    // JKFITYRLWJVZEVECREXVEIF
    // KVESVZEVELEUBCRGGVIKVRV
    // XPGKZJTYUVEEUZVJVJGIRTY
    // VYRKKVVIMFEJVZEVIDLKKVI
    // XVCVIEKXIFJJVNRVCU`;

    const map = new Map();

    [...ABC].forEach(val => map.set(val, 0));

    for (const [letter] of [...input]) {
        if (map.get(letter) >= 50 && ABC.includes(letter)) break;
        map.set(letter, (map.get(letter) || 0) + 1);
    };

    // console.log(map);
    // console.log(shift(input, 9));

    return map;

}


export function shift(string: string, shiftBy: number): string {
    return [...string].map(letter => {
        const index = ABC.indexOf(letter);
        if (index < 0) return letter;
        return ABC[trueModulos(index + shiftBy, ABC.length)];
    }).join('');
}


export function trueModulos(value: number, by: number): number {
    return ((value % by) + by) % by;
}