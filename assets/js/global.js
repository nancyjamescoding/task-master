const componentElements = document.querySelectorAll("[data-import]")

const renderComponent = elements =>{
    for(let element of elements){
     const dataImport = element.getAttribute("data-import");
     fetch (dataImport)
     .then((res)=>{
         if (!res){
             throw "Not Found";
         }
         return res.text();
     }) 
     .then((component)=>{
         element.innerHTML =component;
         loadComponentScripts(element);
         const compElements = element.querySelectorAll("[data-import]");
         renderComponent(compElements) 
     })
     .catch(()=>{
         element.innerHTML = `<h4>Component not found<h4>`
         
     })
    }
}

renderComponent(componentElements);

const loadComponentScripts = element => {
    const scripts = element.querySelectorAll("script");
    for (let script of scripts){
        const newScript = document.createElement("script");
        if (script.src){
            newScript.src = script.src
        }
        else {
            newScript.textContent = script.textContent;
        }
        script.replaceWith(newScript)
    }
}

