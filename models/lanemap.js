module.exports = (sequelize, DataTypes) => {
    const LaneMap = sequelize.define('LaneMap', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return LaneMap;
};