///<reference path="../node_modules/p5/lib/p5.global-mode.d.ts" />
var s = function (p) {
    var w;
    var img;
    p.preload = function () {
        img = p.loadImage('ant.png');
    };
    p.setup = function () {
        p.createCanvas(640, 480);
        w = new Walker();
    };
    p.draw = function () {
        p.background(51, 51, 51);
        w.update();
        w.display();
    };
    var Walker = /** @class */ (function () {
        function Walker() {
            this.pos = p.createVector(p.width / 2, p.height / 2);
            this.vel = p.createVector(p.mouseX, p.mouseY);
            this.acc = p.createVector(0, 0.01);
            img.resize(50, 0);
        }
        Walker.prototype.update = function () {
            this.acc.add(p.createVector(p.mouseX, p.mouseY));
            this.vel.add(this.acc);
            this.pos.add(this.vel);
        };
        Walker.prototype.display = function () {
            p.fill(255, 255, 255);
            // p.ellipse(this.pos.x, this.pos.y, 50, 50);
            p.image(img, this.pos.x, this.pos.y);
        };
        return Walker;
    }());
};
var myp5 = new p5(s);
//# sourceMappingURL=first-lesson.js.map