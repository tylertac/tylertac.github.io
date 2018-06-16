/**
 * hovers.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
!function(){function t(){var t=250,e=mina.easeinout;[].slice.call(document.querySelectorAll("#grid > a")).forEach(function(a){var n=Snap(a.querySelector("svg")),o=n.select("path"),r={from:o.attr("d"),to:a.getAttribute("data-path-to")};a.addEventListener("mouseenter",function(){o.animate({path:r.to},t,e)}),a.addEventListener("mouseleave",function(){o.animate({path:r.from},t,e)})})}t()}();