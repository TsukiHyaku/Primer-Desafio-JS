let  buzo= prompt("Bienvenido/a Soy Sara un algoritmo ayudante de la tienda TuAnimeShop.  \n Actualemete solo contamos con Buzos Personalizados en Stock. \n ¿Desea continuar? SI/NO")

while( buzo.toLowerCase() == "si" ){
    let color=  prompt("Elija El Color que desea la Tela.")
    let tela = prompt("Elija El tipo de Tela \n *Algodon *Jogging *Polar.")
    let personaje = prompt("Elija el personaje que le gustaria en el estampado \n *Serena Tsukino *Kakashi Hatake *Monkey D. Luffy *Biscuit Krueger  *Edward Elric * Asuka Langley *Shoto Todoroki *Rei Ayanami")
    let pago = prompt("Ingrese el metodo de Pago \n *Debito *Credito *Mercado Pago *Otro")
    
    buzo = prompt(`EL RESULTADO FINAL DE SU PEDIDO ES EL SIGUIENTE \n Color del Buzo Será: ${color} \n Tipo de Tela Será: ${tela} \n Personaje: ${personaje} \n El Metodo de pago será con: ${pago} \n ¿Quiere confirmar su compra? SI/NO`)
    if(buzo.toLowerCase() == "si"){
        alert("Muchas gracias por elegir TuAnimeShop Vuelva Pronto🤝.")
    }
}