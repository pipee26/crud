/**
 * AlumnosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: function(req, res) {
    Alumnos.find({}).exec(function(err, alumnos) {
      if (err) {
        res.send(500, { error: 'Hubo un error en la base de datos' });
      }
      res.view('list', { alumnos: alumnos });
    });
  },
  add: function(req, res) {
    res.view('add');
  },
  create: function(req, res) {
    var title = req.body.title;
    var body = req.body.body;

    Alumnos.create({ title: title, body: body }).exec(function(err) {
      if (err) {
        res.send(500, { error: 'Hubo un error en la base de datos' });
      }
      res.redirect('/alumnos/list');
    });
  },
  delete: function(req,res){
    Alumnos.destroy({id:req.params.id}).exec(function(err) {
        if (err) {
          res.send(500, { error: 'Hubo un error en la base de datos' });
        }
        res.redirect('/alumnos/list');
      });
      return false;
  },
  edit: function(req,res){
    Alumnos.findOne({id:req.params.id}).exec(function(err,alumnos) {
        if (err) {
          res.send(500, { error: 'Hubo un error en la base de datos' });
        }
        res.view('edit', { alumnos: alumnos });
      });
  },
  update: function(req,res){
    var title = req.body.title;
    var body = req.body.body;

    Alumnos.update({id:req.params.id},{ title: title, body: body }).exec(function(err) {
      if (err) {
        res.send(500, { error: 'Hubo un error en la base de datos' });
      }
      res.redirect('/alumnos/list');
    });
    return false;
  }
};
