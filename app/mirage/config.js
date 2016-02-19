export default function() {
  this.get("/reviews/:id", function() {
    return {
      data: [
        {
          type: "review",
          id: 1,
          attributes: {
            date: "2016-01-15",
            rating: 5,
            text: "It works great!",
            title: "I love it!",
            username: "MrGuy",
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
            username: "MrsLady",
          }
        }
      ]
    };
  });

  this.get("/products/:id", function() {
    return {
      data: {
        type: "product",
        id: 1,
        attributes: {
          title: "Premium Industrial-Grade Cat",
          image: "http://lorempixel.com/200/300/cats"
        },
        relationships: {
          reviews: {
            data: [
              { type: "review", id: 1 },
              { type: "review", id: 2 }
            ]
          },
        }
      }
    }; 
  });
}
