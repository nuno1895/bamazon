CREATE TABLE departments(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
department_name VARCHAR(30) NOT NULL,
over_head_costs DECIMAL(11, 2),
PRIMARY KEY(id)
);

CREATE TABLE products(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_id  INTEGER(11),
price DECIMAL(11,2) NOT NULL,
stock_quantity INTEGER(11) NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(department_id) REFERENCES departments(id)
);

CREATE TABLE sales(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_id INTEGER(11),
quantity_purchased INTEGER(11),
created_at TIMESTAMP, 
PRIMARY KEY(id),
FOREIGN KEY(product_id) REFERENCES products(id)
);

-- --------Dummy data------------------

-- departments

INSERT INTO departments (department_name, over_head_costs) VALUES ('Electronics', 5000), ('Games' , 1000), ('Clothes' , 2000), ('Pantry' , 6000);

-- +----+-----------------+-----------------+
-- | id | department_name | over_head_costs |
-- +----+-----------------+-----------------+
-- |  1 | Electronics     |         5000.00 |
-- |  2 | Games           |         1000.00 |
-- |  3 | Clothes         |         2000.00 |
-- |  4 | Pantry          |         6000.00 |
-- +----+-----------------+-----------------+


INSERT INTO products (product_name, department_id, price, stock_quantity ) VALUES ('Samsung 55inch TV', 1, 2000, 10), ('LG 60in' , 1, 1000, 5), ('Sony 60in' , 1, 2300, 5), ('Monopoly',2 ,50 , 20), ('Game of Life' ,2, 10, 15), ('Darts' ,2, 21.50, 15), ('Gucci Bag',3 ,500 , 5), ('Manolo Blahnik Shoes',3 ,900 , 10),('Badgely Shoes',3 ,900 , 10), ('Power Bars',4 ,22.50 , 50), ('Olive Oil',4 ,10.50 , 50), ('Napkins',4 ,2.50 , 50);