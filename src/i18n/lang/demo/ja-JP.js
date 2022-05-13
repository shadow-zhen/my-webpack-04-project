(function(define) {
  'use strict'
  define(function(require, exports, module) {
    const lang = {
      apiName: 'APIお名前',
      serviceName: 'サービス名',
      desc: 'API説明',
      apiSetting: 'API設定',
      editApi: '編集するAPI',
      addApi: '追加するAPI',
      apiList: {
        colNames: ['API URL', 'API名称', 'サービス名', 'API説明', '操作']
      },
      fileTypeInvalidMsg: 'あなただけのExcelファイルをアップロードすることができます.',
      fileLengthInvalidMsg: 'ファイル名が50を超えることはできません.',
      fileSizeMsg: 'ファイルサイズは10Mを超えることはできません.',
      exportRemark: '(注意：すべてのデータが記録されているエクスポートすることを選択しないでください)',
      checkServiceUrl: 'サービスインタフェースは終了しなければなりません.doという'
    }
    module.exports = lang
  })
})(define)
