module.exports = (sequelize, DataTypes) => {
    const Ciudad = sequelize.define("Ciudades", {
      code: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      name: DataTypes.STRING
    },{      
      timestamps: false,
      freezeTableName: true,
    });
  
    return Ciudad;
  };