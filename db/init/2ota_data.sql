USE otabilbao;

INSERT INTO coches (marca, modelo, matricula, password)
VALUES
('Renault', 'Clio', '4444JJJ', '1234'), ('Seat', 'Ibiza', '5555KKK', '1234'), ('Ford', 'Focus', '6666LLL', '1234'), ('Opel', 'Corsa', '7777MMM', '1234'), ('Citroen', 'C3', '8888NNN', '1234'), ('Peugeot', '208', '9999OOO', '1234');


INSERT INTO zona (nombre_zona, tarifa_hora)
VALUES
('Rekalde', 1), ('Miribilla', 1), ('Casco viejo', 3), ('Ensanche', 2), ('Indautxu', 1), ('Deusto', 2);

INSERT INTO parking (fecha_inicio, fecha_fin, id_coche, id_zona, activo)
VALUES
('2020-01-01 10:00:00', '2020-01-01 11:00:00', 1, 1, 0), ('2020-01-01 10:00:00', '2025-01-01 11:00:00', 2, 2, 1);

INSERT INTO multas (importe_multa,fecha_multa, id_parking, activa)
VALUES
('20', '2020-01-01 10:00:00', 1, 0), ('20', '2020-01-01 10:00:00', 2, 1);

INSERT INTO admin (user, password)
VALUES 
('admin',1234);