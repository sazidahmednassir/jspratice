class SHAPE{
    draw(){
        return "I am generic shape";
    }
}

class SQUARE extends SHAPE{
    draw(){
        return "I am sqaure shape"
    }
}

class CIRCLE extends SHAPE{
    draw(){
        return "I am sqaure circle"
    }
}

let sh=new SHAPE()
console.log(sh.draw());

let sq=new SQUARE()
console.log(sq.draw());

let cr=new CIRCLE()
console.log(cr.draw());