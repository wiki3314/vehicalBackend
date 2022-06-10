const env = process.env.NODE_ENV || 'staging';
console.log(env);
const config = require(`./${env}`); // eslint-disable-line import/no-dynamic-require

export default config;
