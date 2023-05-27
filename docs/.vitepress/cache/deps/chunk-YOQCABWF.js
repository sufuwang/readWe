import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/logo-chrome-filled.js
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
      "d": "M14.02 4.43a.11.11 0 01-.1.18H8.31 8.3L8 4.58a3.4 3.4 0 00-3.3 2.56.11.11 0 01-.21.03L2.52 3.76a.11.11 0 010-.12 6.97 6.97 0 019-1.7c1.03.6 1.9 1.47 2.5 2.5z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M8 10.62a2.62 2.62 0 110-5.24 2.62 2.62 0 010 5.24z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M9.03 11.33a.11.11 0 00-.12-.05 3.4 3.4 0 01-4-1.84L2.1 4.57a.11.11 0 00-.2 0 7 7 0 005.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 000-.12z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M10.46 5.37h3.95c.05 0 .1.03.1.07a6.97 6.97 0 01-1.53 7.48A6.96 6.96 0 018.08 15a.11.11 0 01-.1-.17l2.81-4.88h.01a3.38 3.38 0 00-.42-4.38.11.11 0 01.08-.2z",
      "fillOpacity": 0.9
    }
  }]
};
var logoChromeFilled = defineComponent({
  name: "LogoChromeFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-chrome-filled", className.value]);
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
  logoChromeFilled
};
//# sourceMappingURL=chunk-YOQCABWF.js.map
