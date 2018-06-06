    /*General */
body {
    height: 100vh;
    font-size:16px; 
    font-weight: 300;
    font: 400 'Source Sans Pro',sans-serif;
    line-height: 21px;
    color: #414141;
    background-color: #fff;
}

.body_clase .content-wrapper,
.body_clase.view-mode .content-wrapper {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: -20px;

}

.body_clase .content-wrapper.modo-revision,
.body_clase.view-mode .content-wrapper.modo-revision {
    padding-top: 102px;
}

#actividad {
    margin-bottom: 0px;
    -webkit-transform: none;
    -webkit-transform-style: flat;
}

.slide-wrapper {
    text-align: justify;
}

#actividad .carousel-inner .item-container {
    background-image: none;
    max-width: 1200px;
    -webkit-box-shadow: rgba(0,0,0,0.298039) 0 0px 0px;
       -moz-box-shadow: rgba(0,0,0,0.298039) 0 0px 0px;
            box-shadow: rgba(0,0,0,0.298039) 0 0px 0px;
    padding: 0px;
    position: relative;
}

#swipeview-slider > div {
    background-color: #fff;
}

/*ENLACE WEB*/

#actividad a {
    -webkit-border-radius: 2px;
       -moz-border-radius: 2px;
            border-radius: 2px;
    background-color: #F9F2F4;
    padding: 0px 5px;
    color: #AECE5D;
    font-weight: 600;
    text-decoration: none;
}

#actividad .cke_top a {
    -webkit-border-radius: 0;
       -moz-border-radius: 0;
            border-radius: 0;
    background-color: transparent;
}

/*INDICE LATERAL*/


#indice .units ul li a .title {
    font-size: 16px;
    font-weight: 600;
    color: #666;
    margin: -21px 0 0 35px;
    line-height: 18px;
    display: block;
}


.libro-left #btn-book-index,
#indice .unit-content {
    -webkit-border-radius: 0;
       -moz-border-radius: 0;
            border-radius: 0;
}

#indice .unit-content .header {
    border: 0px solid #9665AB;
    -webkit-border-radius: 0;
       -moz-border-radius: 0;
            border-radius: 0;
}

#book-index #indice .unit-content .actividades .item .title {
    font-weight: 400;
}

#indice .units ul li {
    -webkit-border-radius: 0px;
       -moz-border-radius: 0px;
            border-radius: 0px;
}


#book-index #indice .unit-content a,
#indice .units ul li a,
#indice .actividades a {
    -webkit-border-radius: 0px;
       -moz-border-radius: 0px;
            border-radius: 0px;
    color: #414141;
    background: transparent;
}

#book-index #indice .unit-content a:hover,
#indice .units ul li a:hover,
#indice .actividades a:hover,
#book-index #indice .unit-content a:active,
#indice .units ul li a:active,
#indice .actividades a:active,
#book-index #indice .unit-content a:focus,
#indice .units ul li a:focus,
#indice .actividades a:focus {
    color: #888;,
}


/*hover*/
#list-units li:hover {
    width: 310px;
}


#book-index .col-main {
    top: 0;
    left: 0;
    z-index: 1;
    background: transparent;
    box-shadow: none;
}

#book-index #indice .unit-content {
    margin-top: 0;
    background: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    padding: 20px;
    background-color: #ccc;
    margin-bottom: 0;
}

body:not(.isTablet) #indice .units ul li:not(.disabled) a:hover, #indice .units ul li.active a {
    color: #fff;
    padding: 25px;
}


#book-index #indice .unit-content .actividades .item {
    margin: 0px -20px 2px -20px;
    padding-left: 25px;
    opacity: 1;
    padding-bottom: 0px;
    padding-top: 0px;
}


body:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover,
#book-index #indice .units ul li.active a {
    color: #fff;
    padding: 25px;
    font-weight: 700;
    background-color:transparent;
}


#book-index #indice .units ul li {
    margin-left: 10px;
    margin-right: 13px;
    margin-bottom: 10px;
}


body:not(.isTablet) #book-index #indice .unit-content .actividades .item:hover,
#book-index #indice .unit-content .actividades .item.active,
#book-index #indice .unit-content .actividades .item.current {
    color: #fff;
    background: #eee;
    padding-top: 0px;
    padding-bottom: 0px;
}



body:not(.isTablet) #book-index #indice .unit-content .actividades .item:active,
#book-index #indice .unit-content .actividades .item.active,
#book-index #indice .unit-content .actividades .item.current {
    background: #999;
}

#book-index #indice .unit-content .content,
#book-index #indice .unit-content .actividades {
    padding: 10px;
    margin-top: 0;
}


#indice .unit-content .actividades .item.nivel_6 .title,
#indice .unit-content .actividades .item.nivel_6 .text {
    padding-left: 0;
    font-size: 1.8rem;
}

.zoom_flag_img {
    top: 20px;
}

#book-index #indice .unit-content .content .title-buttons .btn {
    -webkit-border-radius: 0;
       -moz-border-radius: 0;
            border-radius: 0;
}



#indice .unit-content .content {
    display: block !important;
    border: solid 1px #777;
}

/*HEADER*/

#actividad .content .header .title img,
#actividad .content .header .title h3.empty,
#actividad .content .header .chapter {
    display: none;
}

#actividad .content .header {
    border: none;
}

input, button, select, textarea {
    padding-left: 0;
    padding-bottom: 0px;
}

.ikaselkar_demo-navbar h3 {
    width: 75%;
    margin: auto;
    margin-bottom: 15px;
    font-size: 2.0rem;
    font-weight: bold;
}

/**/

/*FOOTER*/

footer {
    width: 100%;
    height: 15px;
    background: #545759;
    color: #fff;
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: center;
}

/**/


/*sopa de letras*/
.rf-tablegrid-wrap table td {
    padding: 0px;
}

#actividad .texto_curso {
    font-size:16px;
}

/*minimizar slide-corregir*/
#actividad .class_slide .review {
    margin-top: 0px;
    text-align: center;
}



#actividad .class_slide {
    padding-bottom: 100px;
    padding-left: 87px;
    padding-top: 14px;
}

body.is_app #actividad .class_slide {
    padding-top: 115px;
}

#actividad .class_slide:last-of-type {
    padding-bottom: 100px;
    padding-left: 87px;
    padding-top: 14px;
}

#actividad .slide-concatenate .class_slide {
    padding-bottom: 0px;
}

#actividad .slide-concatenate:last-of-type .class_slide {
    padding-bottom: 100px;
}

#actividad .content .header .title {
    min-height: 0px;
}

#actividad .content .header .title h3 {
    color: #E76048;
    font-size: 2.4rem;
    font-weight: 400;
}

#actividad .content .header .title h3:before {
    content: '\f101';
    margin-right: 10px;
    font-family: 'FontAwesome';
}

.slide_main input {
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    -webkit-border-radius: 4px;
       -moz-border-radius: 4px;
            border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
       -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
            box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
         -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
       -moz-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -moz-box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
            transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s, -moz-box-shadow ease-in-out .15s;
}

.slide_main input:focus,
.slide_main .form-control:focus {
    border-color: #9664AB;
    outline-width: 0px;
    outline-style: none;
    -webkit-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(133, 200, 57, 0.6);
       -moz-box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(133, 200, 57, 0.6);
            box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(133, 200, 57, 0.6);
}

.slide_main input[disabled],
.slide_main input[readonly],
fieldset[disabled] .slide_main input {
    cursor: not-allowed;
    background-color: #eee;
    opacity: 1;
}

.slide_main input.respuesta_ok {
    border-color: #57e900;
    background: #D1F3BD;
}

.slide_main input.respuesta_ko {
    border-color: #FF3626;
    background: #FFA49D;
}

.slide_main input.solucion {
    border-color: #00BDFF;
    background: #B6ECFF;
}


