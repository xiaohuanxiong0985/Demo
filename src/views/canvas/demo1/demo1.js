/**
 *  传入参数options<br>
 *  option.color为颜色.值为rgb<br>
 *  option.number 建议最大值为500,最小200
 */
export function demo1 (option) {
  const color = option && option.color ? option.color : '0, 0, 0';
  let number = option && option.number ? option.number : 300;
  if (number > 500) number = 500;
  if (number < 100) number = 100;

  const canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  //  获取canvas大小信息 -> 全屏
  resize();
  window.onresize = resize;
  function resize () {
    canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }
  //
  const RAF = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  //  定于鼠标移动时,获取鼠标坐标
  let warea = { x: null, y: null, max: 20000 };
  window.onmousemove = function (e) {
    e = e || window.event;
    warea.x = e.clientX;
    warea.y = e.clientY;
  };
  window.onmouseout = function (e) {
    warea.x = null;
    warea.y = null;
  };

  //  首先定义分散在各个位置的粒子对象
  let dots = [];
  for (let j = 0; j < number; j++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const xa = Math.random() * 2 - 1;
    const ya = Math.random() * 2 - 1;
    dots.push({
      x, y, xa, ya, max: 6000
    });
  }

  //  使用canvas动画函数来更新
  function animate () {
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  //  每一帧的循环
  function animate () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //  将鼠标坐标添加进去,产生一个用于对比距离的点数组
    const ndots = [warea].concat(dots);
    //  粒子位移效果
    dots.forEach(dot => {
      //  粒子移动
      dot.x += dot.xa;
      dot.y += dot.ya;
      //  遇到边界加速度反向
      dot.xa *= (dot.x > canvas.width || dot.x < 0) ? -1 : 1;
      dot.ya *= (dot.y > canvas.height || dot.y < 0) ? -1 : 1;
      //  绘制点
      ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);
      //  循环比对粒子间的距离
      for (let i = 0; i < ndots.length; i++) {
        const d2 = ndots[i];
        if (dot === d2 || d2.x === null || d2.y === null) continue;
        const xc = dot.x - d2.x;
        const yc = dot.y - d2.y;
        //  粒子间距离
        const dis = xc * xc + yc * yc;
        //  距离比
        let ratio;
        //  若两粒子之间距离小于对象的max值,则在两粒子间画线
        if (dis < d2.max) {
          // 如果是鼠标，则让粒子向鼠标的位置移动
          if (d2 === warea && dis > (d2.max / 2)) {
            dot.x -= xc * 0.03;
            dot.y -= yc * 0.03;
          }
          //  计算距离比
          ratio = (d2.max - dis) / d2.max;
          //  画线
          ctx.beginPath();
          ctx.lineWidth = ratio / 2;
          ctx.strokeStyle = 'rgba(' + color + ',' + (ratio + 0.2) + ')';
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(d2.x, d2.y);
          ctx.stroke();
        }
      }
      // 将已经计算过的粒子从数组中删除
      ndots.splice(ndots.indexOf(dot), 1);
    });
    RAF(animate);
  }
}
