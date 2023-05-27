import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/translate.js
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
      "d": "M1.33 3.33c0-1.1.9-2 2-2h1.34a2 2 0 012 2v4H5.33V5.67H2.67v1.66H1.33v-4zm1.34 1h2.66v-1c0-.36-.3-.66-.66-.66H3.33c-.36 0-.66.3-.66.66v1zm5.33-2h4a2 2 0 012 2V6h-1.33V4.33c0-.36-.3-.66-.67-.66H8V2.33zm4 5.34v1h2.67V10h-.71a5.32 5.32 0 01-1.46 3.04c.46.19.97.3 1.5.3h.67v1.33H14a5.3 5.3 0 01-2.67-.72 5.3 5.3 0 01-2.66.72H8v-1.34h.67c.53 0 1.03-.1 1.5-.29-.4-.41-.74-.9-.99-1.42l-.29-.6 1.2-.57.3.6c.22.48.55.91.94 1.26A4 4 0 0012.61 10H8V8.67h2.67v-1H12zm-8 1v4c0 .36.3.66.67.66h1.66v1.34H4.67a2 2 0 01-2-2v-4H4z",
      "fillOpacity": 0.9
    }
  }]
};
var translate = defineComponent({
  name: "TranslateIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-translate", className.value]);
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
  translate
};
//# sourceMappingURL=chunk-3W44HSZD.js.map
