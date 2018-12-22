-- use for local deployment
-- USE burgers_db;

-- use for heroku deployment
use ici55aem3zzw9fxd;

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
("Shady Glen (!) - Manchester, NH", true);


SELECT * from burgers;
