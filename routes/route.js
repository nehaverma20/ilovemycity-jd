exports.home=function(req,res){
    res.render('home', {title: 'iLoveMyCity',
    headline: 'Travel-Inspired Designs for destination Cities Around The World'
});
}

exports.city=function(req,res){
    var cityName=req.params.city;
    var title,heading;
    var imageCount=4;
    
    if(cityName==='chandigarh'){
        title="Chandigarh";
        heading="Chandigarh: Where love is in the air";
     }
     else if(cityName==='delhi'){
        title="Delhi";
        heading="Delhi: Good talkers are only found in Delhi";
     }
     else if(cityName==='goa'){
        title="Goa";
        heading="Goa: As you travel, you realize you cover just a tiny part of this world.";
     }
     else if(cityName==='jaipur'){
        title="Jaipur";
        heading="Jaipur: Sparkling, Still, Food, Gorgeous";
        imageCount=6;
     }
     else if(cityName==='shimla'){
        title="Shimla";
        heading="Shimla: Come to Shimla to become someone new";
     }

     res.render('city',{
         title:title,
         headline:headline,
         city:cityName,
         numberOfImages:imageCount
     });
}