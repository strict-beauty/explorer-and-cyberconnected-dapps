/**
 * 
 */

const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    return sequelize.define('User', {
        uid: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nonce: {
			type: DataTypes.INTEGER, // SQLITE will use INTEGER
            allowNull: false,
			defaultValue: () => Math.floor(Math.random() * 10000), // Initialize with a random nonce
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        },
        avatar: {
            type: DataTypes.STRING,
            //defaultValue: 'https://res.cloudinary.com/twitter-clone-media/image/upload/v1597737557/user_wt3nrc.png'
            defaultValue: '/images/avatar/default.png'
        },
        cover: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        birth: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
    });
};