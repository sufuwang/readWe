import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/file-icon.js
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
      "d": "M3.5 2v12h7.73v1H3.5c-.48 0-1-.34-1-.92V1.92c0-.58.52-.92 1-.92h5.37a1 1 0 01.71.3L13.21 5a1 1 0 01.29.7v1.8h-1V6.01h-4V2h-5zm6 3.01h2.32L9.5 2.65V5z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M4.48 9h2v.8h-.6v2.4h.6v.8h-2v-.8h.6V9.8h-.6V9zM9 9H7.8a.8.8 0 00-.8.8v2.4c0 .44.35.8.8.8H9v-.8H7.8V9.8H9V9zM13.8 9.8V13H13V9h1.74c.44 0 .8.36.8.8V13h-.8V9.8h-.94zM9.5 9.8v2.4c0 .44.36.8.8.8h1.2a.8.8 0 00.79-.8V9.8a.8.8 0 00-.8-.79h-1.2a.8.8 0 00-.79.8zm.8 2.4V9.8h1.2v2.4h-1.2z",
      "fillOpacity": 0.9
    }
  }]
};
var fileIcon = defineComponent({
  name: "FileIconIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-file-icon", className.value]);
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
  fileIcon
};
//# sourceMappingURL=chunk-ABJRXGBA.js.map
