module.exports = function (app){
  const publicDir = `${global.appDir}/public/`;
    app.get('/survey', function(req, res) {
      res.sendFile(`${global.appDir}/public/survey.html`);
    });
    
    app.get('/', function(req, res) {
      res.sendFile(`${global.appDir}/public/home.html`);
    });
}
