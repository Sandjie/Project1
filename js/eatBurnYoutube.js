// // $(".item").on("click",function(){
// // console.log($(this).src);
// // });
// var key = "02176ce5dd434df4baa6ac6acbac5145";
// var video = "workout";
// var query = "https://api.cognitive.microsoft.com/bing/v5.0/videos/search?q=" + video;//&count=3&offset=0&mkt=en-us";
// console.log(query)
// $.ajax({
//     method: 'GET',
//     url: query,
//     headers: {
//         "Ocp-Apim-Subscription-Key": key
//     }
// })
//     .done(function (data) {
//         // $(this).addClass("done");
//         console.log('suceess ', data)
//     })



        var query = "https://api.cognitive.microsoft.com/bing/v5.0/videos/search?q=";
        var cal=300; //value obtained from calorie count
        var videoSearch = "burn "+cal+" calories";
        var apiKey = "c8febe508fc74ec89c44069e9b6e99b8";
        var htmlString="";
        $.ajax({
            method: "GET",
            url: query + videoSearch,
            beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",apiKey);
            },
            
        })
        .done(function(data) {
            var item=data.value
            for (var i=0; i<5; i++)//i<item.length
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


