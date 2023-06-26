<template>
  <color-picker
    theme="light"
    :color="parentColor"
    :name="colorName"
    :layer="layerName"
    :sucker-hide="true"
    :sucker-canvas="suckerCanvas"
    :sucker-area="suckerArea"
    @changeColor="changeColor"
    @openSucker="openSucker"
  />
</template>

<script>
import { useTileStore } from "../../../stores/tile_store/index.js";
import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";

export default {
  components: {
    ColorPicker,
  },
  props: {
    parentColor: {
      type: String,
      required: true,
    },
    colorName: {
      type: String,
      required: true,
    },
    layerName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      //color: "#59c7f9",
      colorRgb: '',
      suckerCanvas: null,
      suckerArea: [],
      isSucking: false,
    };
  },
  methods: {
    changeColor(color) {
      const store = useTileStore();
      const { r, g, b, a } = color.rgba;
      this.colorRgb = `rgb(${r}, ${g}, ${b})`
      this.color = `rgba(${r}, ${g}, ${b}, ${a})`;

      function rgb2hex(rgb, rgba) {
        rgb = rgb.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        rgba = rgba.match(
          /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
        );

        var red = Math.round(rgba[1] * rgba[4] + rgb[1] * (1 - rgba[4]));
        var blue = Math.round(rgba[2] * rgba[4] + rgb[2] * (1 - rgba[4]));
        var green = Math.round(rgba[3] * rgba[4] + rgb[3] * (1 - rgba[4]));
        return rgba && rgba.length === 5
          ? "#" +
              ("0" + red.toString(16)).slice(-2) +
              ("0" + blue.toString(16)).slice(-2) +
              ("0" + green.toString(16)).slice(-2)
          : "";
      }

      var hex = rgb2hex(this.colorRgb, this.color)
      var opacity = a
      //console.log(hex, "hexcolor")
      store.updateSettlementColor(hex, opacity, this.colorName, this.layerName);
    },
    openSucker(isOpen) {
      if (isOpen) {
        // ... canvas be created
        // this.suckerCanvas = canvas
        // this.suckerArea = [x1, y1, x2, y2]
      } else {
        // this.suckerCanvas && this.suckerCanvas.remove
      }
    },
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

body {
  margin: 0;
}
.page {
  height: fit-content;
  .bg {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .title {
      color: #fff;
      font-size: 48px;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
    }
    .cover {
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-width: 100%;
    }
  }
  .github {
    position: fixed;
    right: 0;
    top: 0;
    width: 200px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
    background: #a00;
    text-align: center;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
    transform: rotate(45deg) translateX(60px);
    a {
      display: block;
      text-decoration: none;
      color: #fff;
    }
  }
  .switch {
    position: fixed;
    left: 20%;
    top: -100px;
    width: 2px;
    height: 300px;
    background: #ddd;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      left: -10px;
      bottom: -20px;
      width: 22px;
      height: 22px;
      border: 2px solid #ddd;
      border-radius: 50%;
      box-sizing: border-box;
    }
  }
}
@keyframes line {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}
.anim-pull {
  animation: line 0.6s;
}

.hu-color-picker {
  padding: 10px;
  min-width: 220px;
  background: #1d2024;
  border-radius: 4px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.16);
  z-index: 1;
}
.hu-color-picker.light {
  background: #f7f8f9;
}
.hu-color-picker.light .color-show .sucker {
  background: #eceef0;
}
.hu-color-picker.light .color-type .name {
  background: #e7e8e9;
}
.hu-color-picker.light .color-type .value {
  color: #666;
  background: #eceef0;
}
.hu-color-picker.light .colors.history {
  border-top: 1px solid #eee;
}
.hu-color-picker canvas {
  vertical-align: top;
}
.hu-color-picker .color-set {
  display: flex;
}
.hu-color-picker .color-show {
  margin-top: 8px;
  display: flex;
}
.saturation {
  position: relative;
  cursor: pointer;
}
.saturation .slide {
  position: absolute;
  left: 100px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
.color-alpha {
  position: relative;
  margin-left: 8px;
  cursor: pointer;
}
.color-alpha .slide {
  position: absolute;
  left: 0;
  top: 100px;
  width: 100%;
  height: 4px;
  background: #fff;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
.sucker {
  width: 30px;
  fill: #9099a4;
  background: #2e333a;
  cursor: pointer;
  transition: all 0.3s;
}
.sucker.active,
.sucker:hover {
  fill: #1593ff;
}
.hue {
  position: relative;
  margin-left: 8px;
  cursor: pointer;
}
.hue .slide {
  position: absolute;
  left: 0;
  top: 100px;
  width: 100%;
  height: 4px;
  background: #fff;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
.colors {
  padding: 0;
  margin: 0;
}
.colors.history {
  margin-top: 10px;
  border-top: 1px solid #2e333a;
}
.colors .item {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 10px 0 0 10px;
  border-radius: 3px;
  box-sizing: border-box;
  vertical-align: top;
  display: inline-block;
  transition: all 0.1s;
  cursor: pointer;
}
.colors .item:nth-child(8n + 1) {
  margin-left: 0;
}
.colors .item:hover {
  transform: scale(1.4);
}
.colors .item .alpha {
  height: 100%;
  border-radius: 4px;
}
.colors .item .color {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
}
.color-type {
  display: flex;
  margin-top: 8px;
  font-size: 12px;
}
.color-type .name {
  width: 60px;
  height: 30px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  background: #252930;
}
.color-type .value {
  flex: 1;
  height: 30px;
  min-width: 100px;
  padding: 0 12px;
  border: 0;
  color: #fff;
  background: #2e333a;
  box-sizing: border-box;
}
</style>
