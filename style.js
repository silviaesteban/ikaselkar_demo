(function (blink) {
	'use strict';

	var ikaselkar_demoStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	ikaselkar_demoStyle.prototype = {
		bodyClassName: 'content_type_clase_ikaselkar_demo',
		toolbar: { name: 'editorial', items: ['Blink_popover'] },
		extraPlugins: ['blink_popover'],
		ckEditorStyles: {
			name: 'ikaselkar_demo',
			styles: [
				{ name: 'Kokatze-h', element: 'h2', attributes: { 'class': 'bck-title bck-title-1'} },
				{ name: 'Kokatze-g', element: 'h3', attributes: { 'class': 'bck-title bck-title-12'} },
				{ name: 'Kokatze-a', element: 'h3', attributes: { 'class': 'bck-title bck-title-11'} },
				
				{ name: 'Arakatze-h', element: 'h3', attributes: { 'class': 'bck-title bck-title-2'} },
				{ name: 'Arakatze-g', element: 'h3', attributes: { 'class': 'bck-title bck-title-13'} },
				{ name: 'Arakatze-a', element: 'h3', attributes: { 'class': 'bck-title bck-title-14'} },
				
				{ name: 'Planifikazio-h', element: 'h3', attributes: { 'class': 'bck-title bck-title-16'} },
				{ name: 'Planifikazio-g', element: 'h3', attributes: { 'class': 'bck-title bck-title-15'} },
				{ name: 'Planifikazio-a', element: 'h3', attributes: { 'class': 'bck-title bck-title-17'} },
				
				{ name: 'Ulertze-h', element: 'h3', attributes: { 'class': 'bck-title bck-title-18'} },
				{ name: 'Ulertze-g', element: 'h3', attributes: { 'class': 'bck-title bck-title-4'} },
				{ name: 'Ulertze-a', element: 'h3', attributes: { 'class': 'bck-title bck-title-19'} },
				
				{ name: 'Miatze-h', element: 'h3', attributes: { 'class': 'bck-title bck-title-20'} },
				{ name: 'Miatze-g', element: 'h3', attributes: { 'class': 'bck-title bck-title-3'} },
                                { name: 'Miatze-a', element: 'h3', attributes: { 'class': 'bck-title bck-title-21'} },
				
				{ name: 'Aplikazio-h', element: 'h3', attributes: { 'class': 'bck-title bck-title-22'} },
				{ name: 'Aplikazio-g', element: 'h3', attributes: { 'class': 'bck-title bck-title-5'} },
				{ name: 'Aplikazio-a', element: 'h3', attributes: { 'class': 'bck-title bck-title-23'} },
				
				{ name: 'Egituratze-h', element: 'h3', attributes: { 'class': 'bck-title bck-title-24'} },
				{ name: 'Egituratze-g', element: 'h3', attributes: { 'class': 'bck-title bck-title-8'} },
				{ name: 'Egituratze-a', element: 'h3', attributes: { 'class': 'bck-title bck-title-25'} },
				
				{ name: 'Isinplea-h', element: 'h3', attributes: { 'class': 'bck-title bck-title-26'} },
				{ name: 'Isinplea-g', element: 'h3', attributes: { 'class': 'bck-title bck-title-7'} },
				{ name: 'Isinplea-a', element: 'h3', attributes: { 'class': 'bck-title bck-title-9'} },
				
				{ name: 'Ikonplexua-h', element: 'h3', attributes: { 'class': 'bck-title bck-title-27'} },
				{ name: 'Ikonplexua-g', element: 'h3', attributes: { 'class': 'bck-title bck-title-29'} },
				{ name: 'Ikonplexua-a', element: 'h3', attributes: { 'class': 'bck-title bck-title-28'} },
				
				{ name: 'Autorregulazio-h', element: 'h3', attributes: { 'class': 'bck-title bck-title-30'} },
				{ name: 'Autorregulazio-g', element: 'h3', attributes: { 'class': 'bck-title bck-title-6'} },
				{ name: 'Autorregulazio-a', element: 'h3', attributes: { 'class': 'bck-title bck-title-10'} },
				
                                { name: 'Título 31', element: 'h3', attributes: { 'class': 'bck-title bck-title-31'} },
                                { name: 'Sekuentzia-titulua', element: 'h3', attributes: { 'class': 'bck-title bck-title-32'} },
                                { name: 'Zeregina-titulua', element: 'h3', attributes: { 'class': 'bck-title bck-title-33'} },
				
				//Añadido David titulo
				{ name: 'Zeregina-DAF-titulua', element: 'h3', attributes: { 'class': 'bck-title bck-title-34'} },
				
				//Añadido libros 4 Titulos
				
				{ name: 'Hasiera', element: 'h3', attributes: { 'class': 'bck-title bck-title-35'} },
                                { name: 'Garapena', element: 'h3', attributes: { 'class': 'bck-title bck-title-36'} },
                                { name: 'Amaiera', element: 'h3', attributes: { 'class': 'bck-title bck-title-37'} },
				
				
				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis'} },
				
				{ name: 'Lista Desordenada', element: 'ul', attributes: { 'class': 'bck-ul'} },
				{ name: 'Lista Ordenada 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-1' } },
				{ name: 'Lista Ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-2' } },
				{ name: 'Lista Ordenada 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-3' } },
				{ name: 'Lista Ordenada 4', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-4' } },
				{ name: 'Lista Ordenada 5', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-5' } },
				{ name: 'Lista Ordenada 6', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-6' } },
				{ name: 'Azpizeregina-titulua', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-7' } },
				{ name: 'Ikerketa-titulua', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-8' } },
				
				//titulos-listas añadidos david prueba
				
				{ name: 'Lista Ordenada 7', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-9' } },
				{ name: 'Lista Ordenada 8', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-10' } },
				{ name: 'Lista Ordenada 9', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-11' } },
				{ name: 'Lista Ordenada 10', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-12' } },
				{ name: 'Lista Ordenada 11', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-13' } },
				{ name: 'Lista Ordenada 12', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-14' } },				
				{ name: 'Azpizeregina-titulua-Laranja', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-15' } },
				{ name: 'Azpizeregina-titulua-Gorria', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-16' } },
				{ name: 'Azpizeregina-Berdea-AB', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-17' } },
				{ name: 'Azpizeregina-Berdea-BC', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-18' } },
				{ name: 'Azpizeregina-Gorria-AB', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-19' } },
				{ name: 'Azpizeregina-Laranja-AB', element: 'ol', attributes: { 'class': 'bck-ol bck-ol-20' } },
				
				{ name: 'Koloredun-kaxa', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-1' } },
				{ name: 'Azalpen-kaxa', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-2' } },
				{ name: 'Oharra-kaxa', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-3' } },
				{ name: 'Koloredun-kaxa-tit', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-4' } },
				{ name: 'Informazio-testua-h', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-5' } },
              			{ name: 'Informazio-testua-g', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-6' } },
               		        { name: 'Koaderno-zuria', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-7' } },
                		{ name: 'Koaderno-kuadrikulatua', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-8' } },
               			{ name: 'Koaderno-zuria-goi', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-9' } },
               			{ name: 'Koaderno-kuadrikulatua-goi', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-10' } },

                		{ name: 'Ikerketa-kaxa 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-11' } },
				{ name: 'Ikerketa-kaxa 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-12' } },
				{ name: 'Ikerketa-kaxa 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-13' } },
				{ name: 'Ikerketa-kaxa 4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-20' } },
				{ name: 'Ikerketa-kaxa 5', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-21' } },
				{ name: 'Ikerketa-kaxa 6', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-22' } },
				{ name: 'Ikerketa-kaxa A', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-15' } },
				{ name: 'Ikerketa-kaxa B', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-16' } },
				{ name: 'Ikerketa-kaxa C', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-17' } },
				{ name: 'Ikerketa-kaxa D', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-18' } },
				{ name: 'Ikerketa-kaxa E', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-19' } },
				{ name: 'Ikerketa-kaxa F', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-23' } },

				{ name: 'Pasartea-kaxa', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-14' } },
				
				//Cajas añadidas por David
				
				{ name: 'Azpititulua-DAF', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-24' } },
				{ name: 'Erantzun-kaxa', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-25' } },
				
				{ name: 'Taula 1', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table'} },
				{ name: 'Taula 2', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-1'} },
				{ name: 'Taula 3', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-2'} },
				{ name: 'Zelula 1', element: 'td', attributes: { 'class': 'bck-td bck-td-1'} },
				{ name: 'Zelula 2', element: 'td', attributes: { 'class': 'bck-td bck-td-2'} },
				{ name: 'Zelula 3', element: 'td', attributes: { 'class': 'bck-td bck-td-3'} },
				{ name: 'Zelula 4', element: 'td', attributes: { 'class': 'bck-td bck-td-4'} },
				{ name: 'Zelula 5', element: 'td', attributes: { 'class': 'bck-td bck-td-5'} },
				{ name: 'Zelula 6', element: 'td', attributes: { 'class': 'bck-td bck-td-6'} },
				{ name: 'Zelula 7', element: 'td', attributes: { 'class': 'bck-td bck-td-7'} },
				{ name: 'Enlace web', element: 'a', attributes: { 'class': 'bck-link'} },
				{ name: 'Desplegable 1', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-1' } },
				
				//Añadido libros 4 cajas
				
				{ name: 'daf-moratua', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-26' } },
				{ name: 'daf-laranja', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-27' } },
				{ name: 'daf-berdea', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-28' } },
				{ name: 'daf-arroxa', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-29' } },
				{ name: 'daf-laranja2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-30' } },
				{ name: 'daf-urdinak', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box-31' } },
				
				
	
				//Desplegable creado por david
				
				{ name: 'Desplegable 3', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-3' } },
				
				{ name: 'Desplegable 2', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'bck-dropdown bck-dropdown-2' } }
			]
		},
		slidesTitle: {},
		subunits: [],
		totalSlides: 0,

		init: function () {
			var parent = blink.theme.styles.basic.prototype,
				that = this;
			parent.init.call(that);
			that.addActivityTitle();
			if(window.esWeb) return;
			that.fillSlidesTitle();
			that.getActualUnitActivities();
			blink.events.on("course_loaded", function(){
				that.formatCarouselindicators();
				that.enableSliders();
			});
			that.animateNavbarOnScroll();
			parent.initInfoPopover();
			that.addSlideNavigators();
		},

		removeFinalSlide: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.removeFinalSlide.call(this, true);
		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return blink.courseInfo.unit + ' > ' + $(this).html();
			})
		},

		fillSlidesTitle: function () {
			var self = this.slidesTitle;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = window['t'+index+'_slide'];
				var slideTitle = slide.title;
				slideTitle = slideTitle.replace(/<span class="index">\s*([\d]+)\s*<\/span>/i, '$1. ');
				slideTitle = slideTitle.replace(/\s+/, ' ');
				slideTitle = stripHTML(slideTitle);

				self['t'+index+'_slide'] = slideTitle;
			}
		},

		/**
		 * @summary Gets the activity type subunits of the actual unit.
		 * @return {Object} Object of the actual unit filtering the not activity type subunits
		 */
		getActualUnitActivities: function () {
			var curso = blink.getCourse(idcurso),
				that = this,
				units,
				unitSubunits,
				actualActivity,
				unitActivities = [];

			curso.done(function () {
				units = curso.responseJSON.units;

				$.each(units, function () {
					if (this.id && this.id == blink.courseInfo.IDUnit) {
						unitSubunits = this.subunits.concat(this.resources);
					}
				});

				actualActivity = _.find(unitSubunits, function(subunit) {
					return subunit.id == idclase;
				});

				if (typeof actualActivity !== "undefined" && actualActivity.level == '6') {
					unitActivities.push(actualActivity);
				} else {
					unitActivities = _.filter(unitSubunits, function(subunit) {
						return subunit.type == 'actividad' && subunit.level !== '6';
					});
				}

				that.subunits = unitActivities;
			}).done(function(){
				blink.events.trigger('course_loaded');
			});
		},

		/**
		 * @summary Getting active slide position in relation with the total of the
		 *          unit slides.
		 * @param {Array} $subunits Array of activity type objects
		 * @return {int} Slide position
		 */
		getActualSlideNumber: function (subunits) {
			var actualSlideIndex = $('.swipeview-active').attr('data-page-index'),
				actualSlide = 1;

			for (var i in subunits) {
				if (subunits[i].id && parseInt(subunits[i].id) != idclase) {
					actualSlide += parseInt(subunits[i].pags);
				} else {
					actualSlide += parseInt(actualSlideIndex);
					break;
				}
			}

			return actualSlide;
		},

		formatCarouselindicators: function () {
			var that = this,
				$navbarBottom = $('.navbar-bottom'),
				firstSlide = eval('t0_slide');
			if(blink.courseInfo && blink.courseInfo.courseDateCreated) var courseYearCreated = new Date(blink.courseInfo.courseDateCreated).getFullYear();
			var yearCopy = courseYearCreated !== undefined ? courseYearCreated : 2016;
			$navbarBottom
				.attr('class', 'ikaselkar_demo-navbar')
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before('<span class="copyright">&copy;' +  yearCopy + '</span>')
					.wrap('<div id="top-navigator"/>')
					.remove()
					.end();

			$('#volverAlIndice').click(function() {
				return showCursoCommit();
			});

			var subunits = that.subunits,
				totalSlides = 0,
				subunit_index,
				subunit_pags;

			// Different behaviour depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (subunits.length !== 0) {
				for (var i in subunits) {
					if (subunits[i].pags) {
						var subunitSlides = parseInt(subunits[i].pags);
						totalSlides += subunitSlides;
					}
					if (subunits[i].id && subunits[i].id == idclase) {
						subunit_index = i;
						subunit_pags = parseInt(subunits[i].pags);
					}
				}

				that.totalSlides = totalSlides;

				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter" data-subunit-index="' + subunit_index +
						'" data-subunit-pags="' + subunit_pags + '">' +
						that.getActualSlideNumber(subunits) + ' / ' + totalSlides +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html(that.getActualSlideNumber(subunits) +
						' / ' + totalSlides);
				});
			} else {
				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter">' + (window.activeSlide + 1) +
						' / ' + window.secuencia.length +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html((window.activeSlide + 1) +
						' / ' + window.secuencia.length);
					$('.bck-dropdown-2').hideBlink();
				});
			}

			blink.events.on('section:shown', function() {
				var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) +
					'_slide').title;
				$navbarBottom.find('.sectionTitle').text(sectionTitle);
			});

			if (firstSlide.seccion) {
				$navbarBottom.addClass('first-is-section');
			}

			blink.events.trigger(true, 'style:endFormatCarousel');
		},

		addSlideNavigators: function () {
			blink.events.on("course_loaded", function(){
				var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index'));

				$('.slider-control').off('click');

				// Navigation change depending on whether the slides are accessed from
				// a book or from a homework link or similar
				if (that.subunits.length !== 0) {
					// Slider controls must allow navigation among all the activity subunits
					// in the current unit.
					$('.left.slider-control, .left.slider-navigator').click(function () {
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == 0) {
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index - 1].id + '&modo=0&numSec=' +
									that.subunits[subunit_index - 1].numSlides, false, undefined);
							} else {
								blink.activity.showPrevSection();
						}
						}
					});
					$('.right.slider-control, .right.slider-navigator').click(function () {
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == parseInt(that.subunits[subunit_index].pags) - 1) {
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index + 1].id + '&modo=0' + ((typeof window.esPopup !== "undefined" && window.esPopup)?"&popup=1":""),
									false, undefined);
							} else {
								blink.activity.showNextSection();
							}
						}
					});
				} else {
					$('.left.slider-control, .left.slider-navigator').click(function () {
						blink.activity.showPrevSection();
					});
					$('.right.slider-control, .right.slider-navigator').click(function () {
						blink.activity.showNextSection();
					});
				}

				$(document).ready(function() {
					blink.events.on('showSlide:after', function() {
						that.enableSliders();
					});
				});
			});
		},

		/**
		 * @summary Enables all slider controls and disables when appropiate
		 */
		enableSliders: function () {
			// Removes disabled class to all navigation buttons and applies
			// just if its first or last slide of all activities
			$('.slider-control, .slider-navigator').removeClass('disabled');
			var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index'));

			// Navigation change depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (this.subunits.length !== 0 && modoVisualizacionLabel != "standalone") {
				if (this.getActualSlideNumber(this.subunits) == 1) {
					$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
				if (this.getActualSlideNumber(this.subunits) == this.totalSlides) {
					$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			} else {
				if (window.activeSlide == 0) {
					$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
				if(window.activeSlide == parseInt(that.subunits[subunit_index].pags) - 1){
					$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			}
		},

		getEditorStyles: function () {
			return this.ckEditorStyles;
		},

		showBookIndexInClass: function () {
			return modoVisualizacionLabel != "standalone";

		},

		animateNavbarOnScroll: function () {
			if (!blink.isApp) return;
			var $navbar = $('.ikaselkar_demo-navbar');
			var lastScrollTop = 0;
			$('.js-slider-item').scroll(function () {
				var scrollTop = $(this).scrollTop();
				(scrollTop > lastScrollTop && scrollTop) ? $navbar.addClass('ocultar') : $navbar.removeClass('ocultar');
				lastScrollTop = scrollTop;
			});
		}
	};

	ikaselkar_demoStyle.prototype = _.extend({}, new blink.theme.styles.basic(), ikaselkar_demoStyle.prototype);

	blink.theme.styles['ikaselkar_demo'] = ikaselkar_demoStyle;

})( blink );

$(document).ready(function() {

	if (!$('body').hasClass('edit')) {
		$(document).on('click', '.nav-tabs a', function() {
			var actividad = $(this).attr('href');
			var index = actividad.split('-').pop();
			var slide = window['t' + index + '_slide'];
			slide.onAfterShowSlide();
		});
	}

	$(document).on('click', '.bck-dropdown .class_slide, .nav-tabs a', function(e){
		var activePane;
		if (!!$(e.target).closest('.nav-tabs').length) {
			activePane = $(e.target).attr('href');
		} else {
			activePane = '#' + $(e.target).closest('.tab-pane').attr('id');
		}
		blink.activity.currentStyle.setActivePane(activePane);
	});

});