/*caja verde*/

.bck-box.center.caja-verde{
    display: block;
    padding-bottom: 0px;
    line-height: 1.43em;
    font-size: 1em;
    background-color: #B2CD63;
}


.bck-box.center.caja-verde .bck-content {
    text-align: justify;
    padding-left: 10px;
    padding-right: 10px;
}


/*cajas de videos*/
.video-verde {
    border: solid 10px #8ebb1e;
    border-radius: 10px;
}
.video-azul {
    border: solid 10px #6e8fc5;
    border-radius: 10px;
}
.video-rosa {
    border: solid 10px #ba4990;
    border-radius: 10px;
}


/*caja de actividad*/

.bck-box.caja-actividad.center {
    background-color: white;
    border: #2cbabd 11px solid;
}

.caja-actividad .bck-title {
    background-color: #2cbabd;
    margin: -9px;
    color: white;
    padding-bottom: 10px;
    margin-bottom: 6px;
}



/* NAVBAR (Breadcums) */
#top-navigator {
    float: right;
    display: inline-block;
    width: auto;
    height: 44px;
    overflow: hidden;
    line-height: 5.0rem;
}

#top-navigator.show_left:before {
    background: -webkit-gradient(linear, left top, right top, from(#7aac39), to(transparent));
    background: -webkit-linear-gradient(left, #7aac39, transparent);
    background: -moz-linear-gradient(left, #7aac39, transparent);
    background: -o-linear-gradient(left, #7aac39, transparent);
    background: linear-gradient(to right, #7aac39, transparent);
}

#top-navigator.show_right:after {
    background: -webkit-gradient(linear, right top, left top, from(#7aac39), to(transparent));
    background: -webkit-linear-gradient(right, #7aac39, transparent);
    background: -moz-linear-gradient(right, #7aac39, transparent);
    background: -o-linear-gradient(right, #7aac39, transparent);
    background: linear-gradient(to left, #7aac39, transparent);
}

.ikaselkar_demo-navbar {
    position: fixed;
    bottom:0px;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid black;
    background: #545759;
}





body.is_app .ikaselkar_demo-navbar {
    /*top: 0;*/
    -webkit-transition: top 0.5s linear;
    -o-transition: top 0.5s linear;
    -moz-transition: top 0.5s linear;
    transition: top 0.5s linear;
}

body.is_app .ikaselkar_demo-navbar.ocultar {
    top: -136px;
}

.ikaselkar_demo-navbar .navbar-content {
    width: 100%;
    height: 100%;
    padding: 0 20px;
    text-align: center;
}

.navbar-bottom {
    padding: 0 20px;
}



.edit .logo-publisher {
    top: 2px;
    width: 40px;
    height: 40px;
}

body:not(.edit) .slider-indicators {
    display: none;
}

.ikaselkar_demo-navbar .copyright {
    color: #fff;
    line-height: 5.0rem;
}
/**/

/* Navigators */
.navigator {
    bottom: 0;
    position: absolute;
    width: 100%;
    padding: 0px 97px;
}

.navigator .title {
    width: 200px;
    display: block;
    overflow: hidden;
    -o-text-overflow: ellipsis;
       text-overflow: ellipsis;
    white-space: nowrap;
}

.main-navigator {
    padding: 15px 0px;
    width: 100%;
    border-top: 1px solid #e5e5e5;
}

.navigator .left, .navigator .right {
    width: 49%;
    display: inline-block;
    cursor: pointer;
}

.navigator .left {
    padding-left: 20px;
}

.navigator .right {
    text-align: right;
    padding-right: 20px;
}

.navigator .title {
    font-size: 0.7em;
    line-height: 4.0rem;
    display: inline-block;
    vertical-align: top;
}

.slider-navigator {
    display: inline-block;
    padding: 0 10px;
    color: #fff;
    font-size: 1.4rem;
    -webkit-transition: all ease-in .5s;
    -o-transition: all ease-in .5s;
    -moz-transition: all ease-in .5s;
    transition: all ease-in .5s;
    cursor: pointer;
}

.slider-navigator:hover,
.slider-navigator.disabled {
    opacity: .5;
    filter: alpha(opacity=50);
}

.slider-navigator.disabled {
    cursor: initial;
}

.slide-counter {
    color: #fff;
    font-size: 1.7rem;
}
/**/

/* CKEDITOR */
#actividad .content img {
    margin-top: 10px;
    -webkit-border-radius: 5px;
       -moz-border-radius: 5px;
            border-radius: 5px;
}

/* ACTIVITIES */

#actividad .workspace.test .checkbox-option label.filter-label,
#actividad .workspace.test .radio-option label.filter-label,
#actividad .workspace.true-false .checkbox-option label.filter-label,
#actividad .workspace.true-false .radio-option label.filter-label {
    font-size: 1.8rem;
    font-weight: 300;
}

#actividad .content .workspace.test ul li ul li:before,
#actividad .content .workspace.test ul li .bck-ul li:before {
    display: none;
}

/*Evitar bordes en las lineas del matching*/
#actividad .workspace.matching .img-relaciones img {
    margin: 0;
    border: none;
    -webkit-border-radius: 0;
       -moz-border-radius: 0;
            border-radius: 0;
}

#actividad .workspace.matching .opcion {
    background: #fff;
}
/**/
/*Classify activities*/
#actividad .workspace.clasificar .clasificar_lista .classify-item {
    background: #fff;
}

#actividad .workspace.clasificar .clasificar_conjuntos .conjunto .group-box {
    background: #fff;
}
/**/
/*Ordering activities*/
#actividad .workspace.ordenar .js-rank-item {
    background: #fff;
}
/**/

#actividad .content .normal-img,  #actividad .content figure.normal-img img {
    border: none;
    -webkit-border-radius: 0;
       -moz-border-radius: 0;
            border-radius: 0;
}

#actividad .content figure.normal-img {
    margin: 0;
    padding: 0;
}

#actividad .content .bck-img-align-right {
    float: right;
    padding: 6px;
}

#actividad .content .bck-img-align-center {
    text-align: center;
}

.bck-i-fullscreen figcaption {
    border-bottom: 2px solid black;
    -webkit-border-radius: 5px;
       -moz-border-radius: 5px;
            border-radius: 5px;
    background: #FDFDFD;
}

#actividad .player.audio {
    background-image: url(audio_icon.png);
    -webkit-background-size: 100% 100%;
       -moz-background-size: 100%;
         -o-background-size: 100%;
            background-size: 100%;
    background-position: 0;
    background-color: transparent;
}

.bck-title {
    font-size: 2.4rem;
}

/*titulos ikaselkar*/


.bck-title-1 {
    color: #71C169;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #71C169;
    margin-bottom: 36px;
}

.bck-title-1:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Kokatze_1.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-2{
    color: #71C169;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #71C169;
    margin-bottom: 36px;
}

.bck-title-2:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Arakatze_1.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}


.bck-title-3 {
    font-size: 2.4rem;
    color: #4dacde;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #52addf;
    margin-bottom: 36px;
}


.bck-title-3:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Miatze_2.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}


.bck-title-4 {
    font-size: 2.4rem;
    color: #4dacde;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #52addf;
    margin-bottom: 36px;
}


.bck-title-4:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Ulertze_2.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-5 {
    font-size: 2.4rem;
    color: #4dacde;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #52addf;
    margin-bottom: 36px;
}


.bck-title-5:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Aplikazio_2.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}


.bck-title-6 {
    font-size: 2.4rem;
    color: #4dacde;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #52addf;
    margin-bottom: 36px;
}


.bck-title-6:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Autorregulazio_2.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-7 {
    font-size: 2.4rem;
    color: #4dacde;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #52addf;
    margin-bottom: 36px;
}


.bck-title-7:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/IntegrazioSinplea_2.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}


