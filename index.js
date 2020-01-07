breakOut(array, changeValue, stopValue){
  array.some(it=>
if(it==stopValue){ break;}
it = changeValue;
  )
}
