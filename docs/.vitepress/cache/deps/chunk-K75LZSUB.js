import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/logo-wechat.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M1 6.55C1 4.2 3.27 2.3 6.06 2.3c2.52 0 4.55 1.55 4.93 3.58h-.21c-2.55 0-4.61 1.73-4.61 3.87 0 .36.06.71.17 1.04a6.24 6.24 0 01-2.08-.24c-.1 0-.19.03-.27.07l-1.1.65a.19.19 0 01-.1.03.17.17 0 01-.17-.17c0-.03 0-.06.02-.1v-.02l.2-.71.03-.15a.34.34 0 00-.12-.39A4 4 0 011 6.55zm2.78-1.36c0 .33.26.6.6.6a.6.6 0 00.6-.6.6.6 0 00-.6-.6.6.6 0 00-.6.6zm3.37 0a.6.6 0 101.2 0 .6.6 0 00-.6-.6.6.6 0 00-.6.6z",
      "fillOpacity": 0.9,
      "fillRule": "evenodd",
      "clipRule": "evenodd"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M15 9.75c0 1.07-.57 2.03-1.46 2.68a.28.28 0 00-.1.32l.19.71v.03l.02.08c0 .08-.06.14-.14.14a.16.16 0 01-.08-.03l-.92-.53a.42.42 0 00-.35-.05c-.43.12-.9.2-1.38.2-2.33 0-4.21-1.6-4.21-3.55 0-1.95 1.88-3.54 4.21-3.54S15 7.8 15 9.75zM8.85 8.62a.53.53 0 101.05 0c0-.3-.23-.53-.52-.53-.3 0-.53.24-.53.53zm2.81 0a.53.53 0 101.05 0c0-.3-.23-.53-.52-.53-.3 0-.53.24-.53.53z",
      "fillOpacity": 0.9,
      "fillRule": "evenodd",
      "clipRule": "evenodd"
    }
  }]
};
var logoWechat = defineComponent({
  name: "LogoWechatIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  setup(props, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props.size);
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-logo-wechat", className.value]);
    var finalStyle = computed(() => _objectSpread(_objectSpread({}, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props$onClick;
        return (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, {
          e
        });
      }
    }));
    return () => renderFn(element, finalProps.value);
  }
});

export {
  logoWechat
};
//# sourceMappingURL=chunk-K75LZSUB.js.map
