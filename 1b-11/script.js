function showMap(){
    // "map" divに地図を作成し、指定した場所と縮尺で表示する
    let latitude = parseFloat(document.getElementById("latitude").value);
    let longtitude = parseFloat(document.getElementById("longtitude").value); 
    let magnification = parseFloat(document.getElementById("magnification").value);

    if(magnification <= 0){
        magnification = 1;
    } else if(magnification > 20) {
        magnification = 20;
    }

    let map = L.map('map').setView([latitude, longtitude], magnification);
    
    // コールバック関数の定義
    function click_callback(e) {
        //緯度と経度を表示
        alert(e.latlng);
    }
     
    // 地図がクリックされたらclick_callback()関数を呼ぶ
    map.on('click', click_callback);
    
    // OpenStreetMapタイルレイヤーを追加する
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(map);
}
    