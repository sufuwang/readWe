import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/call.js
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
      "d": "M14 11.06c0 .6-.16 1.24-.52 1.76l-.12.16c-.24.35-.58.6-.98.75-.28.1-.46.14-.91.2-1.95.17-4.08-.74-6.18-2.6A10.2 10.2 0 012.32 6.9 6.45 6.45 0 012 5c0-.7.16-1.32.48-1.78.3-.42.88-.76 1.75-1.1a1 1 0 011.17.37l1.67 2.35a1 1 0 01-.1 1.27l-.21.22-.26.25c-.07.06-.17.2-.17.2-.02.3.3.93 1.26 1.9l.28.27c.88.81 1.12.88 1.39.69l.09-.07.87-.62a1 1 0 011.04-.06l.24.13c1.66.89 2.42 1.42 2.5 1.97v.08zm-1 .01c0 .09-.11-.04-.36-.22-.35-.25-.89-.57-1.61-.96l-.24-.12-.79.54-.02.01c-.86.68-1.6.49-3.1-.93-1.14-1.18-1.6-2.05-1.55-2.7.03-.35.27-.67.5-.86l.3-.29.12-.13-1.67-2.36c-.7.27-1.13.53-1.29.74C3.11 4.06 3 4.47 3 5c0 .48.1 1.03.28 1.61a9.2 9.2 0 002.67 3.98c1.91 1.7 3.79 2.5 5.41 2.35l.26-.04c.18-.02.28-.05.4-.1.23-.08.4-.2.54-.4.27-.33.4-.75.44-1.15v-.17z",
      "fillOpacity": 0.9
    }
  }]
};
var call = defineComponent({
  name: "CallIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-call", className.value]);
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
  call
};
//# sourceMappingURL=chunk-AZD3YDO2.js.map
