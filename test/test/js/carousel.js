 var htmlString="";
       
function displayVideos(cal)
{
        var query = "https://api.cognitive.microsoft.com/bing/v5.0/videos/search?q=";
       // var cal=300; //value obtained from calorie count
       // cal=$("#display-calories").html().trim();
       if(cal>=0 && cal<100)
       {    var videoSearch = "burn "+100+" calories"; }
       else if(cal>=100 && cal<200)
       {    var videoSearch = "burn "+200+" calories"; }
       else if(cal>=200 && cal<300)
       {    var videoSearch = "burn "+300+" calories"; }
       else if(cal>=300 && cal<400)
       {    var videoSearch = "burn "+400+" calories"; }
       else if(cal>=400 && cal<500)
       {    var videoSearch = "burn "+500+" calories"; }
       else
       {    var videoSearch = "burn "+1000+" calories"; }
       
      // console.log("query= " +query);
      //  var videoSearch = "burn "+cal+" calories";
        var apiKey = "c8febe508fc74ec89c44069e9b6e99b8";
        $.ajax({
            method: "GET",
            url: query + videoSearch,
            beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",apiKey);
            },
            
        })
        .done(function(data) {
            var item=data.value
            console.log(item);
            var noOfItemsToDisplay=0;
            if(item.length<10)
            { noOfItemsToDisplay=item.length}
            else
            { noOfItemsToDisplay=10}
            for (var i=0; i<noOfItemsToDisplay; i++)//i<item.length
            {
                var vid="#"+i;
                htmlString=item[i].embedHtml;
                htmlString=htmlString.replace("autoplay=1","autoplay=0");
                getSrc();
                console.log(htmlString);
                $(vid).attr("src",htmlString);
               
            }
        })
        .fail(function(err) {
            console.log(err)
        });
}

function getSrc()
{
    var replaceWhat="src";
    var str=htmlString;
    var start=str.indexOf(replaceWhat)
    var count=0;
    var end=0;
    for (var x=start; x<str.length; x++)
    {
        if(str.charAt(x)==='"')
        {
            count++;  
        }
        if(count===2)
        {
            end=x;
            break;
        }
    }
    htmlString=str.substring(start+5,end);
}        


