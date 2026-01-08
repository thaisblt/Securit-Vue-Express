module.exports = {
   apps : [
      {
         name: 'securit-app',
         script: './app.js',
         watch: false,
         cwd: __dirname,
         env: {
            NODE_ENV: 'production'
         }
      }
   ]
}