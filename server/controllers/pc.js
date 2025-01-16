const { Pc, Categorie } = require("../models/model");
module.exports = {
  getAll: async (req, res) => {
    try {
      const fetch = await Pc.findAll({ include: Categorie });
      res.status(200).send(fetch);
    } catch (error) {
      throw error;
    }
  },
  Add: async (req, res) => {
    const { name, imageUrl, price, quantity, AdminId, CategoryId } = req.body;
    try {
      const created = await Pc.create({
        name,
        imageUrl,
        price,
        quantity,
        AdminId,
        CategoryId,
      });
      res.status(201).send("created");
    } catch (error) {
      throw error;
    }
  },
  Delete: async (req, res) => {
    const { id } = req.params;

    try {
      const noPc = await Pc.findOne({ where: { id: id } });
      if (!noPc) {
        res.status(404).send("id not found");
      }
      const deleted = await Pc.destroy({ where: { id: id } });
      res.status(201).send("deleted successfully");
    } catch (error) {
      throw error;
    }
  },
  Update: async (req, res) => {
    const { id } = req.params;
    const { name, imageUrl, price, quantity, AdminId, CategoryId } = req.body;
    try {
      const noPc = await Pc.findOne({ where: { id: id } });
      if (!noPc) {
        res.status(404).send("id not found");
      }
      const updated = await Pc.update(
        { name, imageUrl, price, quantity, AdminId, CategoryId },
        { where: { id: id } }
      );
      resp.status(200).send("Updated successfully");
    } catch (error) {
      throw error;
    }
  },
};
