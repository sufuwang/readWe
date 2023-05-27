import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/logo-github.js
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
      "d": "M5.5 14.5v-1.8h-.9c-.73 0-1.32-.6-1.32-1.32 0-.25-.2-.46-.46-.46H2.1v-.85h.73a1.31 1.31 0 011.31 1.31.46.46 0 00.46.46h.91v-.38a2 2 0 01.22-.9 6.12 6.12 0 01-.92-.4l-.02-.01c-.5-.27-.94-.6-1.29-.98-.63-.67-1-1.49-1-2.37 0-.85.34-1.64.92-2.29l-.05-.22c-.2-.96 0-1.96.54-2.78a3.7 3.7 0 012.68.92l.36.31a7.26 7.26 0 012.17.02l.37-.33a3.7 3.7 0 012.68-.92c.54.82.74 1.82.54 2.78l-.07.33c.52.63.82 1.38.82 2.18 0 1.38-.9 2.6-2.28 3.35-.29.15-.6.29-.92.4a2 2 0 01.25.97v2.98h-5zM7.08 3.73l-.46.07-.7-.62a2.7 2.7 0 00-1.43-.66 2.7 2.7 0 00-.15 1.57l.15.7-.33.38c-.45.5-.67 1.06-.67 1.63 0 1.1.9 2.25 2.55 2.81l1.09.37-.52 1.03a1 1 0 00-.11.45v2.04h3v-1.98a1 1 0 00-.12-.49L8.8 10l1.13-.39c1.64-.56 2.52-1.71 2.52-2.8 0-.54-.2-1.06-.59-1.54l-.3-.37.16-.8a2.7 2.7 0 00-.15-1.57 2.7 2.7 0 00-1.43.66l-.72.64-.47-.08a6.25 6.25 0 00-1.87 0z",
      "fillOpacity": 0.9
    }
  }]
};
var logoGithub = defineComponent({
  name: "LogoGithubIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-github", className.value]);
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
  logoGithub
};
//# sourceMappingURL=chunk-I3EBSB3Y.js.map