.bck-title-8 {
    font-size: 2.4rem;
    color: #4dacde;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #52addf;
    margin-bottom: 36px;
}


.bck-title-8:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Egituratze_2.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}



.bck-title-9 {
    font-size: 2.4rem;
    color: #DE1576;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #DE1576;
    margin-bottom: 36px;
}


.bck-title-9:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/IntegrazioSinplea_3.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}



.bck-title-10 {
    font-size: 2.4rem;
    color: #DE1576;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #DE1576;
    margin-bottom: 36px;
}


.bck-title-10:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Autorregulazio_3.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}


.bck-title-11 {
    font-size: 2.4rem;
    color: #DE1576;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #DE1576;
    margin-bottom: 36px;
}

.bck-title-11:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Kokatze_3.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-12 {
    font-size: 2.4rem;
    color: #4dacde;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #52addf;
    margin-bottom: 36px;
}


.bck-title-12:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Kokatze_2.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}


.bck-title-13 {
    font-size: 2.4rem;
    color: #4dacde;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #52addf;
    margin-bottom: 36px;
}


.bck-title-13:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Arakatze_2.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}


.bck-title-14 {
    font-size: 2.4rem;
    color: #DE1576;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #DE1576;
    margin-bottom: 36px;
}

.bck-title-14:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Arakatze_3.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-15 {
    font-size: 2.4rem;
    color: #4dacde;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #52addf;
    margin-bottom: 36px;
}


.bck-title-15:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Planifikazio_2.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-16{
    color: #71C169;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #71C169;
    margin-bottom: 36px;
}

.bck-title-16:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Planifikazio_1.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-17 {
    font-size: 2.4rem;
    color: #DE1576;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #DE1576;
    margin-bottom: 36px;
}

.bck-title-17:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Planifikazio_3.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-18{
    color: #71C169;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #71C169;
    margin-bottom: 36px;
}

.bck-title-18:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Ulertze_1.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-19 {
    font-size: 2.4rem;
    color: #DE1576;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #DE1576;
    margin-bottom: 36px;
}

.bck-title-19:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Ulertze_3.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-20{
    color: #71C169;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #71C169;
    margin-bottom: 36px;
}

.bck-title-20:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Miatze_1.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-21 {
    font-size: 2.4rem;
    color: #DE1576;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #DE1576;
    margin-bottom: 36px;
}

.bck-title-21:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Miatze_3.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-22{
    color: #71C169;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #71C169;
    margin-bottom: 36px;
}

.bck-title-22:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Aplikazio_1.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-23 {
    font-size: 2.4rem;
    color: #DE1576;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #DE1576;
    margin-bottom: 36px;
}

.bck-title-23:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Aplikazio_3.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-24{
    color: #71C169;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #71C169;
    margin-bottom: 36px;
}

.bck-title-24:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Egituratze_1.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-25 {
    font-size: 2.4rem;
    color: #DE1576;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #DE1576;
    margin-bottom: 36px;
}

.bck-title-25:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Egituratze_3.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-26{
    color: #71C169;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #71C169;
    margin-bottom: 36px;
}

.bck-title-26:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/IntegrazioSinplea_1.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-27{
    color: #71C169;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #71C169;
    margin-bottom: 36px;
}

.bck-title-27:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/IntegrazioKonplexua_1.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-28 {
    font-size: 2.4rem;
    color: #DE1576;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #DE1576;
    margin-bottom: 36px;
}

.bck-title-28:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/IntegrazioKonplexua_3.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-29 {
    font-size: 2.4rem;
    color: #4dacde;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #52addf;
    margin-bottom: 36px;
}


.bck-title-29:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/IntegrazioKonplexua_2.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-30{
    color: #71C169;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #71C169;
    margin-bottom: 36px;
}

.bck-title-30:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/Autorregulazio_1.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title-31 {
    font-size: 2.4rem;
    color: #4dacde;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #52addf;
    margin-bottom: 36px;
}


.bck-title-31:before {
    content: ' '!important;
    margin-right: 10px;
    padding: 28px;
    background-size: contain;
    background-image: url(../ikaselkar_demo/imagenes/DHF.png);
    float: left;
    background-repeat: no-repeat;
    display: inline-block;
    border-bottom: 0px;
}

.bck-title.bck-title-32 {
    font-variant: all-petite-caps; 
    background: #149ed5;
    background: -moz-linear-gradient(left, #149ed5 47%, #60b8e8 100%);
    background: -webkit-linear-gradient(left, #149ed5 47%,#60b8e8 100%);
    background: linear-gradient(to right, #149ed5 47%,#60b8e8 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#149ed5', endColorstr='#60b8e8',GradientType=1 );
    font-size: 3rem;
    color: #eee;
    padding: 4px;
    padding-left: 12%;
    width: fit-content;
    box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.39);
}

.bck-title.bck-title-33 strong {
    color: #fff;
    width: fit-content;
    border-radius: 0px 30px 30px 0px;
    background: linear-gradient(to right, #EF94BA 0%, #E75087 100%);
    padding: 10px 20px 10px 10px;
    color: white;
    font-weight: 600;
    margin-bottom: 20px;
}

.bck-title.bck-title-33 {
    color: #EF94BA;
    padding: 15px 0px 15px 0px;
}



/**/


.bck-enfasis, strong{
color:black;
    font-weight: 600;
}

strong {
    color: black;
}

/*LISTAS DESORDENADAS*/

.texto_curso ul li {
   padding-left: 42px;
}

#actividad .texto_curso li,
#actividad .workspace ul li li {
    position: relative;
    margin-bottom: 0px;
    margin-left: 30px;
}

#actividad .texto_curso li:last-of-type,
#actividad .workspace ul li li:last-of-type {
    margin-bottom: 0px;
}

#actividad .content ul.bck-ul li {
    position: relative;
    list-style: none;
}


#actividad .popover-background.shown .popover-content > ul > li:before{
     position: inherit;
}


#actividad .content .texto_curso ul li:before,
#actividad .content .workspace ul li ul li:before,
#actividad .content .texto_curso .bck-ul li:before,
#actividad .content .workspace ul li .bck-ul li:before ,
#actividad .popover-background.shown .popover-content > ul > li:before{
    background-color: #444;
    height: 4px;
    width: 4px;
    margin-top: 9px;
    margin-left: -18px;
    border: none;
}


.texto_curso ul li:before, .workspace ul li ul li:before, .cke_contents ul li:before {
    background-color: #444;
    height: 4px;
    width: 4px;
    margin-top: 9px;
    margin-left: -18px;
    border: none;
}

.texto_curso ul li, .workspace ul li ul li, .cke_contents ul li {
    margin-bottom: 0px;
}



/*LISTAS ORDENADAS*/
.content ol li, .cke_contents ol li {
    counter-increment: bck-li-counter 1;
    position: relative;
    padding-left: 0px;
}

.content ol li:before, .cke_contents ol li:before {
    content: counter(bck-li-counter)'.';
    position: absolute;
    margin-left: -30px;
    font-weight: normal;
    font-size: 1.8rem;
    text-align: right;
    color: #414141;
    margin-top: 0px;
}

#actividad .content .texto_curso .bck-ol li,
#actividad .content .cke_contents .bck-ol li,
#actividad .popover-content .bck-ol li,
#actividad .content .workspace ul li .bck-ol li {
    list-style-type: none;
    counter-increment: bck-li-counter 1;
    position: relative;
    padding-left: 4px;
    margin-bottom: 10px;
}


#actividad .content .cke_contents .bck-ol li:before,
#actividad .content .texto_curso .bck-ol li:before,
#actividad .popover-content .bck-ol li:before,
#actividad .content .workspace ul li .bck-ol li:before {
    content: counter(bck-li-counter)".";
    position: absolute;
    left: 0px;
    text-align: end;
    color: #fff;
    font-size: 1.9rem;
    font-family: sans-serif;
    font-weight: 600;
}

