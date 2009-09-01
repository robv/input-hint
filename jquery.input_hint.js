(function($) {

	$.fn.input_hint = function(params) {
		
		// merge default and user parameters
		params = $.extend( {attribute: 'title'}, params);
		
		// traverse all nodes
	    return this.each(function() {

	        var $this = $(this);
			
	        if ($this.attr('value') == '')
	        	$this.attr('value', $this.attr(params.attribute));

	        $this.focus(function() {
	            if ($this.attr('value') == $this.attr(params.attribute))
	                $this.attr('value', '');
	        }).blur(function() {
	            if ($this.attr('value') == '')
	                $this.attr('value', $this.attr(params.attribute));
	        }).parents('form').submit(function() {
	            if ($this.attr('value') == $this.attr(params.attribute))
	                $this.attr('value', '');
	        });

	    });

		// allow jQuery chaining
		return this;
	};

})(jQuery);