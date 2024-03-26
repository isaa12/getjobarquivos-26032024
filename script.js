$(document).ready(function(){

   carregar_dados_json('UF');
   
   function carregar_dados_json(elemento, grupo)
   {
    var html_do_select = '';
    var estados = []; //array para filtrar estados sem repetição 
    $.getJSON('https://api.npoint.io/cca1afd7773c92c72f42', function(data){
    
   
   
     html_do_select += '<option value="">SELECIONE</option>';
     $.each(data.cidade, function(key, value){
     if ($.inArray(value.estado, estados) == -1) {
            estados.push(value.estado);
       
       if(elemento == 'UF')
        { 
             html_do_select += '<option value="'+value.estado+'">'+value.estado+'</option>';  
        }
     }
     if(elemento == 'cidade')
      {
        if(value.estado == grupo)
        {
          html_do_select += '<option value="'+value.nome+'">'+value.nome+'</option>';
        }
      }
     });
     $('#'+elemento).html(html_do_select);
    });
   }
   $(document).on('change', '#UF', function(){
        var UF = $(this).val();
        if(UF != '')
        {
           carregar_dados_json('cidade', UF);
        }
        else
        {
           $('#cidade').html('<option value="">SELECIONE</option>');
        }
       });
   });


function cadastrar() {
   
   const papel = $('input[name="davweb"]:checked').val();
   //console.log(papel);
   alert(papel);
}