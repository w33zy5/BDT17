var calculator = {
	
	tambah : function(a,b){
		return a+b;
	},
	kurang : function(a,b){
		return a-b;
	},
	kali : function(a,b){
		return a*b;
	},
	bagi : function(a,b){
		return a/b;
	}
	samadengan : function(a,b){
	//jika lebih besar a
		if(a>b){
			return a + ' lebih besar dari ' + b;
		}
		elseif(b<a){
			return b + ' lebih besar dari ' + a;
		}
		elseif(a==b){
			return a + ' sama dengan ' + b;
		}
	}
}

console.log(calculator.tambah(1,2));
console.log(calculator.kurang(2,3));
console.log(calculator.kali(4,5));
console.log(calculator.bagi(6,7));
