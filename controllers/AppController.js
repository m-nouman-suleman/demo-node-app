import reverseString from '../utils/reverseString.js';
class AppController {
  async app(req, res) {
    res.sendFile('/app.html', { root: './public' });
  }

  async data(req, res) {
    res.send({ status: 200, data: reverseString(req.body.dataField) });
  }
}

export default AppController;
