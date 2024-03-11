$("button").click(function () {
  $(".movie").remove();
});
function generateId(n) {
  return Math.floor(Math.random() * (n + 1));
}
var moviesList = JSON.parse(localStorage.getItem("movie")) || [];
$(".submit").click(function () {
  var name = $("#name").val();
  var img = $("#URL").val();
  var description = $("#des").val();
  var movie = {
    name: "",
    Image: "",
    des: "",
  };

  movie.name = name;

  movie.Image = img;
  movie.des = description;
  movie.id = generateId(8);
  moviesList.push(movie);
  localStorage.setItem("movie", JSON.stringify(moviesList));

  //   let movie = localStorage.getItem("name");
  //   let photo = localStorage.getItem("img");
  //   let dess = localStorage.getItem("description");
  //   console.log(movie);
  //   $(".container").append(`
  //         <div class="movie">
  //           <h3>${movie}</h3>
  //           <img src="${photo}" alt="">
  //           <p>${dess}</p>
  //         </div>`);
});


console.log(localStorage);
