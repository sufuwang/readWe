import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/tools.js
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
      "d": "M9.75 8.25l.56.15c1 .28 2.09.03 2.85-.73.67-.67.94-1.6.8-2.5l-1.05 1.05a1.5 1.5 0 01-2.12 0l-.43-.42a1.5 1.5 0 010-2.12l1.06-1.06a2.9 2.9 0 00-2.5.8c-.76.77-1.01 1.85-.74 2.85l.16.57-5.8 5.8 1.4 1.41 5.81-5.8zm2.5-6.45c.32.1.64.26.94.46l-2.12 2.12a.5.5 0 000 .71l.42.43c.2.2.52.2.71 0l2.12-2.13a3.92 3.92 0 01-.46 4.98 3.91 3.91 0 01-3.81 1l-5.4 5.4a1 1 0 01-1.41 0l-1.42-1.42a1 1 0 010-1.42l5.4-5.39a3.91 3.91 0 01.99-3.82 3.92 3.92 0 014.03-.92z",
      "fillOpacity": 0.9
    }
  }]
};
var tools = defineComponent({
  name: "ToolsIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-tools", className.value]);
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
  tools
};
//# sourceMappingURL=chunk-ETAG7ACD.js.map
