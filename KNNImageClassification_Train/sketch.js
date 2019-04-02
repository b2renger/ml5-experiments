// Create a KNN classifier
let knnClassifier
let featureExtractor;

let images = []

let lImg
let aImg
let tImg
let saveModel
let nimagesLoaded = 0

let birdImage01
let birdImage02
let birdImage03
let birdImage04

let catImage01
let catImage02
let catImage03
let catImage04

let dogImage01
let dogImage02
let dogImage03
let dogImage04

let i = 0 // progress

function preload() {

    birdImg01 = loadImage("images/birds/bird01.jpeg", function (){ i += 1})
    birdImg02 = loadImage("images/birds/bird02.jpeg", function (){ i += 1})
    birdImg03 = loadImage("images/birds/bird03.jpeg", function (){ i += 1})
    birdImg04 = loadImage("images/birds/bird04.jpeg", function (){ i += 1})

    catImg01 = loadImage("images/cats/cat01.jpeg",  function (){ i += 1})
    catImg02 = loadImage("images/cats/cat02.jpeg",  function (){ i += 1})
    catImg03 = loadImage("images/cats/cat03.jpeg",  function (){ i += 1})
    catImg04 = loadImage("images/cats/cat04.jpeg",  function (){ i += 1})

    dogImg01= loadImage("images/dogs/dog01.jpeg",  function (){ i += 1})
    dogImg02= loadImage("images/dogs/dog02.jpeg",  function (){ i += 1})
    dogImg03= loadImage("images/dogs/dog03.jpeg",  function (){ i += 1})
    dogImg04= loadImage("images/dogs/dog04.jpeg",  function (){ i += 1})

}


function setup() {
    // Create a featureExtractor that can extract the already learned features from MobileNet
    featureExtractor = ml5.featureExtractor('MobileNet', modelReady);



    aImg = createButton('add prepared images to model');
    //lImg.position(19, 19);
    aImg.mousePressed(addImages);

    tImg = createButton('train on prepared images');
    //lImg.position(19, 19);
    tImg.mousePressed(trainOnImages);

    saveModel = createButton('save dataset');
    //lImg.position(19, 19);
    saveModel.mousePressed(saveMyKNN);




}

function draw() {

    if (i == 12) {
        select('#images').html('All images loaded')
    }

}



function modelReady() {
    select('#status').html('FeatureExtractor(mobileNet model) Loaded')
    knnClassifier = featureExtractor.classification();


}


function addImages() {

    knnClassifier.addImage(birdImage01, "bird");
    knnClassifier.addImage(birdImage02, "bird");
    knnClassifier.addImage(birdImage03, "bird");
    knnClassifier.addImage(birdImage04, "bird");

    knnClassifier.addImage(catImage01, "cat");
    knnClassifier.addImage(catImage02, "cat");
    knnClassifier.addImage(catImage03, "cat");
    knnClassifier.addImage(catImage04, "cat");

    knnClassifier.addImage(dogImage01, "dog");
    knnClassifier.addImage(dogImage02, "dog");
    knnClassifier.addImage(dogImage03, "dog");
    knnClassifier.addImage(dogImage04, "dog");


}

function trainOnImages() {

    knnClassifier.train();

}



// Save dataset as myKNNDataset.json
function saveMyKNN() {
    knnClassifier.save('myKNNDataset');
}
