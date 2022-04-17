import { ABC, trueModulos } from './caeser.ts';

export function findLetters(input: string, maxLetterSequenceLength = 10) {
    const map: Map<string, number[]> = new Map();

    for (let i = 0; i < input.length; i++) {
        for (let k = 2; k < maxLetterSequenceLength; k++) {
            if (i + k >= input.length) break;
            // console.log(k);

            const currentSequence = input.substring(i, i + k + 1);
            // console.log(currentSequence);

            const currentValue = map.get(currentSequence);
            map.set(currentSequence, [...(currentValue || []), i]);
        }
    }

    const primesMap: Map<number, number> = new Map();

    for (const [key, value] of map) {
        if (value.length <= 1) {
            map.delete(key);
            continue;
        }

        const distance = value[1] - value[0]
        const primes = primeFactors(distance);
        const uniquePrimes = [...new Set(primes)];

        uniquePrimes.forEach(val => primesMap.set(val, (primesMap.get(val) || 0) + 1));

        console.log(`${key} at ${value.join(', ')} | Distance: ${distance} | ${primes}`);
    }
    console.log(primesMap);
}

export function split(input: string, keyLength: number): string[] {
    const strings = Array(keyLength).fill("");

    for (let i = 0; i < input.length; i++) {
        strings[i % keyLength] += input[i];
    }
    return strings;
}

export function join(input: string[], keyLength: number): string {
    let output = "";
    for (let i = 0; i < Math.max(...input.map((s => s.length))); i++) {
        for (let k = 0; k < keyLength; k++) {
            output += input[k][i];
        }
    }
    return output
}

function primeFactors(n: number): number[] {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}


export function decode(input: string, key: string) {
    return [...input].map((val, index) => getPlaintext(val, getKeyletterAt(index))).join('');

    function getKeyletterAt(index: number) {
        return key[index % key.length];
    }

    function getPlaintext(cipherLetter: string, keyLetter: string) {
        return ABC[trueModulos(ABC.indexOf(cipherLetter) - ABC.indexOf(keyLetter), ABC.length)]
    }
}
