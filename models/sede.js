module.exports = (sequelize, DataTypes) => {
    const Sede = sequelize.define("Sedes", {
      code: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      ciudad_code: {
          type:DataTypes.STRING,
          references:{
              model: 'ciudades',
              key: 'code'
          }
      }
    },{      
      timestamps: false,
      freezeTableName: true,
    });
  
    return Sede;
  };