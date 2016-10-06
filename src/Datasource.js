export default class Datasource{

  constructor(){
    this.s3 = null;
    if(window.AWS){
      window.AWS.config.update({
        accessKeyId: 'AKIAJOCJ3MFF72OH72FA',
        secretAccessKey: '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',
        region : 'eu-west-1'
      });
      var params = {
        Bucket: 'whiskylogger', /* required */
        Key: 'whiskies.json', /* required */
        // IfMatch: 'STRING_VALUE',
        // IfModifiedSince: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
        // IfNoneMatch: 'STRING_VALUE',
        // IfUnmodifiedSince: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
        // PartNumber: 0,
        // Range: 'STRING_VALUE',
        // RequestPayer: 'requester',
        // ResponseCacheControl: 'STRING_VALUE',
        // ResponseContentDisposition: 'STRING_VALUE',
        // ResponseContentEncoding: 'STRING_VALUE',
        // ResponseContentLanguage: 'STRING_VALUE',
        // ResponseContentType: 'STRING_VALUE',
        // ResponseExpires: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
        // SSECustomerAlgorithm: 'STRING_VALUE',
        // SSECustomerKey: new Buffer('...') || 'STRING_VALUE',
        // SSECustomerKeyMD5: 'STRING_VALUE',
        // VersionId: 'STRING_VALUE'
      };
      this.s3 = new window.AWS.S3({
        params : params
      });
    }
  }

  saveWhisky(dataToBeSaved){
    const self = this;
    if(this.s3){
      return this.getWhiskies().then(function(data){
        console.log('data found :', data);
        data.push(dataToBeSaved);
        var params = {
          Body : JSON.stringify(data)
        }
        return self.s3.putObject(params).promise().then(function(){
          return data;
        });
      }).catch(function(){
        console.log('what s wrong ?', arguments);
      });
    }
  }


  getWhiskies(){
    const self = this;
    if(this.s3){
      return this.s3.getObject({}).promise().then(function(data){
        var result = JSON.parse(data.Body);
        if(result.length === 0){
          return [];
        }
        return result;
      }).catch(function(err){
        // Create Object
        var params = {
          Body : JSON.stringify([])
        }
        return self.s3.putObject(params).promise().then(function(){
          return [];
        });
      });
    }
  }
}
