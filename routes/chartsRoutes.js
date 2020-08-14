const {
  Router
} = require('express');
const chartsController = require('../controller/chartsController')

class ChartRoutes {
  router = Router();
  constructor() {
    this.routes();
  }
  routes() {
    this.router.get('/charts/:year/:table', chartsController.charts)
    this.router.get('/charts-total/:year/:table/:month', chartsController.getTotalMonth)
  }
}
module.exports = new ChartRoutes().router;