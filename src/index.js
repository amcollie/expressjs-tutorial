import express from 'express'

import { mockUsers } from '../mock-data/data'

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/users', (req, res) => {
    res.send(mockUsers)
})

app.get('/api/users/:id', (req, res) => {
    const user_id = parseInt(req.params.id)
    if (isNaN(user_id)) {
        return res.status(400).send({msg: 'Invalid user id'})
    }

    const user = mockUsers.find(user => user.id === user_id)
    if (!user) {
        return res.status(404).send({msg: 'User not found'})
    }

    return res.send({user})
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