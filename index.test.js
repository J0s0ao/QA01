const test = require('tape')
const index = require('./index')

test('Teste1', (t) => {
    t.assert(index.aplicarDesconto(10,5) === 5,
    "Descontou corretamente")
    t.end()
})

test('Teste2', (t) => {
    t.assert(index.aplicarDesconto(5,10) === 0,
    "Descontou corretamente")
    t.end()
})

test('Teste3', (t) => {
    t.assert(index.aplicarDesconto(8,2) === 6,
    "Descontou corretamente")
    t.end()
})

test('Teste4', (t) => {
    t.assert(index.aplicarDesconto(9,2) === 6,
    "Descontou corretamente")
    t.end()
})

test('Teste5', (t) => {
    t.assert(index.aplicarDesconto(9,2) === 7,
    "Descontou corretamente")
    t.end()
})

test('Teste6', (t) => {
    t.assert(index.aplicarDesconto(45,5) === 10,
    "Descontou corretamente")
    t.end()
})

test('Teste7', (t) => {
    t.assert(index.aplicarDesconto(45,5) === 40,
    "Descontou corretamente")
    t.end()
})

test('Teste8', (t) => {
    t.assert(index.aplicarDesconto(891,5) === 886,
    "Descontou corretamente")
    t.end()
})

test('Teste9', (t) => {
    t.assert(index.aplicarDesconto(5,891) === 0,
    "Descontou corretamente")
    t.end()
})

test('Teste10', (t) => {
    t.assert(index.aplicarDesconto(7,52) === 13,
    "Descontou corretamente")
    t.end()
})