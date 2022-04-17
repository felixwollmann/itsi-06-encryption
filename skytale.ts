export default (input: string, maxKeyLength = 10) => {
    for (let i = 1; i <= maxKeyLength; i++) {
        console.log(`----${i}----`)
        console.log([...input].map((val, index) => val + ((index + 1) % i == 0 ? "\n" : "")).join(''));
    }
}