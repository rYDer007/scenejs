import set from "./set";

/**
 * Make a fade in effect.
 * @memberof Scene.presets
 * @func fadeIn
 * @param {AnimatorOptions} options
 * @param {number} [options.from = 0] start opacity
 * @param {number}[options.to = 1] end opacity
 * @param {number} options.duration animation's duration
 * @example
// import {presets} from "scenejs";
// presets.fadeIn({duration: 2});
Scene.presets.fadeIn({duration: 2});
// Same
new SceneItem({
	"0%": {
		opacity: 0,
	},
	"100%": {
		opacity: 1,
	}
}, {
	duration: 2,
});
 */
export default function fadeIn(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? 0 : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? 1 : _ref$to;
  return set("opacity", [from, to], arguments[0]);
}