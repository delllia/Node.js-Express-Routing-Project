$(document).ready(function () {

    $('#about').on('click', function() {
        $('#main').empty();
        $.get('/about', function(data){
            $('#main').append(`<div class="section-container"
            <h4>${data.firstName}: ${data.lastName} / ${data.bornDate} / ${data.gender} / ${data.link}</h4></div>`);   
        });
    });

    $('#skills').on('click', function() {
        $('#main').empty();
        $.get('/skills', function(data){
            // $('#main').append();
            data.forEach(e => {
                $('#main').append(`<div class="section-container"
                <h4>${e.name}(${e.value});</h4></div>`);
            });
        });
    });

    $('#studies').on('click', function() {
        $('#main').empty();
        $.get('/studies', function(data){
            // $('#main').append();
            data.forEach(e => {
                $('#main').append(`<div class="section-container"
                <h4>${e.name}: ${e.date} / ${e.type}</h4></div>`);
            });
        });
    });

    $('#experience').on('click', function() {
        $('#main').empty();
        $.get('/studies', function(data){
            // $('#main').append();
            data.forEach(e => {
                $('#main').append(`<div class="section-container"
                <h4>${e.name}: ${e.date}</h4></div>`);
            });
        });
    });

    
    $('#projects').on('click', function() {
        $('#main').empty();
        $('#main').append(`
        <button id='firstPrj'>First Project</button>
        <button id='secondPrj'>Second Project</button>
        </h3>
        <div id="projectsContent"></div>`);
        $('#firstPrj').on('click', function() {
            $('#projectsContent').empty();
            $.get('/projects/1', function(data){
                const firstProject = data[0];
                    $('#projectsContent').append(`<div class="section-container"
                    <h4>${firstProject.id}: ${firstProject.name} / ${firstProject.description} / ${firstProject.imageURL}</h4></div>`);
                console.log(data[0]);
            });
        });
        $('#secondPrj').on('click', function() {
            $('#projectsContent').empty();
            $.get('/projects/2', function(data){
               
                const secondProject = data[0];
                    $('#projectsContent').append(`<div class="section-container"
                    <h4>${secondProject.id}: ${secondProject.name} / ${secondProject.description} / ${secondProject.imageURL}</h4></div>`);
                console.log(data[1]);
            });
        });
       
    });


});