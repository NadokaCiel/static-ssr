function getMeta (vm) {
  const { meta } = vm.$options
  if (meta) {
    return typeof meta === 'function'
      ? meta.call(vm)
      : meta
  }
}

function mergeMeta(data = {}) {
  return {
    title: data.title || '立邦涂料（漆）中国官方网站-为你刷新生活', // default title
    author: data.author || 'ciel', // default author
    keywords: data.keywords || '油漆,涂料,乳胶漆,立邦,立邦漆', // default keywords
    description: data.description || '立邦涂料(NipponPaint)是世界最早的涂料公司，也是涂料,油漆，乳胶漆世界十大品牌之一.立邦漆官方网站提供立邦漆、立邦乳胶漆以及其他专业油漆（家装、建筑、汽车、工业、工程涂料）的具体信息.如果您对我们的产品感兴趣，欢迎访问我们的网站.', // default description
  }
}

const serverMetaMixin = {
  created () {
    const meta = mergeMeta(getMeta(this)) || {};
    if (meta && this.$ssrContext) {
      if (meta.title) this.$ssrContext.title = meta.title;
      if (meta.author) this.$ssrContext.author = meta.author;
      if (meta.keywords) this.$ssrContext.keywords = meta.keywords;
      if (meta.description) this.$ssrContext.description = meta.description;
    }
  }
}

const clientMetaMixin = {
  mounted () {
    const meta = mergeMeta(getMeta(this)) || {};
    if (meta) {
      if (meta.title) document.title = meta.title;
      if (meta.author) document.querySelector('meta[name="author"]').setAttribute('content', meta.author);
      if (meta.keywords) document.querySelector('meta[name="keywords"]').setAttribute('content', meta.keywords);
      if (meta.description) document.querySelector('meta[name="description"]').setAttribute('content', meta.description);
    }
  }
}

export default process.env.VUE_ENV === 'server'
  ? serverMetaMixin
  : clientMetaMixin
