let checkboxes = document.querySelectorAll('[type=checkbox]');
checkboxes = [...checkboxes];

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (e)=>{
      
        if( !e.shiftKey)
            return;
              
        let indx = [];
        checkboxes.forEach((checkbox, index)=> {
            if(checkbox.checked){
                indx.push(index);
            }
        })
        
        for (let index = indx[0]; index < indx[indx.length-1]; index++) {
            checkboxes[index].checked = true;
        }
    })
    
});
// bubbling && delegation
