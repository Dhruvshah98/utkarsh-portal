$(".main").onepage_scroll({
    sectionContainer: "section",
    easing: "ease-in",
    animationTime: 1,
    pagination: false,
    updateURL: false,
    keyboard: false,
    beforeMove: function () {
        if ($(".section").hasClass("active")) {
            // var dotsDown = document.getElementById("dot-animation");
            // dotsDown.style.display="block"
            // setTimeout(function(){ dotsDown.classList.add("dot-anim");},15);
            // var HideDots = document.getElementsByClassName("dots");
            // HideDots[0].style.display="none"
            var dotDown = document.getElementById("okay-anim");
            dotDown.classList.remove("button-okay-anim");
            setTimeout(function () {
                $('#okay-anim').hide();
            }, 400);
            $('.circle-fill').hide();
            $(".question").removeClass("question-fadeIn");
            $(".question").removeClass("question-fadeOut");
            $('.yes').removeClass('active-yes');
            $('.yes-image').removeClass('active-yes');
            $(".okay-input").hide();
            $(".okay-input").removeClass("button-okay-input");
        }
    },
    afterMove: function (index) {
        $("input").blur();
        activeIndex = index;
        console.log()
        fm.setPercentage(index - 0);
        $(".question").addClass("question-fadeIn");
        var HideDots = document.getElementsByClassName("dots");
        HideDots[0].style.display = "block";
        $('.dot').show();
        $(".okay-input").hide();
        $('#main-dot').removeClass('dot-drop');
    },
    loop: false,
    keyboard: false,
    responsiveFallback: false,
    direction: "vertical",
});


var fm = new FluidMeter();
fm.init({
    targetContainer: document.getElementById("fluid-meter"),
    fillPercentage: 1,
    options: {
        fontFamily: "regular",
        drawPercentageSign: true,
        drawBubbles: true,
        size: 130,
        borderWidth: 5,
        backgroundColor: "white",
        foregroundColor: "#F5F5FA",
        foregroundFluidLayer: {
            fillStyle: "#5857F9",
            angularSpeed: 100,
            maxAmplitude: 15,
            frequency: 30,
            horizontalSpeed: -150
        },
        backgroundFluidLayer: {
            fillStyle: "rgba(88, 87, 249, 0.27)",
            angularSpeed: 150,
            maxAmplitude: 11,
            frequency: 30,
            horizontalSpeed: 150
        }
    }
});

