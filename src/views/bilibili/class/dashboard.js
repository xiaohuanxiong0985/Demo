//  监听数据变化
class Watcher {
  constructor(opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {};
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {};
    for(let key in opts.data) {
      this.setData(key)
    }
  }
  getBaseType(target) {
    const typeStr = Object.prototype.toString.apply(target);
    return typeStr.slice(8, -1);
  }
  setData(_key) {
    Object.defineProperty(this,_key, {
      get() {
        return this.$data[_key];
      },
      set(val) {
        const oldVal = this.$data[_key];
        if (oldVal === val) return val;
        this.$data[_key] = val;
        this.$watch[_key] && typeof  this.$watch[_key] === 'function' && (this.$watch[_key].call(this, val, oldVal));
        return val;
      }
    })
  }
}

//  绘制圆点
class Dot {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  }
}

//  内环动点
class innerDot {

}

class Gauge {
  constructor(options) {
    this.properties = {
      canvas: null,
      percent: 0,
      score: 0,
      radius: 146,
      lineNums: 80,
      totalScore: 100,
      color: [[54, 63, 255], [134, 37, 168],[252, 3, 44]],
      options: 0.6,
      colorLineNums: 25,
    }
    this.mergeOptions(this.properties, options);
    this.canvas = options.canvas;
    this._percent = options.percent || 0;
    this.colorLineNums = this.properties.score / 100 * this.properties.lineNums;
    this.deg1 = (Math.PI * 12) / (9 * this.properties.lineNums);
    return this;
  }
  mergeOptions(defaultOpt, options) {
    const list = Object.keys(defaultOpt);
    list.forEach(v => {
      this[v] = typeof options[v] === 'undefined' ? defaultOpt[v] : options[v];
    })
  }
  gradientColoArr() {
    let colorArr = [],
        colorObj1 = this.getRGBDiff(this.properties.color[0], this.properties.color[2]),
        colorObj2 = this.getRGBDiff(this.properties.color[1], this.properties.color[2])
        for(let i = 0; i < this.colorLineNums; i++) {
          // [sR, sG, sB, ]
        }
  }
  getRGBDiff(r1, r2) {
    const obj = {
      sR: (r2[0] - r1[0]) / 25,
      sG: (r2[1] - r1[1]) / 25,
      Sb: (r2[2] - r1[2]) / 25,
      startR: r1[0],
      startG: r1[1],
      startB: r1[2],
    }
    return obj;
  }
  //  内部文字
  drawText(ctx, process) {
    ctx.save();
    ctx.rotate(210 * Math.PI / 180);
    ctx.fillStyle = '#000';
    ctx.font = '44px Microsoft yahei';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(process, 0, 0);
    let width = ctx.measureText(process).width;
    ctx.fillStyle = '#000';
    ctx.font = '20px Microsoft yahei';
    ctx.fillText('分', width / 2 + 10, 20);
    ctx.restore();
  }
  //  执行
  render(oldVal) {
    const that = this,
          canvas = this.canvas,
          ctx = canvas.getContext('2d'),
          devicePixelRatio = window.devicePixelRatio || 1,
          backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1,
          ratio = devicePixelRatio / backingStoreRatio,
          cWidth = canvas.width,
          cHeight = canvas.height,
          score = this.properties.score,
          radius = this.properties.radius,
          deg1 = this.deg1;
    const dot = new Dot(),
          dot2 = new innerDot(),
          dotSpeed = 0.04,
          textSpeed = Math.round(dotSpeed * 2 / deg1),
          angle = 20,
          innerAngle = 0;
    let credit = oldVal || 0,
        colorIndex = 0,
        colorSpeed = dotSpeed / deg1;
    // console.log(devicePixelRatio / backingStoreRatio, cWidth);
    //  静态样式
    ctx.scale(ratio, ratio);

    //  设置画布
    ctx.save();
    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.translate(cWidth / (2 * ratio), cHeight/ (2 * ratio));
    ctx.rotate(150 * Math.PI / 180);  //  旋转150°

    // //  绘制外环刻度(长刻度)
    ctx.save();
    for(let i = 0; i <= that.properties.lineNums; i++) {
      if (i % 10 ) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#464646';
        ctx.moveTo(146, 0);
        ctx.lineTo(137, 0);
        ctx.stroke();
        ctx.rotate(deg1);
      } else {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#464646';
        ctx.moveTo(146, 0);
        ctx.lineTo(132, 0);
        ctx.stroke();
        ctx.rotate(deg1);
      }
    }
    ctx.restore();

    //  绘制内部环线
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#212121';
    ctx.arc(0, 0, 95, 0, 1.33*Math.PI, false);
    ctx.stroke();
    ctx.restore();

    //  绘制内部点
    ctx.save();
    for(let i = 0; i <= that.properties.lineNums / 10; i++) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.arc(77, 0, 2, 0, 360, false);
      ctx.fillStyle = '#3355ff';
      ctx.fill();
      ctx.rotate(deg1 * 10);
    }
    ctx.restore();

    //  绘制中心圆点
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#212121';
    ctx.arc(0, 0, 15, 0, 360, false);
    ctx.stroke();
    ctx.restore();
    //  自执行动画
    (function drawFrame() {
      // //  内环文字
      // if (credit < score - textSpeed) {
      //   credit += textSpeed;
      // } else if (credit >= score - textSpeed && credit < score) {
      //   credit += 1;
      // } else if (score && score < credit) {
      //   credit -= 1;
      // }
      //



      //  刷新
      if (colorIndex < score / 2) {
        colorIndex += colorSpeed;
      }
      // window.requestAnimationFrame(drawFrame);
      ctx.restore();
    })()
  }
  start() {
    const that = this;
    that.render()
    that.vm = new Watcher({
      data: {
        score: 0
      },
      watch: {
        score(newVal, oldVal) {
          that.properties.score = newVal;
          that.render(oldVal)
        }
      }
    })
  }
  update(value) {
    this.vm.score = value;
    // vm.score = value
    // console.log(vm.$data)

    // console.log(this.render().test())
    // window.requestAnimationFrame(this.render);
  }
}

export default Gauge