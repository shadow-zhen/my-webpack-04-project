(function(define) {
  'use strict'
  define(function(require, exports, module) {
    const lang = {
      apiName: 'API Name',
      serviceName: 'service Name',
      desc: 'API Desc',
      apiSetting: 'API Setting',
      editApi: 'Edit API',
      addApi: 'Add API',
      apiList: {
        colNames: ['API URL', 'API Name', 'service Name', 'API Desc', 'Option']
      },
      fileTypeInvalidMsg: 'Only Excel files can be uploaded.',
      fileLengthInvalidMsg: 'The file name length can not be greater than 50.',
      fileSizeMsg: 'The file size can not exceed 10M.',
      exportRemark: '(Note: All records are exported without logging)',
      checkServiceUrl: 'The service url must end with .do'
    }
    module.exports = lang
  })
})(define)
