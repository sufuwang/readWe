import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/logo-apple-filled.js
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
      "d": "M10.69 1c.08.79-.24 1.58-.7 2.15a2.5 2.5 0 01-2 .96c-.1-.78.27-1.58.7-2.09.5-.57 1.32-1 2-1.02zM13.13 5.6c-.15.1-1.46.92-1.45 2.57.02 2 1.71 2.68 1.8 2.72h.01v.02c-.05.14-.32 1-.93 1.9-.56.83-1.15 1.64-2.07 1.66a2.3 2.3 0 01-1.04-.25c-.32-.14-.65-.29-1.18-.29-.56 0-.9.15-1.24.3-.3.12-.58.24-.97.26-.89.03-1.57-.89-2.13-1.7-1.16-1.68-2.05-4.74-.86-6.8a3.3 3.3 0 012.8-1.7c.49 0 .97.18 1.38.35.32.13.6.24.84.24.2 0 .48-.1.8-.24.52-.2 1.14-.44 1.78-.38a3.15 3.15 0 012.46 1.34z",
      "fillOpacity": 0.9
    }
  }]
};
var logoAppleFilled = defineComponent({
  name: "LogoAppleFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-apple-filled", className.value]);
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
  logoAppleFilled
};
//# sourceMappingURL=chunk-NNQP72BH.js.map
