import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const inputText = ref("");
    const outputText = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-3xl mx-auto" }, _attrs))}><h1 class="text-2xl font-bold mb-4">全角のダブルクォートからダブルミニュートに置換</h1><textarea class="w-full h-40 p-2 border" placeholder="ここに日本語テキストを貼り付けてください">${ssrInterpolate(inputText.value)}</textarea><div class="my-4"><button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> 「＂」→「〝〟」に変換 </button><button class="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"> 結果をダウンロード </button></div><h2 class="text-lg font-semibold mb-2">変換後のテキスト</h2><textarea class="w-full h-40 p-2 border" readonly>${ssrInterpolate(outputText.value)}</textarea></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C6QPercZ.js.map
