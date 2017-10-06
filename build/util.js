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

// 输出 filename 的格式
exports.getFileName = ()=> {
	if (NODE_ENV === 'DEV') {
		return '[name].js';
		// return '[name].[chunkhash:8].js';
	} else {
		return '[name].[chunkhash:8].js';
	}
}

// 输出 css 的格式
exports.getExtractCSSName = (env = 'DEV')=> {
	if (NODE_ENV === 'DEV') {
		return 'base.css';
		// return 'base.[contenthash:8].css';
	} else {
		return 'base.[contenthash:8].css';
	}
}

// html配置
exports.getHtmlPlugin = (config) => {
	if (NODE_ENV !== 'DEV') {
		config.minify = {
			removeComments: true,
			collapseWhitespace: true,
			removeAttributeQuotes: true
		};
	}
	return config;
}
