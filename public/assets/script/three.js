
import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';

import { OrbitControls } from 'https://unpkg.com/three@0.119.0/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'https://unpkg.com/three@0.119.0/examples/jsm/renderers/CSS2DRenderer.js';
import { FBXLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/GLTFLoader.js';

let camera, scene, renderer, labelRenderer;

const clock = new THREE.Clock();
const textureLoader = new THREE.TextureLoader();

let satelite1;
let satelite2;
let satelite3;
let satelite4;
let rover1;
let mars;


init();
animate();

function init() {

    const MARS_RADIUS = 2;
    const SATELLITE_RADIUS = 1;

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, .1, 200 );
    camera.position.set( 10, 10, 1 );

    scene = new THREE.Scene();
    scene.background = new THREE.TextureLoader().load("assets/images/sky.jpg");

    const dirLight = new THREE.DirectionalLight( 0xffffff );
    const light = new THREE.PointLight(0xffffff, 1, 1000);
    dirLight.position.set( 5, 5, 5 );
    scene.add( dirLight, light );


    //MARS
    const marsGeometry = new THREE.SphereGeometry( MARS_RADIUS, 60, 60 );
    const marsMaterial = new THREE.MeshPhongMaterial( {
        specular: 0xe39105,
        shininess: 5,
        map: textureLoader.load( 'assets/images/mars_6k.jpg' ),
        specularMap: textureLoader.load( 'assets/images/mars_6k.jpg' ),
        normalMap: textureLoader.load( 'assets/images/mars_texture.jpeg' ),
        normalScale: new THREE.Vector2( 0.85, 0.85 )
    } );
    mars = new THREE.Mesh( marsGeometry, marsMaterial );
    scene.add( mars );

    
    //SATELLITE
    const sateliteGeometry = new THREE.SphereGeometry( 0, 0, 0 );   
    const roverGeometry = new THREE.SphereGeometry( 0, 2, 0 ); 
    const sateliteMaterial = new THREE.MeshPhongMaterial( {
        shininess: 0
    } );

    // satellite 1
    satelite1 = new THREE.Mesh( sateliteGeometry, sateliteMaterial );
    satelite1.scale.multiplyScalar(.1);
    scene.add( satelite1 );

    // satellite 2
    satelite2 = new THREE.Mesh( sateliteGeometry, sateliteMaterial );
    satelite2.scale.multiplyScalar(.1);
    scene.add( satelite2 );

    // satellite 3
    satelite3 = new THREE.Mesh( sateliteGeometry, sateliteMaterial );
    satelite3.scale.multiplyScalar(.1);
    scene.add( satelite3 );

    // satellite 4
    satelite4 = new THREE.Mesh( sateliteGeometry, sateliteMaterial );
    satelite4.scale.multiplyScalar(.1);
    scene.add( satelite4 );

    // rover 1
    rover1 = new THREE.Mesh( roverGeometry, sateliteMaterial );
    rover1.scale.multiplyScalar(.009);
    mars.add( rover1 );

    //Satellite Object

    let fbxLoader  = new FBXLoader();
    let gltfLoader = new GLTFLoader();

    // satellite 1
    fbxLoader.load( 'assets/3dObject/maya2sketchfab.fbx', function ( object ) {
			object.scale.multiplyScalar(1);
            
            satelite1.add( object );
    }) 

    // satellite 2
    gltfLoader.setPath( 'assets/3dObject/sat2/' ).load( 'sat2.gltf', function ( object ) {
        object.scene.scale.multiplyScalar(.1);
        
        satelite2.add( object.scene );
    }) 

    // satellite 3
    gltfLoader.setPath( 'assets/3dObject/sat3/' ).load( 'scene.gltf', function ( object ) {
        object.scene.scale.multiplyScalar(.9);
        
        satelite3.add( object.scene );
    }) 

    // satellite 4
    gltfLoader.setPath( 'assets/3dObject/satelite/' ).load( 'scene.gltf', function ( object ) {
        object.scene.scale.multiplyScalar(.9);

        satelite4.add( object.scene );
    })
    
    // rover 1
    gltfLoader.setPath( 'assets/3dObject/mars_rover/' ).load( 'scene.gltf', function ( object ) {
        object.scene.scale.multiplyScalar(.05);

        rover1.add( object.scene );
        rover1.position.set(-.5, 2.5, -.5);
    }) 
    
    /*LINK */

    // ----------------------------------------------- A href
    // satellite 1
    const link1 = document.createElement( 'a' );
    link1.href = "/Photo/all/curiosity";
    link1.textContent = 'Curiosity';


    // satellite 2
    const link2 = document.createElement( 'a' );
    link2.href = '/Photo/all/opportunity';
    link2.textContent = 'Opportunity';

    // satellite 3
    const link3 = document.createElement( 'a' );
    link3.href = '/Photo/all/spirit';
    link3.textContent = 'Spirit';

    // satellite 4
    const link5 = document.createElement( 'a' );
    link5.href = '/Event/index';
    link5.textContent = 'Astrological events';

    // rover 1
    const link4 = document.createElement( 'a' );
    link4.href = "/Daily/getDailyPic";
    link4.textContent = 'Daily Picture';


    // -----------------------------------------------DIV
    // satellite 1
    const satellite1Div = document.createElement( 'div' );
    satellite1Div.className = 'label';
    satellite1Div.appendChild(link1);
    const sat1Label = new CSS2DObject( satellite1Div );
    sat1Label.position.set( 0, SATELLITE_RADIUS, 0 );
    satelite1.add( sat1Label );

    // satellite 2
    const satellite2Div = document.createElement( 'div' );
    satellite2Div.className = 'label';
    satellite2Div.appendChild(link2);
    const sat2Label = new CSS2DObject( satellite2Div );
    sat2Label.position.set( 0, SATELLITE_RADIUS, 0 );
    satelite2.add( sat2Label );

    // satellite 3
    const satellite3Div = document.createElement( 'div' );
    satellite3Div.className = 'label';
    satellite3Div.appendChild(link3);
    const sat3Label = new CSS2DObject( satellite3Div );
    sat3Label.position.set( 0, SATELLITE_RADIUS, 0 );
    satelite3.add( sat3Label );

    // satellite 4
    const satellite4Div = document.createElement( 'div' );
    satellite4Div.className = 'label';
    satellite4Div.appendChild(link5);
    const sat4Label = new CSS2DObject( satellite4Div );
    sat4Label.position.set( 0, SATELLITE_RADIUS, 0 );
    satelite4.add( sat4Label );

    //rover 1
    const rover1Div = document.createElement( 'div' );
    rover1Div.className = 'label rover';
    rover1Div.appendChild(link4);
    const rov1Label = new CSS2DObject( rover1Div );
    rover1.add( rov1Label );

    
    // ------------------------------------------------------ RENDERER

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );

    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize( window.innerWidth ,window.innerHeight);
    labelRenderer.domElement.classList.add('sky');
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    document.body.appendChild( labelRenderer.domElement );



    const controls = new OrbitControls( camera, labelRenderer.domElement );
    controls.minDistance = 5;
    controls.maxDistance = 25;

    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth ,window.innerHeight );

    labelRenderer.setSize( window.innerWidth, window.innerHeight );

}


function animate() {

    requestAnimationFrame( animate );

    const elapsed = clock.getElapsedTime();
    
    mars.rotation.y +=  0.003;

    satelite1.position.set( Math.sin( elapsed/4 ) * 7, 0, Math.cos( elapsed/4 ) * 7 );
    satelite2.position.set( Math.sin( elapsed/-5 ) * 7, 5, Math.cos( elapsed/-5 ) * 7 );
    satelite3.position.set( 2, Math.sin( elapsed/-8 ) * 10,  Math.cos( elapsed/-8 ) * 10 );
    satelite4.position.set(  Math.sin( elapsed/5 ) * 6, 7, Math.cos( elapsed/5 ) * 6 );

    renderer.render( scene, camera );
    labelRenderer.render( scene, camera );

}
