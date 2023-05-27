import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/dashboard.js
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
    "tag": "g",
    "attrs": {
      "fill": "currentColor",
      "opacity": 0.9,
      "fillOpacity": 0.9
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M13.87 4.9l-4.5 4.5-.7-.7 4.5-4.5.7.7z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M8.02 11.05a1 1 0 110-2 1 1 0 010 2zm0 1a2 2 0 100-4 2 2 0 000 4z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M8 3.5a6.5 6.5 0 00-5.34 10.21l-.82.58a7.5 7.5 0 019.63-10.93l-.46.88A6.47 6.47 0 008 3.5zm6.5 6.5c0-1.08-.26-2.1-.73-3l.88-.46a7.47 7.47 0 01-.5 7.75l-.81-.58A6.47 6.47 0 0014.5 10z"
      }
    }]
  }]
};
var dashboard = defineComponent({
  name: "DashboardIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-dashboard", className.value]);
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
  dashboard
};
//# sourceMappingURL=chunk-ZQK7HZU3.js.map
