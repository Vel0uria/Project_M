const mongoose = require("mongoose");
const Story = require("../models/historia");
require("dotenv").config();

const stories = [
  {
    title: "Morelia, México. 1988",
    description:
      "Cristian era un niño asustadizo que durante casi toda su infancia dormía en la misma cama que sus padres. Un fin de semana salió junto con su padre a visitar a su hermana mayor en su casa junto con su esposo y su hijo recién nacido. Cristian y su padre compartieron la recámara de huéspedes durante su estancia.  En la primera noche, el padre de Cristian lo arropó, lo acostó y después bajó a la sala a ver la televisión. Cristian sintió miedo de dormir solo en una habitación ajena, por lo que decidió esperar a que su padre regresara a dormir. ara matar el tiempo, Cristian comenzó a jugar con la lámpara produciendo sombras en la pared con sus manos.Después de un rato se aburrió y colocó ambos brazos a su costado y colocó ambos brazos a su costado y se quedó viendo su sombra en la pared.Después se movió para observarla de frente pero la sombra no se movió en absoluto.Cristian levantó un brazo hacia el techo y la sombra no respondió al movimiento.Cristian no recuerda haber sentido tanto miedo en su vida; después de esto se tapó con las cobijas hasta la cara y no volvió a asomar ni un centímetro de su cuerpo hasta que llegó su padre a acostarse.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565817398/album/Morelia_98_mjhzlp.jpg"
  },
  {
    title: "Madrid, españa. 1995",
    description:
      "Durante sus años de secundaria, Daniela Martins fue niñera del bebé de una vecina y amiga cercana, quien había tenido al niño a los 17 años. Diez años después, Daniela salía con un hombre que había conocido a través de un sitio de internet. Después de varios meses de salir juntos, su novio le contó que un chico de aproximadamente 14 años lo había contactado por redes sociales afirmando que era su hijo. El chico sabía que sería una gran sorpresa, pues la madre nunca le reveló esta información al padre.Después de investigar a mayor profundidad confirmaron no sólo que se trataba de su hijo, sino que era el mismo bebé que Daniela cuidó durante su adolescencia.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818516/album/Madrid_95_qcbmyy.jpg"
  },
  {
    title: "CDMX, México. 1978",
    description:
      "Luis Argudín vivía en una colonia en la periferia de la Ciudad de México donde aun no llegaban los servicios de telefonía. En  1980, la compañía Telmex instaló el servicio y una mañana saliendo de su casa Luis encontró por primera vez el recibo de la compañía con los cargos por el servicio. Lo guardó en la guantera de su automóvil y partió a su trabajo. Cuando regresó a casa, se bajó del auto y de pronto recordó que había tenido un sueño en el que un monstruo llegaba de noche a su cochera y devoraba su carro.Este recuerdo le hizo abrir su auto de nuevo y meter a su casa el recibo de teléfono que había dejado en la guantera.A la mañana siguiente, Luis entró a su cochera para encontrar que su vehículo no se encontraba; había sido robado la noche anterior.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818515/album/Argudin009_ukvbhw.jpg"
  },
  {
    title: "Arkansas, EUA. 1990",
    description:
      "La familia Sánchez se encontraba de vacaciones en las cascadas Downfall en Arkansas cuando al padre de familia, John, se quejó a causa de un fuerte dolor de estómago. El dolor fue aumentando a tal grado que fue necesario llevarlo a la sala de urgencias más cercana. Los doctores hicieron pruebas y dictaminaron que se trataba de una infección estomacal, le recetaron pastillas y lo dieron de alta ese mismo día. Sin embargo, durante el resto de las vacaciones el dolor aumentó, por lo que de regreso de sus vacaciones la familia decidió hacer una visita al hospital de su localidad para una segunda opinión. Se trata de una localidad pequeña, por lo que sólo había un médico en guardia cuando la familia Sánchez llegó. El médico reconoció inmediatamente los síntomas de John Sánchez; se trataba de una rara enfermedad del colon llamada vólvulo cecal que comúnmente se confunde con infecciones estomacales provocando la muerte de los afectados. Afortunadamente, el doctor había hecho su tesis acerca de esta enfermedad y pudo tratar a John justo a tiempo.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818513/album/Arkansas_djvua3.jpg"
  },
  {
    title: "Puebla, México. 1995",
    description:
      "Erika Montoya salió del supermercado hacia su carro: Un Nissan Versa color plateado. Como no servía la pila de la llave abrió la cajuela manualmente y subió su mandado. Después, mientras hablaba por celular abrió la puerta del auto, se sentó y movió el clutch hasta el fondo; introdujo la llave en el orificio de encendido y al girarla se atoró ligeramente. El auto encendió a pesar de ello, pero la radio se prendió en una estación de música electrónica sonando a máximo volumen, género musical cuyos beats acelerados y poco armónicos le eran completamente ajenos a Érika. En ese momento se percató de que el Nissan Versa que acababa de encender no era su carro. Se trataba de un modelo igual al suyo que estaba estacionado a 6 lugares de su vehículo. Confundida y perturbada, Érika se apresuró a sacar sus cosas de la cajuela y esperó junto al Nissan (cuya puerta no pudo cerrar con su llave) hasta que llegó el dueño.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565819973/album/Morelia_95_wubcfa.jpg"
  },
  {
    title: "Córdoba, Argentina. 1982",
    description:
      "Marta de la Luz había vivido durante tres años con su esposo, quien era alcohólico y la golpeaba recurrentemente. El 5 de marzo de 1982 la violencia aumentó a tal grado que su esposo la violó, diciéndole posteriormente – te gustó, no lo niegues-. Después de esto, el esposo decidió salir al bar al que iba con frecuencia y Marta se quedó sola en casa. Mientras se encontraba en la sala, pensaba en la posibilidad de dejar a su esposo. En ese momento, un cuadro colgado en la pared que decía “Hogar dulce hogar”, el cual era un regalo de bodas que les había dado la abuela de Carly, repentinamente cayó al suelo y se rompió. En ese momento Marta dejó sus dudas de lado y decidió empacar sus maletas y dejar la casa y a su esposo permanentemente.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818513/album/Cordoba_uwz223.jpg"
  },
  {
    title: "Colorado, EUA. 2018",
    description:
      "Luis Montoya y su novia viajaron de México a Colorado a visitar a la madre de Luis, quien estaba internada en el hospital. Durante la semana de visita se quedaron en casa de la madre y como la casa no tenía cuarto de huéspedes, durmieron en la recámara principal. El cuarto estaba adornado con juguetes y muñecos que la madre de Luis había coleccionado a lo largo de su vida. Muchos de ellos los había tenido desde que era niña. En la última noche de su estancia, Luis y su novia dormían cuando un ruido dentro de la recámara los despertó con un sobresalto.Cuando prendieron la luz vieron que dos muñecas se habían caído del estante donde estaban puestas.Luis y su novia decidieron dejar a las muñecas en un lugar más seguro, donde la madre de Luis guardaba más muñecas dentro de bolsas de plástico y regresaron a dormir.Media hora después, comenzaron a escuchar como si alguien estuviera moviendo las bolsas.Esta vez les dio tanto miedo que no se pararon de la cama.A la mañana siguiente, cuando buscaron las muñecas para regresarlas al estante de donde habían caído, éstas ya no se encontraban en las bolsas; las encontraron varias horas después debajo de la cama.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818512/album/Colorado_2018_sy3dad.jpg"
  },
  {
    title: "Chicago, EUA. 1977",
    description:
      "En agosto de 1974 Annie se mudó de casa a los dormitories de la Universidad de Chicago donde conoció a su compañera de cuarto Cindy. Annie se disgustó con Cindy desde el primer momento en que se conocieron porque ella deseaba la cama del lado derecho, pues estaba más lejos de la Puerta y más cerca de la Ventana. Sin embargo Cindy había llegado primero y se había apropiado de la cama. Annie trató de convencerla de que le cediera la cama, pero Cindy argumentó que ya había acomodado todas sus cosas y de hacerlo, tendría que mover de nuevo sus pertenencias. Annie se molestó pero olvidó la discusión después de varios días. Un viernes por la noche, Cindy decidió quedarse en el cuarto en vez de salir a bailar, como normalmente hacía.Annie, por otro lado, nunca salía los viernes.Esa noche, las dos mujeres platicaron hasta quedarse dormidas cada quien en sus respectivas camas y Annie durmió con la sensación de que ella y Cindy comenzaban a hacerse amigas.Sin embargo, unas horas después, su compañera de cuarto recibió un disparo en la cabeza a causa de una bala Perdida que llegó al cuarto a través de la Ventana.Cindy murió instantáneamente y Annie nunca dejó de preguntarse qué hubiera pasado si su compañera hubiera accedido a su petición de intercambiar camas.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818512/album/Chicago_1997_fpmfqi.jpg"
  },
  {
    title: "Lurgan, Irlanda. 1924.",
    description:
      "Después de fallecer a causa de una fiebre de origen desconocido, Margorie McCall fue enterrada junto con su anillo de compromiso, pues ni su esposo ni los médicos lo habían podido quitar de su dedo debido a que se había hinchado considerablemente desde su muerte. Esto la convirtió en un objetivo para los saqueadores de cadáveres, quienes no tardaron en enterarse de que Margorie había sido enterrada con un costoso anillo de oro. La noche después de que fue enterrada, antes de que la tierra se asentara, los ladrones cavaron en el sitio de entierro hasta que alcanzaron y abrieron el ataúd. Fiel al rumor, el anillo todavía estaba en su dedo. Intentaron removerlo, pero no cedía, por lo que decidieron cortar el dedo de Margorie.  Para sorpresa de los saqueadores, el dedo goteó sangre y en ese momento Margorie despertó, se levantó de golpe y gritó. El destino de los ladrones de tumbas es desconocido, aunque existen rumores de que   cayeron muertos en el acto, mientras que otros afirman que huyeron por sus vidas y cambiaron de profesión. Margorie salió del agujero y regresó a su casa, donde su esposo murió de un infarto pocos segundos después de abrirle la puerta.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818516/album/Irlanda_fbp9qs.jpg"
  },
  {
    title: "Guanajuato, México. 1990",
    description:
      "Los padres y hermana de Luis fueron al supermercado alrededor de las 8 p.m, dejándolo sólo en casa con sus tres perros.Era diciembre y la mayoría de los vecinos se habían ido de vacaciones.Aprovechando que no había nadie, puso música a un nivel más alto de lo aceptable.Después de un rato escuchó que alguien tocaba la puerta.Inmediatamente, los perros se dirigieron a la puerta ladrando.Cuando Luis abrió no había nadie, pero supuso que había sido su hermana jugándole una broma. Luis rodeó la casa y revisó los balcones pero no encontró a nadie.Los perros continuaban ladrando, lo cual le pareció curioso porque ese comportamiento sólo lo presentaban cuando se les acercaba un desconocido.Por la época del año y la amplia visibilidad que hay de la puerta de la casa a ambos lados de la calle, resultaría extremadamente difícil esconderse tan rápido para cualquier persona.Luis y sus perros se quedaron asustados afuera de la casa unos diez minutos más hasta que se calmaron y volvieron a entrar.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565820749/album/Guanajuato_2004_frlmo7.jpg"
  },
  {
    title: "Idaho, EUA. 1974",
    description:
      "Peter es un padre soltero que vivía con su hija única en una casa que fue construida en 1910. Los sucesos narrados a continuación comenzaron a ocurrir desde que su hija, Stacy, tenía tres años y continuaron hasta que se mudaron, cuando Stacy cumplió 11 años. Peter le compraba juguetes a su hija y jugaban juntos constantemente. Sin embargo, algunas veces veía que Stacy jugaba con los objetos y los mostraba como si alguien más estuviera presente. Cuando cumplió cinco años, Stacy le presentó a su padre a Ra-Ra, quien Peter dedujo que se trataba de un amigo imaginario. Sin embargo, algunas veces se escuchaban ruidos en distintas habitaciones y cuando Peter se disponía a averiguar, su hija le respondía - es sólo Ra - Ra -.Con el paso de los años Ra - Ra se transformó en Robert.Stacy le preguntaba cosas a su padre como - Robert quiere saber qué pasó con el escritorio que estaba en el ático -.Peter nunca tuvo un escritorio en el ático.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818516/album/Idaho_74_f5e1j5.jpg"
  },
  {
    title: "Isla Prince Edward, Canadá. 1900",
    description:
      "Charles Coghlan nació en la Isla Prince Edward, en la costa este de Canadá, en 1841. Provenía de una rica familia irlandesa, y cuando Coghlan tuvo edad suficiente fue enviado a Inglaterra a estudiar. Su padre había esperado que se convirtiera en abogado, pero Charles lo decepcionó al declarar sus intenciones de convertirse en actor. El padre de Charles le dijo que si no renunciaba a sus ambiciones teatrales sería desterrado de la familia y no recibiría herencia. Charles decidió renunciar a su familia y prometió a su padre que nunca más regresaría a la Isla Prince Edward. Después partió a Londres y se embarcó en una exitosa carrera como actor de teatro. Un día, Coghlan visitó a una adivina gitana, quien profetizó: “serás muy famoso, pero morirás en el apogeo de tu fama.Tu alma no tendrá descanso hasta que hayas regresado al lugar de tu nacimiento.” en 1899, Charles Coghlan murió a la edad de 57 años de insuficiencia cardiaca.Durante la semana siguiente fue enterrado en el cementerio local.Dos años más tarde, un huracán azotó esa misma provincia matando a 6000 personas y lavando el cementerio donde Coghlan había sido enterrado.A la mañana siguiente, las autoridades vieron que varios ataúdes habían sido arrastrados de sus tumbas al mar.Uno de estos ataúdes contenía los restos de Charles Coghlan.Cuando se informó a la familia Coghlan sobre la tragedia, ofrecieron una recompensa a quien encontrara el ataúd de Charles pero nadie se presentó. En octubre de 1908, ocho años después del huracán, varios pescadores de la Isla Prince Edward encontraron un ataúd cubierto con percebes que flotaba en la costa.Según el nombre en la placa de plata, se trataba de los restos de Charles Coghlan.El ataúd hizo un viaje de varios miles de kilómetros desde el cementerio de Galveston para llegar al lugar de nacimiento de Charles Coghlan, tal como lo había predicho la adivina gitana.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818480/album/1900_IslaPrinceEdward_uienag.jpg"
  },
  {
    title: "Santiago, Chile. 2002",
    description:
      "Juan Carlos le propuso atrimonio a su novia, Carla, después de dos años de llevar una relación de noviazgo. Cuando ella aceptó, Juan Carlos decidió que debía a presentarla a su madre, quien vivía en una pequeña provincia en el campo. La fueron a visitar y cuando se presentaron, la madre de Juan Carlos confesó que su prometida le parecía conocida, por lo que preguntó por su apellido. Inmediatamente después, la madre de Juan Carlos fue a su album de fotos del cual recuperó una fotografía que había tomado durante un festival de la primaria de Juan Carlos. En la fotografía se puede apreciar tanto a Juan Carlos de unos siete años de edad como al resto de sus compañeros de generación, entre los cuales se encontraba Carla, de pie junto a Juan Carlos.Fue en ese momento que la pareja se percató de que se habían acudido a la misma primaria, aunque no coincidieron en el mismo grupo.Esto quería decir que no se habían conocido hace dos años sino hacía 26 aproximadamente.La pareja decidió ampliar la fotografía y colgarla en la recepción de su boda.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565821396/album/2002_Chile_q8ikim.jpg"
  },
  {
    title: "Lyon, Francia. 1963",
    description:
      "Las hermanas Edith y Emma vivían con sus padres en una casa pequeña con dos habitaciones, por lo que durmieron en el mismo cuarto desde el día en que llegaron hasta que se mudaron. Desde sus seis años, Emma recuerda haber sufrido de insomnios y pesadillas vívidas y constantes. Lo que recuerda con más claridad es una silueta totalmente oscura de un hombre alto y fornido que aparecía en su habitación todas las noches después de que su hermana se quedara dormida.  El hombre se sentaba a los pies de su cama y Emma no podía moverse ni hacer ruido por más que lo intentara. A sus 16 años, el hospital local diagnosticó a Emma con trastorno bipolar tipo II, cuyo principal síntoma era parálisis de sueño. Varios años después, cuando las dos hermanas tenían cada una su propia familia y vivían por su cuenta, se vieron en una reunión familiar donde contaron, junto con el resto de sus primas, anécdotas que recordaban de su infancia.Durante la plática Edith recordó que, en más de una ocasión, cuando las dos hermanas dormían en la misma habitación, se despertaba a mitad de la noche y veía una figura negra sentada sobre la cama de su hermana que se cernía sobre ella y no la dejaba de mirar.Edith había visto la misma figura que había atormentado a su hermana durante varios años, desde una perspectiva distinta.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818510/album/album035_vpmdz4.jpg"
  },
  {
    title: "Ontario, Canadá. 2002",
    description:
      "Karen separó accidentalmente la cadena de su collar favorito en dos partes. Guardó en su cajón las dos piezas para llevarlo a arreglar pero, el día que lo iba a llevar a la joyería, la parte separada del collar no estaba en el cajón donde la había guardado. la buscó en todo su departamento -donde vive sola- y no la encontró. Varios meses después, la cadena rota apareció en la alfombra de su habitación. Karen la recogió para meterla en el cajón donde se encontraba el resto del collar pero, para su sorpresa, éste ya no estaba ahí. hasta la fecha, Karen conserva el pedazo de cadena rota. El resto del collar no ha aparecido.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565822695/album/He_stole_my_necklace_1_ze2sns.jpg"
  },
  {
    title: "Ontario, Canadá. 2002",
    description:
      "Karen separó accidentalmente la cadena de su collar favorito en dos partes. Guardó en su cajón las dos piezas para llevarlo a arreglar pero, el día que lo iba a llevar a la joyería, la parte separada del collar no estaba en el cajón donde la había guardado. la buscó en todo su departamento -donde vive sola- y no la encontró. Varios meses después, la cadena rota apareció en la alfombra de su habitación. Karen la recogió para meterla en el cajón donde se encontraba el resto del collar pero, para su sorpresa, éste ya no estaba ahí. hasta la fecha, Karen conserva el pedazo de cadena rota. El resto del collar no ha aparecido.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565822695/album/He_stole_my_necklace_1_ze2sns.jpg"
  },
  {
    title: "Vietnam. 1990",
    description:
      "Klaus y Tove decidieron celebrar su décimo aniversario vacacionando en Vietnam. Durante su visita a los templos de Angkor Wat se encontraron a una madre e hijo japoneses que también se encontraban de vacaciones.  Esa misma noche se reencontraron en la ciudad. Dos días después, Klaus y Tove viajaron a la ciudad de Ho Chi Min y se encontraron de nuevo en el aeropuerto. En la noche decidieron tomar unos tragos en el bar del hotel, donde se encontraron una vez más a los japoneses. En ese punto decidieron compartir su mesa y conocerse mejor. Klaus les relató que creció en un pequeño pueblo rural en Australia. Aproximadamente 18 años atrás, vivió con un estudiante de intercambio japonés que se quedó en su casa durante aproximadamente 3 meses. Después de cotejar fechas y nombres, resultó que dicho estudiante  era el hermano de la mujer japonesa.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818517/album/Vietnam_90_tmaft0.jpg"
  },
  {
    title: "Jersey, EUA. 1981",
    description:
      "La recientemente viuda de 67 años Mary Reeser fue encontrada muerta en su recámara la mañana del 2 de julio. Esa misma noche, la señora Reeser recibió la visita de un vecino y, poco antes de su muerte, su médico, su hijo Richard Reeser. Estaba deprimida porque pensó que no iba a poder viajar al norte durante el verano. No había cenado y le dijo a su hijo que había tomado dos tabletas de Seconal y que podría tomar dos más antes de retirarse. En ese momento, Mary Resser llevaba un camisón, zapatillas y una bata. Cuando la dejaron, todo en el apartamento parecía normal. A la mañana siguiente, el cartero tocó la puerta y no recibió respuesta. Le pareció curioso que la perilla de la puerta se sentía caliente al tacto, por lo que acudió a un vecino para juntos entrar a la casa para investigar.   Una vez dentro, encontraron el apartamento inusualmente cálido a pesar de que las ventanas estaban abiertas. En una esquina de la habitación encontraron un montón de cenizas, los restos quemados de una silla y una lámpara, y un reloj eléctrico con un tapón derretido que se había detenido a las 4:20 am. Aparte de los restos carbonizados en esta esquina, el apartamento estaba completamente inalterado.Tras un examen más detenido, encontraron el pie izquierdo de una mujer, que aún llevaba una zapatilla, en las cenizas, un cráneo que se había reducido al tamaño de una pelota de béisbol y una vértebra.Estos fueron los únicos restos reconocibles de la difunta Mary Reeser.No había señales de robo o cualquier otra influencia externa en el apartamento.Los expertos estimaron que se necesitaría un incendio de 3.000 grados de combustión durante varias horas para consumir a un ser humano tan a fondo.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565823544/album/Jersey_1981_dfgtzv.jpg"
  },
  {
    title: "​Múnich, Alemania. 1991",
    description:
      "Franca era la gerente del bar de un club exclusivo sólo para miembros. Había tenido este trabajo durante 14 años y el club había existido durante mucho más tiempo. Era común escuchar pláticas entre los miembros sobre cosas fantasmales que habían visto en el bar y en el salón de eventos constantemente, una de las cuales, Franca experimentó de primera mano. Era una noche después de la hora de cierre cuando Franca limpiaba tarros mientras hablaba con un pequeño grupo de otros empleados que se encontraban en la bodega –justo en la pared contigua a la barra del bar –.El club estaba completamente cerrado.De pronto, mientras hablan entre ellos, fueron interrumpidos por un estruendo que, según Franca, sonó como el ruido que hace el vidrio al caer y romperse.El sonido provenía del salón de eventos, pero cuando Franca y el resto de los empleados fueron a averiguar no encontraron nada roto, caído ni fuera de su lugar.Buscaron en todo el edificio y no encontraron un solo pedazo de vidrio roto en ninguna parte.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818495/album/album006_ecb5kv.jpg"
  },
  {
    title: "San Francisco, EUA. 1963",
    description:
      "Roberto Jiménez se encontraba en un viaje de trabajo hospedado en el Hotel Majestic. Era su costumbre coleccionar las cortesías del hotel en formas de pequeñas botellas de productos de baño. La última mañana de su estancia, Roberto empacó sus pertenencias y agregó una crema para manos y crema corporal; un acondicionador y gel de ducha. Al empacar el shampoo se percató de que la botella estaba casi vacía, por lo que prefirió tirarla a la basura. Después de revisar que no dejara ninguna de sus pertenencias, salió del cuarto y cerró la puerta con llave.Mientras caminaba por el pasillo en dirección a la recepción sintió un leve golpe en la espalda alta, como si le hubieran lanzado algo.Volteó hacia atrás y no vio a nadie.En el suelo, sin embargo, se encontraba la botella de shampoo semivacía que había tirado a la basura.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818471/album/02_xbx453.jpg"
  },
  {
    title: "San diego, EUA. 1997",
    description:
      "Mariana Torres, de seis años de edad, viajaba cada verano con su mamá de Baja California a San Diego a hacer “shopping”. En el centro comercial, su mamá la dejaba en el área de juegos mientras hacía las compras. Ese año, Mariana recuerda que llegó una mujer vestida con el uniforme de MacDonald's diciéndole que la siguiera porque su mamá la estaba buscando. Mariana obedeció y siguió a la mujer a un cuarto detrás de la cocina, donde la mujer le puso una bolsa en la cabeza y recitó unas palabras que Mariana no logra recordar; todo esto, según ella, no duró más de cinco minutos.Lo siguiente que recuerda es a su mamá regañándola en el estacionamiento.Según le cuentan, los guardias del centro comercial la encontraron caminando sola en el extremo opuesto al área de juegos después de haberla buscado durante más de dos horas.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565824003/album/03_m8rhqc.jpg"
  },
  {
    title: "San Luis Potosí, México. 1977",
    description:
      "Reyna Ramírez decidió pasar sus vacaciones de verano en casa de la hermana de su abuela, Dulce, quien vivía sola en las afueras de San Luis Potosí. Cuando llegó a la casa, sintió en repetidas ocasiones insistentes jalones en su falda. –Son mis niños,– le comentó Dulce. –Se regresaron conmigo cuando fui a la peregrinación de San Juan. Me contaron que sus papás se murieron en un accidente y necesitan quién los cuide. –Reyna, muy perturbada, decidió acortar su estancia.Sin embrago, cuando regresó a su departamento en la Ciudad de México, comenzaron a ocurrir todo tipo de anomalías: encontraba las cosas movidas de lugar y la televisión prendida.Invitó a su comunidad religiosa para orar y a un padre a que ungiera la casa.A los pocos días, recibió una llamada de Dulce, quien le reclamó: –Lástima que no quisieras quedarte con la niña; es muy bien portada–.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818471/album/04_inqyhf.jpg"
  },
  {
    title: "Guadalajara, México. 2000",
    description:
      "Roberto Jiménez se encontraba en un viaje de trabajo hospedado en el Hotel Majestic. Era su costumbre coleccionar las cortesías del hotel en formas de pequeñas botellas de productos de baño. La última mañana de su estancia, Roberto empacó sus pertenencias y agregó una crema para manos y crema corporal; un acondicionador y gel de ducha. Al empacar el shampoo se percató de que la botella estaba casi vacía, por lo que prefirió tirarla a la basura. Después de revisar que no dejara ninguna de sus pertenencias, salió del cuarto y cerró la puerta con llave.Mientras caminaba por el pasillo en dirección a la recepción sintió un leve golpe en la espalda alta, como si le hubieran lanzado algo.Volteó hacia atrás y no vio a nadie.En el suelo, sin embargo, se encontraba la botella de shampoo semivacía que había tirado a la basura.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818471/album/02_xbx453.jpg"
  },
  {
    title: "San Francisco, EUA. 1963",
    description:
      "Daniel Pérez Segura logró conciliar el sueño hasta muy entrada la noche. Cuando por fin dormía, soñó que su padre, Carlos Franciso Pérez, sufría de una agonía incurable que le provocaba la muerte. Daniel despertó sumamente angustiado y llamó por teléfono a su padre. Carlos Francisco, aunque confundido por recibir una llamada a altas horas de la madrugada, confirmó que se encontraba bien, para la tranquilidad de su hijo. Después de colgar, Daniel logró dormir durnate el resto de la noche pacíficamente y sin más interrupciones.Al día siguiente su hermana Martha llamó para comunicarle que el padre de una amiga de la familia, Carolina Nápoles, había sido encontrado muerto en su lecho la madrugada del 16 de mayo después de haber sufrido una agonía de varios días a causa de un cáncer de pulmón terminal.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818475/album/10_eeq1sq.jpg"
  },
  {
    title: "Cali, Colombia. 2005",
    description:
      "Josué Quintanar murió a los 85 años en la casa que construyó para él y su familia durante la década de los 50. A lo largo de los años, sus hijos y hermanos fueron dejando la casa vacía, por lo que decidió rentar sus cuartos a nuevos inquilinos. Su familia y amigos creyeron que sería apropiado velar a Josué en la casa que durante tantos años construyó y habitó. En la cuarta noche del novenario, Fabián Quintanar, nieto de Josué, se percató de que se había ido la luz sólo en una sección de la casa durante unos breves minutos.Al poco tiempo, se percataron de que durante ese lapso de tiempo una de las inquilinas, Rosa Martha Alba, de 75 años, había fallecido.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818471/album/07_bavthy.jpg"
  },
  {
    title: "Bogotá, Colombia. 2003",
    description:
      "Carla se enfermó de varicela cuando tenía 6 años. Una tarde, su mamá y su tío la recostaron en un sillón para cuidarla mientras ellos platicaban y bebían café. Carla se quedó dormida y soñó que estaba en un almacén muy largo y una esfera gigante la perseguía sin cesar. No lograba alejarse por más que corría. Al mismo tiempo, alcanzaba a escuchar las voces de su mamá y su tío como un eco distante. Cuando ya era adulta, una tarde mientras tomaba café con su mejor amiga, recordó el sueño y se lo narró.Después de escucharlo, su amiga recordó que a los seis años se había enfermado de influenza y había tenido la misma pesadilla: una bola gigante persiguiéndola en un almacén.Las dos amigas no se conocían de la infancia y sólo en esa ocasión recuerdan haber tenido ese sueño.Investigaron más acerca de los sueños durante enfermedades y estados febriles, pero no encontraron nada relacionado con una esfera en un almacén.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818512/album/Bogota_vgmemu.png"
  },
  {
    title: "Nueva York, EUA. 1955",
    description:
      "Helmut trabajaba en un periódico semanal en tiempo parcial escribiendo anuncios. Una noche tuvo un sueño en el cual una señora le decía -Hola, soy Mae Kongabel- conversaban durante lo que se sintió como un largo rato.  Cuando Helmut despertó pensó que había sido un sueño extraño y que el apellido de la señora le sonaba familiar, sin embargo, prosiguió con su rutina sin darle más importancia al asunto. Cuando llegó a su trabajo y comenzó sus tareas semanales, tres hombres de  semblante serio entraron a la oficina para hablar con el editor y propietario.Después de que se fueron, el jefe de Helmut le dijo que los hombres eran empleados de Harold Kongabel, un importante empresario dentro de la comunidad.Su esposa acababa de morir y le pidió que escribiera un obituario sobre ella, cuyo nombre de pila era Mae.Helmut nunca la conoció; ni siquiera sabía que  Harold Kongabel estuviera casado.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818482/album/abuelo_kb4eon.jpg"
  },
  {
    title: "Taxco, méxico. 1999",
    description:
      "Lucía solía ​​salir con un chico con el que discutía constantemente. Un día tuvieron una discusión en el garaje mientras él estaba trabajando en su auto. Su novio le dijo algo hiriente que hizo a bla bla salir del garage hacia la habitación de él. Se acostó en la cama de cara a la pared y comenzó a llorar. En eso estaba cuando escucho a alguien subir las escaleras, entrar en la habitación, sentarse en la cama y comenzar a frotarle la espalda suavemente. Pensando que era su novio se tranquilizó poco a poco, hasta que se dio la vuelta para descubrir que no había nadie. Meses después, Lucía le platicó esta experiencia a la la mamá de su novio, quien compartía una una experiencia similar.Ella y su esposo se estaban peleando y ella se fue a dormir en el sofá una noche.Se despertó en la madrugada y escuchó los pasos de alguien que se acercaba y se sentaba en el brazo del sillón.A la mañana siguiente, le preguntó a su marido si había bajado a verla y él respondió que no se paró de la cama en toda la noche.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818517/album/Taxco_o6akkd.png"
  },
  {
    title: "Kansas city, EUA. 1962",
    description:
      "Bertha heredó la casa en la que sus padres, sus abuelos y bisabuelos habían vivido toda su vida. En el antecomedor se encontraba colgado un retrato al óleo de su bisabuelo, quien se llamaba Henry pero todos en la familia le decían Poppa de cariño.  Tres años después de mudarse con su esposo, Bertha tuvo un bebé al que nombró Henry en honor a su bisabuelo. Una noche, cuando Henry tenía apenas un año y medio de edad, Bertha y sus esposo hicieron una reunión en su casa. Todos se encontraban en el antecomedor cuando el bebé levantó su dedo para señalar el cuadro del bisabuelo y dijo -pop-, para sorpresa de todos los miembros de la familia. Esas fueron las primeras palabras del bebé Henry.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565816953/album/default1_xi3rwl.png"
  },
  {
    title: "Glaswog, Escocia. 1990.",
    description:
      "Katia vivió durante toda su niñez y adolescencia con su mamá y con su abueña húngara, quien era supersticiosa. En general se llevaban bien excepto en algunas ocasiones en las que las tres mujeres discutían en altos tonos de voz. Cuando Katia cumplió 15 años, las tres mujeres se mudaron a una casa vieja en la que constantemente se escuchaban crujidos de los muebles y otros ruidos peculiares.  Después de un tiempo, estos ruidos se volvieron parte común de la casa. Las tres mujeres inventaron, de broma, que se trataba de un compañero invisible al que llamaron Georgie. Una noche en que las tres estaban de mal humor, la abuela le resopndió de mala gana a la mamá de Katia, la mamá le respondió gritando y Katia - irónicamente - le gritó que no le hablara así a su madre.La discución escaló al punto de las lágrimas hasta que, de pronto, escucharon un estruendo proveniente del comedor, como si algo hubiera sido lanzado contra la pared.Fueron a investigar y encontraron que la maceta de cerámica que servía de centro de mesa, la cual era muy grande, vieja y maciza, estaba rota en el piso al lado de la pared.Las tres mujeres concluyeron que Georgie había tenido suficiente de su interminable discusión y lanzó la maceta contra la pared para callarlas.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818472/album/01001_k6uglj.jpg"
  },
  {
    title: "Santiago, Chile. 2005",
    description:
      "En el colegio de Carlitos contaban la historia de un niño que iba en cuarto año básico cuando sufrió un accidente de tránsito y murió junto con su familia. El niño se aparecía en su salón de clases y a medida que avanzaban los años iba apareciendo en las salas de quinto, sexto, y séptimo, avanzando de curso como si siguiera vivo. Los profesores lo veían desde los pasillos entrando a un salón y cuando iban a revisar, no había nadie. Años después, cuando Carlitos ya era adulto, decidió visitar su colegio de la infancia.Mientras platicaba con sus antiguos profesores les preguntó por el niño fantasma.Ellos rieron apaciblemente y le contestaron que desde que su grupo se graduó no lo han vuelto a ver.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818491/album/album009_r671pw.jpg"
  },
  {
    title: "CDMX, México. 1985",
    description:
      "El doctor Luis Gómez Araujo trabajaba en el Hospital General en la unidad de radiología ubicada en el sótano del conjunto A. Contaba con un récord de asistencia impecable; durante los tres años que llevaba trabajando en esa unidad no había faltado una sola vez. En el total de diez años que llevaba en el hospital sólo tenía cuatro faltas. La mañana del 19 de septiembre, mientras se preparaba para ir a trabajar, una fiebre repentina de 39 grados lo obligó a quedarse en cama.Ese mismo día, un terremoto de 8.1MW de magnitud provocó el colapso de dos de los conjuntos principales del Hospital General, incluyendo el conjunto A.Durante las siguientes 48 horas se rescató un total de 129 sobrevivientes y 295 fallecidos.En la unidad de radiología se encontraron 7 fallecidos y ningún sobreviviente.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565818482/album/01583_e21ijj.jpg"
  },
  {
    title: "CDMX, México. 1985",
    description:
      "Vicente Ramírez trabajaba de jalacables en las instalaciones de Televisa Chapultepec. Durante más de seis años fue de los primeros en ññegar al set de grabación junto con sus compañeros, con quienes compartía la carga de trabajo. Una parte importante de sus tareas diarias era salir a comprar tamales para todos en el set. Cada mañana, Vicente y sus compañeros echaban un volado para decidir a quién le tocaba ir por los tamañes, y la mañana del 19 de septiembre fue su turno. Vicente se encontraba formado en la fila de los tamales cuando un temblor de 8.1 MW de magnitud sacudió la cuidad.El estudio A y la torre de transmisiones de Televisa Chapultepec colapsaron, causando el fallecimiento de 80 empleados.Entre los restos de los fallecidos se encontraron compañeros de trabajo de Vicente.",
    image:
      "https://res.cloudinary.com/dn1i6hdch/image/upload/v1565816962/album/09_wtydzc.jpg"
  }
];

mongoose
  .connect(process.env.DB)
  .then(async () => {
    const results = await Story.create(stories);
    console.log(results.length);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
