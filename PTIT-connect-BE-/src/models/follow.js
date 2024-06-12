"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Follow extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Follow.belongsTo(models.User, { foreignKey: "follower" });
            Follow.belongsTo(models.User, { foreignKey: "following" });
        }
    }
    Follow.init(
        {
            follower: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'user_id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            following: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'user_id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        },
        {
            sequelize,
            modelName: "Follow",
        }
    );
    return Follow;
};
