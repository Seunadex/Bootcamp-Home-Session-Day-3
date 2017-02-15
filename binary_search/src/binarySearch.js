
const binarySearch = function binarySearch (){

Array.prototype.toTwenty = function () {
 for (var i = 1; i <= 20; i++){
   this.push(i);
 }
 return this;
};
Array.prototype.toForty = function () {
 for (var i = 2; i <= 40; i+=2){
   this.push(i);
 }
 return this;
};
Array.prototype.toOneThousand = function () {
 for (var i = 10; i <= 1000; i+=10){
   this.push(i);
 }
 return this;
};

Array.prototype.search = function binarySearch(randNumb) {
 var start = 0;
 var end = this.length -1;
 var answerObj = {count: 0, index: null, length: this.length};
 while(start <= end) {
   var mid = Math.floor((start + end) /2);
   if(this[end] === randNumb) {
     answerObj.index = end;
     return answerObj;
   }
   else {
      end = end - 1;
   }
  if(this[start] === randNumb) {
     answerObj.index = start;
     return answerObj;
   }
   else {
      start = start + 1;
   }
   if(this[mid] === randNumb) {
     answerObj.index = mid;
     return answerObj;
   }
   else if (this[mid] > randNumb) end = mid -1;
   else if (this[mid] < randNumb) start = mid + 1;
    answerObj.count ++;
 }
  answerObj.index = -1;
  return answerObj;
};
}



  

