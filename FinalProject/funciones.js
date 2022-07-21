export function findHero(){
    console.log(arrayMarvel);
    $('#findData').keypress(function(){
        
        let name = $('#findData').val();
        if (name != ""){
            let findDataHero = arrayMarvel.find(name);
            console.log(findDataHero.name);
            $('#listaMarvel').html(name);

        }else{
            location.reload();
        }
        
    })
}