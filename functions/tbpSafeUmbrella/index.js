const cloud = require('@cloudbase/node-sdk');
const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV,
});
const tencentcloud = require("tencentcloud-sdk-nodejs");
const TbpClient = tencentcloud.tbp.v20190627.Client;
const clientConfig = require('./clientConfig.json')

const botConfig = {
    "BotId": "b3b61ad4-c438-42d2-b492-e2c6e3677cfc",
    "BotEnv": "release",
    "TerminalId": "1"
};

const client = new TbpClient(clientConfig);

exports.main = async (event, context) => {

    let { content } = event;
    if (!content) {
        console.log('请输入关键字content');
        return false;
    }

    let Sentiment = await app
        .callFunction({
            name: 'nlpSentimentAnalysis',
            data: {
                content: content,
            },
        })
        .then((resdata) => resdata.result)

    const params = {
        ...botConfig,
        "InputText": content
    };

    let botres = await client.TextProcess(params).then((data) => data);

    botres.Sentiment = Sentiment
    return botres


}