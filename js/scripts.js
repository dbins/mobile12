function updateMonthYear() {				
	$month.html( cal.getMonthName() );
	$year.html( cal.getYear() );
}
function showEvents( $contentEl, dateProperties ) {

	hideEvents();
	
	var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>' ),
		$close = $( '<span class="custom-content-close"></span>' ).on( 'click', hideEvents );

	$events.append( $contentEl.html() , $close ).insertAfter( $wrapper );
	
	setTimeout( function() {
		$events.css( 'top', '0%' );
	}, 25 );

}
function hideEvents() {

	var $events = $( '#custom-content-reveal' );
	if( $events.length > 0 ) {
		
		$events.css( 'top', '100%' );
	}

}


$(document).on('pageshow', '#banner', function(){

$('#container6').highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: 'Pontos Acumulados - Contratado'
		},
		xAxis: {
			categories: ['Saudavel', 'Nao Saudavel', 'Cancelado']
		},
		yAxis: {
			title: {
				text: 'Pontos'
			}
		},
		series: [{
			name: 'Contratado',
			data: [376000, 32000, 9000]
		}]
	});
	
	$('#container7').highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: 'Pontos Acumulados - Nao Contratado'
		},
		xAxis: {
			categories: ['Saudavel', 'Nao Saudavel', 'Cancelado']
		},
		yAxis: {
			title: {
				text: 'Pontos'
			}
		},
		series: [{
			name: 'Nao Contratado',
			data: [529000, 176000, 15000]
		}]
	});
	
	$('#container8').highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: 'Pontos Acumulados - Bloqueado'
		},
		xAxis: {
			categories: ['Saudavel', 'Nao Saudavel', 'Cancelado']
		},
		yAxis: {
			title: {
				text: 'Pontos'
			}
		},
		series: [{
			name: 'Bloqueado',
			data: [208000, 305000, 18000]
		}]
	});


	$("#owl-demo").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 600,
		singleItem : true,
		autoPlay: true,
		lazyLoad : true,
		transitionStyle : "backSlide",
		itemsMobile : true,
		itemsDesktopSmall : true,
	});
});

$(document).on('pageshow', '#grafico', function(){
	$('#container9').highcharts({
		chart: {
			type: 'pie'
		},
		title: {
					text: 'Contratado'
				},
				plotArea: {
					shadow: null,
					borderWidth: null,
					backgroundColor: null
				},
				tooltip: {
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						dataLabels: {
							enabled: true,
							formatter: function() {
								if (this.y > 5) return this.point.name;
							},
							color: 'white',
							style: {
								font: '13px Trebuchet MS, Verdana, sans-serif'
							}
						}
					}
				},
				legend: {
					layout: 'vertical',
					style: {
						left: 'auto',
						bottom: 'auto',
						right: '50px',
						top: '100px'
					}
				},
			        series: [{
					type: 'pie',
					name: 'Clientes',
					data: [
						['Saudavel',   81.1],
						['Nao Saudavel',       13.5],
						['Cancelado',    5.4]
						
					]
					//data: [3.40, 1.05, 2.90, 1.65, 1.35, 2.59, 1.39, 3.07, 2.82]
				}]
	});
	
	$('#container10').highcharts({
		chart: {
			type: 'pie'
		},
		title: {
					text: 'Nao Contratado'
				},
				plotArea: {
					shadow: null,
					borderWidth: null,
					backgroundColor: null
				},
				tooltip: {
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						dataLabels: {
							enabled: true,
							formatter: function() {
								if (this.y > 5) return this.point.name;
							},
							color: 'white',
							style: {
								font: '13px Trebuchet MS, Verdana, sans-serif'
							}
						}
					}
				},
				legend: {
					layout: 'vertical',
					style: {
						left: 'auto',
						bottom: 'auto',
						right: '50px',
						top: '100px'
					}
				},
			        series: [{
					type: 'pie',
					name: 'Clientes',
					data: [
						['Saudavel',   6.9],
						['Nao Saudavel',       38.7],
						['Cancelado',    54.2]
						
					]
					//data: [3.40, 1.05, 2.90, 1.65, 1.35, 2.59, 1.39, 3.07, 2.82]
				}]
	});
	
	$('#container11').highcharts({
		chart: {
			type: 'pie'
		},
		title: {
					text: 'Saudavel'
				},
				plotArea: {
					shadow: null,
					borderWidth: null,
					backgroundColor: null
				},
				tooltip: {
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						dataLabels: {
							enabled: true,
							formatter: function() {
								if (this.y > 5) return this.point.name;
							},
							color: 'white',
							style: {
								font: '13px Trebuchet MS, Verdana, sans-serif'
							}
						}
					}
				},
				legend: {
					layout: 'vertical',
					style: {
						left: 'auto',
						bottom: 'auto',
						right: '50px',
						top: '100px'
					}
				},
			        series: [{
					type: 'pie',
					name: 'Clientes',
					data: [
						['Saudavel',   5.4],
						['Nao Saudavel', 19.2],
						['Cancelado', 75.4]
						
					]
					//data: [3.40, 1.05, 2.90, 1.65, 1.35, 2.59, 1.39, 3.07, 2.82]
				}]
	});


	$("#owl-demo3").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 600,
		singleItem : true,
		autoPlay: true,
		lazyLoad : true,
		transitionStyle : "backSlide",
		itemsMobile : true,
		itemsDesktopSmall : true,
	});

});



