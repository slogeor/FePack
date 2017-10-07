// 辅助函数
const utils = require('./util');

const fullPath = utils.fullPath;

// 项目根路径
const ROOT_PATH = fullPath('../');
// 项目源码的绝对路径
const SRC_PATH = ROOT_PATH + '/src';
// 产出目录的绝对路径
const DIST_PATH = ROOT_PATH + '/dist';
// 产出目录的相对路径
const DIST_DIR = './dist';
// scripts
const SCRIPTS_PATH = ROOT_PATH + '/src/scripts';
// styles
const STYLES_PATH = ROOT_PATH + '/src/styles';
// 是否是开发环境
const IS_DEV = process.env.NODE_ENV === 'DEV';

module.exports = {
    SRC_PATH,
    DIST_PATH,
    DIST_DIR,
    SCRIPTS_PATH,
    STYLES_PATH,
    IS_DEV
};
