import i18next from "i18next";Page({
  data: {
    iconSize: [20, 30, 40, 50, 60],
    iconColor: [
    'red', 'yellow', 'blue', 'green'],

    iconType: [
    'success',
    'info',
    'warn',
    'waiting',
    'clear',
    'success_no_circle',
    'download',
    'cancel',
    'search'], I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation } });