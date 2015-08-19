
// MySQL数据库联接配置
module.exports = {
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: 'aaaaaa',
        database:'blog',
        port: 3306,
        connectionLimit : 10,
        multipleStatements: true
    }
}