import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/logo-codepen.js
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
      "d": "M1.53 5.59a.5.5 0 00-.21.47v3.88a.5.5 0 00.21.47l6.19 4.23c.17.12.4.12.56 0l6.19-4.23a.5.5 0 00.21-.46v-3.9a.5.5 0 00-.21-.46L8.28 1.36a.5.5 0 00-.56 0L1.53 5.59zm.9.41l5.14-3.52v2.97L4.61 7.5 2.43 6zm6-.55V2.48L13.56 6l-2.18 1.49-2.97-2.04zM3.84 8L2.17 9.15v-2.3L3.85 8zm9.98-1.15v2.3L12.15 8l1.68-1.15zM11.4 8.5L13.57 10l-5.15 3.52v-2.97L11.4 8.5zm-3.82 2.04v2.97L2.43 10l2.18-1.49 2.96 2.04zM10.64 8L8 9.8 5.36 8 8 6.2 10.64 8z",
      "fillOpacity": 0.9
    }
  }]
};
var logoCodepen = defineComponent({
  name: "LogoCodepenIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-codepen", className.value]);
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
  logoCodepen
};
//# sourceMappingURL=chunk-LPZO345C.js.map
