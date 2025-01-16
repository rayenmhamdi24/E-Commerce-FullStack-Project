const { conn, DataTypes } = require("sequelize");
module.exports = (conn, DataTypes) => {
  const Admin = conn.define("Admin", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Admin;
};
