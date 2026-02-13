

const conta = {
    email: 'thiago@senai.com',
    password: '12345',
    name: 'Thiago Lima'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})