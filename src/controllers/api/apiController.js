
const { default: Axios } = require('axios');
const { Product, Sequelize, Brand, Category, Item } = require('../../database/models');
const Op = Sequelize.Op;

module.exports = {
    
    addCart : function(req, res, next) {
    data = req.body
    
    Product.findByPk(data.id, {
        include: ["user"],
      })
        .then((product) => {
          // Saco el valor del producto, teniendo en cuenta el descuento.

          let price =
            Number(product.discount) > 0
              ? product.price - (product.price * product.discount) / 100
              : product.price;

          // Creo el Item de compra
          return Item.create({
            salePrice: price,
            quantity: data.quantity,
            subTotal: price * data.quantity,
            state: 1,
            userId: req.session.user.id,
            sellerId: product.user.id,
            productId: product.id,
          });
        }).then((item) => res.redirect("/users/cart"))
        .catch((e) => console.log(e));
    }, 
    deleteCart : function(req, res, next){
        data = req.body
       
                Item.destroy({where : {id : data},  force: true})
                .then(item => res.redirect("/users/cart"))
                .catch((e) => console.log(e));
    }
}