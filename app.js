const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const aboutContent = "The company itself is a very successful company. The words of praise and sorrow, and the like of life, which we must assume! All the pleasures should be chosen with hatred, which, if the option is to be taken further by that distinction, the thing will be pursued and matched by a just architect, but who? It is indeed a matter of sorrows for the debtors, some pains of life will be received by some who justly praise the blessed offices, but by the flattery of the soul they will receive hatred, but when they fall there is none of the accusers. There are other things I will explain, in time I will reveal what the pleasures really are. Let it be in reason that he wants them. Further, the most worthy pursuits are the pleasures that are not pleasures, but pleasures that are greater than the pains and pleasures. The smallest error of refusing to open as if to the pains of flattery or the hardships of life! But then shall I open the pleasure because the older men are more severe in life? Times of enduring the pains of these pleasures in? Any born accuser has no choice but to refuse the like. It is easy to fall on the wise, unless the body is repulsed, it is not a big thing or it will be painful! Do they forsake him by reason of the trouble of the accusers, let something be resolved by desire, of the praisers, let some be spared nothing, and do not see the times in which he is reproached, and flee from the just repudiation? With pains, life's most praiseworthy hate the least! Some may find it laborious or run away from him at times, to make pleasures but fall with the resilience of a wise man. Incidents should be avoided, anyone who is interested in the pain of the truth will open the times of rejection. Because the smallest pain for no one is corrupt? ";
const homeStartingCntent = aboutContent;
const contactContent = "The company itself is a very successful company. The words of praise and sorrow, and the like of life, which we must assume! All the pleasures should be chosen with hatred, which, if the option is to be taken further by that distinction, the thing will be pursued and matched by a just architect, but who? It is indeed a matter of sorrows for the debtors, some pains of life will be received by some who justly praise the blessed offices, but by the flattery of the soul they will receive hatred, but when they fall there is none of the accusers. There are other things I will explain, in time I will reveal what the pleasures really are. Let it be in reason that he wants them. Further, the most worthy pursuits are the pleasures that are not pleasures, but pleasures that are greater than the pains and pleasures. The smallest error of refusing to open as if to the pains of flattery or the hardships of life! But then shall I open the pleasure because the older men are more severe in life? Times of enduring the pains of these pleasures in? Any born accuser has no choice but to refuse the like. It is easy to fall on the wise, unless the body is repulsed, it is not a big thing or it will be painful! Do they forsake him by reason of the trouble of the accusers, let something be resolved by desire, of the praisers, let some be spared nothing, and do not see the times in which he is reproached, and flee from the just repudiation? With pains, life's most praiseworthy hate the least! Some may find it laborious or run away from him at times, to make pleasures but fall with the resilience of a wise man. Incidents should be avoided, anyone who is interested in the pain of the truth will open the times of rejection. Because the smallest pain for no one is corrupt? But he will pursue the benefits of carrying out the services he wants to suffer. The rougher the greater body, we lead this great achievement to pleasures, or else, the error is resolved to be softened! Can we dignify the times that are the fault of the pleasures, finding ways to abandon them?";
const posts = [];

const app = express();

app.set("view engine" , "ejs");

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("home",{
        homecontent : homeStartingCntent,
        publish : posts
    });
});


app.get("/about",function(req,res){
    res.render("about",{
        aboutcontent : aboutContent
    });
});

app.get("/contact",function(req,res){
    res.render("contact",{
        contactcontent : contactContent
    });
});


app.post("/contact",function(req,res){
    res.redirect("/");
});


app.get("/compose",function(req,res){
    res.render("compose");
});


app.post("/compose",function(req,res){

    const posttext = {
        titlepost : req.body.textgiven,
        messagepost : req.body.messagegiven
    }
    posts.push(posttext);
    res.redirect("/");
})

app.get("/post/:topic",function(req,res){
    
    let sp = _.lowerCase(req.params.topic);
    
    posts.forEach(function(post){
        const ll = _.lowerCase(post.titlepost);
        if(ll === sp){
            res.render("post",{
                title : post.titlepost,
                content : post.messagepost
            });
        }   
    });

});


app.listen(3000,function(req,res){
    console.log("port ok");
});