import express from 'express'
import PgDataSource from './dataSource.ts'
import { PostEntity } from './models/PostEntity.ts'

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    const data = await PgDataSource.manager.find(PostEntity)
    res.json(data)
})

async function startApp() {
    try {
        PgDataSource.initialize()
    } catch(e) {
        console.log(e)
    }
    app.listen(8008, () => {
        console.log('App is started')
    })
}

startApp()