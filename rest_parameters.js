function multiply(multiplier, ...args) {
    return args.map(arg => multiplier * arg)
}

const test = multiply(2, 2, 4, 6, 8)

