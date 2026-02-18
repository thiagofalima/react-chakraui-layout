

const conta = {
    email: 'thiago@senai.com',
    password: '12345',
    name: 'Thiago Lima',
    balance: 2000
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})