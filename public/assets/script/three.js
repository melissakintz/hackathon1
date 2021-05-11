
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
let mars;
let moon;
const radius = 63;

init();
animate();

function init() {

    const MARS_RADIUS = 2;
    const MOON_RADIUS = .5;
    const SATELLITE_RADIUS = 1;

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, .1, 200 );
    camera.position.set( 10, 10, 1 );

    scene = new THREE.Scene();

    const dirLight = new THREE.DirectionalLight( 0xffffff );
    const light = new THREE.PointLight(0xffffff, 1, 1000);
    dirLight.position.set( 5, 5, 5 );
    scene.add( dirLight, light );

    //MOON 

    const moonGeometry = new THREE.SphereGeometry( MOON_RADIUS, 30, 30 );
    const moonMaterial = new THREE.MeshPhongMaterial( {
        specular: 0xe39105,
        shininess: 5,
        map: textureLoader.load( 'assets/images/moon_texture.jpeg' ),
        specularMap: textureLoader.load( 'assets/images/moon_texture.jpeg' ),
        normalMap: textureLoader.load( 'assets/images/moon_texture.jpeg' ),
        normalScale: new THREE.Vector2( 0.85, 0.85 )
    } );
    moon = new THREE.Mesh( moonGeometry, moonMaterial );
    scene.add( moon );


    //MARS
    const marsGeometry = new THREE.SphereGeometry( MARS_RADIUS, 60, 60 );
    const marsMaterial = new THREE.MeshPhongMaterial( {
        specular: 0xe39105,
        shininess: 5,
        map: textureLoader.load( 'assets/images/mars_6k.jpg' ),
        specularMap: textureLoader.load( 'assets/images/mars_texture.jpeg' ),
        normalMap: textureLoader.load( 'textures/planets/earth_normal_2048.jpg' ),
        normalScale: new THREE.Vector2( 0.85, 0.85 )
    } );
    mars = new THREE.Mesh( marsGeometry, marsMaterial );
    scene.add( mars );

    
    //SATELLITE
    const sateliteGeometry = new THREE.SphereGeometry( 0, 0, 0 );   
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
    
    
    /*LINK */

    // ----------------------------------------------- A href
    // satellite 1
    const link1 = document.createElement( 'a' );
    link1.href = 'https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)';
    link1.textContent = 'MarsWIKI';
    const sat1Link = new CSS2DObject( link1 );
 
    satelite1.add( sat1Link );

    // satellite 2
    const link2 = document.createElement( 'a' );
    link2.href = 'https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)';
    link2.textContent = 'SATELLITE';
    const sat2Link = new CSS2DObject( link2 );
 
    satelite2.add( sat2Link );

    // satellite 3
    const link3 = document.createElement( 'a' );
    link3.href = 'https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)';
    link3.textContent = 'Rover';
    const sat3Link = new CSS2DObject( link3 );
 
    satelite3.add( sat3Link );

    // -----------------------------------------------DIV
    // satellite 1
    const satellite1Div = document.createElement( 'div' );
    satellite1Div.className = 'label';
    satellite1Div.style.marginTop = '-1em';
    const sat1Label = new CSS2DObject( satellite1Div );
    sat1Label.position.set( 0, SATELLITE_RADIUS, 0 );
    satelite1.add( sat1Label );

    // satellite 2
    const satellite2Div = document.createElement( 'div' );
    satellite2Div.className = 'label';
    satellite2Div.style.marginTop = '-1em';
    const sat2Label = new CSS2DObject( satellite2Div );
    sat2Label.position.set( 0, SATELLITE_RADIUS, 0 );
    satelite2.add( sat2Label );

    // satellite 3
    const satellite3Div = document.createElement( 'div' );
    satellite3Div.className = 'label';
    satellite3Div.style.marginTop = '-1em';
    const sat3Label = new CSS2DObject( satellite3Div );
    sat3Label.position.set( 0, SATELLITE_RADIUS, 0 );
    satelite3.add( sat3Label );


    
    // ______________________________________________________STARS

/*

    function stars(){
        
        let scene = document.querySelector('.sky');
        let count = 500;
        let i = 0;
        
        while(i < count){
            let star = document.createElement("i");
            let x = Math.floor(Math.random() * window.innerWidth);
            let y = Math.floor(Math.random() * window.innerHeight);
            let duration = Math.random() * 10;
            let size = Math.random() * 2;

            star.style.left = x+'px';
            star.style.top = y+"px";
            star.style.width = 1+size+'px';
            star.style.height = 1+size+'px';

            scene.appendChild(star);
            i++;
        }
    }

    stars();
*/
    // ------------------------------------------------------ RENDERER

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize( window.innerWidth, window.innerHeight );
    labelRenderer.domElement.classList.add('sky');
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    document.body.appendChild( labelRenderer.domElement );

       // ______________________________________________________STARS


/*
    function stars(){
        
        
        let count = 300;
        let i = 0;

        while(i < count){
            const starI = document.createElement( 'i' );
            satellite3Div.className = 'star';
            const starLabel = new CSS2DObject( starI );
            starLabel.position.set( 0, SATELLITE_RADIUS, 0 );
            scene.add( starLabel );
            i++;
        }
    }

    stars();
*/

    const controls = new OrbitControls( camera, labelRenderer.domElement );
    controls.minDistance = 5;
    controls.maxDistance = 25;

    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    labelRenderer.setSize( window.innerWidth, window.innerHeight );

}


function animate() {

    requestAnimationFrame( animate );

    const elapsed = clock.getElapsedTime();
    
    mars.rotation.y +=  0.003;

    satelite1.position.set( Math.sin( elapsed/4 ) * 7, 0, Math.cos( elapsed/4 ) * 7 );
    satelite2.position.set( Math.sin( elapsed/-5 ) * 7, 5, Math.cos( elapsed/-5 ) * 7 );
    satelite3.position.set( 2, Math.sin( elapsed/-8 ) * 10,  Math.cos( elapsed/-8 ) * 10 );
    moon.position.set( 7, Math.sin( elapsed/20 ) * 55,  Math.cos( elapsed/20 ) * 55 );

    renderer.render( scene, camera );
    labelRenderer.render( scene, camera );

}