.content ol li:before, .edit .cke_contents ol li:before {
    margin-left: -20px;
}

.content ol, .edit .cke_contents ol {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
    padding-left: 20px;
}

/*LISTA ORDENADA 1*/ 


#actividad .content .texto_curso .bck-ol-1 li:before,
#actividad .content .cke_contents .bck-ol-1 li:before,
#actividad .popover-content .bck-ol-1 li:before,
#actividad .content .workspace ul li .bck-ol-1 li:before {
    content: counter(bck-li-counter)" ";
    width: 22px;
    border-radius: 4px;
    position: absolute;
    text-align: center!important;
    color: #fff!important;
    background-color: #71C169;
    font-weight: 600!important;
    font-family: sans-serif;
    margin-left: -30px;
}



/*LISTA ORDENADA 2*/

#actividad .content .cke_contents .bck-ol-2,
#actividad .content .texto_curso .bck-ol-2,
#actividad .content .workspace ul li .bck-ol-2 {
    list-style-type: none;
    counter-reset: bck-li-counter;
}



#actividad .content .cke_contents .bck-ol-2 li,
#actividad .content .texto_curso .bck-ol-2 li,
#actividad .popover-content .bck-ol-2 li,
#actividad .content .workspace ul li .bck-ol-2 li {
    counter-increment: bck-li-counter;
    position: relative;
    z-index: 0;
}

#actividad .content .cke_contents .bck-ol-2 li:before,
#actividad .content .texto_curso ol.bck-ol-2 li:before,
#actividad .popover-content ol.bck-ol-2 li:before,
#actividad .content .workspace ul li ol.bck-ol-2 li:before {
    content: counter(bck-li-counter, lower-alpha)")";
    color: #71C169!important;
    font-weight: bold;
    margin-top: 0;
    padding-right: 10px;
    text-align: right;
}

/*LISTA ORDENADA 3*/
#actividad .content .cke_contents .bck-ol-3,
#actividad .content .texto_curso .bck-ol-3,
#actividad .content .workspace ul li .bck-ol-3 {
    list-style-type: none;
    counter-reset: bck-li-counter;
}

#actividad .content .texto_curso .bck-ol-3 li,
#actividad .content .cke_contents .bck-ol-3 li,
#actividad .popover-content .bck-ol-3 li,
#actividad .content .workspace ul li .bck-ol-3 li {
    counter-increment: bck-li-counter;
    padding-left: 4px;
    position: relative;
    z-index: 0;
}

#actividad .content .cke_contents .bck-ol-3 li:before,
#actividad .content .texto_curso ol.bck-ol-3 li:before,
#actividad .popover-content ol.bck-ol-3 li:before,
#actividad .content .workspace ul li ol.bck-ol-3 li:before {
    content: counter(bck-li-counter)" ";
    width: 22px;
    border-radius: 4px;
    position: absolute;
    text-align: center!important;
    color: #fff!important;
    background-color: #069bda;
    font-weight: 600!important;
    font-family: sans-serif;
    margin-left: -28px;
}
/**/


/*lista ordenada 4*/
#actividad .content .cke_contents .bck-ol-4,
#actividad .content .texto_curso .bck-ol-4, #actividad .content .workspace ul li .bck-ol-4 {
    list-style-type: none;
    counter-reset: bck-li-counter;
}

#actividad .content .cke_contents .bck-ol-4 li,
#actividad .content .texto_curso .bck-ol-4 li, #actividad .popover-content .bck-ol-4 li, #actividad .content .workspace ul li .bck-ol-4 li {
    counter-increment: bck-li-counter;
    position: relative;
    z-index: 0;
}

#actividad .content .cke_contents .bck-ol-4 li:before,
#actividad .content .texto_curso ol.bck-ol-4 li:before, #actividad .popover-content ol.bck-ol-4 li:before, #actividad .content .workspace ul li ol.bck-ol-4 li:before {
    content: counter(bck-li-counter, lower-alpha)")";
    color: #069BDA!important;
    font-weight: bold;
    margin-top: 0;
    padding-right: 10px;
    text-align: right;
}



/*lista ordenada 5*/
#actividad .content .cke_contents .bck-ol-5,
#actividad .content .texto_curso .bck-ol-5,
#actividad .content .workspace ul li .bck-ol-5 {
    list-style-type: none;
    counter-reset: bck-li-counter;
}

#actividad .content .cke_contents .bck-ol-5 li,
#actividad .content .texto_curso .bck-ol-5 li,
#actividad .popover-content .bck-ol-5 li,
#actividad .content .workspace ul li .bck-ol-5 li {
    counter-increment: bck-li-counter;
    padding-left: 4px;
    position: relative;
    z-index: 0;
}

#actividad .content .cke_contents .bck-ol-5 li:before,
#actividad .content .texto_curso ol.bck-ol-5 li:before,
#actividad .popover-content ol.bck-ol-5li:before,
#actividad .content .workspace ul li ol.bck-ol-5 li:before {
    content: counter(bck-li-counter)" ";
    width: 22px;
    border-radius: 4px;
    position: absolute;
    text-align: center!important;
    color: #fff!important;
    background-color: #DE1576;
    font-weight: 600!important;
    font-family: sans-serif;
    margin-left: -28px;
}



/*lista ordenada 6*/

#actividad .content .cke_contents .bck-ol-6,
#actividad .content .texto_curso .bck-ol-6, #actividad .content .workspace ul li .bck-ol-6 {
    list-style-type: none;
    counter-reset: bck-li-counter;
}

#actividad .content .cke_contents .bck-ol-6 li,
#actividad .content .texto_curso .bck-ol-6 li, #actividad .popover-content .bck-ol-6 li, #actividad .content .workspace ul li .bck-ol-6 li {
    counter-increment: bck-li-counter;
    position: relative;
    z-index: 0;
}

#actividad .content .cke_contents .bck-ol-6 li:before,
#actividad .content .texto_curso ol.bck-ol-6 li:before, #actividad .popover-content ol.bck-ol-6 li:before, #actividad .content .workspace ul li ol.bck-ol-6 li:before {
    content: counter(bck-li-counter, lower-alpha)")";
    color: #DE1576!important;
    font-weight: bold;
    margin-top: 0;
    padding-right: 10px;
    text-align: right;
}


/*lista ordenada 7*/ /*Azpizeregina-titulua*/
#actividad .content .cke_contents .bck-ol-7,
#actividad .content .texto_curso .bck-ol-7, #actividad .content .workspace ul li .bck-ol-7 {
    list-style-type: none;
    counter-reset: bck-li-counter;
}

#actividad .content .cke_contents .bck-ol-7 li,
#actividad .content .texto_curso .bck-ol-7 li, #actividad .popover-content .bck-ol-7 li, #actividad .content .workspace ul li .bck-ol-7 li {
    counter-increment: bck-li-counter;
    position: relative;
    z-index: 0;
    background: linear-gradient(to right, #d7dc49 0%, #9dc652 100%);
    font-size: 2.4rem;
    font-weight: 400;
    width: fit-content;
    padding: 5px 70px 5px 70px;
    border-radius: 10px;
    box-shadow: 5px 5px 15px #888888;
    margin-left: -20px;
}

#actividad .content .cke_contents .bck-ol-7 li:before,
#actividad .content .texto_curso ol.bck-ol-7 li:before, #actividad .popover-content ol.bck-ol-7 li:before, #actividad .content .workspace ul li ol.bck-ol-7 li:before {
    content: counter(bck-li-counter, upper-alpha)"";
    color: white;
    font-weight: 700;
    padding: 5px 20px;
    margin-right: 11px;
    background: linear-gradient(to right, rgba(183,207,88,1) 0%, rgba(151,184,84,1) 100%);
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    font-size: 2.4rem;
    top:0px;
    left: 20px;
}


