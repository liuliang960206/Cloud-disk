console.log(data)
class Folders {
    constructor(data, id) {
        this.data = data;
        this.folders = document.querySelector('.folders');
        this.render(id);
        this.imgEvent();
    }
    getChild(pid) {
        if (!data[pid]) return null;
        let arr = [];
        for (let attr in this.data) {
            if (this.data[attr].pid === pid) {
                arr.push(this.data[attr]);
            };
        };
        return arr
    }
    render(id) {
        // 渲染页面（微云下的数据）
        let ary = this.getChild(id);
        ary.forEach((item, i) => {
            this.div = document.createElement('div');
            this.div.className = 'file-item';
            this.img = document.createElement('img');
            this.img.src = 'img/folder-b.png';
            // this.imgEvent();
            this.span = document.createElement('span');
            this.span.className = 'folder-name';
            this.span.innerHTML = item.title;
            this.input = document.createElement('input');
            this.input.className = 'editor';
            this.is = document.createElement('i');
            this.is.style.background = 'none';
            this.is.className = 'checked';
            this.folders.append(this.div);
            this.div.append(this.img,this.span,this.input,this.is);
        })
    }
    imgEvent(){
        this.img.ondblclick = function(){
            console.log(1)
        }
    }
}
let f = new Folders(data, 0);
