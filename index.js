console.log('Happy developing ✨')

function GetFile(){
    var file = document.getElementById('file').files[0];
    var reader = new FileReader();
    reader.onload = function(e){
        var text = reader.result;
        console.log(text);
    }
    reader.readAsText(file);
}