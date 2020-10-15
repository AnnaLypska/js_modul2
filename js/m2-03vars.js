function findLongestWord (string = "") {
    let LongestWord ='';
    let word = string.split(' ');
     
     for (let i =0; i<word.length; i+=1){
     if (word[i].length>LongestWord.length) LongestWord = word[i]
     }
     return LongestWord
     
   }
   
   console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
    'jumped'
   
   console.log(findLongestWord('Google do a roll'));
    'Google'
   
   console.log(findLongestWord('May the force be with you'));
    'force'


    //Поиск самого длинного слово в строке с пробелами
//Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.