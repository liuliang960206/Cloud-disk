console.log(data);
function render(id) {
    folders.innerHTML = ''
    globalId = id * 1; //把传进来的id存起来
    let { getChild } = tools;
    let ary = getChild(globalId);
    // 如果有子级菜单（没有为null=>false）就渲染页面
    if (ary) {
        ary.forEach((item, i) => {
            // 初始化数据（pid=0的三项)
            const div = document.createElement('div');
            div.className = 'file-item';
            const img = document.createElement('img');
            img.src = 'img/folder-b.png';
            const span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML = item.title;
            const input = document.createElement('input');
            input.className = 'editor';
            const is = document.createElement('i');
            folders.append(div);
            div.append(img, span, input, is);

            /* 
                双击图片进入下一级菜单（即pid=2）
                把每一项的id传递进getChild，返回的数组即是下一级菜单的数据（数组）
                1. 如果数组里的数据length不为0（true），即再次渲染
                2. 如果数组里的数据length为0（false），即没有数据
                    A. 显示无内容图片,
                    B. 清空页面上的原有数据
            */
            img.ondblclick = function () {
                let ary2 = getChild(item.id);
                if (ary2.length) {
                    render(item.id);
                } else {
                    folders.innerHTML = ''
                    fEmpty.style.display = 'block';
                }
            }

        })
    }

}
render(0);


