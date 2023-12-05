require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/main',
} = process.env;

module.exports = {
  // apps: [{
  //   name: 'mesto',
  //   script: './dist/app.js',
  // }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/ulbee/mesto-frontend-starterkit.git',
      path: DEPLOY_PATH,
      'post-deploy': 'npm i && npm run build',
    },
  },
};
