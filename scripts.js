$(document).ready(function() {
	var img = new Image();
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var fileName = "";

	var editArea = $(".edit-area");

	var mainPanel = $(".main-panel")

	$("#brightness-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.brightness(10).render();
		});
	});

	$("#brightness-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.brightness(-10).render();
		});
	});

	$("#contrast-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.contrast(10).render();
		});
	});

	$("#contrast-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.contrast(-10).render();
		});
	});

	$("#saturation-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.saturation(10).render();
		});
	});

	$("#saturation-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.saturation(-10).render();
		});
	});

	$("#vibrance-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.vibrance(10).render();
		});
	});

	$("#vibrance-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.vibrance(-10).render();
		});
	});

	$("#exposure-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.exposure(10).render();
		});
	});

	$("#exposure-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.exposure(-10).render();
		});
	});

	$("#noise-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.noise(-10).render();
		});
	});

	$("#noise-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.noise(10).render();
		});
	});

	$("#sharpen-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.sharpen(-10).render();
		});
	});

	$("#sharpen-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.sharpen(10).render();
		});
	});

	$("#sepia-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.sepia(-20).render();
		});
	});

	$("#sepia-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.sepia(20).render();
		});
	});

	$("#hue-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.hue(-10).render();
		});
	});

	$("#hue-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.hue(10).render();
		});
	});

	$("#blur-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.stackBlur(-5).render();
		});
	});

	$("#blur-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.stackBlur(5).render();
		});
	});

	$("#gamma-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.gamma(-0.1).render();
		});
	});

	$("#gamma-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.gamma(10).render();
		});
	});

	$("#clip-dec").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.clip(-10).render();
		});
	});

	$("#clip-inc").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.clip(10).render();
		});
	});

	$("#vintage-btn").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.vintage().render();
		});
	});

	$("#lomo-btn").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.lomo().render();
		});
	});

	$("#clarity-btn").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.clarity().render();
		});
	});

	$("#sincity-btn").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.sinCity().render();
		});
	});

	$("#crossprocess-btn").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.crossProcess().render();
		});
	});

	$("#pinhole-btn").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.pinhole().render();
		});
	});

	$("#nostalgia-btn").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.nostalgia().render();
		});
	});

	$("#majestic-btn").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.herMajesty().render();
		});
	});

	$("#download-btn").on("click", function(e) {
		var fileExtension = fileName.slice(-4);
		if (fileExtension == ".jpg" || fileExtension == ".png") {
			var actualName = fileName.substring(0, fileName.length - 4);
		}
		download(canvas, actualName + "-edited.jpg");
	});

	$("#reset-btn").on("click", function(e) {
		Caman("#canvas", img, function() {
			this.reloadCanvasData();
			this.revert(false);
			this.render();
		});
	});

	$("#upload-file").on("change", function() {
		var file = document.querySelector("#upload-file").files[0];
		var reader = new FileReader();
		if (file) {
			fileName = file.name;
			reader.readAsDataURL(file);
		}

		reader.addEventListener(
			"load",
			function() {
				img = new Image();
				img.src = reader.result;
				img.onload = function() {
					if (editArea.hasClass("hidden-element")) {
						editArea.removeClass("hidden-element")
					}

					const downloadButton = $("#download-btn");
					if (downloadButton.hasClass("hidden-element")) {
						downloadButton.removeClass("hidden-element")
					}
					const resetButton = $("#reset-btn");
					if (resetButton.hasClass("hidden-element")) {
						resetButton.removeClass("hidden-element")
					}

					let coeffW = 1;
					let coeffH = 1;
					if (img.width > mainPanel.width()) {
						coeffW = img.width / mainPanel.width();
					}
					if (img.height > mainPanel.height()) {
						coeffH = img.height / mainPanel.height();
					}
					const coeff = coeffW > coeffH ? coeffW : coeffH;
					console.log(img.width / coeff, img.height / coeff)
					$("#canvas").width(img.width / coeff);
					$("#canvas").height(img.height / coeff);

					console.log(img.width, mainPanel.width())
					console.log(img.height, mainPanel.height())
					
					canvas.width = img.width / coeff;
					canvas.height = img.height / coeff;
					ctx.drawImage(img, 0, 0, img.width / coeff, img.height / coeff);
					$("#canvas").removeAttr("data-caman-id");
				};
			},
			false
		);
	});
});

function download(canvas, filename) {
	var e;
	var lnk = document.createElement("a");

	lnk.download = filename;

	lnk.href = canvas.toDataURL("image/jpeg", 0.8);

	if (document.createEvent) {
		e = document.createEvent("MouseEvents");
		e.initMouseEvent(
			"click",
			true,
			true,
			window,
			0,
			0,
			0,
			0,
			0,
			false,
			false,
			false,
			false,
			0,
			null
		);
		lnk.dispatchEvent(e);
	} else if (lnk.fireEvent) {
		lnk.fireEvent("onclick");
	}
}
