export default function() {
  this.get("/reviews/:id", function(db, request) {
    let reviews = [
      {
        type: "review",
        id: 1,
        attributes: {
          date: "2015-12-20",
          rating: 5,
          text: "It works great and it never wears out. I love it!",
          title: "A cat that never breaks!",
          username: "CatFancier",
        }
      },
      {
        type: "review",
        id: 2,
        attributes: {
          date: "2016-02-01",
          rating: 2,
          text: "I don't hate it.",
          title: "Meh",
          username: "LadyCattington",
        }
      },
      {
        type: "review",
        id: 3,
        attributes: {
          date: "2016-02-05",
          rating: 5,
          text: "Devine",
          title: "Purrfect",
          username: "Felinista",
        }
      },
      {
        type: "review",
        id: 4,
        attributes: {
          date: "2015-11-10",
          rating: 1,
          text: "It gave me cat scratch fever!",
          title: "Avoid at all costs",
          username: "Ded",
        }
      },
      {
        type: "review",
        id: 5,
        attributes: {
          date: "2016-02-02",
          rating: 1,
          text: "It won't roll over, it won't speak, it won't even play fetch!",
          title: "Does not play fetch",
          username: "DogLuver",
        }
      },
      {
        type: "review",
        id: 6,
        attributes: {
          date: "2016-01-21",
          rating: 3,
          text: "Mine just sort of stares at me then goes back to sleep.",
          title: "It's boring",
          username: "Catnapper",
        }
      },
    ];
    return { data: reviews[request.params.id - 1] };
  });

  this.get("/products/:id", function() {
    return {
      data: {
        type: "product",
        id: 1,
        attributes: {
          title: "Premium Industrial-Grade Cat",
          image: "http://lorempixel.com/300/200/cats"
        },
        relationships: {
          reviews: {
            data: [
              { type: "review", id: 1 },
              { type: "review", id: 2 },
              { type: "review", id: 3 },
              { type: "review", id: 4 },
              { type: "review", id: 5 },
              { type: "review", id: 6 },
            ]
          },
        }
      }
    }; 
  });
}
