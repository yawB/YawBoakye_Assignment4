

	$.fn.lightbox = function() {		/* Lightbox */

		$(this).click(function(e) {
			// prevent default functionality of opening new page
			e.preventDefault();

			var image_href = $(this).attr("href");
			var text = $(this).attr("data-title");

			var lightbox = 								/* Create Elements in lightbox window */
				'<div id="lightbox">' +
					'<div id="content">' +
						'<img src="' + image_href + '" class="active">' +
						'<p id="title">' + text + '</p>' +
					'</div>' +
				'</div>';

			$(lightbox).hide().appendTo("body").fadeIn(400);

			//on click close lightbox
			var lightbg = $("#lightbox");

			lightbg.click(function() {
				$(this).fadeOut(400, function() {
					$(this).remove();
				});
			});

			// Close lightbox with ESC key
			$(document).keyup(function(e) {
				if (e.keyCode == 27) {
					lighbg.fadeOut(400, function() {
						$(this).remove();
					});
				}
			});
			// $('lightbox_trigger').lightbox();
		});
	}