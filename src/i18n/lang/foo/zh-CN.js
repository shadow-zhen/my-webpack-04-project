(function(define) {
  'use strict'
  define(function(require, exports, module) {
    const lang = {
      apiName: 'API 名称',
      serviceName: '服务名称',
      desc: 'API描述',
      apiSetting: 'API设置',
      editApi: '编辑API',
      addApi: '新增API',
      apiList: {
        colNames: ['API URL', 'API名称', 'API服务名称', 'API描述', '操作']
      },
      fileTypeInvalidMsg: '只能上传Excel文件.',
      fileLengthInvalidMsg: '文件名称长度不能大于50.',
      fileSizeMsg: '文件大小不能超过10M.',
      exportRemark: '(备注：不选记录则导出所有数据)',
      checkServiceUrl: '服务接口必须以.do结尾'
    }
    module.exports = lang
  })
})(define)
