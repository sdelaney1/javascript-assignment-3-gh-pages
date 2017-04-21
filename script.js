// Do your work in this file.


var View = document.createElement("div");
View.className = "view";
document.body.appendChild(View);

var Grass = document.createElement("div");
Grass.className = "grass";
View.appendChild(Grass);

var Sun = document.createElement("div");
Sun.className = "sun";
View.appendChild(Sun);

var Mountain = document.createElement("div");
Mountain.className = "mountain";
View.appendChild(Mountain);

var Mountaintop = document.createElement("div");
Mountaintop.className = "mountain-top";
Mountain.appendChild(Mountaintop);



var t = 1;
while (t < 6) {
    var Ray = document.createElement("div");
    Ray.className = "ray-" + t;
    Sun.appendChild(Ray);
    t++;
}

var m = 1;
do {
    var Mountaincap = document.createElement("div");
    Mountaincap.className = "mountain-cap-" + m;
    Mountain.appendChild(Mountaincap);
    m++;
} while (m < 4);