import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/mirror.js
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
      "d": "M7.5 1h1v14h-1V1zM14.72 12.44a.5.5 0 01-.35.54c-.07.02-.17.02-.38.02h-3.34l-.27-.01a.5.5 0 01-.37-.37l-.01-.27V5c0-.53 0-.8.04-.89a.5.5 0 01.8-.17c.07.07.18.3.4.8l3.34 7.34c.09.19.13.28.14.36zM11 12h2.45L11 6.62V12zM1.63 12.98c.07.02.17.02.38.02h3.34l.27-.01a.5.5 0 00.37-.37l.01-.27V5c0-.53 0-.8-.04-.89a.5.5 0 00-.8-.17c-.07.07-.18.3-.4.8l-3.34 7.34c-.09.19-.13.28-.14.36a.5.5 0 00.35.54zM5 6.62V12H2.55L5 6.62z",
      "fillOpacity": 0.9
    }
  }]
};
var mirror = defineComponent({
  name: "MirrorIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-mirror", className.value]);
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
  mirror
};
//# sourceMappingURL=chunk-VMYJKNH3.js.map
