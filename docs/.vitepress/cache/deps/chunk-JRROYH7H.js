import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/logo-ie-filled.js
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
      "d": "M11.57 9.04h3.4a6.03 6.03 0 00-.82-3.74c.56-1.43.54-2.64-.21-3.36-.71-.68-2.62-.57-4.78.35a6.3 6.3 0 00-6.63 4.58 8.74 8.74 0 013.22-2.58l-.93.88C1.37 8.48.28 12.81 1.45 13.93c.9.85 2.5.7 4.35-.16.87.42 1.84.66 2.87.66a6.31 6.31 0 005.99-4.11h-3.42a2.8 2.8 0 01-2.45 1.4 2.8 2.8 0 01-2.45-1.4A2.6 2.6 0 016 9.05v-.01h5.56zM6 7.44a2.62 2.62 0 012.66-2.42 2.62 2.62 0 012.66 2.42H6.01zm7.9-4.83c.48.47.47 1.33.06 2.4a6.3 6.3 0 00-2.95-2.3c1.3-.54 2.35-.61 2.89-.1zM2.35 13.71c-.62-.59-.43-1.83.36-3.32a6.16 6.16 0 002.7 3.16c-1.38.6-2.5.7-3.06.17z",
      "fillOpacity": 0.9
    }
  }]
};
var logoIeFilled = defineComponent({
  name: "LogoIeFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-ie-filled", className.value]);
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
  logoIeFilled
};
//# sourceMappingURL=chunk-JRROYH7H.js.map
