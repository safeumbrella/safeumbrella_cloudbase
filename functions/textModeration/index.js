const cloud = require('@cloudbase/node-sdk');
const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV,
});
const tencentcloud = require("tencentcloud-sdk-nodejs");
const clientConfigJson = require('./clientConfig.json')
const CryptoJS = require("crypto-js");

exports.main = async (event, context) => {
    const TmsClient = tencentcloud.tms.v20201229.Client;
    const clientConfig = clientConfigJson
    let { content } = event;
    if (!content) {
        console.log('请输入关键字content');
        return false;
    }
    let wordArray = CryptoJS.enc.Utf8.parse(content);
    content = CryptoJS.enc.Base64.stringify(wordArray);
    console.log(content);
    const client = new TmsClient(clientConfig);
    const params = {
        "Content": content
    };
    let res = await client.TextModeration(params).then((data) => data)
    return res
}