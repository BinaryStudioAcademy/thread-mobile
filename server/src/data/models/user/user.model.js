import { DataTypes } from 'sequelize';

const init = orm => {
  const User = orm.define(
    'user',
    {
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return User;
};

export { init };
