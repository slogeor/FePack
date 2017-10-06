const glob = require('glob');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV;

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
}

exports.getFileName = ()=> {
	if (NODE_ENV === 'DEV') {
		return '[name].js';
		// return '[name].[chunkhash:8].js';
	} else {
		return '[name].[chunkhash:8].js';
	}
}

exports.getExtractCSSName = (env = 'DEV')=> {
	if (NODE_ENV === 'DEV') {
		return 'base.css';
		// return 'base.[contenthash:8].css';
	} else {
		return 'base.[contenthash:8].css';
	}
}

exports.getHtmlPlugin = (config) => {
	if (NODE_ENV === 'DEV') {
		return config;
	} else {
		config.minify = {
			removeComments: true,
			collapseWhitespace: true,
			removeAttributeQuotes: true
		};
		return config;
	}
}

