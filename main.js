//let val = ['usa','azerManad','avstalUsa','grivna','bitcoin']

let currencyFirst = prompt('Введите валюту которая у вас есть','') 
let figure = +prompt('Сумму в цыфрах (число)','')   
let currencySecond = prompt('Ту валюту на которую хотите заменить','') 


 if(currencyFirst == 'usa' && currencySecond == 'azerManad'){
     alert(figure * 1.17) 
    prompt('Хочешь еще обменять деньги')
 }else if(currencyFirst == 'azerManad' && currencySecond == 'usa'){
    alert(figure * 0.59) 
    alert('Хочешь еще обменять деньги')
}else if(currencyFirst == 'usa' && currencySecond == 'azerManad'){
    alert(figure * 1.34) 
   alert('Хочешь еще обменять деньги')
} else if(currencyFirst == 'avstalUsa' && currencySecond == 'usa'){
   alert(figure * 0.79) 
   alert('Хочешь еще обменять деньги')
}else if(currencyFirst == 'usa' && currencySecond == 'grivna'){
    alert(figure * 26.3) 
   alert('Хочешь еще обменять деньги')
} else if(currencyFirst == 'grivna' && currencySecond == 'usa'){
   alert(figure * 0.038) 
   alert('Хочешь еще обменять деньги')
}else if(currencyFirst == 'usa' && currencySecond == 'bitcoin'){
    alert(figure * 0.000016) 
   alert('Хочешь еще обменять деньги')
} else if(currencyFirst == 'bitcoin' && currencySecond == 'usa'){
   alert(figure * 64194.1) 
   alert('Хочешь еще обменять деньги')
} else if (currencyFirst == 'avstalUsa' && currencySecond == 'grivna'){
    alert(figure * 19.63) 
    alert('Хочешь еще обменять деньги')
}else if( currencyFirst == 'grivna' && currencySecond == 'avstalUsa'){
        alert(figure * 0.051) 
        alert('Хочешь еще обменять деньги')
}else if( currencyFirst == 'azerManad' && currencySecond == 'avstalUsa'){
        alert(figure * 0.79) 
        alert('Хочешь еще обменять деньги')
}else if( currencyFirst == 'avstalUsa' && currencySecond == 'azerManad'){
        alert(figure * 1.27) 
        alert('Хочешь еще обменять деньги')
}else if( currencyFirst == 'bitcoin' && currencySecond == 'avstalUsa'){
        alert(figure * 84671.56) 
        alert('Хочешь еще обменять деньги')
}else if( currencyFirst == 'avstalUsa' && currencySecond == 'bitcoin'){
    alert(figure * 0.000012) 
    alert('Хочешь еще обменять деньги')
}else if( currencyFirst == 'azerManad' && currencySecond == 'bitcoin'){
    alert(figure * 0.000012) 
    alert('Хочешь еще обменять деньги')
}else if( currencyFirst == 'bitcoin' && currencySecond == 'azerManad'){
    alert(figure * 107312.16) 
    alert('Хочешь еще обменять деньги')
}else if( currencyFirst == 'azerManad' && currencySecond == 'grivna'){
    alert(figure * 15.45) 
    alert('Хочешь еще обменять деньги')
}else if( currencyFirst == 'grivna' && currencySecond == 'azerManad'){
alert(figure * 0.065) 
alert('Хочешь еще обменять деньги')
}else if( currencyFirst == 'bitcoin' && currencySecond == 'grivna'){
    alert(figure * 1660359) 
    alert('Хочешь еще обменять деньги')
}else if( currencyFirst == 'grivna' && currencySecond == 'bitcoin'){
alert(figure * 0.00000062) 
alert('Хочешь еще обменять деньги')
}else{
    alert('Ты что-то не так вводишь')
 }
