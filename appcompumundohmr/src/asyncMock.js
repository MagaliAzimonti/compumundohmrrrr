const productos = [
    {id: '1', name:'Exo Smart M33', price:'60.624', category:'Notebook', img: 'https://http2.mlstatic.com/D_NQ_NP_860042-MLA46302991834_062021-O.webp', stock:'15', description:'Un procesador exclusivo para los gráficos. Su placa de video Intel UHD Graphics 620 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.'},
    {id: '2', name:'Exo Smart L37e Plus', price:'84.389', category:'Notebook', img: 'https://correoargentino.vtexassets.com/arquivos/ids/194058/image-f691d359dcae4925aa29e7588abb3c45.jpg?v=637798421163300000', stock:'10', description:'Una batería de larga duración. La batería de este equipo tiene una autonomía de alrededor de 13 horas. La duración varía según el uso, la configuración y otros factores, pero es ideal para quienes necesitan extender su jornada y seguir trabajando o estudiando con comodidad y sin cables.'},
    {id: '3', name:'HP 15-dy2061la', price:'116.999', category:'Notebook', img:'https://ar-media.hptiendaenlinea.com/catalog/product/4/0/40P49LA-2_T1632518914.png', stock:'5', description:'La notebook Lenovo ThinkPad E480 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento.'},
    {id: '4', name:'Lenovo IdeaPad 14IGL05', price:'89.699', category:'Notebook', img:'https://www.resinformatica.com.ar/Temp/App_WebSite/App_PictureFiles/Items/4290_800.jpg', stock:'10', description:'Un procesador exclusivo para los gráficos. Su placa de video Intel UHD Graphics 620 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.'},
    {id: '5', name:'PC Completa Banghó Cross B02 i1', price:'113.999', category:'PC', img:'https://bangho.vtexassets.com/arquivos/ids/160979-800-auto?v=637834229650630000&width=800&height=auto&aspect=true', stock:'10', description:'Es un equipo específicamente diseñado para trabajos 24x7. Equipada con Procesador Intel Celeron G5905, video integrado Gráficos UHD Intel 610 y Windows 11, es ideal para tareas de oficina y estudio. Incluye Monitor de 22" Full HD, teclado, mouse y parlantes.'},
    {id: '6', name:'Microprocesador Amd Ryzen 5', price:'39.299', category:'Componente', img:'https://http2.mlstatic.com/D_NQ_NP_604380-MLA50431166910_062022-O.webp', stock:'10', description:'Los procesadores AMD Ryzen serie 5000 están preparados para la próxima generación de juegos exigentes, ya que ofrecen una experiencia de inmersión única y dominan todas las tareas de varios procesos, como el renderizado de video o 3D3, y la compilación de software.'},
    {id: '7', name:'Moto G22 cosmic black', price:'44.999', category:'Celular', img:'https://http2.mlstatic.com/D_NQ_NP_854793-MLA50262132804_062022-O.webp', stock:'10', description:'Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Mayor rendimiento. Su memoria RAM de 4 GB permite que tu smartphone funcione de manera fluida y sin demoras al realizar distintas tareas, jugar o navegar.'},
    {id: '8', name:'Samsung Galaxy A32 awesome black', price:'65.999', category:'Celular', img:'https://http2.mlstatic.com/D_NQ_NP_922219-MLA48428094384_122021-O.webp', stock:'10', description:'Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados. Experiencia visual increíble. Mirá tus series y películas favoritas con la mejor definición a través de su pantalla Super AMOLED de 6.4". Disfrutá de colores brillantes y detalles precisos en todos tus contenidos.'},
    {id: '9', name:'Sony PlayStation 5 Standard color blanco y negro', price:'279.999', category:'Consola', img:'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp', stock:'10', description:'Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición. Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.'},
    {id: '10', name:'Microsoft Xbox Series S Standard color blanco', price:'124.999', category:'Consola', img:'https://http2.mlstatic.com/D_NQ_NP_627149-MLA44484230438_012021-O.webp', stock:'10', description:'Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 512 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición. Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.'}
]

export const getProductosDeCompumundo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}
export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}