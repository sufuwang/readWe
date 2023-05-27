import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/file-pdf.js
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
      "d": "M3.5 14V2h5v4.01h4V7.5h1V5.7a1 1 0 00-.29-.7L9.58 1.3a1 1 0 00-.71-.3H3.5c-.48 0-1 .34-1 .92v12.16c0 .58.52.92 1 .92H12v-1H3.5zm8.32-8.99H9.5V2.65L11.82 5z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M8.38 9h1.86c.48 0 .87.4.87.88v2.23c0 .48-.39.87-.87.87H8.38V9zm.75.75v2.48h1.1c.08 0 .13-.05.13-.12V9.88a.13.13 0 00-.12-.13H9.13zM5 9h1.86c.48 0 .88.4.88.88v1.05c0 .49-.4.88-.88.88H5.75V13H5V9zm.75 2.06h1.11c.07 0 .13-.06.13-.13V9.88a.12.12 0 00-.13-.12H5.75v1.3zM11.75 13h.75v-1.58h1.62v-.75H12.5v-.92h1.62V9h-2.37v4z",
      "fillOpacity": 0.9
    }
  }]
};
var filePdf = defineComponent({
  name: "FilePdfIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-file-pdf", className.value]);
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
  filePdf
};
//# sourceMappingURL=chunk-VVCLUJ7O.js.map
