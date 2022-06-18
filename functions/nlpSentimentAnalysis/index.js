const cloud = require('@cloudbase/node-sdk');
const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV,
});
const tencentcloud = require("tencentcloud-sdk-nodejs");
const NlpClient = tencentcloud.nlp.v20190408.Client;
const clientConfig = require('./clientConfig.json')

exports.main = async (event, context) => {
    let { content } = event;
    if (!content) {
        console.log('请输入关键字content');
        return false;
    }
    const client = new NlpClient(clientConfig);
    const params = {
        "Text": content,
        "Flag": 4
    };
    let Sentiment = await client.SentimentAnalysis(params).then((data) => data)

    return Sentiment

}