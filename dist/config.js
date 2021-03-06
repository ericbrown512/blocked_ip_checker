const env = process.env;
const configuration = {
    db: {
        host: env.DB_HOST || 'db-blocked-ips.cnws0qrfgqmq.us-east-2.rds.amazonaws.com',
        user: env.DB_USER || 'admin',
        password: env.DB_PASSWORD || 'password123',
        database: env.DB_NAME || 'sys',
        waitForConnections: true,
        connectionLimit: env.DB_CONN_LIMIT || 2,
        queueLimit: 0,
        debug: env.DB_DEBUG || false
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};
module.exports = configuration;
//# sourceMappingURL=config.js.map