function FluidMeter() {
    var context;
    var targetContainer;
    var secCount = $(".main .section").length;
    var time = null;
    var dt = null;
    var textToWhite = parseInt(0.6 * secCount);
    var options = {
        drawShadow: false,
        drawText: false,
        drawPercentageSign: true,
        drawBubbles: false,
        fontSize: "24px",
        fontFamily: 'medium',
        fontFillStyle: "black",
        borderWidth: 25,
        backgroundColor: "#e2e2e2",
        foregroundColor: "#fafafa"
    };

    var currentFillPercentage = 0;
    var fillPercentage = 0;
    var foregroundFluidLayer = {
        fillStyle: "purple",
        angle: 0,
        horizontalPosition: 0,
        angularSpeed: 0,
        maxAmplitude: 9,
        frequency: 30,
        horizontalSpeed: -150,
        initialHeight: 0
    };

    var backgroundFluidLayer = {
        fillStyle: "pink",
        angle: 0,
        horizontalPosition: 0,
        angularSpeed: 140,
        maxAmplitude: 12,
        frequency: 40,
        horizontalSpeed: 150,
        initialHeight: 0
    };

    var bubblesLayer = {
        bubbles: [],
        amount: 0,
        speed: 20,
        current: 0,
        swing: 0,
        size: 2,
        reset: function (bubble) {
            var meterBottom = (options.size - (options.size - getMeterRadius()) / 2) - options.borderWidth;
            var fluidAmount = currentFillPercentage * (getMeterRadius() - options.borderWidth * 2) / secCount;
            bubble.r = random(this.size, this.size * 2) / 2;
            bubble.x = random(0, options.size);
            bubble.y = random(meterBottom, meterBottom - fluidAmount);
            bubble.velX = 0;
            bubble.velY = random(this.speed, this.speed * 2);
            bubble.swing = random(0, 2 * Math.PI);
        },
        init() {
            for (var i = 0; i < this.amount; i++) {
                var meterBottom = (options.size - (options.size - getMeterRadius()) / 2) - options.borderWidth;
                var fluidAmount = currentFillPercentage * (getMeterRadius() - options.borderWidth * 2) / secCount;
                this.bubbles.push({
                    x: random(0, options.size),
                    y: random(meterBottom, meterBottom - fluidAmount),
                    r: random(this.size, this.size * 2) / 2,
                    velX: 0,
                    velY: random(this.speed, this.speed * 2)
                });
            }
        }
    }



    function setupCanvas() {
        var canvas = document.createElement('canvas');
        canvas.width = options.size;
        canvas.height = options.size;
        canvas.imageSmoothingEnabled = true;
        context = canvas.getContext("2d");
        targetContainer.appendChild(canvas);

        if (options.drawShadow) {
            context.save();
            context.beginPath();
            // context.filter = "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))";
            context.arc(options.size / 2, options.size / 2, getMeterRadius() / 2, 0, 2 * Math.PI);
            context.closePath();
            context.fill();
            context.restore();
        }
    }

    function draw() {
        var now = new Date().getTime();
        dt = (now - (time || now)) / 1000;
        time = now;

        requestAnimationFrame(draw);
        context.clearRect(0, 0, options.width, options.height);
        drawMeterBackground();
        drawFluid(dt);
        if (options.drawText) {
            drawText();
        }
        drawMeterForeground();
    }

    function drawMeterBackground() {
        context.save();
        context.fillStyle = options.backgroundColor;
        context.beginPath();
        context.arc(options.size / 2, options.size / 2, getMeterRadius() / 2 - options.borderWidth, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.restore();
    }

    function drawMeterForeground() {
        context.save();
        context.lineWidth = options.borderWidth;
        context.strokeStyle = options.foregroundColor;
        context.beginPath();
        context.arc(options.size / 2, options.size / 2, getMeterRadius() / 2 - options.borderWidth / 2, 0, 2 * Math.PI);
        context.closePath();
        context.stroke();
        context.restore();
    }
    /**
     * draws the fluid contents of the meter
     * @param  {} dt elapsed time since last frame
     */
    function drawFluid(dt) {
        context.save();
        context.arc(options.size / 2, options.size / 2, getMeterRadius() / 2 - options.borderWidth, 0, Math.PI * 2);
        context.clip();
        drawFluidLayer(backgroundFluidLayer, dt);
        drawFluidLayer(foregroundFluidLayer, dt);
        if (options.drawBubbles) {
            drawFluidMask(foregroundFluidLayer, dt);
            drawBubblesLayer(dt);
        }
        context.restore();
    }


    /**
     * draws the foreground fluid layer
     * @param  {} dt elapsed time since last frame
     */
    function drawFluidLayer(layer, dt) {
        // calculate wave angle
        if (layer.angularSpeed > 0) {
            layer.angle += layer.angularSpeed * dt;
            layer.angle = layer.angle < 0 ? layer.angle + 360 : layer.angle;
        }

        // calculate horizontal position
        layer.horizontalPosition += layer.horizontalSpeed * dt;
        if (layer.horizontalSpeed > 0) {
            layer.horizontalPosition > Math.pow(2, 53) ? 0 : layer.horizontalPosition;
        } else if (layer.horizontalPosition < 0) {
            layer.horizontalPosition < -1 * Math.pow(2, 53) ? 0 : layer.horizontalPosition;
        }

        var x = 0;
        var y = 0;
        var amplitude = layer.maxAmplitude * Math.sin(layer.angle * Math.PI / 180);

        var meterBottom = (options.size - (options.size - getMeterRadius()) / 2) - options.borderWidth;
        var fluidAmount = currentFillPercentage * (getMeterRadius() - options.borderWidth * 2) / secCount;

        if (currentFillPercentage < fillPercentage) {
            currentFillPercentage += 15 * dt;
        } else if (currentFillPercentage > fillPercentage) {
            currentFillPercentage -= 15 * dt;
        }

        layer.initialHeight = meterBottom - fluidAmount;

        context.save();
        context.beginPath();

        context.lineTo(0, layer.initialHeight);

        while (x < options.size) {
            y = layer.initialHeight + amplitude * Math.sin((x + layer.horizontalPosition) / layer.frequency);
            context.lineTo(x, y);
            x++;
        }

        context.lineTo(x, options.size);
        context.lineTo(0, options.size);
        context.closePath();
        context.fillStyle = layer.fillStyle;
        context.fill();
        context.restore();
    }

    /**
     * clipping mask for objects within the fluid constrains
     * @param {Object} layer layer to be used as a mask
     */
    function drawFluidMask(layer) {
        var x = 0;
        var y = 0;
        var amplitude = layer.maxAmplitude * Math.sin(layer.angle * Math.PI / 180);

        context.beginPath();

        context.lineTo(0, layer.initialHeight);

        while (x < options.size) {
            y = layer.initialHeight + amplitude * Math.sin((x + layer.horizontalPosition) / layer.frequency);
            context.lineTo(x, y);
            x++;
        }
        context.lineTo(x, options.size);
        context.lineTo(0, options.size);
        context.closePath();
        context.clip();
    }

    function drawBubblesLayer(dt) {
        context.save();
        for (var i = 0; i < bubblesLayer.bubbles.length; i++) {
            var bubble = bubblesLayer.bubbles[i];

            context.beginPath();
            context.strokeStyle = 'white';
            context.arc(bubble.x, bubble.y, bubble.r, 2 * Math.PI, false);
            context.stroke();
            context.closePath();

            var currentSpeed = bubblesLayer.current * dt;

            bubble.velX = Math.abs(bubble.velX) < Math.abs(bubblesLayer.current) ? bubble.velX + currentSpeed : bubblesLayer.current;
            bubble.y = bubble.y - bubble.velY * dt;
            bubble.x = bubble.x + (bubblesLayer.swing ? 0.4 * Math.cos(bubblesLayer.swing += 0.03) * bubblesLayer.swing : 0) + bubble.velX * 0.5;

            // determine if current bubble is outside the safe area
            var meterBottom = (options.size - (options.size - getMeterRadius()) / 2) - options.borderWidth;
            var fluidAmount = currentFillPercentage * (getMeterRadius() - options.borderWidth * 2) / secCount;
            if (bubble.y <= meterBottom - fluidAmount) {
                bubblesLayer.reset(bubble);
            }

        }
        context.restore();
    }

    function drawText() {
        var text = options.drawPercentageSign ? currentFillPercentage.toFixed(0) + "/" + secCount : currentFillPercentage.toFixed(0);
        context.save();
        context.font = getFontSize();
        context.fillStyle = options.fontFillStyle;
        context.textAlign = "center";
        context.textBaseline = 'middle';
        context.filter = "drop-shadow(0px 0px 5px rgba(0,0,0,0.4))"
        context.fillText(text, options.size / 2, options.size / 2);
        context.restore();
    }

    //#region helper methods
    function clamp(number, min, max) {
        return Math.min(Math.max(number, min), max);
    };

    function getMeterRadius() {
        return options.size * 0.9;
    }

    function random(min, max) {
        var delta = max - min;
        return max === min ? min : Math.random() * delta + min;
    }

    function getFontSize() {
        return options.fontSize + " " + options.fontFamily;
    }
    //#endregion

    return {
        init: function (env) {
            if (!env.targetContainer)
                throw "empty or invalid container";

            targetContainer = env.targetContainer;
            fillPercentage = clamp(env.fillPercentage, 0, secCount);

            if (env.options) {
                options.drawShadow = env.options.drawShadow === false ? false : true;
                options.size = env.options.size;
                options.drawBubbles = env.options.drawBubbles === false ? false : true;
                options.borderWidth = env.options.borderWidth || options.borderWidth;
                options.foregroundFluidColor = env.options.foregroundFluidColor || options.foregroundFluidColor;
                options.backgroundFluidColor = env.options.backgroundFluidColor || options.backgroundFluidColor;
                options.backgroundColor = env.options.backgroundColor || options.backgroundColor;
                options.foregroundColor = env.options.foregroundColor || options.foregroundColor;
                options.drawText = env.options.drawText === false ? false : true;
                options.drawPercentageSign = env.options.drawPercentageSign === false ? false : true;
                options.fontSize = env.options.fontSize || options.fontSize;
                options.fontFamily = env.options.fontFamily || options.fontFamily;
                options.fontFillStyle = env.options.fontFillStyle || options.fontFillStyle;
                // fluid settings

                if (env.options.foregroundFluidLayer) {
                    foregroundFluidLayer.fillStyle = env.options.foregroundFluidLayer.fillStyle || foregroundFluidLayer.fillStyle;
                    foregroundFluidLayer.angularSpeed = env.options.foregroundFluidLayer.angularSpeed || foregroundFluidLayer.angularSpeed;
                    foregroundFluidLayer.maxAmplitude = env.options.foregroundFluidLayer.maxAmplitude || foregroundFluidLayer.maxAmplitude;
                    foregroundFluidLayer.frequency = env.options.foregroundFluidLayer.frequency || foregroundFluidLayer.frequency;
                    foregroundFluidLayer.horizontalSpeed = env.options.foregroundFluidLayer.horizontalSpeed || foregroundFluidLayer.horizontalSpeed;
                }

                if (env.options.backgroundFluidLayer) {
                    backgroundFluidLayer.fillStyle = env.options.backgroundFluidLayer.fillStyle || backgroundFluidLayer.fillStyle;
                    backgroundFluidLayer.angularSpeed = env.options.backgroundFluidLayer.angularSpeed || backgroundFluidLayer.angularSpeed;
                    backgroundFluidLayer.maxAmplitude = env.options.backgroundFluidLayer.maxAmplitude || backgroundFluidLayer.maxAmplitude;
                    backgroundFluidLayer.frequency = env.options.backgroundFluidLayer.frequency || backgroundFluidLayer.frequency;
                    backgroundFluidLayer.horizontalSpeed = env.options.backgroundFluidLayer.horizontalSpeed || backgroundFluidLayer.horizontalSpeed;
                }
            }
            bubblesLayer.init();
            setupCanvas();
            draw();
        },
        setPercentage(percentage) {
            fillPercentage = clamp(percentage, 0, secCount);
            if (fillPercentage >= textToWhite) {
                options.fontFillStyle = "white"
            } else {
                options.fontFillStyle = "black"
            };
            if (fillPercentage == secCount) {
                $(".header-right").fadeOut();
                $(document).on('input', '.form-field', function () {
                    $(".okay-input").hide();
                    $(".submit-final").show();
                });
            }else{
                $(".header-right").fadeIn();
            };
        }
    }
};