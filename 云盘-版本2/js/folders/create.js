let { getChild } = tools;
create.onclick = function () {
    const div = document.createElement('div');
    div.className = 'file-item';
    const img = document.createElement('img');
    img.src = 'img/folder-b.png';
    const input = document.createElement('input');
    input.className = 'editor';
    input.value = '新建文件夹';
    const is = document.createElement('i');
    folders.append(div);
    div.append(img, input, is);
    input.style.display = 'block';
    input.select(); //点击按钮时自动选中input框里的内容

    //失焦时，文件夹重命名
    input.onblur = function () {
        let val = this.value;
        let ary = getChild(globalId);
        // 检测数组中每一项的title是否和input的内容重复，如果重复，返回true，不重复，返回false
        let res = ary.some(item =>{ return item.title === val});
        let id = +new Date;

        if(!res){
            //没有重命名
            data[id] = {
                title:val,
                id,
                pid:globalId,
                checked:false
            }
        }else{
            //重命名
            let val2 = val;
            let num = 0;
            while(res){
                val2 = val2.replace(/\(\d+\)/,'') + `(${++num})`;
                res = ary.some(item=>item.title === val2);
            }
            // console.log(v2);
            data[id] = {
                title:val2,
                id,
                pid:globalId,
                checked:false
            }
        }
        render(globalId);
        fullTipBox.style.top = 0 + 'px';
        startMove({
            obj:fullTipBox,
            json:{
                top:0
            },
            durtion:500,
            fx:'linear',
            cb(){
                setTimeout(()=>{
                    startMove({
                        obj:fullTipBox,
                        json:{
                            top:-40
                        },
                        durtion:300
                    })
                })
            }
        });
    }
}

    

// document.onclick = function(){
//     input.style.display = 'none';
//     const span = document.createElement('span');
//     span.className = 'folder-name';
//     span.innerHTML = '新建文件夹';
// }




