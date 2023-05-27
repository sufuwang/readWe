import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/sound.js
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
      "d": "M4 11l4.24 2.55a.5.5 0 00.76-.43V2.88a.5.5 0 00-.76-.43L4 5H2.1a.6.6 0 00-.6.6v4.8c0 .33.27.6.6.6H4zm1-5.43l3-1.8v8.46l-3-1.8V5.57zM4 10H2.5V6H4v4zM13.52 5.73a6 6 0 00-1.4-1.95l.68-.73c.7.65 1.25 1.42 1.63 2.27a6.6 6.6 0 01-1.63 7.63l-.68-.73a6 6 0 001.4-1.95 5.6 5.6 0 000-4.54z",
      "fillOpacity": 0.9
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M11.5 8c0-.87-.36-1.75-1.07-2.45l.7-.72c.9.88 1.37 2.02 1.37 3.17 0 1.16-.48 2.29-1.38 3.17l-.7-.72A3.44 3.44 0 0011.5 8z",
      "fillOpacity": 0.9
    }
  }]
};
var sound = defineComponent({
  name: "SoundIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-sound", className.value]);
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
  sound
};
//# sourceMappingURL=chunk-NXMJRE2S.js.map
