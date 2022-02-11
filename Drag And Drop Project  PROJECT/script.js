const box = document.querySelectorAll('.smbox')
const items = document.querySelectorAll('.inner-box')

let draggedItem = null;

for (let i = 0; i < items.length; i++) {
    const item = items[i];
  
    item.addEventListener('dragstart', function () {
        console.log('dragstart');
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        }, 0)
      
    })

    item.addEventListener('dragend', function () {
        console.log('dragend')
        setTimeout(function () {
            draggedItem.style.display = 'block'
            draggedItem.style.display = 'flex'
            draggedItem = null;
        }, 0)

    })

    for (let j = 0; j < box.length; j++) {
        const list = box[j]
        list.addEventListener('dragover', function (e) {
            e.preventDefault();
        })

        list.addEventListener('dragenter', function (e) {
            e.preventDefault();
            this.style.backgroundColor='rgba(0,0,0,0.2)';
        })

        list.addEventListener('dragleave',function(e){
            this.style.backgroundColor='rgba(0,0,0,0.1)'
        })

        list.addEventListener('drop', function () {
            this.append(draggedItem);
            this.style.backgroundColor='rgba(0,0,0,0.1)';
        })

    }
}
