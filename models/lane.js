module.exports = (sequelize, DataTypes) => {
    const Lane = sequelize.define('Lane', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isPriority: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Lane;
  };
  