/*lista ordenada 8*/ /*Ikerketa-titulua*/

#actividad .content .cke_contents .bck-ol-8,
#actividad .content .texto_curso .bck-ol-8, #actividad .content .workspace ul li .bck-ol-8 {
    list-style-type: none;
    counter-reset: bck-li-counter;
}

#actividad .content .cke_contents .bck-ol-8 li,
#actividad .content .texto_curso .bck-ol-8 li, #actividad .popover-content .bck-ol-8 li, #actividad .content .workspace ul li .bck-ol-8 li {
    counter-increment: bck-li-counter;
    position: relative;
    z-index: 0;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    font-size: 2.4rem;
    font-weight: 400;
    width: fit-content;
    padding: 5px 70px 5px 70px;
    border-radius: 10px;
    box-shadow: 5px 5px 15px #888888;
    margin-left: 25%;
    color:#fff;
}

#actividad .content .cke_contents .bck-ol-8 li:before,
#actividad .content .texto_curso ol.bck-ol-8 li:before, #actividad .popover-content ol.bck-ol-8 li:before, #actividad .content .workspace ul li ol.bck-ol-8 li:before {
    content: counter(bck-li-counter)"";
    color: white;
    font-weight: 700;
    padding: 5px 20px;
    margin-right: 11px;
    background: linear-gradient(to right, rgba(183,207,88,1) 0%, rgba(151,184,84,1) 100%);
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    font-size: 2.4rem;
    top:0px;
}



/*BOXES*/

.bck-box {
    position: relative;
    max-width: 100%;
    margin-bottom: 20px;
    text-align: left;
    background: #fff;
}

.bck-box.center {
    display: block;
    background-color: #fff;
    text-align: left;
    padding: 5px;

}
.bck-box p {
    display: inline-block;
    width: 100%;
}

.bck-box.center .bck-content {
    position: relative;
}

.bck-box.left, img[style~="float:right"] {
    float: left;
    margin-right: 30px;
}

.bck-box.right, img[style~="float:left"] {
    float: right;
    margin-left: 30px;
}

.bck-box img {
    max-width: 100%;
}

.bck-box .bck-content {
    text-align: justify;
    padding-left: 10px;
    padding-right: 15px;
}

.bck-box .bck-title {
    font-size: 2.5rem;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
}


/*CAJA1*/

.bck-box.bck-box-1 {
   min-height: 80px;
   margin-top: 15px;
   display: block; 
   background-color: #AAD8F3;
   border-radius: 5px; 
   text-align: left; 
   padding: 5px; 
}

.bck-box-1 .bck-title {
    color: #069BDA;
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 400;
    padding-left: 13px;
    padding-top: 10px;
}


/*CAJA2*/

.bck-box.bck-box-2 {
    color#fff;
    background: #8C9ACE;
    border-left: 54px solid #807FB5;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    text-align: left;
    background-image: url(../ikaselkar_demo/imagenes/borderbox1805201801.png);
    background-repeat: repeat-y;
    background-position: right;
}

.bck-box.bck-box-2 .bck-title{
   padding: 20px 10px 0px 20px;
}

.bck-box.bck-box-2:before {
    background-image: none;
    font-family: 'FontAwesome';
    content: "\f069";
    color: #8C9ACE;
    padding: 0px;
    font-size: 27px;
    margin-right: 10px;
    margin-left: -44px;
    float: left;
    top: 40%;
    position: absolute;
}

.bck-box.bck-box-2 .bck-content {
    border: 0;
    padding: 10px 25px;
}

.bck-box.bck-box-2 .bck-title p {
    width: auto;
}


#actividad .content .bck-box.bck-box-2 .header.bck-title .title {
    display: inline-block;
}

#actividad .content .bck-box.bck-box-2 .header.bck-title .title h3 {
    margin: 0;
    color: #9BCB20;
    font-size: 1.8rem;
    font-weight: bold;
}

#actividad .content .bck-box.bck-box-2 .header.bck-title .title h3:before {
    content: '';
}


.bck-box-3.center {
    display: block;
    background-color: #eee;
    border-radius: 0px;
    border-left: 14px solid #F5AB53;
    text-align: left;
    padding: 11px 13px;
    font-family: initial;
    box-shadow: 10px 10px 15px #888888;
}

.bck-box-4.center {
    background-color: #F6F6F6;
    padding: 15px;
    border-radius: 22px;
    box-shadow: 0px 2px 15px 8px rgba(0, 0, 0, 0.34);
}


.bck-box-4.center .bck-title {
    font-size: 2rem;
    border-radius: 22px 22px 0px 0px;
    color: white;
    background-color: #df1b7a;
    font-weight: 600;
    text-align: center;
    padding: 7px 0px 0px;
    margin: -15px -15px 10px;
    background: -moz-linear-gradient(left, #d64d91 0%, #a33386 100%);
    background: -webkit-linear-gradient(left, #d64d91 0%,#a33386 100%);
    background: linear-gradient(to right, #d64d91 0%,#a33386 100%);
}

/*caja 5*/

.bck-box.bck-box-5.center {
    background-color: #fbfbfb;
    border: #27c127 solid 3px;
    border-radius: 10px;
    padding: 19px;
   
    min-height: 175px;
}

.bck-box.bck-box-5.center:before {
    background-image: url(../ikaselkar_demo/imagenes/info-h.fw.png);
    content: " ";
    position: absolute;
    left: -42px;
    z-index: 100;
    padding: 70px;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
}

.bck-box-5 .bck-title {
    margin-top: -20px;
}


/*caja 6*/

.bck-box.bck-box-6.center {
    background-color: #fbfbfb;
    border: #0095DA solid 3px;
    border-radius: 10px;
    padding: 19px;
    min-height: 175px;
}

.bck-box.bck-box-6.center:before {
     background-image: url(../ikaselkar_demo/imagenes/info-g.fw.png);
    content: " ";
    position: absolute;
    left: -42px;
    z-index: 100;
    padding: 70px;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
}

.bck-box-6 .bck-title {
     text-align: center;
    margin: -20px -19px 11px;
    padding: 19px;
    background: linear-gradient(to bottom, rgba(0,149,218,1) 0%, rgba(24,175,240,1) 100%);
    color: white;
}


.bck-box.bck-box-7.center {
    position: relative;
    background: url(../ikaselkar_demo/imagenes/04kuadernoa23052018.png) repeat-y;
    padding: 23px 17px 36px 80px;
    background-size: cover;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box.bck-box-8.center {
    position: relative;
    background: url(../ikaselkar_demo/imagenes/kuadernoa2305201802.png) repeat-y;
    background-size: cover;
    padding: 20px 17px 30px 95px;
    box-shadow: 5px 5px 15px #888888;
}


.bck-box.bck-box-9.center {
    position: relative;
    background-image: url(../ikaselkar_demo/imagenes/06kuadernoa23052018.png);
    padding: 70px 25px 36px 25px;
    background-size: 95%;
    background-color: #f7f7f5;
    background-repeat-y: no-repeat;
    background-repeat-x: repeat;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box.bck-box-10.center {
    position: relative;
    background: url(../ikaselkar_demo/imagenes/kuadernoa2305201805.png) repeat-y;
    padding: 56px 17px 36px 34px;
    background-size: cover;
    box-shadow: 5px 5px 15px #888888;
}

/*caja IKERGAIA 1*/
.bck-box.bck-box-11.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-11 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}

.bck-box-11 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
}

.bck-box.bck-box-11.center:before{
    content: "1";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
}

/*caja IKERGAIA 2*/
.bck-box.bck-box-12.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-12 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}

.bck-box-12 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
   
}

.bck-box.bck-box-12.center:before{
    content: "2";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
    
}
 
/*caja IKERGAIA 3*/
.bck-box.bck-box-13.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-13 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}

