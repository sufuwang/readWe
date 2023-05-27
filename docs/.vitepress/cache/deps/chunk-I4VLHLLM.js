import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/logo-github-filled.js
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
      "d": "M8 1a7.1 7.1 0 00-7 7.18c0 3.17 2 5.86 4.79 6.8.35.07.46-.15.46-.34v-1.33c-1.95.43-2.35-.85-2.35-.85-.32-.83-.78-1.05-.78-1.05-.64-.45.05-.44.05-.44.7.05 1.07.74 1.07.74.63 1.1 1.64.78 2.04.6.06-.46.24-.78.44-.96-1.55-.18-3.19-.8-3.19-3.55 0-.78.28-1.42.72-1.92-.07-.19-.3-.92.07-1.9 0 0 .6-.2 1.93.73a6.56 6.56 0 013.5 0c1.34-.93 1.93-.73 1.93-.73.38.99.14 1.72.07 1.9.44.5.72 1.14.72 1.92 0 2.76-1.64 3.37-3.2 3.54.25.23.48.66.48 1.33v1.97c0 .2.11.42.47.35A7.17 7.17 0 0015 8.18 7.09 7.09 0 008 1z",
      "fillOpacity": 0.9
    }
  }]
};
var logoGithubFilled = defineComponent({
  name: "LogoGithubFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-github-filled", className.value]);
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
  logoGithubFilled
};
//# sourceMappingURL=chunk-I4VLHLLM.js.map
