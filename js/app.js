$(document).ready(function(){
  app.c.init();
});

////////////////////////////////////////////////
////////////////////////////////////////////////

var app = {};
app.m = {};
app.v = {};
app.c = {};
app.t = {};

////////////////////////////////////////////////
////////////////////////////////////////////////

app.m.app_name = 'Microcosm';


////////////////////////////////////////////////
////////////////////////////////////////////////

app.c.init = function(){
  app.v.init();
};

////////////////////////////////////////////////
////////////////////////////////////////////////

app.v.init = function(){
  app.v.css();
  app.v.layout();
};

app.v.layout = function(){
  $('body').html(app.t.grid());
  app.v.activateGridStack();
};

app.v.activateGridStack = function () {
  $('.grid-stack').gridstack({
  })
};

app.v.activateGridster = function () {
  var width = $('.gridster').width();
  $(".gridster ul").gridster({
    widget_margins: [10, 10],
    widget_base_dimensions: [width/12, width/12],
    helper: 'clone',
    resize: {
      enabled: true
    }
  });
};

////////////////////////////////////////////////
////////////////////////////////////////////////

app.t.grid = function () {
  var d = '<div class="container"><div class="row">';
  d += app.t.grid.cells(12, 2);
  d += '</div></div>';
  return d;
};

app.t.grid.cells = function (across, deep) {
  var d = '';
  d += '<div class="grid-stack" >'
  for (var i = 0; i < across; i++) {
    for (var j = 0; j < deep; j++) {
      d += '<div class="grid-stack-item" ';
        d += 'data-gs-x="' + String(i) + '" ';
        d += 'data-gs-y="' + String(j) + '" ';
        d += 'data-gs-width="1" data-gs-height="1" >';
        d += '<div class="grid-stack-item-content">' + i + ' ' + j + '</div>';
      d += '</div>'; 
    }
  }
  d += '</div>';
  return d;
};

app.t.x_grid = function () {v
};

app.t.grid.x_cells = function (across, deep) {
  var d = '';
  d += '<div class="gridster" ><ul>'
  for (var i = 0; i < across; i++) {
    for (var j = 0; j < deep; j++) {
      d += '<li data-row="' + String(i+1) + '" data-col="' + String(j+1) + '" data-sizex="1" data-sizey="1"></li>'; 
    }
  }
  d += '</ul></div>';
  return d;
};

////////////////////////////////////////////////
////////////////////////////////////////////////

app.v.css=function(){
  if ($('head style#synthetic').length<1){
    $('head').append('<style type="text/css" id="synthetic"></style>');
  }
  
  $('style#synthetic').html(app.v.css_transform(app.v.css_config() ) );
};

app.v.css_transform=function(x){
  var css='';

  for (var tag in x){
    css+=' '+tag+'{ ';
    for (property in x[tag]){
      css+=' '+property+': '+x[tag][property]+'; ';
    }
    css+=' } ';
  }
  return css;
};

app.v.css_config=function(){
  var css={
    'body':{
      'background':'#333'
    },
    'div.grid-stack-item-content':{
      'background':'#fff'
    }

  };

  return css;
};