.bck-box-13 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
}

.bck-box.bck-box-13.center:before{
    content: "3";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
}


.bck-box.bck-box-20.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-20 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}
.bck-box-20 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center; 
}

.bck-box.bck-box-20.center:before{
    content: "4";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
}

/*ikarketa 5*/

.bck-box.bck-box-21.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-21 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}

.bck-box-21 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
    
}

.bck-box.bck-box-21.center:before{
    content: "5";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
    
}

/*ikarketa 6*/

.bck-box.bck-box-22.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-22 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}

.bck-box-22 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
    
}

.bck-box.bck-box-22.center:before{
    content: "6";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
    
}

.bck-box.bck-box-15.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-15 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}

.bck-box.bck-box-15.center:before{
    content: "A";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
    
}

.bck-box-15 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
  
}

.bck-box.bck-box-16.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-16 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}

.bck-box-16 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
   
}

.bck-box.bck-box-16.center:before{
    content: "B";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
   
}

.bck-box.bck-box-17.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-17 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}

.bck-box-17 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
   
}

.bck-box.bck-box-17.center:before{
    content: "C";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
    
}

.bck-box.bck-box-18.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-18 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}

.bck-box-18 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
    
}

.bck-box.bck-box-18.center:before{
    content: "D";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
    
}

/*ikarketa E*/

.bck-box.bck-box-19.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-19 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}

.bck-box-19 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
   
}

.bck-box.bck-box-19.center:before{
    content: "E";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
   
}

/*ikarketa F*/

