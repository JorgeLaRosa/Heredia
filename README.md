## Le-Carte

### Proyecto _LeCarte_ en React.
Le-Carte es un E-COMMERCE de muebles de diseño. Es producto del curso de ReactJS de CoderHouse. 
El proyecto consume una catalogo de productos que esta guardado en FIREBASE. En caso de seleccionar un producto, este es llamado por su ID a FIREBASE. En FIREBASE hay tambien una coleccion llamada ORDERS, ahi se registran todas las compras realizadas. 

### Pagina.
En el Home del sitio esta el catalogo de productos. Ademas, se puede filtar por categorias que son botoneras en el NavBar 
-Sillas
-Mesas 
-Bibliotecas 
-Sillones

En el NavBar esta también la opción de _View All_ que lleva al home. Un Buscador y un ingreso de usuario, sin funcionamiento. El icono de carro de compras contiene enlace a la seccion _CART_. 
La pagina cuenta con un detalle de cada producto en caso de clickear en uno de ellos.
En la descripcion de cada producto, hay un contador para elegir la cantidad de productos que se desea agregar al carrito. El contador esta programado para elegir tantos productos como haya en el STOCK (Item que esta incluido en las propiedades de cada producto) como maximo. En caso de alcanzar es cantidad, un ALERT indica que no se puede comprar más. 

### Compra.
Desde el _Carro de Compras_ se puede proceder al pago. Previo a efectuar la orden, se solicita una formulario, que hace las veces de datos del comprados, y que se agregan a la orden que se graba luego en la base de datos.


