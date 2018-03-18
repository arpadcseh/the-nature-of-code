///<reference path="../node_modules/p5/lib/p5.global-mode.d.ts" />

var s = function (p: p5) {
    let w: Walker;
    let img: p5.Image;

    p.preload = function () {
        img = p.loadImage('ant.png');
    }

    p.setup = function () {
        p.createCanvas(640, 480);
        w = new Walker();
    }

    p.draw = function () {
        p.background(51, 51, 51);
        w.update();
        w.display();
    }

    class Walker {
        pos: p5.Vector;
        vel: p5.Vector;
        acc: p5.Vector;
        ant: p5.Image;

        constructor() {
            this.pos = p.createVector(p.width/2, p.height/2);
            this.vel = p.createVector(p.mouseX, p.mouseY);
            this.acc = p.createVector(0, 0.01);
            img.resize(50, 0);
        }

        update() {
            var mouse = p.createVector(p.mouseX, p.mouseY);
            this.acc.add(p5.Vector.sub(mouse, this.pos));
            this.acc.mult(p.random(-0.1, 0.1))
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.vel.mult(0)
        }

        display() {
            p.fill(255, 255, 255);
            p.image(img, this.pos.x, this.pos.y);
        }
    }

};

var myp5 = new p5(s);