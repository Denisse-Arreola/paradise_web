use paradise;

# insert into genero values ('M', 'Masculino'),('F','Femenino');

# insert into tipo_us values ('CLI','Cliente'),('ADM','Administrador'),('AGT','Agente');

insert into municipio values ('ESE','Ensenada'),('MXL','Mexicali'),('TIJ','Tijuana'),('ROS','Rosarito'),('TEC','Tecate');

insert into espacio(espNombre) values
('Salón'),('Pista de baile'),('Estacionamiento'),('Cocina para catering'),('Terraza'),('Jardín'),('Carpa'),('Piscina'),('Jacuzzi');

# insert into metodopag(pm_Metodo) values('Efectivo'),('Tarjeta bancaria'),('Paypal'),('Tranferencia bancaria');

insert into tipolugar(tlNombre) values
('Salón'),('Hacienda'),('Restaurante'),('Centro nocturno'),('Jardín'),('Quinta'),('Playa');

select * from espacio;


########################################### AGENTES ###################################################################
# call SP_insert_agente('Chapis','Pepogi','Ramirez','2000-12-23','F');

call SP_insert_agente ('ANA CAROLINA','LOPEZ','MARTINEZ', '2000-12-23','Femenino',null);
call SP_insert_agente ('MANUEL','MENDEZ','HERNANDEZ','1990-08-03','Masculino','6646211878');
call SP_insert_agente ('MARCO ANTONIO','RAMIREZ','LOZANO','1980-01-12','Masculino',null);
call SP_insert_agente ('JORGE','CARRILLO','MARTINEZ','1990-08-05','Masculino','6646099823');
call SP_insert_agente ('JOHANA VANESSA','MAR','SANCHEZ','1989-07-21','Femenino',null);
call SP_insert_agente ('JESUS ENRIQUE','VAZQUEZ','MARIN','2000-12-23','Masculino','6646075408');
call SP_insert_agente ('GINA ELIZABETH','LISZT','CORDOBA','1995-10-03','Femenino',null);
call SP_insert_agente ('PAOLA','MARTINEZ','LARA','1980-01-12','Femenino','6641045520');
call SP_insert_agente ('MARTHA','CHAVEZ','OCHOA','1989-07-21','Femenino',null);
call SP_insert_agente ('JOSE ALFONSO','PEREZ','CANTO','1990-08-05','Masculino','6646345289');
call SP_insert_agente ('FELIPE','LOPEZ','CHAVIRA','1999-07-21','Masculino','6646882150');
call SP_insert_agente ('VERONICA','FERNANDEZ','ZAMUDIO','2000-12-23','Femenino',null);
call SP_insert_agente ('SANDRA','GARCIA','BUSTAMANTE','1989-07-21','Femenino','6646231359');
call SP_insert_agente ('JUAN CARLOS','JARAMILLO','VAZQUEZ','1980-01-12','Masculino','6649060024');
call SP_insert_agente ('VICTOR ALFONSO','CALDERON','TURRUBIATES','1990-08-05','Masculino','6646834654');
call SP_insert_agente ('MARTHA ALICIA','LEON','CARREÑO','1995-10-03','Femenino',null);
call SP_insert_agente ('RODOLFO','HERNANDEZ','AVILA','1989-07-21','Masculino','6646834654');
call SP_insert_agente ('JULIO CESAR','JUAREZ','BORRAYO','1980-01-12','Masculino','6646073608');
call SP_insert_agente ('JOSE GUADALUPE','LOZANO','VALDEZ','2000-12-23','Masculino',null);
call SP_insert_agente ('MIGUEL ANGEL','MEDINA','DEL TORO','1990-08-05','Masculino','6649736631');
call SP_insert_agente ('ALEJANDRO','GUTIERREZ','PEREZ','1995-10-03','Masculino','6646818243');
call SP_insert_agente ('CARMEN','MIRANDA','ROCHA','2000-12-23','Femenino',null);

select * from agente;

