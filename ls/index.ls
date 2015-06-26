renderer = PIXI.auto-detect-renderer 800, 600
document.body.append-child renderer.view

stage = new PIXI.Container!

PIXI.loader
  # ..add './asset/spritesheet/supermode.json'
  # ..add './asset/texturepacker/supermode.json'
  # ..add './asset/shoebox/supermode.json'
  ..add './asset/cs6/supermode.json'
  ..load on-assets-loaded

movie = {}

!function on-assets-loaded
  frames = []

  for i from 1 to 47 by 1
    tempStr = if i < 10 then "0#{i}" else i.toString!
    frames.push PIXI.Texture.from-frame "SuperMode_#{tempStr}.png" #=> SuperMode_01.png
    movie = new PIXI.extras.MovieClip frames

  movie.animation-speed = 0.3

  movie.play!

  stage.add-child movie
  alert \11111111111111111111111
  animate!

!function animate
  movie.rotation += 0.01
  renderer.render stage
  request-animation-frame animate