$(document).on('pageshow', '#banner2', function(){
	$('#container2').highcharts({
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Pontos Trocados - Contratado'
		},
		xAxis: {
			categories: ['Sem Trocas', 'Uma Troca', 'De 2 a 5 Trocas', 'Acima de 6 Trocas']
		},
		yAxis: {
			title: {
				text: 'Trocas'
			}
		},
		series: [{
			name: 'Contratado',
			data: [12000, 25000, 19000, 35000]
		}]
	});
	
	$('#container3').highcharts({
		
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Pontos Trocados - Nao Contratado'
		},
		xAxis: {
			categories: ['Sem Trocas', 'Uma Troca', 'De 2 a 5 Trocas', 'Acima de 6 Trocas']
		},
		yAxis: {
			title: {
				text: 'Trocas'
			}
		},
		series: [{
			name: 'Nao Contratado',
			data: [15000, 12000, 35000, 15000]
		}]
	});
	
	$('#container4').highcharts({
		
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Pontos Trocados - Bloqueado'
		},
		xAxis: {
			categories: ['Sem Trocas', 'Uma Troca', 'De 2 a 5 Trocas', 'Acima de 6 Trocas']
		},
		yAxis: {
			title: {
				text: 'Trocas'
			}
		},
		series: [{
			name: 'Bloqueado',
			data: [18000, 18000, 28000, 13000]
		}]
	});
	
	$("#owl-demo2").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 600,
		singleItem : true,
		autoPlay: true,
		lazyLoad : true,
		transitionStyle : "backSlide",
		itemsMobile : true,
		itemsDesktopSmall : true,
	});
});

$(document).on('pageshow', '#grafico2', function(){
	$('#container5').highcharts({
		chart: {
			//Pie, bar, line, area
            type: 'column'
        },
        title: {
            text: 'Tipos de Clientes'
        },
        xAxis: {
            type: 'category'
        },
		
        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
				cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                            //alert('Category: ' + this.category + ', value: ' + this.y);
                        }
                    }
                },
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Clientes',
            colorByPoint: true,
            data: [{
                name: 'Bloqueado',
                y: 150000,
                drilldown: 'cliente1'
            }, {
                name: 'Nao Contratado',
                y: 300000,
                drilldown: 'cliente2'
            }, {
                name: 'Contratado',
                y: 500000,
                drilldown: 'cliente3'
            }]
        }],
        drilldown: {
            series: [{
                id: 'cliente1',
                data: [
                    ['Saudavel', 40000],
                    ['Nao Saudavel', 60000],
                    ['Cancelado', 50000]
                ]
            }, {
                id: 'cliente2',
                data: [
                    ['Saudavel', 150000],
                    ['Nao Saudavel', 80000],
                    ['Cancelado', 70000]
                ]
            }, {
                id: 'cliente3',
                data: [
                    {
					name: 'Saudavel',
					y: 280000,
					drilldown: 'cliente3_saudavel'
					},{
					name: 'Nao Saudavel',
					y: 120000,
					drilldown: 'cliente3_naosaudavel'
					},{
					name: 'Cancelado',
					y: 100000,
					drilldown: 'cliente3_cancelado'
					}
                ]
            },
				{
                id: 'cliente3_saudavel',
                data: [
                    ['Sem Trocas', 5000],
                    ['Uma Troca', 2000],
                    ['De 2 a 5 Trocas', 1000],
					['Acima de 6 Trocas', 500]
                ]
				},
				{
                id: 'cliente3_naosaudavel',
                data: [
                    ['Sem Trocas', 4000],
                    ['Uma Troca', 2000],
                    ['De 2 a 5 Trocas', 1500],
					['Acima de 6 Trocas', 700]
                ]
				},
				{
                id: 'cliente3_cancelado',
                data: [
                    ['Sem Trocas', 10000],
                    ['Uma Troca', 6000],
                    ['De 2 a 5 Trocas', 5000],
					['Acima de 6 Trocas', 600]
                ]
				}
			]
        }	
	
	});
});

$(document).on('pageshow', '#menu_responsivo', function(){
	$('#dl-menu' ).dlmenu();
});