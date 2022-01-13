var element=document.querySelectorAll('li.holidays')
for(var i=0; i<element.length; i++){
    if(i % 2===1){
        element[i].className ='yellow';
    }
        else if(i%2===0 ){
        element[i].className='green';
    }

}
