requirejs.config({
    "baseUrl": "assets/js",
    "paths": {
        "app": "../js"
    }
});

requirejs(["app/jquery.min","app/skel.min","app/util","app/main"],function(){
    alert(4)
});
