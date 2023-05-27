import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/file-unknown.js
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
      "d": "M3.5 2v12H9v1H3.5c-.48 0-1-.34-1-.92V1.92c0-.58.52-.92 1-.92h5.29a1 1 0 01.71.3L13.13 5a1 1 0 01.29.7v1.8h-1V6.01h-4V2H3.5zm5.92.65V5h2.32L9.42 2.65z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M11.42 8.42c-1.07 0-2 .82-2 1.9h1c0-.46.42-.9 1-.9.58 0 1 .44 1 .9 0 .3-.28.66-.72.83-.44.17-.78.6-.78 1.11v.66h1v-.66c0-.07.04-.14.14-.18.66-.25 1.36-.89 1.36-1.76 0-1.08-.93-1.9-2-1.9zM11.42 13.8a.6.6 0 100 1.2.6.6 0 000-1.2z",
      "fillOpacity": 0.9
    }
  }]
};
var fileUnknown = defineComponent({
  name: "FileUnknownIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-file-unknown", className.value]);
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
  fileUnknown
};
//# sourceMappingURL=chunk-MVBPTJ2N.js.map
