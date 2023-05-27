import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/fork.js
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
      "d": "M6 2.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-1v2h3a1 1 0 011 1v1h1c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5h1V9h-7v1h1c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5h1V9a1 1 0 011-1h3V6h-1a.5.5 0 01-.5-.5v-3zM7 5h2V3H7v2zm-4 6v2h2v-2H3zm8 0v2h2v-2h-2z",
      "fillOpacity": 0.9
    }
  }]
};
var fork = defineComponent({
  name: "ForkIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-fork", className.value]);
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
  fork
};
//# sourceMappingURL=chunk-OKLCUETF.js.map
