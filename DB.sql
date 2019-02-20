DROP TABLE IF EXISTS puesto;
DROP TABLE IF EXISTS departamento;
DROP TABLE IF EXISTS persona;

CREATE TABLE Departamento(
    ID INT(20) AUTO_INCREMENT PRIMARY KEY,
    Nom_Dpmt VARCHAR(100)
);

CREATE TABLE Puesto(
    ID INT(20) AUTO_INCREMENT PRIMARY KEY,
    Nom_Pst VARCHAR(255),
    ID_Dprt INT(20)
);

CREATE TABLE Persona(
    ID INT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100),
    Email VARCHAR(255),
    Telefono INT (9),
    ID_Pst INT(20),
    ID_Dpmt INT(20),
    FOREIGN KEY(ID_Pst) REFERENCES Puesto(ID),
    FOREIGN KEY(ID_Dpmt) REFERENCES Departamento(ID)
);

INSERT INTO departamento (Nom_Dpmt) VALUES ('Informática');
INSERT INTO departamento (Nom_Dpmt) VALUES ('Administrador');

INSERT INTO puesto (Nom_Pst,ID_Dprt) VALUES ('Contable',1);
INSERT INTO puesto (Nom_Pst,ID_Dprt) VALUES ('Administrativo',1);

INSERT INTO puesto (Nom_Pst,ID_Dprt) VALUES ('Ingeniero',2);
INSERT INTO puesto (Nom_Pst,ID_Dprt) VALUES ('Desarrollo',2);
