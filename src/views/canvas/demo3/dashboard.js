//  监听数据变化
class Watcher {
  constructor (opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {};
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {};
    for (let key in opts.data) {
      this.setData(key);
    }
  }
  getBaseType (target) {
    const typeStr = Object.prototype.toString.apply(target);
    return typeStr.slice(8, -1);
  }
  setData (_key) {
    Object.defineProperty(this, _key, {
      get () {
        return this.$data[_key];
      },
      set (val) {
        const oldVal = this.$data[_key];
        if (oldVal === val) return val;
        this.$data[_key] = val;
        this.$watch[_key] && typeof this.$watch[_key] === 'function' && (this.$watch[_key].call(this, val, oldVal));
        return val;
      }
    });
  }
}

class Gauge {
  constructor (options) {
    this.properties = {
      canvas: null,
      percent: 0,
      score: 0,
      radius: 146,
      lineNums: 80,
      totalScore: 100,
      color: [[54, 63, 255], [134, 37, 168], [252, 3, 44]],
      options: 0.6
    };
    this.tirm = null;
    this.maxVal = 100;
    this.canvas = options.canvas;
    this._percent = options.percent || 0;
    this.colorLineNums = this.properties.score / this.maxVal * this.properties.lineNums;
    this.deg1 = (Math.PI * 12) / (9 * this.properties.lineNums);
    this.test = 240 / this.maxVal; //  最大值60 最大度数300
    return this;
  }
  //  绘制外环刻度
  drawKedy (ctx) {
    const { lineNums, radius } = this.properties;
    const { deg1 } = this;
    ctx.save();
    for (let i = 0; i <= lineNums; i++) {
      if (i % 10) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#464646';
        ctx.moveTo(radius, 0);
        ctx.lineTo(radius - 9, 0);
        ctx.stroke();
        ctx.rotate(deg1);
      } else {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#464646';
        ctx.moveTo(radius, 0);
        ctx.lineTo(radius - 14, 0);
        ctx.stroke();
        ctx.rotate(deg1);
      }
    }
    ctx.restore();
  }
  //  绘制内部环线
  drawNei (ctx) {
    const { radius } = this.properties;
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#212121';
    ctx.arc(0, 0, radius - 51, 0, 1.33 * Math.PI, false);
    ctx.stroke();
    ctx.restore();
  }
  //  绘制内部点
  drawPoin (ctx, colorLineNums) {
    const { lineNums } = this.properties;
    const { deg1 } = this;
    let color = '';
    ctx.save();
    for (let i = 0; i <= lineNums / 10; i++) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.arc(77, 0, 2, 0, 360, false);
      ctx.fillStyle = '#0A84FF';
      // ctx.fillStyle = color;
      ctx.fill();
      ctx.rotate(deg1 * 10);
    }
    ctx.restore();
  }
  //  绘制中心圆
  drawCli (ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#212121';
    ctx.arc(0, 0, 15, 0, 360, false);
    ctx.stroke();
    ctx.restore();
  }
  //  绘制指针
  drawClo (ctx, options) {
    const { credit, radius, test } = options;
    const deg = credit * test * Math.PI / 180;
    ctx.save();
    ctx.rotate(deg); //  旋转150°
    ctx.beginPath();
    ctx.moveTo(0, -4);
    ctx.bezierCurveTo(-4, -4, -4, 4, 0, 4);
    // ctx.lineTo(0, 4);
    ctx.lineTo(radius - 30, 2);
    ctx.bezierCurveTo(radius - 23, 2, radius - 23, -2, radius - 30, -2);
    // ctx.lineTo(radius - 23, -1);
    ctx.closePath();
    ctx.fillStyle = '#0A84FF';
    ctx.lineCap = 'round';
    ctx.fill();
    ctx.restore();
  }
  //  绘制当前进度
  drawCurrent (ctx, options) {
    const { colorLineNums, radius, deg1 } = options;
    ctx.save();
    for (let i = 0; i <= colorLineNums; i++) {
      if (i % 10) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#0A84FF';
        ctx.moveTo(radius, 0);
        ctx.lineTo(radius - 9, 0);
        ctx.stroke();
        ctx.rotate(deg1);
      } else {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#0A84FF';
        ctx.moveTo(radius, 0);
        ctx.lineTo(radius - 14, 0);
        ctx.stroke();
        ctx.rotate(deg1);
      }
    }
    ctx.restore();
  }
  //  绘制背景
  drawBg (ctx, options) {
    const { score, test, radius } = options;
    const deg = (score * test) * Math.PI / 180;
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 50;
    ctx.strokeStyle = 'rgba(10, 132, 255, .1)';
    ctx.arc(0, 0, radius - 25, 0, deg, false);
    ctx.stroke();
    ctx.restore();
  }
  //  绘制文案
  drawLabel (ctx) {
    ctx.save();
    ctx.rotate(210 * Math.PI / 180);
    ctx.fillStyle = '#b2b2b2';
    ctx.font = '14px Microsoft yahei';
    ctx.textAlign = 'center';
    ctx.fillText('功率', 0, 45);
    ctx.restore();
  }
  //  绘制圆角框
  drawRound (ctx) {
    const options = { x: -57, y: 60, w: 114, h: 50, r: 22.5 };
    const { x, y, w, h, r } = options;
    ctx.save();
    ctx.beginPath();
    ctx.rotate(210 * Math.PI / 180);
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arc(x + w - r, y + r, r, Math.PI * 3 / 2, Math.PI * 2);
    ctx.lineTo(x + w, y + h - r);
    ctx.arc(x + w - r, y + h - r, r, Math.PI * 2, Math.PI / 2);
    ctx.lineTo(x + r, y + h);
    ctx.arc(x + r, y + h - r, r, Math.PI / 2, Math.PI);
    ctx.lineTo(x, y + r);
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 3 / 2);
    // ctx.fill();
    ctx.closePath();
    ctx.strokeStyle = '#212121';
    ctx.stroke();
    ctx.restore();
  }
  //  内部文字
  drawText (ctx, process) {
    ctx.save();
    ctx.rotate(210 * Math.PI / 180);
    ctx.fillStyle = '#fff';
    ctx.font = '36px Microsoft yahei';
    ctx.textAlign = 'center';
    let width = ctx.measureText(process).width;
    ctx.fillText(process, -5, 98);
    ctx.fillStyle = '#fff';
    ctx.font = '14px Microsoft yahei';
    ctx.fillText('W', width / 2 + 5, 100);
    ctx.restore();
  }
  //  执行
  start (oldVal) {
    const that = this;
    const { score, radius, lineNums } = this.properties;
    const { deg1, test, maxVal } = this;
    const dotSpeed = 0.04;
    const textSpeed = Math.round(dotSpeed * 2 / deg1);
    let credit = oldVal || 0;
    let colorLineNums = 0;
    const updatas = function () {
      if (credit < score - textSpeed) {
        credit += textSpeed;
        colorLineNums = credit / maxVal * lineNums;
      } else if (credit >= score - textSpeed && credit < score) {
        credit += 1;
        colorLineNums = credit / maxVal * lineNums;
      } else if (score && score < credit) {
        credit -= 1;
        colorLineNums = credit / maxVal * lineNums;
      }
      that.render(credit, colorLineNums);
      window.requestAnimationFrame(updatas);
    };
    window.requestAnimationFrame(updatas);
  }
  render (oldVal, colorLineNums) {
    const that = this;
    const canvas = this.canvas;
    const cWidth = canvas.width;
    const cHeight = canvas.height;
    const ctx = canvas.getContext('2d');
    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    const ratio = devicePixelRatio / backingStoreRatio;
    const { score, radius, lineNums } = this.properties;
    const { deg1, test, maxVal } = this;
    const dotSpeed = 0.04;
    const textSpeed = Math.round(dotSpeed * 2 / deg1);
    const val = cHeight / ratio / 29.2;
    let credit = oldVal || 0;
    // console.log(cHeight, ratio, cHeight/ratio, cHeight/ratio/29.2)
    ctx.scale(ratio, ratio);
    //  设置画布
    ctx.restore();
    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.save();
    ctx.translate(cWidth / (2 * ratio), cHeight / (2 * ratio));
    ctx.rotate(150 * Math.PI / 180); //  旋转150°
    that.drawKedy(ctx);
    that.drawNei(ctx);
    that.drawPoin(ctx, colorLineNums);
    that.drawCli(ctx);
    that.drawLabel(ctx);
    that.drawRound(ctx);
    that.drawText(ctx, credit, val);
    that.drawClo(ctx, { credit, radius, test });
    that.drawCurrent(ctx, { colorLineNums, deg1, radius });
    that.drawBg(ctx, { radius, score: credit, test });

    // window.requestAnimationFrame(drawFrame)
  }
  //  监听器
  watchs () {
    const that = this;
    that.vm = new Watcher({
      data: {
        score: 0
      },
      watch: {
        score (newVal, oldVal) {
          // requestAnimationFrame(that.drawClo(ctx, { score: newVal, radius, test }))
          that.properties.score = newVal;
          that.start(oldVal);
        }
      }
    });
  }
  //  更新
  update (value) {
    this.vm.score = value;
  }
}

export default Gauge;
