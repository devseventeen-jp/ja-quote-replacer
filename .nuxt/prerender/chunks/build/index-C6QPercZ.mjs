import { ref, mergeProps, useSSRContext } from 'file://C:/Users/devse/nuxt3-pj/ja-quote-replacer/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://C:/Users/devse/nuxt3-pj/ja-quote-replacer/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-3xl mx-auto" }, _attrs))}><h1 class="text-2xl font-bold mb-4">\u5168\u89D2\u306E\u30C0\u30D6\u30EB\u30AF\u30A9\u30FC\u30C8\u304B\u3089\u30C0\u30D6\u30EB\u30DF\u30CB\u30E5\u30FC\u30C8\u306B\u7F6E\u63DB</h1><textarea class="w-full h-40 p-2 border" placeholder="\u3053\u3053\u306B\u65E5\u672C\u8A9E\u30C6\u30AD\u30B9\u30C8\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044">${ssrInterpolate(inputText.value)}</textarea><div class="my-4"><button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> \u300C\uFF02\u300D\u2192\u300C\u301D\u301F\u300D\u306B\u5909\u63DB </button><button class="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"> \u7D50\u679C\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9 </button></div><h2 class="text-lg font-semibold mb-2">\u5909\u63DB\u5F8C\u306E\u30C6\u30AD\u30B9\u30C8</h2><textarea class="w-full h-40 p-2 border" readonly>${ssrInterpolate(outputText.value)}</textarea></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C6QPercZ.mjs.map
