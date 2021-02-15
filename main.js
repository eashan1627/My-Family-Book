var images = [
  "Simpson_Dad_Image.jpg",
  "Mom_Cartoon_Image.jpg",
  "12_Year_Old_Cartoon_Image.jpg",   
];

var labels = [
    "My Dad",
    "My Mom",
    "Me",
]
var x = 0;
function nextlabel() {

if(x == 3)
    {
      x=0;
    }
    document.getElementById("album_2").innerText = labels[x];
    x++;
  }
var i = 0;
function nextslide() {
  
  if(i == 3)
    {
      i=0;
    }
  document.getElementById("album").src = images[i];
  
  i++;
}
