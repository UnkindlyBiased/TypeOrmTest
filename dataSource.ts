import { DataSource } from 'typeorm'

const PgDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'RevItUpDatabase',
    entities: [__dirname + '/**/*Entity.{js,ts}']
})

export default PgDataSource