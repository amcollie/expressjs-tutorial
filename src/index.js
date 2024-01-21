import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/users', (req, res) => {
    res.send([
        {
            id: 1,
            username: 'john_doe',
            displayName: 'John Doe',
        },
        {
            id: 2,
            username: 'jane_doe',
            displayName: 'Jane Doe',
        },
        {
            id: 3,
            username: 'john_smith',
            displayName: 'John Smith',
        }
    ])
})

app.get('/api/products', (req, res) => {
    res.send([
        {
            id: 123,
            name: 'chicken breast',
            price: 12.99,
        },
    ])
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})