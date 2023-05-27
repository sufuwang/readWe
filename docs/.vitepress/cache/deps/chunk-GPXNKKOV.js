import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/usergroup-clear.js
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
      "d": "M7.46 1.35a3.25 3.25 0 10-1.5 6.15v-1a2.25 2.25 0 11.87-4.34l.63-.81zM5.95 8.22c-1.93 0-3.76.44-5.4 1.22a.96.96 0 00-.55.87v2.19c0 .28.22.5.5.5h2.36v-1H1v-1.67c1.51-.7 3.18-1.1 4.95-1.1v-1z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M13.25 5.06a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0zm-1 0a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zM11 10.47a11.98 11.98 0 00-6 1.06v1.97h5.5v1h-6A.5.5 0 014 14v-2.48c0-.37.2-.72.54-.87A12.83 12.83 0 0111 9.47v1zM13.14 12.34l-1.45 1.45.7.71 1.45-1.45 1.45 1.45.71-.7-1.45-1.46L16 10.9l-.7-.71-1.46 1.45-1.44-1.45-.71.7 1.45 1.45z"
    }
  }]
};
var usergroupClear = defineComponent({
  name: "UsergroupClearIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-usergroup-clear", className.value]);
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
  usergroupClear
};
//# sourceMappingURL=chunk-GPXNKKOV.js.map
