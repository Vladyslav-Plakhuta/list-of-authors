$(document).ready(function(){
     
    $("#btnAddA").click(function(){
        var tableRow = "<tr><td class='first_six_col'><input type='checkbox'/></td>";
            tableRow += "<td class='srn'><input class ='surname' type='text'/></td><td class='hide'><input class ='name' type='text'/></td><td class='hide'><input class='patronymic' type='text'/></td>";
            tableRow += "<td class='hide'><input class ='datepicker' type='text'/></td>";
            tableRow += "<td class='inpt first_six_col'><input class='inpt2' type='button'/></td>";
            tableRow += "<td class='insB1'><input class='inpt3' type='text'/></td><td class='insB2'><input class='inpt4' type='text'/></td><td class='insB3'><input class='inpt5' type='text'/></td></tr>";
        
        $("table").append(tableRow);
        $(".datepicker").datepicker();  
    });

    //insert new element under current WITHIN each cell(insB1 insB2 insB3 classes) of the checked row 
    $("#btnAddB").click(function(){
        $("table tr").has(":checkbox:checked").find(".insB1").append("<input class='inpt3' type='text'/>");
        $("table tr").has(":checkbox:checked").find(".insB2").append("<input class='inpt4' type='text'/>");
        $("table tr").has(":checkbox:checked").find(".insB3").append("<input class='inpt5' type='text'/>");
        $("table tr").has(":checkbox:checked").find(".inpt").append("<input class='inpt2' type='button'/>");
    }); 

    $("#btnSaveA").click(function(){
        if($(".surname").val().length===0||$(".name").val().length===0||$(".patronymic").val().length===0){
            alert("fill all Surname Name and Patronymic gaps pls!");
        }
        else{
            var a = document.getElementsByClassName("surname");
            var b =[];
            for(var i = 0; i<a.length;i++){
                b[i] = a[i].value;
            }      
            localStorage.setItem("surname", JSON.stringify(b));
        
            var a1 = document.getElementsByClassName("name");
            var b1 =[];
            for(var j = 0; j<a1.length;j++){
                b1[j] = a1[j].value;
            }      
            localStorage.setItem("name", JSON.stringify(b1));

            var a2 = document.getElementsByClassName("patronymic");
            var b2 =[];
            for(var k = 0; k<a2.length;k++){
                b2[k] = a2[k].value;
            }      
            localStorage.setItem("patronymic", JSON.stringify(b2));

            var a3 = document.getElementsByClassName("datepicker");
            var b3 =[];
            for(var l = 0; l<a3.length;l++){
                b3[l] = a3[l].value;
            }      
            localStorage.setItem("datepicker", JSON.stringify(b3));

            var a3 = document.getElementsByClassName("inpt3");
            var b3 =[];
            for(var l = 0; l<a3.length;l++){
                b3[l] = a3[l].value;
            }      
            localStorage.setItem("title", JSON.stringify(b3));

            var a4 = document.getElementsByClassName("inpt4");
            var b4 =[];
            for(var m = 0; m<a4.length;m++){
                b4[m] = a4[m].value;
            }      
            localStorage.setItem("genre", JSON.stringify(b4));

            var a5 = document.getElementsByClassName("inpt5");
            var b5 =[];
            for(var n = 0; n<a5.length;n++){
                b5[n] = a5[n].value;
            }      
            localStorage.setItem("pages", JSON.stringify(b5));
        }
    });

    $("#btnDelA").click(function(){
        $("tr").has(":checkbox:checked").remove();
    });

    $("table").on("click",".inpt2",function(){
        var ind = $(this).index();

        var s1 = $("tr").has(":checkbox:checked");
        var s2 = $(s1).find(".inpt3");
        var s3 = $(s1).find(".inpt4");
        var s4 = $(s1).find(".inpt5");
        var s5 = $(s1).find(".inpt2");
        $(s2).eq(ind).remove();
        $(s3).eq(ind).remove();
        $(s4).eq(ind).remove();
        $(s5).eq(ind).remove();
    });  

    $("#btnSearch").click(function(){
        var inptSrch = $('#search').val();
        
        var arr = $(".inpt3").toArray();
        var arrNew = [];
        for(var q=0; q<arr.length; q++){
            arrNew[q]=arr[q].value;

            if(inptSrch===arrNew[q]){
                $(arr[q]).css("background-color", "yellow");
            }
        }
    });

    $("#btnInsAuthor").click(function(){
        var tRow = "<tr><td><input type='checkbox'/></td>";
            tRow += "<td><input type='text'/><input class='dpicker' type='text'/></td>"
            tRow += "<td><input type='text'/></td><td><input type='text'/></td><tr>";
        
        $("#tbl").append(tRow);
        $(".dpicker").datepicker();  
    });

    $("#btnDelAuthor").click(function(){
        $("tr").has(":checkbox:checked").remove();
    });

    $("#show").click(function(){
        $(".hide").show();
    });

    $("#hide").click(function(){
        $(".hide").hide();
    });

    $(window).resize(function(){
        if(window.innerWidth >= 700 && $(".hide").css("display","none")){
            $(".hide").show();
        }
       /* if(window.innerWidth < 700 && $(".hide").css("display","table-cell")){
            $(".hide").hide();
        }*/
        
    });
}); 
   