.bck-box.bck-box-23.center {
    border-left: 46px solid #B3C930;
    display: block;
    border-radius: 5px;
    text-align: left;
    padding: 5px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(to right, #06B4BC 0%, #008A87 100%);
    padding: 10px;
    box-shadow: 5px 5px 15px #888888;
}

.bck-box-23 .bck-title {
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}

.bck-box-23 .bck-content {
    padding: 10px;
    background: #fff;
    border-radius: 0px 0px 10px 10px;
    text-align: center;
   
}

.bck-box.bck-box-23.center:before{
    content: "F";
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: -32px;
    color: #fff;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
   
}


/*por definir el nombre*/
.bck-box.bck-box-14.center {
    position: relative;
    background: url(../ikaselkar_demo/imagenes/RR11816181_1.png) repeat-y;
    padding: 23px 17px 36px 80px;
    background-size: cover;
}

.bck-box.bck-box-14.center .bck-title{
    box-shadow: 5px 5px 15px #888888;
    font-weight: 600;
    padding: 0px 10px 0px 20px;
    color: #fff;
    font-size: 3.8rem;
    background: #249bb4;
    background: -moz-linear-gradient(left, #249bb4 0%, #81b69a 100%);
    background: -webkit-linear-gradient(left, #249bb4 0%,#81b69a 100%);
    background: linear-gradient(to right, #249bb4 0%,#81b69a 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#249bb4', endColorstr='#81b69a',GradientType=1 );
    position: absolute;
    top: 25%;
    left: 0px;
  }



/*ENLACES*/

/**Títulos**/

/**1**/
.presentation, .presentation-2, .titulo-video, .titulo-video-2, .actividad-scorm,
.actividad-blink, .slider-imagen, .trabajar-imagen, .titulo-escuchar {
    color: #6B6B6B;
    font-size: 1.9rem;
    font-weight: bold;
    background-color: #EEE;
    border-top: 2px solid #ddd;
    border-bottom: 2px solid #ddd;
    display: block;
    width: 100%;
    margin: 10px auto;
    margin-left: 0;
    padding: 10px;
    padding-left: 0px;
    text-align: left;
    line-height: 2.4rem;
}

.presentation:before, .presentation-2:before, .titulo-video:before, .titulo-video-2:before, .actividad-scorm:before,
.actividad-blink:before, .slider-imagen:before, .trabajar-imagen:before, .titulo-escuchar:before {
    content: '';
    background-repeat: no-repeat;
    -webkit-background-size: cover;
       -moz-background-size: cover;
         -o-background-size: cover;
            background-size: cover;
    background-position: center center;
    display: inline-block;
    height: 30px;
    width: 30px;
    margin: 10px 20px;
    margin-top: -2px;
    float: left;
}

.presentation:before {
    background-image: url(icon_presentacion.png);
}

.presentation-2:before {
    background-image: url(icon_presentacion-2.png);
}

.titulo-video:before {
    background-image: url(icon_presentacionvideo.png);
}

.titulo-video-2:before {
    background-image: url(icon_presentacionvideo-2.png);
}

.actividad-scorm:before {
    background-image: url(icon_actividadscorm.png);
}

.actividad-blink:before {
    background-image: url(icon_actividadblink.png);
}

.slider-imagen:before {
    background-image: url(icon_sliderimagen.png);
}

.trabajar-imagen:before {
    background-image: url(icon_trabajar_imagen.png);
}

.titulo-escuchar:before {
    background-image: url(icon_escuchar.png);
}

/**2**/

.titulo-2 {
    position: relative;
    border-bottom-style: solid;
    border-width: 1px;
    font-weight: bold;
    color: black;
    line-height: 4.0rem;
    padding-left: 40px;
}

.titulo-2:before {
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
       -moz-background-size: cover;
         -o-background-size: cover;
            background-size: cover;
    display: inline-block;
    width: 35px;
    height: 35px;
    top: 5px;
    left: 0px;
}

.titulo-2.hablar {
    border-color: #FF020B;
}

.titulo-2.hablar:before {
    background-image: url(titulo2_hablar_icon.png);
}

.titulo-2.escuchar {
    border-color: #006EBC;
}

.titulo-2.escuchar:before {
    background-image: url(titulo2_escuchar_icon.png);
}

.titulo-2.leer {
    border-color: #009A92;
}

.titulo-2.leer:before {
    background-image: url(titulo2_leer_icon.png);
}

.titulo-2.escribir {
    border-color: #991986;
}

.titulo-2.escribir:before {
    background-image: url(titulo2_escribir_icon.png);
}

.titulo-2.aprender {
    border-color: #FF8500;
}

.titulo-2.aprender:before {
    background-image: url(titulo2_aprender_icon.png);
}


/**Imágenes-Enlaces**/

.presentation-img, .presentation-img .bck-content, .presentation-img p, #actividad .presentation-img img,
.presentation-video, .presentation-video .bck-content, .presentation-video p, #actividad .presentation-video img,
.presentation-video-2, .presentation-video-2 .bck-content, .presentation-video-2 p, #actividad .presentation-video-2 img,
.slider-img, .slider-img .bck-content, .slider-img p, #actividad .slider-img img,
.trabajar-img, .trabajar-img .bck-content, .trabajar-img p, #actividad .trabajar-img img,
.escuchar-box, .escuchar-box .bck-content, .escuchar-box p, #actividad .escuchar-box img,
.actividad-scorm-box, .actividad-scorm-box .bck-content, .actividad-scorm-box p, #actividad .actividad-scorm-box img {
    display: inline-block;
    padding: 0;
    margin: 0;
}

.presentation-img, .presentation-video, .presentation-video-2, .slider-img, .trabajar-img, .escuchar-box, .actividad-scorm-box {
    position: relative;
    margin-top: 20px;
}

.presentation-img .bck-content:before, .presentation-video .bck-content:before, .presentation-video-2 .bck-content:before,
.slider-img .bck-content:before, .trabajar-img .bck-content:before, .escuchar-box .bck-content:before, .actividad-scorm-box .bck-content:before {
    content: "";
    background-color: purple;
    -webkit-border-top-left-radius: 100%;
       -moz-border-radius-topleft: 100%;
            border-top-left-radius: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 50px;
    width: 50px;
}

.presentation-img .bck-content:after, .presentation-video .bck-content:after, .presentation-video-2 .bck-content:after,
.slider-img .bck-content:after, .trabajar-img .bck-content:after, .escuchar-box .bck-content:after, .actividad-scorm-box .bck-content:after {
    content: "";
    background-repeat: no-repeat;
    -webkit-background-size: cover;
       -moz-background-size: cover;
         -o-background-size: cover;
            background-size: cover;
    background-position: center center;
    position: absolute;
    bottom: 5px;
    right: 5px;
    height: 30px;
    width: 30px;
}

.presentation-img .bck-content:after {
    background-image: url(icon_presentacion_imagen.png);
}

.presentation-video .bck-content:after {
    background-image: url(icon_presentacion_video.png);
}

.presentation-video-2 .bck-content:after {
    background-image: url(icon_presentacion_video2.png);
    bottom: 7px;
    right: 7px;
    height: 25px;
    width: 25px;
}

.slider-img .bck-content:after {
    background-image: url(icon_slider_imagen.png);
}

.trabajar-img .bck-content:after {
    background-image: url(icon_trabajaconlaimagen.png);
}

.escuchar-box .bck-content:after {
    background-image: url(icon_escuchar_box.png);
}

.actividad-scorm-box .bck-content:after {
    background-image: url(icon_actividadscorm_box.png);
}


/**/

/**Iconos**/

.item-container .icon:before {
    content: "";
    background-repeat: no-repeat;
    -webkit-background-size: cover;
       -moz-background-size: cover;
         -o-background-size: cover;
            background-size: cover;
    background-position: center center;
    display: inline-block;
    vertical-align: middle;
    height: 25px;
    width: 25px;
}

.item-container .icon-clase:before {
    background-image: url(icon_clase.png);
}

.item-container .icon-clase-rosa:before {
    background-image: url(icon_clase_rosa.png);
}

.item-container .icon-conversation:before {
    background-image: url(icon_conversation.png);
}

.item-container .icon-conversation-verde:before {
    background-image: url(icon_conversacion_verde.png);
}

.item-container .icon-conversation-azul:before {
    background-image: url(icon_conversacion_azul.png);
}

.item-container .icon-conversation-rosa:before {
    background-image: url(icon_conversacion_rosa.png);
}

.item-container .icon-tool:before {
    background-image: url(icon_herramienta.png);
}

.item-container .icon-tool-verde:before {
    background-image: url(icon_herramienta_verde.png);
}

.item-container .icon-tool-azul:before {
    background-image: url(icon_herramienta_azul.png);
}

.item-container .icon-tool-rosa:before {
    background-image: url(icon_herramienta_rosa.png);
}

.item-container .icon-llave:before {
    background-image: url(icon_llave.png);
}

.item-container .icon-raton:before {
    background-image: url(icon_raton.png);
}

.item-container .icon-museo:before {
    background-image: url(icon_museo.png);
}

.item-container .icon-talento:before {
    background-image: url(icon_talento.png);
}

.item-container .icon-talento-2:before {
    background-image: url(icon_talento-2.png);
}

.item-container .icon-talento-verde:before {
    background-image: url(icon_talento_verde.png);
}

/**Iconos con número**/
.item-container .icono {
    font-size: 2rem;
    color: #fff;
    background-color: #E30045;
    -webkit-border-radius: 20px;
       -moz-border-radius: 20px;
            border-radius: 20px;
    -webkit-border-bottom-right-radius: 0;
       -moz-border-radius-bottomright: 0;
            border-bottom-right-radius: 0;
    padding: 2px 5px 2px 10px;
    margin-right: 5px;
}

.item-container .icono:after {
    content: "";
    background-repeat: no-repeat;
    -webkit-background-size: cover;
       -moz-background-size: cover;
         -o-background-size: cover;
            background-size: cover;
    background-position: center center;
    display: inline-block;
    vertical-align: middle;
    height: 25px;
    width: 25px;
    margin-left: 4px;
    margin-bottom: 4px;
}

.item-container .icono.ablink:after {
    background-image: url(icon_ablink.png);
}

.item-container .icono.ascorm:after {
    background-image: url(icon_ascorm.png);
}

/**/

/**TABLA**/


.cke_contents table:not(.rf-tablegrid) td, .cke_contents table:not(.rf-tablegrid) th, .content table:not(.rf-tablegrid) td, .content table:not(.rf-tablegrid) th {
    border: none;
    padding: 7px;
}

.cke_contents table:not(.rf-tablegrid), .content table:not(.rf-tablegrid) {
    border: none;
}

table td, .bck-table td {
    padding: 10px;
}

/*tabla 1*/

.content table td.bck-td-1 {
    background-color: #ABD25F;
    padding: 6px;
    border-radius: 15px;
    border: 5px solid #ffffff;
    width: 5%;
}

.content table td.bck-td-2 {
    background-color: #BAE3E6;
    padding: 6px;
    border-radius: 15px;
    border: 5px solid #ffffff;
}

.content table td.bck-td-3 {
    background-color: #DADBDC;
    padding: 6px;
    border-radius: 15px;
    border: 5px solid #ffffff;
}

/*tabla 2*/

.bck-table {
    background: linear-gradient(to right, #e8a143 0%, #ffd050 100%);
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
}


.content table td.bck-td-4 {
    border-bottom: 2px dotted rgb(88, 88, 90);
    background-color: rgb(244, 243, 242);
}


/*tabla 3*/

.bck-table-1 {
    background: linear-gradient(to bottom, #39a2c8 0%, #99c9a3 100%);
    border-radius: 12px;
}


/*tabla 4*/
.bck-table-2 {
    background: linear-gradient(to left, #903887 0%, #c5528f 100%);
    border-radius: 12px;
}

/*celdas de la tabla 5*/

.content table td.bck-td-5 {
    background: linear-gradient(to right, #ffbd5b 0%, #c45d02 100%);
}


.content table td.bck-td-6 {
    background: #BDE0D8;
}


.content table td.bck-td-7 {
    background: #E1E045;
}


/*centrar*/
.bck-t-align-center, .bck-t-align-center {
    text-align: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 22px;
}

/**/

.textarea-container {
    width: 100%;
}

#actividad .workspace.multiple-choice .opcion {
    background-color: white;
}

.cke_reset {
    background: white;
}

.btn-primary, .btn-primary.disabled, .btn-primary.disabled:focus {
    background-color: #555;
}

/**/

/* Seccion Actividades */
#actividad .carousel-inner .actividades .item-container {
    background-color: #FFF;
    position: relative;
    z-index: 0;
}

#actividad .carousel-inner .actividades .item-container:before {
    content: '';
    position: absolute;
    display: inline-block;
    border-top: 85px solid #F5821F;
    border-left: 77px solid #F5821F;
    border-right: 77px solid #F5821F;
    top: 0;
    left: 0;
    right: 0;
    bottom:0 ;
    background-color: transparent;
    z-index: -1;

}

/* CKEDITOR */
.actividades .bck-title1 {
    color: #F5821F;
    position: relative;
    font-weight: bold;
    font-size: 2.8rem;
}

.actividades .bck-title1:before {
    background-color: transparent;
}

/**/

/* Seccion primera */
#actividad .carousel-inner .primera {
    background: -webkit-gradient(linear, left top, right bottom, from(#d0cae6), to(#6e6097));
    background: -webkit-linear-gradient(top left, #d0cae6, #6e6097);
    background: -moz-linear-gradient(top left, #d0cae6, #6e6097);
    background: -o-linear-gradient(top left, #d0cae6, #6e6097);
    background: linear-gradient(to bottom right, #d0cae6, #6e6097);
}

#actividad .carousel-inner .primera .item-container {
    background-color: transparent !important;
}

#actividad .carousel-inner .primera .slider-control .title,
#actividad .carousel-inner .primera .slider-control:after,
#actividad .carousel-inner .primera .slider-control:before {
    color: white;
}
/**/

/* Seccion segunda */
#actividad .carousel-inner .segunda {
    background-color: #9665AB;
}

#actividad .carousel-inner .segunda .item-container {
    background-color: transparent !important;
}

#actividad .carousel-inner .segunda .layout {
    background-color: #e5b7e4;
    -webkit-border-radius: 10px;
       -moz-border-radius: 10px;
            border-radius: 10px;
    padding: 20px;
}

#actividad .carousel-inner .segunda .slider-control .title,
#actividad .carousel-inner .segunda .slider-control:after,
#actividad .carousel-inner .segunda .slider-control:before {
    color: white;
}
/**/

/**iframe**/

#iframe_div.scorm {
    width: 100% ! important;
    height: 100% ! important;
    top: 0px ! important;
    left: 0px ! important;
    background-color: #CCCCCC;
}

#iframe_div.scorm iframe#class_iframe {
    width: 100% ! important;
    height: 100% ! important;
}

#iframe_div.scorm .btn-close-iframe {
    right: 0px;
    top: 15px;
    margin-top: 20px;
}

