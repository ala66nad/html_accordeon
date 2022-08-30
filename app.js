const details = document.querySelectorAll("details");
details.forEach(element => {            
    element.addEventListener("click", (e) => {    
        e.preventDefault();        
        details.forEach(a => {
            if(a.id == element.id && element.open){
                element.open = !element.open;
                return;
            }            
            a.open = a.id != element.id ? false : true;            
        });
    });
});
