export class BasicUtilities {
    constructor(){
    }
    getMin(li){
        let min = li[0];
        for (let ele of li) {
            if(ele<min) {
                min = ele
            }
        }
        return min
    }

    getMax(li){
        let max = li[0];
        for (let ele of li) {
            if(ele>max) {
                max = ele
            }
        }
        return max
    }

    limitVal(min,max,val){
        let res = val
        if(val<min){
            res = min;
        } else if (val>max) {
            res = max
        }

        return res;
    }

    getIndex2D(li,i,j,def=0){
        let res = def;
        if(li[i]) {
            if(li[i][j]){
                res = li[i][j]
            }
        }
        return res;
    }

    map(val,inMin,inMax,opMin,opMax){
        const m0 = (val-inMin)/(inMax-inMin);
        const res = opMin + (opMax-opMin)*m0;
        return res
    }

    lt2xy(left,top,W,H) {
        const x = left;
        const y = H - top;

        return { x:x, y:y };
    }

    xy2lt(x,y,W,H) {
        const left = x;
        const top = H - y;
        return {left:left, top:top}
    }

    getRandomEle(li){
        const n = li.length;
        const ind = Math.floor(Math.random()*n);
        return li[ind];
    }
}