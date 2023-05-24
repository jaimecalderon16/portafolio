const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'REACT','PYTHON', 'SASS',
    'TYPESCRIPT', 'FIGMA',
    'EXPRESS', 'MYSQL', 'BOOTSTRAP', 'C#'
];

var tagCloud = TagCloud('.myCanvas', Texts, {

    // Sphere radius in px
    radius: 200,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: false
    
});

tagCloud.pause()

let mouseoverMycanvas = false
const divcontainerCanvas = document.querySelector('.myCanvas');

    divcontainerCanvas.addEventListener('mouseover', () => {
        tagCloud.resume()
    });

    divcontainerCanvas.addEventListener('mouseout', () => {
        mouseoverMycanvas = true;
        tagCloud.pause()
    });



// Giving color to each text in sphere
var color = '#FF5733 ';
document.querySelector('.myCanvas').style.color = color;
