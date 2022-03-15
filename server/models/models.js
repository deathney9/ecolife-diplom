const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  firstname: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  photo: { type: DataTypes.STRING },
});

const Section = sequelize.define("section", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Article = sequelize.define("article", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  files: { type: DataTypes.ARRAY(DataTypes.STRING) },
});

const Photo = sequelize.define("photo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  url: { type: DataTypes.STRING, allowNull: false },
});

const Video = sequelize.define("video", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  url: { type: DataTypes.STRING, allowNull: false },
});

Section.hasMany(Article);
Article.belongsTo(Section);

Section.hasMany(Photo);
Photo.belongsTo(Section);

Section.hasMany(Video);
Video.belongsTo(Section);

module.exports = {
  User,
  Section,
  Article,
  Photo,
  Video,
};