########################################### CLIENTES ###################################################################
# call SP_insert_cliente ('Maria','Peña','Santos','1999-10-05','6657700934','santos_maria','123456','santosM@gmail.com');
/*
in nombre varchar(30),
	in apPat varchar(20),
	in apMat varchar(20),
	in fecNac date,
    in telefono char(10)
*/
call SP_insert_cliente ('MARTINA','ALTAMIRANO','CALDERON','1999-10-05','6647733123');             #(null,'123456','m.altamiro@gmail.com');
call SP_insert_cliente ('ZULEIMA GABRIELA','ORDOÑES','ALANIS','2000-11-12','6641234567');         #('zuleima05','654321','zuleima@hotmail.com');
call SP_insert_cliente ('MARISOL','SANCHEZ','PEREZ','1980-01-15','6650099724');                   #('marisolS','098765','marisolSP@gmail.com');
call SP_insert_cliente ('MAGDALENA','GONZALEZ','RODRIGUEZ','1990-05-20',null);                    #('Mgonzales','contrasenia','gonzalesMR@hotmail.com');
call SP_insert_cliente ('GUADALUPE','RODRIGUEZ','BARTOLO','1990-05-20',null);                     #(null,'password','guadalupe@hotmail.com');
call SP_insert_cliente ('YULETH ARELY','ORTIZ','RODRIGUEZ','1999-10-05','6647733553');            #('Arely15','arely','arelyY@outlook.com');
call SP_insert_cliente ('JUAN','ESPINOZA','RODRIGUEZ','2000-11-12','6649933123');                 #('juan_espinoza','correo','juan.ER@gmail.com');
call SP_insert_cliente ('SALOME','RIVERA','VAZQUEZ','1980-01-15','6650011724');                   #(null,'salome','salome@gmail.com');
call SP_insert_cliente ('EMMA PAULA','SOLIS','RAMIREZ','1990-05-20',null);                        #('solis_emma','pelicula','emmaPSR@outlook.com');
call SP_insert_cliente ('DANIEL','TINAJERO','TRISTAN','1980-01-15','6647733133');                 #('daniel01','basura','daniel@outlook.com');
call SP_insert_cliente ('MARIA GUADALUPE','MORENO','CASTILLO','2000-11-12','6651199724');         #(null,'guadalupe','mariaGMc@gmail.com');
call SP_insert_cliente ('JOSE GUADALUPE','MEDINA','RODRIGUEZ','1999-10-05',null);                 #('jose_guadalupe','constrasenia','joseGuadalupe@outloo.com');

select * from cliente;
select * from usuario;


############################################ LUGAR #########################################################

call SP_insert_lugar ('Salón Toscano',
'Se trata de un cómodo y cálido lugar en el que podrán compartir con sus familiares y 
allegados. Allí les brindarán los servicios necesarios para que el evento sea 
perfecto y para que no tengan que preocuparse por nada. Salón Toscano cuenta con 
una capacidad para 70 personas, en sus instalaciones podrán hacer el montaje que 
deseen y desarrollar como mejor les parezca la celebración de su evento. 
El lugar dispone de Estacionamientos y vigilancia privada durante todo su evento.',
2500.00,70,1,'TIJ','Matamoros','7545','5','22245');

call SP_insert_lugar ('Salón Casa Blanca',
'Un hermoso salón finamente decorado y con unas instalaciones de alta calidad que ahora les 
abre sus puertas para que puedan celebrar su evento y que salga perfecto. Las instalaciones 
de este salón son de excelente calidad y están muy bien acondicionadas para albergar toda 
clase de eventos sociales. Elegir este salón será un paso hacia el éxito seguro de su enlace. 
Gracias a su gran extensión el Salón Casa Blanca puede albergar eventos de 100 hasta 500 
personas garantizando el confort en todo momento.',
3500.00,500,1,'ESE','Juarez','40',null,'22289');

call SP_insert_lugar ('Belio Restaurante',
'Belio Restaurante es un lugar mágico para que ustedes celebren con el mar de fondo. La suave 
brisa marítima será una invitada más a la fiesta y les acompañará durante toda la noche, desde 
el atardecer en el mar hasta que salen los primeros rayos del sol después de la fiesta. Además 
del sitio, ustedes van a disfrutar de una auténtica cocina gourmet, ideal para maravillar los 
paladares de sus invitados. Belio Restaurante es un espacio para sentir una atmósfera diferente, 
el lugar cuenta con varios salones, terraza y un balcón que da directamente a la playa. 
Además de la cocina para uso del catering del restaurante.',
30000.00,200,3,'MXL','San Gabriel','8567',null,'22255');

