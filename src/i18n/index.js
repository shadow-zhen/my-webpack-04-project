import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { zipObjectDeep } from 'lodash';

Vue.use(VueI18n)

const messages = {
  'zh_CN': {
    message: {
      hello: '您好'
    }
  },
  'en_US': {
    message: {
      hello: 'hello world'
    }
  },
  'ja_JP': {
    message: {
      hello: 'こんにちは、世界'
    },
  }
}

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'ja_JP', // 设置地区
  messages, // 设置地区信息
})

const langModules = require.context('./lang', true, /.js$/)
langModules.keys().forEach(langModuleName => {
  const idPath = langModuleName.split('/')
  const lang = String(idPath.splice(-1)[0]).replace('-', '_').replace('.js', '')
  const langNameSpace = idPath.splice(1).join('.')
  const messageobject = zipObjectDeep([langNameSpace], [langModules(langModuleName)])
  console.log(idPath, lang, langNameSpace, messageobject);
  i18n.mergeLocaleMessage(lang, messageobject)
})

export default i18n
