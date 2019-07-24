module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'Gobarber1',
  define: {
    timestamps: true,
    underscored: true,
    underscoreAll: true,
  },
};
