# Proyecto E-commerce en React Js - BeaStore
​
BeaStore es un ecommerce para la venta de ropa femenina reciclada, también conocida como de segunda mano o vintage.

Esta app cuenta con:

- Inicio: banner bienvenida con botón link al catálogo completo de productos del sitio.
- Productos: catálogo de productos del sitio.
- Categorías: tipos de prendas en venta.
- Carrito de compras: productos seleccionados a comprar.
- Login: solo vista como simulación de cuenta de usuario en el sitio.
- Footer: simulación (solo vista) de mayor info como redes sociales, navegación, dirección física, y suscripción a newsletter.

​
## Navegación 


Barra de navegación con un logo que linkea a la vista inicio del sitio; un link a productos, que muestra el catálogo completo, y 4 categorías respectivamente. Cada categoría presenta un total de 3 prendas, y cada una tiene un link para ver más detalles de la prenda y un botón para agregar al carrito de compras.
Además, hay 3 íconos, el primero simula una barra de búsqueda (no es funcional), carrito de compras que si está vacío muestra un mensaje al respecto, junto a un link para volver a ver el catálogo de productos; y finalmente, un login que simula lo que sería el acceso a una cuenta de usuario (no es funcional, solo vista).

### CartContext

Toda la funcionalidad del proceso de selección de un producto, agregar al carrito, borrar, y vaciar, total de la compra y realizar el pedido se encuentran en 'context/CartContext'.

#### CartScreen

Si el carrito se encuentra vacío, el ícono en la barra de barra de navegación se mostrará en cero, igualmente al acceder este arrojará una vista con el mensaje de "No hay productos en el carrito". Al agregar productos, el ícono mostrará inmediatamente el cambio en la enumeración y la vista del carrito tendrá los productos seleccionados junto con su cantidad y el precio total de la compra. Los botones disponibles serán borrar un producto en particular, vaciar el carrito o terminar la compra. También existe la posibilidad de volver a productos y seguir comprando.
Al terminar la compra, el proceso dirigie a un formulario correspondiente al checkout que pedirá al usuario completarlo para poder generar el pedido. Si hay errores en uno o más datos, habrá una alerta de error, o finalmente, una alerta de envío exitoso, que confirmará un N de pedido, y regresará al incio del sitio.


##### Dependencias
​
Bootstrap: estructura y vista responsive del sitio.
​
React icons: uso de algunos íconos para dar mejor visibilidad al usuario.
​
FireBase: almacenamiento de datos, como las imágenes de cada producto.
​
Sweet Alert2: uso de alertas o avisos para el usuario al momento de realizar un pedido. 
​
###### Sitio en funcionamiento

- Archivo 'GIF'


​
###### Autor
​
Betty Mercegué G.
​Septiembre 2021 - Curso React Js en CoderHouse