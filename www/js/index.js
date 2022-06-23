$(function(){
    $(document).ready(function(){

        if (!localStorage.datacount || localStorage.datacount == null)
        localStorage.datacount=0;

        var email = crossroads.addRoute('', function(){
            $.ajax({ 
                type: post, 
                url:"https://kerbau.odaje.biz/getstaff.php", 
                data:{id:email},
                cache: false,
                
                success: function(returnedData){ 
                //instructions to execute when the ajax call is succeeds 
                datalength = localStorage.datacount;
                var returnedData = JSON.parse(returnedData);
                if (datalength > 0){
                    for (var i = 1; i <= datalength; i++){
                        secondpage="<a href='secondpage.html?id="+employeeNumber+"'>"+email+"</a>";
                        htmlText = htmlText + "<tr><td>"+secondpage+"</td></tr>";
                    }
                } else{
                    htmlText = htmlText + "<tr><td> no data found </td><tr>";
                }
                }, 

                error: function(){ 
                //instructions to execute when the ajax call is failed 
                console.log("error in ajax function");
                alert("AJAX failed, sila contact admin");
                } 
            })

            $('#maintable tbody').html(htmlText);

        });

        function parseHash(newHash,oldHash){
            crossroads.parse(newHash);
        }
        hasher.initialiazed.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    });
})