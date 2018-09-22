window.onload=function(){
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let newtasklist = document.getElementById('tasklist')
    let deletetask = document.getElementById('deletetask') 
    let sorttask = document.getElementById('sort') 
    addtask.onclick = function () {      
      
      let num = newtask.value
      //let newtasklist = document.createElement('ul')
      //newtasklist.id = 'tasklist'
      if(num==null || num=='' ){
          window.alert("Task cannot be empty!!")
          return
      }
      let item = document.createElement('li')
      let span = document.createElement('span')
      let newbutton=document.createElement('button')
      let check=document.createElement('input')
      let up = document.createElement('span')
      let down= document.createElement('span')

      check.type = "checkbox"
      check.id = "check"

      newbutton.innerText="Delete"

      newbutton.className="btn btn-danger deletebtn"
      span.innerText = num

      up.innerText="up"
      up.className="up"

      down.innerText="down"
      down.className="down"

      var del=document.getElementsByClassName("deletebtn")
      
      up.addEventListener('click',upswap)
      down.addEventListener('click',downswap)

      newtasklist.appendChild(item)
      item.appendChild(span)
      item.appendChild(check)
      item.appendChild(newbutton)
      item.appendChild(up)
      item.appendChild(down)
     
      //let element=document.getElementById('row2');
      //element.replaceChild(newtasklist, tasklist)


      check.addEventListener( 'change', function() {
        if(this.checked) {
            span.className="checked"

        } else {
            // Checkbox is not checked..
            span.className="unchecked"
        }
    });

    for(i=0;i<del.length;i++){
        del[i].onclick= function(){
            var dele=this.parentElement
            dele.style.display="none" 
        }
    }
   
    function upswap(){
        item.parentElement.insertBefore(item,item.previousElementSibling)
    }

    function downswap(){
        item.parentElement.insertBefore(item.nextElementSibling,item)
    }

    deletetask.onclick=function(){
        var check=document.getElementsByClassName("checked")
        for(i=0;i<check.length;i++){
            var deltask=check[i].parentElement
            deltask.style.display="none"
        }
    }
    
    sorttask.onclick=function(){

    }
    
    
    //   tasklist = document.getElementById('tasklist')
      newtask.value=''
    }

  }
  

