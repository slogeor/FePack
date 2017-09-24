const glob = require('glob');
const path = require('path');

// 获取全路径
exports.fullPath = function(dir) {
	return path.resolve(__dirname, dir);
};

// 生成模板配置文件
exports.generateHtmlPlugin = (config) => {
	const htmlConfig = [];
    for (let key in config) {
    	const { chunks, title, filename } = config[key];
      	htmlConfig.push({
    		chunks,
    		title,
        	filename,
        	inject: true,
    	});
	}
	return htmlConfig;
};
