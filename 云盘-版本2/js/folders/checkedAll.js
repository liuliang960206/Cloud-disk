checkedAll.onclick = function(){
    let ary = getChild(globalId);
    ary.forEach(item => {
        if(item.checked === 'true'){
            checkedAll.classList.toggle('checked');
        }
    });
}