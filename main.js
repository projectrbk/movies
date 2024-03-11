$("button").click(function () {
  $(".movie").remove();
});
$(".submit").click(function () {
  var name = $("#name").val();
  var img = $("#URL").val();
  var description = $("#des").val();


  localStorage.setItem("name", name);
  localStorage.setItem("img", img);
  localStorage.setItem("description", description);

  let movie = localStorage.getItem("name");
  let photo = localStorage.getItem("img");
  let dess = localStorage.getItem("description");
  console.log(movie);
  $(".container").append(`
        <div class="movie">
          <h3>${movie}</h3>
          <img src="${photo}" alt="">
          <p>${dess}</p>
        </div>`);
});

console.log(localStorage);