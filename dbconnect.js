const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '202.28.34.197',
    user: 'web66_65011212143',
    password: '65011212143@csmsu',
    database: 'web66_65011212143'
})

conn.connect((err) => {
    if (err) {
        console.log('Error connect toMySQL database = ', err)
        return;
    }
    console.log('MySQl successfully connected!');
})

module.exports = conn;