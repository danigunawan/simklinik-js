'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RekamMediks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      registrasi: {
        type: Sequelize.INTEGER
      },
      sistole_diastole: {
        type: Sequelize.STRING
      },
      frekuensi_pernapasan: {
        type: Sequelize.STRING
      },
      suhu: {
        type: Sequelize.STRING
      },
      nadi: {
        type: Sequelize.STRING
      },
      berat_badan: {
        type: Sequelize.STRING
      },
      tinggi_badan: {
        type: Sequelize.STRING
      },
      anamnesa: {
        type: Sequelize.STRING
      },
      pemeriksaan_fisik: {
        type: Sequelize.STRING
      },
      keadaan_umum: {
        type: Sequelize.STRING
      },
      kesadaran: {
        type: Sequelize.STRING
      },
      diagnosis_utama: {
        type: Sequelize.STRING
      },
      diagnosis_penyerta: {
        type: Sequelize.STRING
      },
      diagnosis_penyerta_tambahan: {
        type: Sequelize.STRING
      },
      komplikasi: {
        type: Sequelize.STRING
      },
      keadaan_pulang: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RekamMediks');
  }
};