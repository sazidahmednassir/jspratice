class BANK{

    roi(){
        return 0;
    }
}

class AXIS extends BANK{

    roi(){
        return 10.5;
    }
}


class SBI extends BANK{

    roi(){
        return 12.5;
    }
}

axis=new AXIS();
console.log(axis.roi());


sbi=new SBI();
console.log(sbi.roi());