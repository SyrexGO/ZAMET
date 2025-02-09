const inpe = document.getElementById('title')
const bt = document.getElementById('create')
const spis = document.getElementById('list')


const zamet = [{
    title: 'Сделать прогу',
    complited:'false'
},
{
    title: 'Повторить html and css',
    compited:'true',
},]

function pov () {
    spis.innerHTML =''
    if (zamet.length === 0) {
        spis.innerHTML = '<p>Нет заметок!</p>'
    }
    for (let i = 0; i < zamet.length; i++){
        spis.insertAdjacentHTML('beforeend', tem(zamet[i], i))
    }
}
pov()
bt.onclick = function() {
    if (inpe.value.length === 0) {
        return
    }
    const newob = {
        title:inpe.value,
        complited: false,
    }
    zamet.push(newob)
    pov()
    inpe.value = ''
}
spis.onclick = function(){
    if (event.target.dataset.index) {
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type ==='toggle') {
            zamet[index].compited = !zamet[index].compited
        }
        else if (type ==='remove'){
            zamet.splice(index,1)
        }
        pov()
    }
}
function tem (zar,index) {
    return `
    <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class = "${zar.compited ? 'text-decoration-line-through': ''}">${zar.title}</span>
          <span>
            <span class="btn btn-small btn-${zar.compited? 'warning': 'success'}" data-index="${index}"data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger"data-type="remove" data-index="${index}">&times;</span>
          </span>
        </li>
    `
}