call SP_insert_lugar ('Puerto Nuevo',
'Puerto Nuevo Baja, Hotel y Villas es un precioso y exclusivo hotel a la orilla de la playa, 
que cuenta con grandes vistas, el cual tiene la experiencia de ofrecer sus instalaciones y 
servicios para su celebración, convirtiendo su evento en algo único e inolvidable. El resort 
cuenta con 3 salones para eventos, 2 jardines para la ceremonia religiosa o civil, un bar, 
spa y estacionamiento.',60061.00,600,7,'ESE','San Marcos','1234','18','22345');

call SP_insert_lugar ('Jardín Maui',
'Por su ambiente encantador y por la elegancia de sus espacios, Jardín Maui es el lugar 
ideal para sus eventos. En estas instalaciones podrán celebrar tanto un enlace al exterior 
como en el interior. Por su parte, el equipo del salón pondrá a su disposición sus variados 
servicios para que su evento resulte exitoso. El compromiso de este lugar unido a sus 
servicios de calidad les garantizará momentos inolvidables.',
19000,200,5,'ESE','Av. Londres','1857',null,'22120');

select * from lugar;
select * from diclugar;
delete from lugar
where lugNum=1 or lugNum=2 or lugNum=3 or lugNum=4 or lugNum=5;
ALTER TABLE lugar AUTO_INCREMENT = 0;

alter table lugar
modify column lugCosto decimal(12,2);

ALTER TABLE usuario AUTO_INCREMENT = 0;
































/*########################################### Proveedores ###########################################################################

call SP_insert_proveedor('Palacios Diseño',' Palacios Diseño y Decoración cuenta con 55 años de experiencia en el 
rubro de producción y decoración de eventos, tiempo que avala la excelente calidad de sus servicios. 
La base del trabajo de sus profesionales es el buen gusto, porque su misión es ambientar de manera 
sobria, elegante y refinada un evento para ustedes. Los expertos tienen amplios conocimientos en decoración, 
por lo que crearán los detalles. Entre los servicios que ofrece: ramos de flores, decoración floral para eventos, decoración 
floral para el banquete, arreglos frutales, centros de mesa, etc.','www.PalaciosDesign');

call SP_insert_proveedor('Expresiones Estudio','Una excelente profesional que sabe captar 
esos momentos tan especiales, es Expresiones Estudio. Con una mirada fresca y 
espontánea captura la esencia de su día y les entrega instantes únicos que podrán revivir 
cuantas veces quieran para mantener presente ese bello sentimiento. Entre sus servicios: 
Fotografía, video, e-session, trash the dress, álbumes, photobook, álbum digital, fotografías 
en alta resolución, negativos, blu-ray o DVD con todas las fotografías, photocall, photobooth',
'https://www.facebook.com/estudioEXPRESIONES/');

call SP_insert_proveedor('Musca Group','Musca Group es una empresa con amplia experiencia en 
el sector de los eventos en el Norte del País, basados en Monterrey, Nuevo León, y ofreciendo  
servicios de música en todo México. Harán de su evento una celebración inolvidable sabiendo 
que será un éxito total. Entre los servicios que ofrece: Música para la ceremonia, música 
para el coctel / banquete, música para bailar, animación, audiovisuales, dJ. Ademas, los estilos 
que maneja: Instrumental, pop, para bailar, actual, versátil, cumbia, tropical, banda, dj',
'http://muscagroup.com/');

call SP_insert_proveedor('El Molino','Sólo utilizan ingredientes de la mejor calidad, 
garantizado un sabor inigualable, pues constantemente están aprendiendo las técnicas 
más novedosas. Su pastel será de acuerdo a los gustos y personalidad de los novios. 
Venta y elaboración de pasteles para eventos, venta y elaboración de pasteles a medida.',
'http://www.pasteleriaelmolino.com');

call SP_insert_proveedor('Banquetes Krissa','Banquetes Krissa es una empresa cuyo 
objetivo principal es consentir y satisfacer su paladar y la de sus invitados. 
Se comprometen con cariño y profesionalismo para que su evento sea todo un éxito, 
pero ante todo, que con sus preparaciones exquisitas vivan su celebración con el 
estomago lleno y corazón contento. Desde 50 hasta 500 invitados.',
'https://www.facebook.com/banqueteskrissa/');

select * from proveedor;*/

/*alter table proveedor
modify column pro_Sitio varchar(60);*/

