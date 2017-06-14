 $(document).ready(function(){
      $('.parallax').parallax();
    });

$("#download-button").on("click", function (event) {
       event.preventDefault();
     var input = $("#user-input").val().trim();
      var urlQuery = "http://api.nutritionix.com/v1_1/search/" + input + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=bb482bd0&appKey=c8db65a3dc0de939c5e49ed465a37e6b"
console.log("user Input="+input);
    
    // FIRST URL//   "http://api.nutritionix.com/v1_1/search/" + input + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=bb482bd0&appKey=c8db65a3dc0de939c5e49ed465a37e6b"

       $.ajax({
        url: urlQuery,
        method: "GET"
    })
    .done(function (response) {
      console.log(response)
        // $("#display").empty();
      
       var results = response.hits[0];
       var calories = results.fields.nf_calories;
       var servings = results.fields.nf_serving_size_qty;
       var totalFat = results.fields.nf_total_fat;
       var itemName = results.fields.item_name;



       console.log(results)

        console.log(calories,"we made it!")
        console.log(servings,"serve!")
        console.log(totalFat,"fat!")
        console.log(itemName,"name!")

        // $("#display").append("<h2>calories: ", calories + "</h2>");

          $("#display-calories").html(calories + " Calories" );
          
          //function call to display videos in carousel----modified by Mary
          displayVideos(calories);
          
          $("#user-input-display").html(input);

          // Displaying more data

          $("#itemName").html(itemName);
          $("#serv").html(servings);
          $("#fat").html(totalFat);


    })
   })