import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/browse-off.js
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
      "d": "M10.77 11.98l1.38 1.37.7-.7-9.7-9.7-.7.7 1.2 1.21a7.9 7.9 0 00-2.53 2.91L1 8l.12.23a7.72 7.72 0 009.65 3.75zM10 11.2A6.67 6.67 0 012.11 8c.56-1 1.34-1.83 2.26-2.43l1.08 1.09a2.88 2.88 0 003.9 3.9l.64.64zM6.21 7.42l2.37 2.37a1.88 1.88 0 01-2.37-2.37zM14.88 8.23L15 8l-.12-.23a7.73 7.73 0 00-9.35-3.86l.8.8A6.7 6.7 0 0113.9 8a6.87 6.87 0 01-2.02 2.26l.7.7a7.9 7.9 0 002.3-2.73z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M10.88 8c0 .37-.07.73-.2 1.06l-.82-.82.02-.24a1.88 1.88 0 00-2.12-1.86l-.82-.82A2.87 2.87 0 0110.88 8z",
      "fillOpacity": 0.9
    }
  }]
};
var browseOff = defineComponent({
  name: "BrowseOffIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-browse-off", className.value]);
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
  browseOff
};
//# sourceMappingURL=chunk-OFICHGLS.js.map
