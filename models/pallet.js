module.exports = (sequelize, DataTypes) => {
  const Pallet = sequelize.define('Pallet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
    },
    location: {
      type: DataTypes.STRING,
    },
  });

  return Pallet;
};
