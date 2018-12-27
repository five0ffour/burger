USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES
("White Castle Slider", false),
("In-N-Out Burger", true),
("McDonald's Big Mac", true),
("Burger King Whopper", true),
("Rabbit Food (Garden Burger)", true),
("Wisconsin Butter Burger", false),
("East Coast Pub Style", true),
("Sissy Burger (Mayo)", false),
("Slug (Cornmeal Burger)", false),
("West Coast Griddle Style", false),
("Smash Burger", false),
("Shady Glen (!) - Manchester, CT", true);


UPDATE burgers SET burger_name='Bacon Cheese Burger',devoured=false WHERE id = 13;
SELECT * from burgers;
