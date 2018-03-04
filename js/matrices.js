// Copyright Luis Angel Muñoz Franco, Carolina Lopez de Anda
$(function(){
    //funcion para multiplicar matrices
    function multiplicarM(m, f, c){
        var t=0;
        var r=[[]];
        for(let i=0; i<f[0]; i++){
            r[i]=[]
            for(let j=0; j<c[1]; j++){
                t=0;
                for(let k=0; k<f[1]; k++){
                    t += Number(m[0][i][k]) * Number(m[1][k][j]);
                }
                r[i][j] = t;
            }
        }
        var res = ""
        for(i=0; i<r.length; i++){
            res += '<div class="center">'+'<span class="">| </span>'
            for(j=0; j<r[i].length; j++){
                res += '<span class="">'+r[i][j].toFixed(2)+', </span>';       
            }
            res += '<span class="">|</div>'+"</span>"
        }
        return `<p>Matriz Resultado:</p> ${res}`
    }

    //separar texto y convertirlo a matriz
    $("#btn-calc").click(function(){
        $("#res").empty();
        var err = 0;
        var filas = [];
        var columnas = []
        var m = [];
        var nm = ["Primer", "Segunda"]
        m[0] = $("#m1").val().split("|");
        m[1] = $("#m2").val().split("|");
        if(!m[0] || !m[1] || m[0] == "" || m[1] == ""){
            $("#res").append("<p>Una de las matrices esta vacia, no es posible realizar el calculo</p><br>");
            return 0;
        }
        for(let h=0; h<2; h++){
            for(let i=0; i< m[h].length; i++){
                if(!m[h][i] || m[h][i] == " " || m[h][i] == ","){
                    m[h].splice(i,1);
                    i--;
                }else{
                    m[h][i] = m[h][i].split(",");
                    for(let j=0; j<m[h][i].length; j++){
                        if(m[h][i][j] == "" || !m[h][i][j]){
                            m[h][i].splice(j, 1);
                            j--;
                        }else{
                            if(!isNaN(m[h][i][j])){
                                m[h][i][j] = Number(m[h][i][j])
                            }else{
                                $("#res").append("<p>En la "+nm[h]+" Matriz, la fila "+(i+1)+", columna "+(j+1)+" no es un numero</p><br>");
                                err=1;
                                break;
                            }
                        }
                    }
                    if(!columnas[h]){
                        columnas[h] = m[h][i].length;
                    }else if(columnas[h] != m[h][i].length){
                        $("#res").append("<p>En la "+nm[h]+" Matriz, la fila "+(i+1)+" no coincide en tamaño con su fila anterior.<br> (Todas las filas en la matriz deben tener el mismo numero de columnas.)</p><br>");
                        err = 1;
                        break;
                    }
                }

            }
            filas[h] = m[h].length
        }
        if(columnas[0] != filas[1]){
            $("#res").append("<p>El numero de columnas de la Primer Matriz no coincide con el numero de filas de la Segunda Matriz, no es posible realizar el calculo.</p><br>");
            err=1;
        }
        if(!err){
            //Hacer la multiplicacion de matrices
            $("#res").html(multiplicarM(m, filas, columnas));
        } 
    })
})
