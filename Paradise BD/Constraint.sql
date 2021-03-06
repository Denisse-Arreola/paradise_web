use paradise;

alter table agente
add constraint UQ_agNombre_Completo unique(agNombre,agApPat,agApMat);

alter table cliente
add constraint UQ_cliNombre_Completo unique(cliNombre,cliApPat,cliApMat);

alter table cliente
ADD CONSTRAINT CK_cliente_edad CHECK (cliEdad>=18);

alter table agente
add constraint CK_agente_edad check(agEdad>=18);

alter table agente
add constraint CK_agente_genero check(agGenero = 'Masculino' or agGenero= 'Femenino');

alter table usuario
add constraint CK_usuario_tipoUS check(usTipoUS = 'Agente' or usTipoUS = 'Cliente' or usTipoUS = 'Administrador');

alter table cliente
add constraint UQ_foreign_userCli unique (FK_usuario);

alter table agente
add constraint UQ_foreign_userAg unique (FK_usuario);

alter table espacio
add constraint UQ_espacio_nombre unique (espNombre);

alter table tipoLugar
add constraint UQ_tipoLugar_nombre unique (tlNombre);

alter table pre_Reservacion
add constraint CK_pre_res_status check (prStatus='Proceso' or prStatus='Rechazada' or prStatus='Autorizada');