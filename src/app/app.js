$(document).ready(function () {
    header.init();
    console.log(rand());
    console.log(rand(20));
    //page.base('/app');
    page('/', function(){
        listView.init();
    });
    
    page('/new', function(){
        addNew.init();
    });

    page();
});