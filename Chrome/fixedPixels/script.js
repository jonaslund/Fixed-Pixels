jQuery(function($) { 
 var fixedPixels = "<style>img { image-rendering: optimizeSpeed;image-rendering: -moz-crisp-edges ;image-rendering: -o-crisp-edges;image-rendering: -webkit-optimize-contrast;image-rendering: optimize-contrast;-ms-interpolation-mode: nearest-neighbor;}</style>";
   
jQuery(fixedPixels).appendTo(jQuery("body"));
});