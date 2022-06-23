$(function(){
    $(document).ready(function(){

        var link2 = crossroad.addRoute('', function(){
            query = window.location.search;
            urlParam = new URLSearchParams(query);
            var id = urlParam.get('id');

            $.ajax({
                type: get, 
                url:"https://kerbau.odaje.biz/getstaffbyid", 
                data:datalist,
                cache: false,
                success: function(){
                    datalength = localStorage.datacount;
                    var returnedData = JSON.parse(returnedData);
                    if (datalength > 0){
                        for (var i = 1; i <= datalength; i++){
                            
                            htmlText = htmlText + "<tr><td>"+employeeNumber+"</td></tr>";
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
            });
        });

        function parseHash(newHash,oldHash){
            crossroads.parse(newHash);
        }
        hasher.initialiazed.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    });
})