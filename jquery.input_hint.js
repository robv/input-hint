(function($) {

	$.fn.input_hint = function(params) {

		// merge default and user parameters
		params = $.extend({attribute: 'placeholder', color: '#999'}, params);
		
		var placeholderSupport = 'placeholder' in document.createElement('input');
		
		// Only continue if the browser does not support placeholder
		if (!placeholderSupport)
		{
			// traverse all nodes
		    return this.each(function() {

		        var $this = $(this);
			
	            if ($this.attr('value') == '')
	                $this.attr('value', $this.attr(params.attribute)).css('color', params.color);

		        $this.focus(function() {
		            if ($this.attr('value') == $this.attr(params.attribute))
		                $this.attr('value', '').css('color', '');
		        }).blur(function() {
		            if ($this.attr('value') == '')
		                $this.attr('value', $this.attr(params.attribute)).css('color', params.color);
		        }).parents('form').submit(function() {
		            if ($this.attr('value') == $this.attr(params.attribute))
		                $this.attr('value', '').css('color', '');
		        });

		    });
		}

		// allow jQuery chaining
		return this;
	};

})(jQuery);