$(function(){
    $("#submit").click(function(){
        $.ajax({
           url:"./users/"+$("#move").val(),
           type:"GET",
           success:function(data){
               console.log(data);
           }
        });
    });
    
});