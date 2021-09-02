module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuarios", {
      identification: {
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
      },
      sede_code: {
        type:DataTypes.STRING,
        references:{
            model: 'sedes',
            key: 'code'
        }
    },
    },{      
      timestamps: false,
      freezeTableName: true,
    });
  
    return Usuario;
  };