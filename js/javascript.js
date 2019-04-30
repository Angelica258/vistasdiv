$("a").click(function (event){
 
    if ($(this).data('seleccion') != null){
        console.log($(this).data('seleccion'));
        if ($(this).data('seleccion') === "index"){
        	
            window.location.href = "index.html";
        } else {
            $("#contenedor").load('paginas/'+$(this).data('seleccion')+'.html');
        }
    }
});