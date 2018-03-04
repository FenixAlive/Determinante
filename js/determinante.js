// Copyright Edgar Alejandro Flores Rodríguez, Luis Angel Muñoz Franco, Edgar, Luis Eduardo Esqueda Aguilar
$(function(){
    var res = "#res"
    //función de determinante
    function determinante(mat){
        console.log(mat);
    }
    //separar texto y convertirlo a matriz
    function crearMatriz(str){
        if(!str ||  str == ""){
            $(res).append("<p>La matriz esta vacia, no es posible realizar el calculo</p><br>");
            return 0;
        }
        var filas = str.split("\n");
        var mat = [];
        var col;
        filas.forEach(function(f){
            if(f || f != ""){
                col = f.split(",");
                for(i=0;i<col.length;i++){
                    if(!col[i] || col[i] == ""){
                        col.splice(i,1);
                    }
                }
                mat.push(col);
                }
        })
        return mat;
    }
    //función ver si es cuadrada
    function esCuadrada(mat){
        var contador = [0,0];
        mat.forEach(function(f){
            contador[0]++
            f.forEach(function(c){
                contador[1]++;
            })
        })
        if(contador[0] == contador[1]/contador[0]){
            return 1;
        }
        $(res).append("<p>La matriz no es cuadrada, revise los datos.</p><br>");
        return 0;
    }
    function sonNumeros(mat){
        var num;
        var matNum=[];
        var col=[];
        var cont = [0,0];
        var err = 0;
        mat.forEach(function(f){
            col = [];
            cont[0]++;
            cont[1]=0;
            f.forEach(function(c){
                cont[1]++;
                if(!isNaN(c)){
                    num = Number(c);
                    col.push(num);
                }else{
                    $(res).append("<p>La Fila "+cont[0]+", Columna "+cont[1]+", no es un numero</p><br>");
                    err = 1;
                }
            })
            matNum.push(col);
        })
        if(err){
            return 0;
        }
        return matNum;
    }
    $("#btn-calc").click(function(){
        var err = 0;
        $("#res").empty();
        var m = $("#matriz").val();
        var matriz = crearMatriz(m);
        if(matriz){
            //convertir matriz a numeros
            matriz = sonNumeros(matriz);
            if(matriz){
                if(!esCuadrada(matriz)){
                    err = 1;
                }
            }else{
                err = 1;
            }
        }else{
            err = 1;
        }
        if(!err){
            //Calcular determinante
            determinante(matriz);
            $(res).html("Hola");
        } 
    })
})
