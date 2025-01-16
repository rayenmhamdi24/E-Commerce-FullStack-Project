const { conn, DataTypes } = require("sequelize");
module.exports = (conn, DataTypes) => {
  const Categorie = conn.define("categorie", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Categorie;
};
