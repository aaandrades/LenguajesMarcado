function xml2html() {
    if (window.XMLHttpRequest) { // codigo para IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // codigo para IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "../xml/facturacion.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    document.write("<H1>Facturación</H1>");
    document.write("<table border=1 style='color:black;'><tr><th>Nombre</th><th>Nit</th><th>Fecha</th><th>Ciudad</th><th>Sede</th><th>Encargado</th><th>Identificacion</th><th>Direccion</th><th>Nombre</th><th>Unidades</th><th>Valor Unidad</th><th>Domicilio</th></tr>");
    var x = xmlDoc.getElementsByTagName("factura");
    for (i = 0; i < x.length; i++) {
        document.write("<tr><td>");
        document.write(x[i].getElementsByTagName("nombre_cliente")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("nit")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("fecha")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("ciudad")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("sede")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("encargado")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("identificacion_encargado")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("direccion")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("unidades")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("valor_unidad")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        // var y = xmlDoc.getElementsByTagName("items");
        // for (j = 0; j < y.length; j++) {
        //     var z = xmlDoc.getElementsByTagName("item");

        //     for (k = 0; k < z.length; k++) {
        //         document.write("uno ");
        //     }
        // }
        document.write(x[i].getElementsByTagName("domicilio")[0].childNodes[0].nodeValue);
        document.write("</td></tr>");
    }
    document.write("</table>");
}