class GetRand {
  getRand (obj) {
    this.obj = obj;
    return this.init();
  }
  sum (key) {
    let self = this;
    let obj = this.obj;
    let sum = 0;
    for (let i in obj) {
      sum += obj[i][key]
    }
    return sum;
  }
  init () {
    let result = null;
    let self = this;
    let obj = this.obj;
    let sum = this.sum('prob');
    for (let i in obj) {
        let rand = parseInt(Math.random() * sum);
        if (rand <= obj[i].prob) {
          result = obj[i];
          console.log(result)
          break;
        } else {
          sum -= obj[i].prob;
        }
    }
    return result;
  }
}
export default GetRand
