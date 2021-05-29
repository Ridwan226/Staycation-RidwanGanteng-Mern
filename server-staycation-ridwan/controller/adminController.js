const Category = require('../models/Category');
const Bank = require('../models/Bank');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  viewDashboard: (req, res) => {
    res.render('admin/dashboard/view_dashboard', {
      title: 'Stacation Dashboard | Stacation',
    });
  },

  viewCategory: async (req, res) => {
    try {
      const category = await Category.find();
      // console.log(category);
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');
      const alert = {
        message: alertMessage,
        status: alertStatus,
      };
      res.render('admin/category/view_category', {
        category,
        alert,
        title: 'Stacation Category | Stacation',
      });
    } catch (error) {
      res.render('admin/category/view_category');
    }
  },

  addCategory: async (req, res) => {
    // console.log(name);

    try {
      const {name} = req.body;

      await Category.create({name});
      req.flash('alertMessage', 'Success Add Category');
      req.flash('alertStatus', 'success');
      res.redirect('/admin/category');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/category');
    }
  },

  editCategory: async (req, res) => {
    try {
      const {id, name} = req.body;

      // console.log(id);

      const category = await Category.findOne({_id: id});

      // console.log(category);
      category.name = name;

      await category.save();
      req.flash('alertMessage', 'Success Update Category');
      req.flash('alertStatus', 'success');
      res.redirect('/admin/category');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/category');
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const {id} = req.params;

      const category = await Category.findOne({_id: id});

      await category.remove();
      req.flash('alertMessage', 'Success Delete Category');
      req.flash('alertStatus', 'success');
      res.redirect('/admin/category');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/category');
    }
  },

  viewBank: async (req, res) => {
    try {
      const bank = await Bank.find();
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');
      const alert = {
        message: alertMessage,
        status: alertStatus,
      };
      res.render('admin/bank/view_bank', {
        title: 'Stacation Bank | Stacation',
        alert,
        bank,
      });
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/bank');
    }
  },

  addBank: async (req, res) => {
    try {
      const {name, nameBank, nomorRekening} = req.body;

      // console.log(req.file);

      await Bank.create({
        name,
        nameBank,
        nomorRekening,
        imageUrl: `images/${req.file.filename}`,
      });

      req.flash('alertMessage', 'Success Add Bank');
      req.flash('alertStatus', 'success');
      res.render('admin/bank/view_bank', {
        title: 'Stacation Bank | Stacation',
        alert,
      });
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/bank');
    }
  },

  editBank: async (req, res) => {
    try {
      const {id, name, nomorRekening, nameBank} = req.body;
      // console.log(name);
      const bank = await Bank.findOne({_id: id});

      if (req.file == undefined) {
        bank.name = name;
        bank.nomorRekening = nomorRekening;
        bank.nameBank = nameBank;
        await bank.save();
        req.flash('alertMessage', 'Success Edit Bank');
        req.flash('alertStatus', 'success');
        res.render('admin/bank/view_bank', {
          title: 'Stacation Bank | Stacation',
          alert,
        });
      } else {
        await fs.unlink(path.join(`public/${bank.imageUrl}`));
        bank.name = name;
        bank.nomorRekening = nomorRekening;
        bank.nameBank = nameBank;
        bank.imageUrl = `images/${req.file.filename}`;
        await bank.save();
        req.flash('alertMessage', 'Success Edit Bank');
        req.flash('alertStatus', 'success');
        res.render('admin/bank/view_bank', {
          title: 'Stacation Bank | Stacation',
          alert,
        });
      }
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/bank');
    }
  },

  delBank: async (req, res) => {
    try {
      const {id} = req.params;

      const bank = await Bank.findOne({_id: id});
      await fs.unlink(path.join(`public/${bank.imageUrl}`));

      await bank.remove();
      req.flash('alertMessage', 'Success Delete Bank');
      req.flash('alertStatus', 'success');
      res.redirect('/admin/bank');
    } catch (error) {
      req.flash('alertMessage', `${error.message}`);
      req.flash('alertStatus', 'danger');
      res.redirect('/admin/bank');
    }
  },

  viewItem: (req, res) => {
    res.render('admin/items/view_item', {
      title: 'Stacation Items | Stacation',
    });
  },

  viewBooking: (req, res) => {
    res.render('admin/booking/view_booking', {
      title: 'Stacation Booking | Stacation',
    });
  },
};