#iframe_div.scorm .btn-close-iframe span {
    display: none;
}

#iframe_div.scorm .btn-close-iframe a {
    padding: 16px;
    background-color: #E9E9E9;
    -webkit-border-bottom-left-radius: 10px;
       -moz-border-radius-bottomleft: 10px;
            border-bottom-left-radius: 10px;
    -webkit-border-bottom-right-radius: 5px;
       -moz-border-radius-bottomright: 5px;
            border-bottom-right-radius: 5px;
    -webkit-box-shadow: 0px 1px 5px #aaa;
       -moz-box-shadow: 0px 1px 5px #aaa;
            box-shadow: 0px 1px 5px #aaa;
}

#iframe_div.scorm .btn-close-iframe a .fa {
    font-size: 2rem;
}

/**/

/**DROPDOWNS**/

.bck-dropdown .bck-dropdown-icon, .bck-dropdown-2 .bck-dropdown-icon {
    color: white;
}

.bck-dropdown .bck-dropdown-icon > .fa, .bck-dropdown-2 .bck-dropdown-icon > .fa {
    border: 3px solid white;
}

.bck-dropdown .bck-dropdown-titulo, .bck-dropdown-2 .bck-dropdown-titulo{
    color: white;
}

/*Dropdown 1*/

.bck-dropdown.bck-dropdown-1 {
    background-color: #9ACB1E;
    border: 1px solid #DDDDDD;
    margin-top: 10px;
    -webkit-border-radius: 5px;
       -moz-border-radius: 5px;
            border-radius: 5px;
}

.bck-dropdown-1 .bck-dropdown-button {
    margin-top: 0px;
    font-size: 1.2rem;
}

.bck-dropdown-1 .bck-dropdown-icon {
    background-color: #9ACB1E;
    width: 25px;
    height: 10px;
}

.bck-dropdown-1 .bck-dropdown-icon > .fa {
    border: 0px solid white;
}

.bck-dropdown-1 .fa-chevron-up:before, .bck-dropdown-1 .fa-chevron-down:before {
    font-size: 1.2rem;
}

.bck-dropdown-1 .bck-dropdown-titulo {
    font-size: 1.8rem;
    padding-left: 0px;
}


.bck-dropdown-1 .bck-dropdown-content {
    background-color: #fff;
    border: 1px solid #DDDDDD;
    padding-left: 17px;
    max-height: 800%;
    overflow-y: visible;
}

/**/

/*Dropdown 2*/

.bck-dropdown-2 .bck-dropdown-titulo {
    padding: 0;
    font-size: 2.1rem;
}

.bck-dropdown-2 .bck-dropdown-button {
    margin-top: 20px;
    background: #E76048;
    color: #fff;
    text-align: center;
    border: 1px solid #dcdada;
    -webkit-border-top-left-radius: 5px;
        -moz-border-radius-topleft: 5px;
            border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
        -moz-border-radius-topright: 5px;
            border-top-right-radius: 5px;
}

.bck-dropdown-2 .bck-dropdown-icon {
    display: block;
    width: auto;
}

.bck-dropdown-2 .bck-dropdown-icon > .fa {
    border: 0px solid white;
}

.bck-dropdown-2 .fa-chevron-up:before,
.bck-dropdown-2 .fa-chevron-down:before {
    content: "\f15b";
    font-size: 2.0rem;
}

.bck-dropdown-2 .bck-dropdown-content {
    max-height: 820px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #dcdada;
    -webkit-border-bottom-left-radius: 5px;
        -moz-border-radius-bottomleft: 5px;
            border-bottom-left-radius: 5px;
    -webkit-border-bottom-right-radius: 5px;
        -moz-border-radius-bottomright: 5px;
            border-bottom-right-radius: 5px;
    padding-top: 20px;
    border-top: 0px;
}
/**/

/*Activities Dropdown*/

.bck-dropdown-2.activities-dropdown .fa-chevron-up:before,
.bck-dropdown-2.activities-dropdown .fa-chevron-down:before {
    content: "\f0ae";
}

.bck-dropdown-2.activities-dropdown .bck-dropdown-content {
    position: relative;
    border: 0;
    padding-left: 120px;
    padding-right: 0;
}

.bck-dropdown-2.activities-dropdown .bck-box p,
.bck-box .chooseblanks p,
.bck-box .fillblanks p {
    display: block;
}
/**/

/**TABS**/

.activities-dropdown .nav-tabs {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100px;
    height: auto;
    overflow: hidden;
    -webkit-border-radius: 5px;
       -moz-border-radius: 5px;
            border-radius: 5px;
    border: 1px solid #dcdada;
}

.activities-dropdown .nav-tabs > li {
    width: 100%;
    height: 60px;
    margin: 0;
    border: 0;
}

.activities-dropdown .nav-tabs > li:not(:last-of-type),
.activities-dropdown .nav-tabs > li:not(.active) {
    border-bottom: 1px solid #dcdada;
}

.activities-dropdown .nav-tabs > li > a {
    width: 100%;
    height: 100%;
    -webkit-border-radius: 0;
       -moz-border-radius: 0;
            border-radius: 0;
    border: 0;
    background: transparent;
    color: #414141;
    font-size: 1.8rem;
    font-weight: normal;
    line-height: 4.0rem;
}

.activities-dropdown .nav-tabs > li.active > a,
.activities-dropdown .nav-tabs > li.active > a:hover,
.activities-dropdown .nav-tabs > li.active > a:focus {
    border: 0;
    background: #E76048;
    color: #fff;
}

.activities-dropdown .tab-content {
    height: auto;
    overflow: hidden;
}

.activities-dropdown .tab-content .tab-pane {
    padding: 20px 0;
}

/****/

@media screen and (max-width: 768px) {

    #actividad .carousel-inner .class_slide {
        padding: 40px 20px 0px;
    }

    .navigator {
        padding: 0px 20px;
    }

    #actividad .carousel-inner .actividades .item-container:before,
    #actividad .carousel-inner .emprender .item-container:before {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-top-width: 85px;
        border-left-width: 20px;
        border-right-width: 20px;
    }

    #actividad .carousel-inner .taller .item-container:before {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-top-width: 60px;
        border-left-width: 20px;
        border-right-width: 20px;
        bottom:0 ;
    }
}


/*logo*/
.body_clase:not(.edit) .logo-publisher {
    float: left;
    display: block;
    width: 50px;
    height: 30px;
    margin: 9px 0;
    background: url(/useruploads/r/a/85003699/activity_other_imported/ikalogo.png) center center / cover no-repeat;
}


