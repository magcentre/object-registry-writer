const { DataTypes } = require('sequelize');

module.exports =  (sequelize) => {

    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false, },
        type: { type: DataTypes.STRING, allowNull: false, },
        size: { type: DataTypes.INTEGER, allowNull: false, },
        url: { type: DataTypes.STRING, allowNull: false, },
        bucket: { type: DataTypes.STRING, allowNull: false, },
    };

    const options = {
        timestamps: true,
    };

    const model = sequelize.define('registry', attributes, options);

    model.randomFunction = (a) => {
        console.log(a);
    };

    return model;
}