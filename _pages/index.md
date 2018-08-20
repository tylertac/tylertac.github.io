---
permalink: /
layout: index
title: Tyler Courtenay
---

<div class="index">
  <div class="container">
    <div class="grid-x grid-margin-x">
      <div class="cell medium-6 large-4">
        <img src="../assets/img/logo.png" alt="">
        <h1>Hello, friend.</h1>
        <p>I'm Tyler Courtenay. A graphic designer who lives in NYC, graduated from SVA, and works as a Senior Designer at <a href="https://unified.com">Unified</a>. <br><br><a href="https://dribbble.com/tylercourtenay">Find out more about me here.</a></p>
      </div>
      <div class="picture-rotation">
        <div class="background-image toggle-image first-image show"></div>
        <div class="background-image toggle-image second-image"></div>
        <div class="background-image toggle-image third-image"></div>
      </div>
    </div>
  </div>
</div>

<script>
  function cycleBackgrounds() {
    var index = 0;

    $imageEls = $('.toggle-image'); // Get the images to be cycled.

    setInterval(function () {
      // Get the next index.  If at end, restart to the beginning.
      index = index + 1 < $imageEls.length ? index + 1 : 0;
      // Show the next image.
      $imageEls.eq(index).addClass('show');
      // Hide the previous image.
      $imageEls.eq(index - 1).removeClass('show');

    }, 4000);
  };

  // Document Ready.
  $(function () {
    cycleBackgrounds();
  });
</script>
