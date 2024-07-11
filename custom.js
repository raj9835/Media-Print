document.addEventListener('DOMContentLoaded', () => {
    var formInputs = document.querySelectorAll('form input[type="text"], form input[type="email"], form input[type="tel"], form input[type="password"], form input[type="number"], form textarea, form select');
    formInputs.forEach(function (input) {
        input.addEventListener('focusin', function () {
            input.parentElement.parentElement.classList.add('input_focus');
        });
        input.addEventListener('focusout', function () {
            input.parentElement.parentElement.classList.remove('input_focus');
        });
        input.addEventListener('change', function () {
            if (input.value === '') {
                input.parentElement.parentElement.classList.remove('value_focus');
            } else {
                input.parentElement.parentElement.classList.add('value_focus');
            }
        });
    });
    document.querySelectorAll('i.phosphor-list').forEach(element => {
        element.addEventListener('click', () => {
            document.querySelectorAll('nav.haru-nav-menu--dropdown').forEach(navElement => {
                navElement.classList.toggle('ham-active');
            });
        });
    });          
});
jQuery(document).ready(function() {
	jQuery('.woocommerce-cart .checkout-button').text('Checkout Now');
	
    var view_cart = jQuery('.woocommerce-cart .woocommerce-message a').text();
	if(view_cart == 'View cart')
	{  
		jQuery('.woocommerce-cart .woocommerce-message a').hide();
	}
	
	jQuery('.woocommerce-order-received .haru-breadcrumb .current').text('Thank You');
	jQuery('.woocommerce-order-received .haru-page-title__heading--main').hide();
	if (jQuery("body").hasClass("woocommerce-checkout")) {
      jQuery(".haru-page-title__heading--main").html("CHECK<span>OUT</span>");
    }
   	
	jQuery('.form-row input[type!="submit"], textarea, select').focusin(function() {
	  jQuery(this).closest('p').addClass('input_focus');
	  jQuery('.button input').closest('p').removeClass('input_focus');
	}).focusout(function() {
	  jQuery(this).closest('p').removeClass('input_focus');
	});
  
	jQuery('.form-row input[type!="submit"], textarea, select').change(function() {
	  if (jQuery(this).val() != '') {
		jQuery(this).closest('p').addClass('value_focus');
	  } else {
		jQuery(this).closest('p').removeClass('value_focus');
	  }
	});
  
	jQuery('.form-row input[type!="submit"], textarea, select').each(function() {
	  if (jQuery(this).val() != '') {
		jQuery(this).closest('p').addClass('value_focus');
	  } else {
		jQuery(this).closest('p').removeClass('value_focus');
	  }
	});
  });
  jQuery(document).ready(function($) {
    var path = window.location.pathname;
    var breadcrumbs = jQuery('.haru-breadcrumbsss a').map(function() {
        return jQuery(this).attr('href');
    }).get();
    jQuery('.menu-item  a').each(function() {
        var href = jQuery(this).attr('href');
        if (breadcrumbs.includes(href)) {
            jQuery(this).addClass('active');
        }
    });
});
  jQuery(document).ready(function() {
	jQuery(".breadcrumb-reset").insertBefore(".breadcrumbs");
	if (jQuery('body').hasClass('single-product') || jQuery('body').hasClass('search-results')) {
		jQuery(".breadcrumbs").insertAfter(".haru-page-title__breadcrumbs");
		//$('.haru-breadcrumbsss').parent().inseretAfter(".haru-page-title__breadcrumbs");
	}
	jQuery('.haru-accordion-title').on('click',function(){
    jQuery('.woocommerce-Tabs-panel').hide();
		jQuery(this).parent().find('.woocommerce-Tabs-panel').removeAttr("style").show(); 
		   
		});
	
    jQuery('.accord-title').click(function(e) {
      e.preventDefault();
	  jQuery(this).toggleClass('active'); 
      jQuery(".haru-woocommerce-tab #tab-faqs").removeAttr("style").show(); 
      // Toggle the 'active' class on the clicked accordion header
      jQuery(this).toggleClass('active');     
  
      // Toggle the 'icon-plus' and 'icon-minus' classes to change the icon
      jQuery(this).find('.icon').toggleClass('icon-plus icon-minus');
  
      // Close all accordion contents except the one associated with the clicked header
      jQuery('#tab-faqs .panel').not(jQuery(this).next('.panel')).slideUp();
     
      // Toggle the visibility of the content associated with the clicked header
      jQuery(this).next('.panel').slideToggle();
  
      // Add and remove the 'active' class on accordion-panel
      jQuery('.accord-panel').not(jQuery(this).parent('.accord-panel')).removeClass('active');
      jQuery(this).parent('.accord-panel').toggleClass('active');
       
    });
  
    jQuery('.material-specs-wrap, .product-section').wrapAll('<div class="heavy-duty" />');
    jQuery('.lay-out, .adobe-photo-publisher').wrapAll('<div class="lay-photo-pub" />');
	  
  
  jQuery( '.jpeg-ill,.adobe-acrobat,.adobe-photoshop,.publ-isher' ).hide();
  jQuery(".adobe-heading").addClass("active");
  jQuery(".adobe-heading").click(function() {
    jQuery(".jpeg-ill, .adobe-acrobat, .adobe-photoshop, .publ-isher").hide();
    jQuery(".adobe-ill").show();
    jQuery(this).addClass("active");
    jQuery(".jpeg-heading, .adobe-acrobat-heading, .photoshop-heading, .publisher-heading").removeClass("active");
});
jQuery(".product-heading").click(function() {
    // Check if ".adobe-heading" has the "active" class
    if (jQuery(".adobe-heading").hasClass("active")) {
        // Toggle the visibility of ".adobe-ill"
        jQuery(".adobe-ill").toggle();
    }
});
  jQuery(".jpeg-heading").click(function() {
    jQuery(".adobe-acrobat, .adobe-photoshop, .publ-isher, .adobe-ill").hide();
    jQuery(".jpeg-ill").show();
    jQuery(this).addClass("active");
    jQuery(".adobe-acrobat-heading, .photoshop-heading, .publisher-heading, .adobe-heading").removeClass("active");
});
jQuery(".product-heading").click(function() {
  if (jQuery(".jpeg-heading").hasClass("active")) {
      jQuery(".jpeg-ill").toggle();
  }
});
jQuery(".adobe-acrobat-heading").click(function() {
    jQuery(".jpeg-ill, .adobe-photoshop, .publ-isher, .adobe-ill").hide();
    jQuery(".adobe-acrobat").show();
    jQuery(this).addClass("active");
    jQuery(".jpeg-heading, .photoshop-heading, .publisher-heading, .adobe-heading").removeClass("active");
});
  jQuery(".product-heading").click(function() {
    if (jQuery(".adobe-acrobat-heading").hasClass("active")) {
        jQuery(".adobe-acrobat").toggle();
    }
  });
jQuery(".photoshop-heading").click(function() {
    jQuery(".jpeg-ill, .adobe-acrobat, .publ-isher, .adobe-ill").hide();
    jQuery(".adobe-photoshop").show();
    jQuery(this).addClass("active");
    jQuery(".jpeg-heading, .adobe-acrobat-heading, .publisher-heading, .adobe-heading").removeClass("active");
});
  jQuery(".product-heading").click(function() {
    if (jQuery(".photoshop-heading").hasClass("active")) {
        jQuery(".adobe-photoshop").toggle();
    }
  });
jQuery(".publisher-heading").click(function() {
    jQuery(".jpeg-ill, .adobe-acrobat, .adobe-photoshop, .adobe-ill").hide();
    jQuery(".publ-isher").show();
    jQuery(this).addClass("active");
    jQuery(".jpeg-heading, .adobe-acrobat-heading, .photoshop-heading, .adobe-heading").removeClass("active");
});
  jQuery(".product-heading").click(function() {
    if (jQuery(".publisher-heading").hasClass("active")) {
        jQuery(".publ-isher").toggle();
    }
  });
  });
  jQuery(document).ready(function($) {
    if (jQuery('body').hasClass('single-product')) {
		jQuery('.quantity, .tc-totals-form ').wrapAll('<div class="price-quantity"></div>');
        jQuery('.product-name').each(function() {
            var text = jQuery(this).text().trim();
            var words = text.split(' ');
            var firstWord = words.shift(); // Remove the first word
            var modifiedText = '<span class="first-name">' + firstWord + '</span> ' + words.join(' '); 
            jQuery(this).html(modifiedText);
        });
    }
	jQuery(".haru-woo-search__input").focusin(function(){
		jQuery('.error_msg').hide();
	  });
	  if (jQuery('body').hasClass('search-results')) {
        jQuery('body').addClass('product-category-page');
    }
});
jQuery(document).ready(function() {
		jQuery('.skipuploadfornow-div').click(function(){
		// Trigger click on the "Add to cart" button
		jQuery('.single_add_to_cart_button').click();
	});
	jQuery('.tm-totals-form-main').insertAfter(jQuery('.summary-content .cart .quantity'));
  });
  jQuery(document).ready(function($){
    $('.tmcp-upload').change(function(){
        var allowedExtensions = /(\.pdf|\.docx|\.png|\.jpg|\.zip)$/i;
        var fileName = $(this).val();
        var isValid = allowedExtensions.test(fileName);
        var errorMessage = $(this).closest('.tc-row').find('.error-message');
        
        if (!isValid) {
            errorMessage.show();
            $(this).val('');
            alert('File type not supported. Please upload a PDF, DOCX, PNG, JPG, or ZIP file.');
        } else {
            errorMessage.hide();
            
        }
    });
});
 
  jQuery(document).ready(function(jQuery) {
	  
  
	  
//    setTimeout(function(){	  
// 	jQuery(".product-page .products .grid-item").hide();  
// 	jQuery(".product-page .products .grid-item").slice(0, 4).show();  
//    },500); 	  
//    jQuery('.elementor-button-text').on('click',function(e){
// 	e.preventDefault();
//      jQuery('.product-page .products .grid-item').show();
//      jQuery('.elementor-button-text').hide();
//    });
    var page = 1;
    var loading = false;    
    var noMorePosts = false;
    // Function to load more posts via AJAX
    function loadMorePosts() {  
        if (loading || noMorePosts) {
            return;
        }
    
        loading = true;
        jQuery.ajax({
            url: ajax_object.ajax_url,
            type: 'post',
            data: {
                action: 'load_more_posts',
                page: page,
            },
            success: function(response) {
                if (response) {
                    jQuery('.products').append(response);
                    page++;
                } else {
                    noMorePosts = true;
                }
                loading = false;
            },
        });
    }
    // Trigger loadMorePosts() when "Load More" button is clicked
    jQuery('.load-more-button').on('click', function() {
        loadMorePosts();
    });
});
jQuery(document).ready(function() {
    jQuery('.uploadyourartwork-div').click(function() {
        jQuery('.upload-pop-up').addClass('pop');
        jQuery('body').addClass('no-scroll');
        var closeButton = jQuery('<button class="close-button">Close</button>');
        jQuery('.upload-pop-up').append(closeButton);
        closeButton.click(function() {
            jQuery('.upload-pop-up').removeClass('pop');
            jQuery('body').removeClass('no-scroll');
            closeButton.remove();
        });
    });
	
	jQuery(".button-wrap").click(function(event) {
		var formId = jQuery(this).closest('form').attr("id"); // Get the ID of the closest form to the clicked button
		console.log(formId); 
		var email = jQuery("#" + formId + " .email").val();
		var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
	
		// Reset error classes and messages for the current form
		jQuery("#" + formId + " .all-class").remove();
		jQuery("#" + formId + " .mc4wp-response").remove();
		jQuery("#" + formId + " .email").removeClass("smart-error");
	
		var hasErrors = false;
	
		if (email === "") {
			jQuery("#" + formId + " .button-wrap").after("<div class='all-class'>This field is required.</div>");
			jQuery("#" + formId + " .email").addClass("smart-error");
			hasErrors = true;
		} else if (!emailRegex.test(email)) {
			jQuery("#" + formId + " .button-wrap").after('<div class="all-class error-smart">Please enter a valid email address.</div>'); // Fixed the class order for error styling
			jQuery("#" + formId + " .email").addClass("smart-error");
			hasErrors = true;
		}
	
		if (!hasErrors) {
			event.preventDefault();
			// If there are no errors for the current form, submit it
			jQuery("#" + formId).submit();
		}
	});
	
	jQuery("input[name='EMAIL']").focus(function() {
		jQuery(this).removeClass("smart-error");
		jQuery(this).siblings(".all-class").remove();
		jQuery(this).siblings(".mc4wp-response").remove();
	});
});
  
///////// EXTRA JS ///////
jQuery(document).ready(function () {
	if (jQuery('.second-form-shipping').find('#billing_first_name').length) {
		jQuery('.second-form-shipping .button').on("click", function (e) {
			jQuery(".all-class").remove();
			jQuery(".second-form-shipping .validation.custom-error").remove();
			var billing_first_name = jQuery("#billing_first_name").val();
			var billing_last_name = jQuery("#billing_last_name").val();
			var billing_city = jQuery("#billing_city").val();
			var billing_address_1 = jQuery("#billing_address_1").val();
			var billing_postcode = jQuery("#billing_postcode").val();
			var billing_phone = jQuery("#billing_phone").val();
			var billing_email = jQuery("#billing_email").val();
			var billing_country = jQuery("#billing_country").val();
			var billing_state = jQuery("#billing_state").val();
			if (billing_country == 'default') {
				billing_country = '';
			}
			var display_billing_state_field = jQuery("#billing_state_field").css("display");
			if (display_billing_state_field == "none") {
				billing_state = "none";
			}
			if (billing_last_name == '' || billing_first_name == '' || billing_address_1 == '' || billing_city == '' || billing_phone == '' || billing_postcode == '' || billing_email == '' || billing_country == '' || billing_state == '') {
				if (billing_first_name == '') {
					jQuery("#billing_first_name").after("<div class='all-class'>This field is required.</div>");
					jQuery("#billing_first_name").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#billing_first_name").removeClass("error");
				}
				if (billing_country == '') {
					jQuery("#billing_country").parent().after("<div class='all-class'>This field is required.</div>");
					jQuery("#billing_country").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#billing_country").removeClass("error");
				}
				if (billing_state == '') {
					jQuery("#billing_state").parent().after("<div class='all-class'>This field is required.</div>");
					jQuery("#billing_state").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#billing_state").removeClass("error");
				}
				if (billing_last_name == '') {
					jQuery("#billing_last_name").after("<div class='all-class'>This field is required.</div>");
					jQuery("#billing_last_name").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#billing_last_name").removeClass("error");
				}
				if (billing_address_1 == '') {
					jQuery("#billing_address_1").after("<div class='all-class'>This field is required.</div>");
					jQuery("#billing_address_1").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#billing_address_1").removeClass("error");
				}
				if (billing_city == '') {
					jQuery("#billing_city").after("<div class='all-class'>This field is required.</div>");
					jQuery("#billing_city").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#billing_city").removeClass("error");
				}
				if (billing_postcode == '') {
					jQuery("#billing_postcode").after("<div class='all-class'>This field is required.</div>");
					jQuery("#billing_postcode").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#billing_postcode").removeClass("error");
				}
				if (billing_phone == '') {
					jQuery("#billing_phone").after("<div class='all-class'>This field is required.</div>");
					jQuery("#billing_phone").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#billing_phone").removeClass("error");
				}
				if (billing_email == '') {
					jQuery("#billing_email").after("<div class='all-class'>This field is required.</div>");
					jQuery("#billing_email").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				jQuery(".custom-error").remove();
				jQuery(".second-form-shipping button").parent().after("<div class='validation custom-error' >One or more fields have an error. Please check and try again.</div>");
				jQuery(".custom-error").show();
				//setTimeout(function() { jQuery(".custom-error").hide(); }, 10000);
			}
			if (billing_email != '') {
				if (validateEmail(billing_email)) {
					jQuery("#emailcustome").remove();
					jQuery("#billing_email").removeClass("error");
				}
				else {
					jQuery("#billing_email").after('<div for="email" id="emailcustome" class="error-smart all-class">Please enter a valid email address.</div>');
					jQuery("#billing_email").addClass("error");
					e.preventDefault();
				}
			}
		});
	}
});
////////////EDIT shipping Address Form ////
jQuery(document).ready(function () {
	if (jQuery('.second-form-shipping').find('#shipping_first_name').length) {
		jQuery('.second-form-shipping .button').on("click", function (e) {
			jQuery(".all-class").remove();
			jQuery(".custom-error").remove();
			var color = jQuery("#shipping_state_field").css("display"); console.log(color);
			jQuery(".all-class").remove();
			jQuery(".custom-error").remove();
			//~ jQuery("input").removeClass("error");
			jQuery("#shipping p").removeClass("error");
			var shipping_first_name = jQuery("#shipping_first_name").val();
			var shipping_last_name = jQuery("#shipping_last_name").val();
			var shipping_city = jQuery("#shipping_city").val();
			var shipping_address_1 = jQuery("#shipping_address_1").val();
			var shipping_postcode = jQuery("#shipping_postcode").val();
			//~ var shipping_phone = jQuery("#shipping_phone").val();
			var shipping_phone = 1213;
			//~ var shipping_email = jQuery("#shipping_email").val();
			var shipping_email = 'test@gmauil.com';
			var shipping_country = jQuery("#shipping_country").val();
			var shipping_state = jQuery("#shipping_state").val();
			if (color == "none") {
				shipping_state = "no state";
				console.log("shipping");
			}
			if (shipping_country == "default") {
				shipping_country = "";
			}
			if (shipping_state == null) {
				shipping_state = "";
			}
			var display_shipping_state_field = jQuery("#shipping_state_field").css("display");
			if (display_shipping_state_field == "none") {
				shipping_state = "none";
			}
			if (shipping_last_name == '' || shipping_first_name == '' || shipping_address_1 == '' || shipping_city == '' || shipping_postcode == '' || shipping_country == '' || shipping_state == '') {
				if (shipping_first_name == '') {
					jQuery("#shipping_first_name").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_first_name").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#shipping_first_name").removeClass("error"); jQuery(".custom-error").remove();
				}
				if (shipping_country == '') {
					jQuery("#shipping_country").parent().after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_country").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#shipping_country").removeClass("error"); jQuery(".custom-error").remove();
				}
				if (shipping_state == '') {
					if (jQuery('#shipping_state_field').find('.required').length) {
						jQuery("#shipping_state").parent().after("<div class='all-class'>This field is required.</div>");
						jQuery("#shipping_state").addClass("error");
						e.preventDefault();
						console.log("1989");
					}
				}
				else {
					jQuery("#shipping_state").removeClass("error"); jQuery(".custom-error").remove();
				}
				if (shipping_last_name == '') {
					jQuery("#shipping_last_name").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_last_name").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#shipping_last_name").removeClass("error"); jQuery(".custom-error").remove();
				}
				if (shipping_address_1 == '') {
					jQuery("#shipping_address_1").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_address_1").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#shipping_address_1").removeClass("error"); jQuery(".custom-error").remove();
				}
				if (shipping_city == '') {
					jQuery("#shipping_city").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_city").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#shipping_city").removeClass("error"); jQuery(".custom-error").remove();
				}
				if (shipping_postcode == '') {
					jQuery("#shipping_postcode").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_postcode").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#shipping_postcode").removeClass("error"); jQuery(".custom-error").remove();
				}
				if (shipping_phone == '') {
					jQuery("#shipping_phone").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_phone").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				else {
					jQuery("#shipping_phone").removeClass("error"); jQuery(".custom-error").remove();
				}
				if (shipping_email == '') {
					jQuery(".email-smart-error").remove();
					jQuery(".smart-error").remove();
					jQuery("#shipping_email").after("<div class='smart-error'>This field is required.</div>");
					jQuery("#shipping_email").addClass("error");
					e.preventDefault();
					//console.log("test");
				}
				jQuery(".custom-error").remove();
				jQuery(".second-form-shipping button").parent().after("<div class='validation  custom-error' >One or more fields have an error. Please check and try again.</div>");
				jQuery(".custom-error").show();
				//setTimeout(function() { jQuery(".custom-error").hide(); }, 10000);
			}
			if (shipping_email != '') {
				if (validateEmail(shipping_email)) {
					jQuery("#emailcustome").remove();
					jQuery(".email-smart-error").remove();
					jQuery("#shipping_email").removeClass("error");
				}
				else {
					jQuery(".smart-error").remove(); jQuery(".email-smart-error").remove();
					jQuery("#shipping_email").after('<div class="email-smart-error">Please enter a valid email address.</div>');
					jQuery(".custom-error").remove();
					jQuery(".second-form-shipping button").parent().after("<div class='validation custom-error' >One or more fields have an error. Please check and try again.</div>");
					jQuery("#shipping_email").addClass("error");
					e.preventDefault();
				}
			}
			else {
				jQuery(".email-smart-error").remove();
			}
			//~ if (shipping_phone != '') {
			//~ intRegex = /[0-9 -()+]+$/;
			//~ if (!intRegex.test(shipping_phone)) {
			//~ jQuery("#shipping_phone").after('<div for="email" id="emailcustome" class="error-smart all-class">Please enter a valid phone number.</div>');
			//~ jQuery(".custom-error").remove();
			//~ jQuery(".checkout button").parent().after("<div class='validation custom-error' >One or more fields have an error. Please check and try again.</div>");
			//~ jQuery("#shipping_phone").addClass("error");
			//~ e.preventDefault();
			//~ }
			//~ }
		});
	}
});
/////////////////////////////////////my account profile page form jQuery/////////////
jQuery(document).ready(function () {
	jQuery(document).on('click', '.woocommerce-EditAccountForm .woocommerce-Button', function (e) {
		jQuery(".smart-error").remove();
		//console.log("smartdata");						
		var fname = jQuery("#account_first_name").val();
		var lname = jQuery("#account_last_name").val();
		var disname = jQuery("#account_display_name").val();
		var email = jQuery("#account_email").val();
		var pass1 = jQuery("#password_1").val();
		var pass2 = jQuery("#password_2").val();
		var passcurrent = jQuery("#password_current").val();
		jQuery("#emailcustome").remove();
		if (fname == "" || lname == "" || disname == "" || email == "") {
			if (fname == "") {
				jQuery("#account_first_name").addClass("error");
				jQuery("#account_first_name").after("<div class='smart-error'>This field is required.</div>");
			}
			else {
				jQuery("#account_first_name").removeClass("error");
			}
			if (lname == "") {
				jQuery("#account_last_name").addClass("error");
				jQuery("#account_last_name").after("<div class='smart-error'>This field is required.</div>");
			}
			else {
				jQuery("#account_last_name").removeClass("error");
			}
			if (disname == "") {
				jQuery("#account_display_name").addClass("error");
				jQuery("#account_display_name").after("<div class='smart-error'>This field is required.</div>");
			}
			else {
				jQuery("#account_display_name").removeClass("error");
			}
			if (email == "") {
				jQuery("#account_email").addClass("error");
				jQuery("#account_email").after("<div class='smart-error'>This field is required.</div>");
			}
			else {
				jQuery("#account_email").removeClass("error");
			}
			jQuery(".custom-success").remove();
			//console.log("no data found");
			jQuery(".custom-error").remove();
			jQuery(".woocommerce-EditAccountForm").append("<div class='validation custom-error' >One or more fields have an error. please check and try again.</div>");
			jQuery(".custom-error").show();
			//setTimeout(function() { jQuery(".custom-error").hide(); }, 10000);
			if (email != '') {
				if (validateEmail(email)) {
					jQuery("#emailcustome").remove();
					jQuery("#emailcomment").removeClass("error");
				}
				else {
					jQuery("#account_email").addClass("error");
					jQuery("#account_email").after('<div for="email" id="emailcustome" class="error-smart">Please enter a valid email address.</div>');
				}
			}
			e.preventDefault();
		}
		else {
			jQuery("#account_first_name").removeClass("error");
			jQuery("#account_last_name").removeClass("error");
			jQuery("#account_display_name").removeClass("error");
			jQuery("#account_email").removeClass("error");
			jQuery("#billing_mobile_phone").removeClass("error");
			if (validateEmail(email)) {
				//alert('Nice!! your Email is valid, now you can continue..');
				jQuery(".custom-error").remove();
				jQuery("#emailcustome").remove();
				//console.log("data found");
				jQuery(".custom-success").remove();
				//jQuery(".woocommerce-EditAccountForm").after("<div class='validation custom-success'>Your account updated successfully. Thank you!</div>");
				//jQuery(".custom-error").show();
				//setTimeout(function() { jQuery(".custom-success").hide();jQuery("#emailcustome").remove();}, 10000);
				//e.preventDefault();
			}
			else {
				jQuery("#account_email").addClass("error");
				jQuery("#account_email").after('<div for="email" id="emailcustome" class="error-smart">Please enter a valid email address.</div>');
			}
			//e.preventDefault();
		}
	});
});
//login-form
jQuery(document).ready(function () {
	jQuery('.login button').on("click", function (e) {
		jQuery(".all-class").remove();
		jQuery(".all-class1").remove();
		jQuery(".woocommerce-notices-wrapper").remove();
		jQuery("#reg_email").removeClass("error");
		jQuery("#reg_billing_first_name").removeClass("error");
		jQuery("#reg_billing_last_name").removeClass("error");
		jQuery("#reg_username").removeClass("error");
		jQuery("#reg_password").removeClass("error");
		jQuery("#reg_password2").removeClass("error");
		var username = jQuery("#username").val();
		var password = jQuery("#password").val();
		if (username == '' || password == '') {
			if (username == '') {
				jQuery("#username").after("<div class='all-class'>This field is required.</div>");
				jQuery("#username").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else {
				jQuery("#username").removeClass("error");
			}
			if (password == '') {
				jQuery("#password").after("<div class='all-class'>This field is required.</div>");
				jQuery("#password").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			// else if (password.length < 8) {
			// 	jQuery("#password").after("<div class='all-class'>This field is required minimum 8 character.</div>");
			// 	jQuery("#password").addClass("error");
			// 	e.preventDefault();
			// 	//console.log("test");
			// }
			else {
				jQuery("#password").removeClass("error");
			}
			jQuery(".custom-error").remove();
			jQuery(".mo-openid-app-icons,.create-log").after("<div class='validation custom-error' >One or more fields have an error. Please check and try again.</div>");
			jQuery(".custom-error").show();
			//setTimeout(function() { jQuery(".custom-error").hide(); }, 10000);
		}
		// else if (password.length < 8) {
		// 	jQuery("#password").after("<div class='all-class'>This field is required minimum 8 character.</div>");
		// 	jQuery("#password").addClass("error");
		// 	e.preventDefault();
		// 	//console.log("test");
		// }
	});
});
//register page
jQuery(document).ready(function () {
    jQuery('.login-register-btn').on("click", function (e) {
        // Remove existing error messages and classes
        jQuery(".all-class").remove();
        jQuery(".woocommerce-notices-wrapper").remove();
        jQuery("#username").removeClass("error");
        jQuery("#password").removeClass("error");
        jQuery("#reg_email").removeClass("error");
        jQuery("#reg_billing_first_name").removeClass("error");
        jQuery("#reg_billing_last_name").removeClass("error");
        jQuery("#reg_password2").removeClass("error");
        var reg_billing_first_name = jQuery("#reg_billing_first_name").val();
        var reg_billing_last_name = jQuery("#reg_billing_last_name").val();
        var reg_username = jQuery("#reg_username").val();
        var reg_email = jQuery("#reg_email").val();
        var reg_password = jQuery("#reg_password").val();
        var reg_password2 = jQuery("#reg_password2").val();
        var isValid = true;
        // Validation checks
        if (reg_username == '' || reg_password == '' || reg_billing_first_name == '' || reg_billing_last_name == '' || reg_email == '' || reg_password2 == '') {
            if (reg_username == '') {
                jQuery("#reg_username").after("<div class='all-class'>This field is required.</div>");
                jQuery("#reg_username").addClass("error");
                isValid = false;
            }
            if (reg_password == '') {
                jQuery("#reg_password").after("<div class='all-class'>This field is required.</div>");
                jQuery("#reg_password").addClass("error");
                isValid = false;
            }
            else if (reg_password.length < 8) {
                jQuery("#reg_password").after("<div class='all-class'>This field is required minimum 8 characters.</div>");
                jQuery("#reg_password").addClass("error");
                isValid = false;
            }
            if (reg_email == '') {
                jQuery("#reg_email").after("<div class='all-class gmail-error'>This field is required.</div>");
                jQuery("#reg_email").addClass("error");
                isValid = false;
            }
            if (reg_billing_first_name == '') {
                jQuery("#reg_billing_first_name").after("<div class='all-class'>This field is required.</div>");
                jQuery("#reg_billing_first_name").addClass("error");
                isValid = false;
            }
            if (reg_billing_last_name == '') {
                jQuery("#reg_billing_last_name").after("<div class='all-class'>This field is required.</div>");
                jQuery("#reg_billing_last_name").addClass("error");
                isValid = false;
            }
            if (reg_password2 == '') {
                jQuery("#reg_password2").after("<div class='all-class'>This field is required.</div>");
                jQuery("#reg_password2").addClass("error");
                isValid = false;
            }
            else if (reg_password2.length < 8) {
                jQuery("#reg_password2").after("<div class='all-class'>This field is required minimum 8 characters.</div>");
                jQuery("#reg_password2").addClass("error");
                isValid = false;
            }
        }
        // Password match check
        if (isValid && reg_password != reg_password2) {
            jQuery("#reg_password2").after("<div class='all-class'>Passwords do not match.</div>");
            jQuery("#reg_password").addClass("error");
            jQuery("#reg_password2").addClass("error");
            isValid = false;
        }
        // Email validation
        if (reg_email != '' && !validateEmail(reg_email)) {
            jQuery("#reg_email").after("<div class='all-class'>Please enter a valid email address.</div>");
            jQuery("#reg_email").addClass("error");
            isValid = false;
        }
        // Display validation message if there are errors
        if (!isValid) {
            e.preventDefault();
            jQuery(".custom-error").remove();
            jQuery(".register button").after("<div class='validation custom-error'>One or more fields have an error. Please check and try again.</div>");
        }
    });
});
function validateEmail(email) {
    // Email validation regex
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validateEmail(email) {
    // Regular expression to check if email is valid
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
jQuery(document).ready(function () {
	//~ jQuery('.lost_reset_password .button').on("touchstart click",function(e){
	jQuery("body").on('click', '.ct-lost-password-wrap .button', function (e) {
		// e.stopImmediatePropagation();
		jQuery(".all-class").remove();
		jQuery(".woocommerce-notices-wrapper").remove();
		var user_login = jQuery("#user_login").val();
		if (user_login == '') {
			jQuery("#user_login").after("<div class='all-class'>This field is required.</div>");
			jQuery("#user_login").addClass("error");
			e.preventDefault();
			//console.log("test");
		}
		else {
			jQuery("#user_login").removeClass("error");
		}
	});
});
jQuery(document).ready(function () {
	jQuery('.ct-reset-password-wrap button').on("touchstart click", function (e) {
		// e.stopImmediatePropagation();
		jQuery(".all-class").remove();
		jQuery(".woocommerce-notices-wrapper").remove();
		var password_1 = jQuery("#password_1").val();
		var password_2 = jQuery("#password_2").val();
		if (password_1 == '' || password_2 == '') {
			if (password_1 == '') {
				jQuery("#password_1").after("<div class='all-class'>This field is required.</div>");
				jQuery("#password_1").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else if (password_1.length < 8) {
				jQuery("#password_1").after("<div class='all-class'>This field is required minimum 8 character.</div>");
				jQuery("#password_1").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else {
				jQuery("#password_1").removeClass("error");
			}
			if (password_2 == '') {
				jQuery("#password_2").after("<div class='all-class'>This field is required.</div>");
				jQuery("#password_2").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else if (password_2.length < 8) {
				jQuery("#password_2").after("<div class='all-class'>This field is required minimum 8 character.</div>");
				jQuery("#password_2").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else {
				jQuery("#password_2").removeClass("error");
			}
			jQuery(".custom-error").remove();
			jQuery("#lost_reset_form button").parent().after("<div class='validation custom-error' >One or more fields have an error. Please check and try again.</div>");
			jQuery(".custom-error").show();
			//setTimeout(function() { jQuery(".custom-error").hide(); }, 10000);
		}
		else if (password_1.length < 8) {
			jQuery("#password_1").after("<div class='all-class'>This field is required minimum 8 character.</div>");
			jQuery("#password_1").addClass("error");
			e.preventDefault();
			//console.log("test");
		}
		else if (password_2.length < 8) {
			jQuery("#password_2").after("<div class='all-class'>This field is required minimum 8 character.</div>");
			jQuery("#password_2").addClass("error");
			e.preventDefault();
			//console.log("test");
		}
		else {
			if (password_2 != password_1) {
				jQuery("#password_2").after("<div class='all-class'>Passwords does not match.</div>");
				e.preventDefault();
			}
		}
	});
});
jQuery(document).ready(function () {
	//~ jQuery('.checkout button').on( "click", function(e)
	jQuery("body").on('click', '.checkout #place_order', function (e) {
		jQuery(".all-class").remove();
		jQuery("input").removeClass("error");
		//jQuery("input").addClass("tess");
		var display = jQuery(".woocommerce-account-fields div.create-account").css("display"); console.log(display);
		if (display != "none") {
			//alert("clicked");
			var account_username = jQuery("#account_username").val();
			var account_password = jQuery("#account_password").val();
			if (account_username == '') {
				jQuery("#account_username").after("<div class='all-class'>This field is required.</div>");
				jQuery("#account_username").addClass("error");
				e.preventDefault();
				jQuery(".custom-error").remove();
				jQuery(".checkout button").parent().after("<div class='validation custom-error' >One or more fields have an error. Please check and try again.</div>");
				//console.log("test");
			}
			else {
				jQuery(".all-class").remove();
				jQuery(".custom-error").remove();
				jQuery("#account_username").removeClass("error");
			}
			if (account_password == '') {
				jQuery("#account_password").after("<div class='all-class'>This field is required.</div>");
				jQuery("#account_password").addClass("error");
				e.preventDefault();
				jQuery(".custom-error").remove();
				jQuery(".checkout button").parent().after("<div class='validation custom-error' >One or more fields have an error. Please check and try again.</div>");
				//console.log("test");
			}
			else if (account_password.lenth < 8) {
				jQuery("#account_password").after("<div class='all-class'>This field is required minimum 8 character.</div>");
				jQuery("#account_password").addClass("error");
				e.preventDefault();
				jQuery(".custom-error").remove();
				jQuery(".checkout button").parent().after("<div class='validation custom-error' >One or more fields have an error. Please check and try again.</div>");
				//console.log("test");
			}
			else {
				jQuery(".all-class").remove();
				jQuery(".custom-error").remove();
				jQuery("#account_password").removeClass("error");
			}
		}
		var billing_first_name = jQuery("#billing_first_name").val();
		var billing_last_name = jQuery("#billing_last_name").val();
		var billing_city = jQuery("#billing_city").val();
		var billing_address_1 = jQuery("#billing_address_1").val();
		var billing_postcode = jQuery("#billing_postcode").val();
		var billing_phone = jQuery("#billing_phone").val();
		var billing_email = jQuery("#billing_email").val();
		var billing_country = jQuery("#billing_country").val();
		var billing_state = jQuery("#billing_state").val();
		var color = jQuery("#billing_state_field").css("display"); console.log(color);
		if (color == "none") { billing_state = "no state" }
		if (billing_state == '' || billing_state == '' || billing_last_name == '' || billing_first_name == '' || billing_address_1 == '' || billing_city == '' || billing_phone == '' || billing_postcode == '' || billing_email == '') {
			if (billing_first_name == '') {
				jQuery("#billing_first_name").after("<div class='all-class'>This field is required.</div>");
				jQuery("#billing_first_name").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else {
				jQuery("#billing_first_name").removeClass("error");
			}
			if (billing_last_name == '') {
				jQuery("#billing_last_name").after("<div class='all-class'>This field is required.</div>");
				jQuery("#billing_last_name").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else {
				jQuery("#billing_last_name").removeClass("error");
			}
			if (billing_country == '') {
				jQuery("#billing_country").parent().after("<div class='all-class'>This field is required.</div>");
				jQuery("#billing_country").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else {
				jQuery("#billing_country").removeClass("error");
			}
			if (billing_state == '') {
				jQuery("#billing_state").parent().after("<div class='all-class'>This field is required.</div>");
				jQuery("#billing_state").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else {
				jQuery("#billing_state").removeClass("error");
			}
			if (billing_address_1 == '') {
				jQuery("#billing_address_1").after("<div class='all-class'>This field is required.</div>");
				jQuery("#billing_address_1").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else {
				jQuery("#billing_address_1").removeClass("error");
			}
			if (billing_city == '') {
				jQuery("#billing_city").after("<div class='all-class'>This field is required.</div>");
				jQuery("#billing_city").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else {
				jQuery("#billing_city").removeClass("error");
				console.log("2033");
			}
			if (billing_postcode == '') {
				jQuery("#billing_postcode").after("<div class='all-class'>This field is required.</div>");
				jQuery("#billing_postcode").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else {
				jQuery("#billing_postcode").removeClass("error");
			}
			if (billing_phone == '') {
				jQuery("#billing_phone").after("<div class='all-class'>This field is required.</div>");
				jQuery("#billing_phone").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			else {
				jQuery("#billing_phone").removeClass("error");
			}
			if (billing_email == '') {
				jQuery("#billing_email").after("<div class='all-class'>This field is required.</div>");
				jQuery("#billing_email").addClass("error");
				e.preventDefault();
				//console.log("test");
			}
			jQuery(".custom-error").remove();
			jQuery(".checkout button").parent().after("<div class='validation custom-error' >One or more fields have an error. Please check and try again.</div>");
			jQuery(".custom-error").show();
			//setTimeout(function() { jQuery(".custom-error").hide(); }, 10000);
		}
		if (billing_phone != '') {
			intRegex = /[0-9 -()+]+$/;
			if (!intRegex.test(billing_phone)) {
				jQuery("#billing_phone").after('<div for="phone" id="phone" class="error-smart all-class">Please enter a valid phone number.</div>');
				jQuery("#billing_phone").addClass("error");
				e.preventDefault();
			} else {
				jQuery("#billing_phone").removeClass("error");
				jQuery(".custom-error").remove();
			}
		}
		if (billing_email != '') {
			if (validateEmail(billing_email)) {
				jQuery("#emailcustome").remove();
				jQuery("#billing_email").removeClass("error");
				jQuery(".custom-error").remove();
			}
			else {
				jQuery("#billing_email").after('<div for="email" id="emailcustome" class="error-smart all-class">Please enter a valid email address.</div>');
				jQuery("#billing_email").addClass("error");
				jQuery(".custom-error").remove();
				jQuery(".checkout button").parent().after("<div class='validation custom-error' >One or more fields have an error. Please check and try again.</div>");
				e.preventDefault();
			}
		}
		if (jQuery("#ship-to-different-address").find('input[type=checkbox]').prop("checked") == true) {
			//jQuery(".all-class").remove();
			var shipping_first_name = jQuery("#shipping_first_name").val();
			var shipping_last_name = jQuery("#shipping_last_name").val();
			var shipping_city = jQuery("#shipping_city").val();
			var shipping_address_1 = jQuery("#shipping_address_1").val();
			var shipping_postcode = jQuery("#shipping_postcode").val();
			var shipping_phone = 1234;
			var shipping_email_address = 'test@gmail.com';
			var shipping_country = jQuery("#shipping_country").val();
			var shipping_state = jQuery("#shipping_state").val();
			var color = jQuery("#shipping_state_field").css("display"); console.log(color);
			if (color == "none") { shipping_state = "no state" }
			if (shipping_last_name == '' || shipping_first_name == '' || shipping_address_1 == '' || shipping_city == '' || shipping_phone == '' || shipping_postcode == '' || shipping_email_address == '' || shipping_country == '' || shipping_state == '') {
				if (shipping_first_name == '') {
					jQuery("#shipping_first_name").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_first_name").addClass("error");
					e.preventDefault();
					console.log("test");
				}
				else {
					jQuery("#shipping_first_name").removeClass("error");
				}
				if (shipping_last_name == '') {
					jQuery("#shipping_last_name").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_last_name").addClass("error");
					e.preventDefault();
					console.log("test");
				}
				else {
					jQuery("#shipping_last_name").removeClass("error");
				}
				if (shipping_country == '') {
					jQuery("#shipping_country").parent().after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_country").addClass("error");
					e.preventDefault();
					console.log("test");
				}
				else {
					jQuery("#shipping_country").removeClass("error");
				}
				if (shipping_state == '') {
					jQuery("#shipping_state").parent().after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_state").addClass("error");
					e.preventDefault();
					console.log("test");
				}
				else {
					jQuery("#shipping_state").removeClass("error");
				}
				if (shipping_address_1 == '') {
					jQuery("#shipping_address_1").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_address_1").addClass("error");
					e.preventDefault();
					console.log("test");
				}
				else {
					jQuery("#shipping_address_1").removeClass("error");
				}
				if (shipping_city == '') {
					jQuery("#shipping_city").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_city").addClass("error");
					e.preventDefault();
					console.log("test");
				}
				else {
					jQuery("#shipping_city").removeClass("error");
				}
				if (shipping_postcode == '') {
					jQuery("#shipping_postcode").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_postcode").addClass("error");
					e.preventDefault();
					console.log("test");
				}
				else {
					jQuery("#shipping_postcode").removeClass("error");
				}
				if (shipping_phone == '') {
					jQuery("#shipping_phone").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_phone").addClass("error");
					//~ e.preventDefault();
					console.log("test");
				}
				else {
					jQuery("#shipping_phone").removeClass("error");
				}
				if (shipping_email_address == '') {
					jQuery("#shipping_email_address").after("<div class='all-class'>This field is required.</div>");
					jQuery("#shipping_email_address").addClass("error");
					e.preventDefault();
					console.log("test");
				}
				jQuery(".custom-error").remove();
				jQuery(".checkout button").parent().after("<div class='validation  custom-error' >One or more fields have an error. Please check and try again.</div>");
				jQuery(".custom-error").show();
				//setTimeout(function() { jQuery(".custom-error").hide(); }, 10000);
			}
			if (shipping_phone != '') {
				intRegex = /[0-9 -()+]+$/;
				if (!intRegex.test(shipping_phone)) {
					jQuery("#shipping_phone").after('<div for="email" id="emailcustome" class="error-smart all-class">Please enter a valid phone number.</div>');
					jQuery("#shipping_phone").addClass("error");
				}
				else {
					jQuery(".all-class").remove();
					jQuery(".custom-error").remove();
					jQuery("#shipping_phone").removeClass("error");
				}
			}
			if (shipping_email_address != '') {
				if (validateEmail(shipping_email_address)) {
					jQuery("#emailcustome1").remove();
					jQuery("#shipping_email_address").removeClass("error");
					jQuery(".all-class").remove();
				}
				else {
					jQuery("#shipping_email_address").after('<div for="email" id="emailcustome1" class="error-smart all-class">Please enter an email address.</div>');
					jQuery("#shipping_email_address").addClass("error");
					e.preventDefault();
				}
			}
		}
	});
});
jQuery(document).ready(function () {
	jQuery('.woocommerce-cart .woocommerce').bind('DOMSubtreeModified', function (event) {
		jQuery('.woocommerce-info:contains("Address updated.")').addClass('sucess');
		if (jQuery(".woocommerce-cart .woocommerce").find(".woocommerce-error li").size()) {
			jQuery("#coupon_code").addClass("error");
			jQuery(".coupan-wrap").removeClass("succes-active");
		} else {
			jQuery("#coupon_code").removeClass("error");
		}
	});
	if (jQuery("body").hasClass("woocommerce-view-subscription")) {
		jQuery(".woocommerce-MyAccount-navigation-link--subscriptions").addClass(" is-active");
	}
	if (jQuery(".woocommerce-MyAccount-navigation-link--bookings").hasClass("is-active")) {
		jQuery("h2.booking-titlre").text(jQuery(".woocommerce-MyAccount-navigation-link--bookings a").text().toUpperCase());
		jQuery("li.booking-titlre").text(jQuery(".woocommerce-MyAccount-navigation-link--bookings a").text());
	}
});
function validateEmail(email) {
	var filter = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
	if (filter.test(email)) {
		return true;
	}
	else {
		return false;
	}
}
jQuery(document).ready(function () {
	jQuery( ".woocommerce-notices-wrapper" ).insertAfter( jQuery( ".back-to-login" ) );
	jQuery(".lost_reset_password button").click(function (e) {
    // Remove any existing error messages
    jQuery(".validation.custom-error").remove();
    
    // Check if username or email is empty
    if (jQuery("#user_login").val() === "") {
        e.preventDefault(); // Prevent form submission
        
        // Add error message
        jQuery(".mo-openid-app-icons,.back-to-login").after("<div class='validation custom-error' >Please enter an email address.</div>");
        jQuery("#user_login").addClass("error");
    } else {
        // Clear any existing error class
        jQuery("#user_login").removeClass("error");
        
        // Add custom error message
        jQuery(".mo-openid-app-icons,.woocommerce-form-login__submit").after("<div class='validation custom-error'>One or more fields have an error. Please check and try again.</div>");
        jQuery(".custom-error").show();
    }
});


	jQuery(".woocommerce-Button").click(function (e) {
		if (jQuery("#password_1").val() == "" && jQuery("#password_2").val() == "") {
			e.preventDefault();
			//jQuery(".woocommerce-notices-wrapper").html('<ul class="woocommerce-error" role="alert"><li>Please enter your password.</li></ul>');
			jQuery(".woocommerce-Button").after("<div class='validation custom-error' >Please enter your password.</div>");
			jQuery("#password_1").addClass("error");
			jQuery("#password_2").addClass("error");
		}
		else if (jQuery("#password_1").val() == "") {
			e.preventDefault();
			jQuery(".woocommerce-notices-wrapper").html('<ul class="woocommerce-error" role="alert"><li>Please enter your password.</li></ul>');
			jQuery("#password_1").addClass("error");
			jQuery("#password_2").removeClass("error");
		}
		else if (jQuery("#password_1").val().length < 8) {
			e.preventDefault();
			jQuery(".woocommerce-notices-wrapper").html('<ul class="woocommerce-error" role="alert"><li>This field required minimum 8 character.</li></ul>');
			jQuery("#password_1").addClass("error");
			jQuery("#password_2").removeClass("error");
		}
		else if (jQuery("#password_2").val() == "") {
			e.preventDefault();
			jQuery(".woocommerce-notices-wrapper").html('<ul class="woocommerce-error" role="alert"><li>Please enter your password.</li></ul>');
			jQuery("#password_2").addClass("error");
			jQuery("#password_1").addClass("error");
		}
		else if (jQuery("#password_2").val().length < 8) {
			e.preventDefault();
			jQuery(".woocommerce-notices-wrapper").html('<ul class="woocommerce-error" role="alert"><li>This field required minimum 8 character.</li></ul>');
			jQuery("#password_2").addClass("error");
			jQuery("#password_1").addClass("error");
		}
		else {
			jQuery(".woocommerce-notices-wrapper").html();
			jQuery("#password_1").removeClass("error");
			jQuery("#password_2").removeClass("error");
		}
	});
	//jQuery(".woocommerce-Button").after("<div class='validation custom-error' >Passwords do not match.</div>");
//==================search product js ============================
jQuery(".product_list").val(jQuery(".product_list option:eq(1)").val());
jQuery('body').addClass('product_loader');
var first_val = jQuery(".product_list option:eq(1)").val();
jQuery('#uploadart').attr("data-id",first_val);  
  
var link_product = jQuery( ".product_price span:nth-child(4)" ).attr('id');
jQuery(".product_submit").attr("data-id", "https://kevtron.webmasterindia.net/product/"+link_product+""); 
 
jQuery.ajax({
				 url: ajax_object.ajax_url,
				type:'POST',
				data : { "action":"tm_product_option" ,'product_id':first_val},
				success:function(data){
					//alert(data);
				  jQuery( ".other_option" ).append(data);
				  jQuery( ".product_extra_option" ).append(data);
				  jQuery(".product_extra_option .tm-extra-product-options-fields li .cpf-section .cpf-type-select").not(":first-child").hide();
				  jQuery(".product_extra_option .tm-extra-product-options-fields li .cpf-section .cpf-type-upload").hide();
				  jQuery(".product_extra_option .tm-extra-product-options-fields li .cpf-section .cpf-type-header").hide();
                  jQuery(".product_extra_option .tm-extra-product-options-fields li").not(":first-child").hide();
                  
 	              jQuery('body').removeClass('product_loader');
				},
				error:function(error){
					console.log("error",error); 
				}
	 		});
   jQuery(".product_price span:eq(0)").show();
  var  first_pro_price = jQuery(".product_price span:eq(0)").text();
   jQuery('#select_product_type').val(first_pro_price);
   first_pro_price_new=  first_pro_price.replace(/[^\w\s]/gi, '');
   jQuery('#select_product_type').attr('data-value',first_pro_price_new);
   jQuery('#select_product_type').val(first_pro_price_new);
var c = 0;
 var arr_data = [];
 var select_opt_val =0;
setTimeout(function(){   
	//jQuery('.tmcp-select').each(function(){
		//jQuery(this).addClass('tmcp-select'+c);
	 
	 jQuery(document).on('change',".tmcp-select", function () {
		//console.log(jQuery(this).find('option:selected', this).attr('data-price'));
		var price = 0; // Initialize price outside the loop
		jQuery('body').find('.tmcp-select').each(function() {
		var selectedOption = jQuery(this).find('option:selected');
		console.log(selectedOption.attr('data-price'));
		if (isNaN(selectedOption.attr('data-price')) || selectedOption.attr('data-price')==="") {
		// Parse the data-price attribute value to float and add it to price
		price += 0;
		}else{
		price += parseFloat(selectedOption.attr('data-price'));
		}
		});
		
		 var product_price = jQuery( ".product_price span:visible" ).attr('data-value');
		 var total_price = price + parseFloat(product_price);
		jQuery( ".product_price span:visible" ).text('$'+total_price);
		console.log(total_price);
    
});
	  
		//~ jQuery(document).on('change',".tmcp-select", function () {
			   
			    
				//~ var value_select = jQuery(this).val();
				//~ var price = jQuery('option:selected', this).attr('data-price');
                //~ var select_product_type = jQuery(document).find('#select_product_type').val();
                  //~ arr_data.push(price)
                //~ console.log(price +'-----------------------'+select_product_type);
                //~ var tottal_price = parseFloat(price) + parseFloat(select_product_type);
                 //~ jQuery(document).find('#select_product_type').val(tottal_price);
                 //~ jQuery( ".product_price span:visible" ).text('$'+tottal_price);
				   //~ console.log(arr_data); 
				//~ });    
	  //c++;        
	//});
},5000);
	jQuery(document).on('change', '.product_list', function () {
		jQuery('body').addClass('product_loader');
      jQuery('.hide_all').hide();
      jQuery('.show_all').show();    
	  
            var value = jQuery(this).val();
            console.log(value);
          if(value == 'Select Product') {
			  jQuery('body').removeClass('product_loader');
		   }	  
          if(value != 'Select Product') {
            jQuery('#uploadart').attr("data-id",value);    
            jQuery(this).find('option[value="' + value + '"]').attr("selected", "selected");
            
            jQuery( ".product_price span" ).each(function( index ) {
              var price = jQuery(this).attr('data-id');  
                
                if(value == price)   
                {   
					var link_test = jQuery(this).attr('id'); 
					 jQuery('#select_product_type').val(value);
					jQuery( ".product_price span").hide();
                    jQuery(this).show();
                    jQuery(".product_submit").attr("data-id", "https://kevtron.webmasterindia.net/product/"+link_test+""); 
                }
            
            });
            
            jQuery.ajax({
				 url: ajax_object.ajax_url,
				type:'POST',
				data : { "action":"tm_product_option" ,'product_id':value},
				success:function(data){
				           
				  jQuery( ".product_extra_option" ).empty();
				  jQuery( ".other_option" ).empty();	
				  jQuery(".other_option").hide();	
				  jQuery(".product_extra_option .tm-extra-product-options-fields li .cpf-section .cpf-type-select").not(":first-child").hide();
				  jQuery(".product_extra_option .tm-extra-product-options-fields li .cpf-section .cpf-type-upload").hide();
				  jQuery(".product_extra_option .tm-extra-product-options-fields li .cpf-section .cpf-type-header").hide();
				  jQuery(".product_extra_option .tm-extra-product-options-fields li").not(":first-child").hide(); 	
					//alert(data);
				  jQuery( ".product_extra_option" ).append(data);
				  jQuery( ".other_option" ).append(data);
				  jQuery(".product_extra_option .tm-extra-product-options-fields li .cpf-section .cpf-type-select").not(":first-child").hide();
				  jQuery(".product_extra_option .tm-extra-product-options-fields li .cpf-section .cpf-type-upload").hide();
				  jQuery(".product_extra_option .tm-extra-product-options-fields li .cpf-section .cpf-type-header").hide();
                  jQuery(".product_extra_option .tm-extra-product-options-fields li").not(":first-child").hide();
                   var c = 0;
                   jQuery('body').removeClass('product_loader');
					setTimeout(function(){   
						jQuery('.tmcp-select').each(function(){
							jQuery(this).addClass('tmcp-select'+c);
 
                       c++;
			           })
                   },300);
				},
				error:function(error){
					console.log("error",error); 
				}
	 		});
          }
        });
     
      jQuery(".other_option .tm-extra-product-options-fields li .cpf-section .cpf-type-upload").hide();
	  jQuery(".other_option .tm-extra-product-options-fields li .cpf-section .cpf-type-header").hide();  
	
	jQuery('.show_all').on('click',function(){
		jQuery('.hide_all').show();
		jQuery('.show_all').hide();
		
		jQuery('.other_option').slideDown();
		jQuery(".other_option .tm-extra-product-options-fields li .cpf-section .cpf-type-select").not(":first-child").show();
                  jQuery(".other_option .tm-extra-product-options-fields li").not(":first-child").show();
                  jQuery(".other_option .tm-extra-product-options-fields .tc-row").not(":first-child").show();
                  jQuery(".other_option .tm-extra-product-options-fields li .cpf-section .cpf-type-upload").hide();
				  jQuery(".other_option .tm-extra-product-options-fields li .cpf-section .cpf-type-header").hide();
				  jQuery(".other_option.tc-container.cpf-element.tc-cell.tcwidth-100.cpf-type-select.sizewxhininches-div").hide();
				  //jQuery(".other_option .tm-extra-product-options-fields .tc-row .sizewxhininches-div").hide();
				  jQuery(".other_option .tm-extra-product-options-fields li .cpf-section .cpf-type-select:first-child").hide();
	
	});
	jQuery('.hide_all').on('click',function(){
	    jQuery('.hide_all').hide();
		jQuery('.show_all').show();
		
		jQuery('.other_option').slideUp();	
	});
	
	jQuery('.product_submit').on('click',function(){
		var data_id =jQuery(this).attr('data-id');
		var product_extra = jQuery(".product_extra_option .tm-extra-product-options-fields li .cpf-section .cpf-type-select ul li:first-child .tmcp-select").val();
		
		jQuery(".other_option .tm-extra-product-options-fields li .cpf-section .cpf-type-select:first-child ul li:first-child .tmcp-select").val(product_extra);
		jQuery(".other_option .tm-extra-product-options-fields li .cpf-section .cpf-type-select:first-child").hide();
		jQuery( ".other_option .tm-extra-product-options-fields .tm-extra-product-options-field .cpf-section .cpf-type-select").each(function( index ) {
		 var label = jQuery(this).find('.tm-epo-element-label').text().split(" ").join("");
		   var lowercase_label = label.toLowerCase()
		   lowercase_label = lowercase_label.replace(/([-,.€~!@#$%^&*()_+=`{}\[\]\|\\:;'<>])+/g, '');
		   var option_val = jQuery(this).find('.'+lowercase_label+'').val();
		    localStorage.setItem('tm_'+lowercase_label, option_val);
		 });   
		    
		window.location.replace(data_id);
	});
jQuery('.uploadart').on('click',function(){
	jQuery('body').addClass('upload_popup');
    jQuery('html').addClass('no_scrool');
    jQuery('html').addClass('loder');
	
	var product_id = jQuery(this).attr('data-id');
	 jQuery.ajax({
				 url: ajax_object.ajax_url,
				type:'POST',
				data : { "action":"tm_product_file_option" ,'product_id':product_id},
				success:function(data){
                  jQuery('.upload_art_popup_wrap').show(); 
					//alert(data);
				  jQuery( ".upload_art_popup" ).append(data);
				  jQuery('html').removeClass('loder');
				  jQuery(".upload_art_popup .tm-extra-product-options-fields li .cpf-section .cpf-type-select").hide();
				  jQuery(".upload_art_popup .tm-extra-product-options-fields li .cpf-section .cpf-type-upload").show();
				  jQuery(".upload_art_popup .tm-extra-product-options-fields li .cpf-section .cpf-type-header").hide();
				   jQuery(".upload_art_popup_wrap .cpf-upload-wrap .frontend-image").attr("onChange", "storeFile(this);" );
                  jQuery('.upload_art_popup .title_colon').show();
				},
				error:function(error){
					console.log("error",error);   
				}     
	 		});    
	
	
});
jQuery('.close_popup').on('click',function(){
	jQuery('body').removeClass('upload_popup');
	jQuery('html').removeClass('no_scrool');
	jQuery('.upload_art_popup_wrap').hide();
	jQuery('.upload_art_popup').empty();
	
});
jQuery('.upload_image').on('click',function(){
 jQuery('.error_msg').hide();	
var frontend_image = jQuery('.upload_art_popup .frontend-image').val();
var backend_image = jQuery('.upload_art_popup .backend-image').val();
var ext = jQuery('.upload_art_popup .frontend-image').val().split('.').pop().toLowerCase();
var ext_back = jQuery('.upload_art_popup .backend-image').val().split('.').pop().toLowerCase();
var validExtensions = ["pdf","docx","png","jpg","zip","jpeg"];
   
  if(frontend_image == '')
  {
	  jQuery('<span class="error_msg">This field is required.</span>').insertAfter( ".upload_art_popup .frontend-image-ul .cpf-upload-wrap" );
	  
  } else if (validExtensions.indexOf(ext) == -1) {
      jQuery('<span class="error_msg">Invalid File Type.</span>').insertAfter( ".upload_art_popup .frontend-image-ul .cpf-upload-wrap" );
   } else if (validExtensions.indexOf(ext_back) == -1) {
      jQuery('<span class="error_msg">Invalid File Type.</span>').insertAfter( ".upload_art_popup .backend-image-ul .cpf-upload-wrap" );
   }  else {
    localStorage.setItem('frontend_image', frontend_image);
    localStorage.setItem('backend_image', backend_image);
    jQuery('body').removeClass('upload_popup');
	jQuery('html').removeClass('no_scrool');
	jQuery('.upload_art_popup_wrap').hide();
	jQuery('.upload_art_popup').empty();
  }
});  
jQuery('.upload_image-div').on('click',function(){
    jQuery('.upload-pop-up').removeClass('pop');
    jQuery('body').removeClass('no-scroll');
	
});
jQuery('.upload_art_popup_wrap .frontend-image-ul input[type="file"]').change(function(e){
//jQuery(".upload_art_popup_wrap").delegate(".frontend-image-ul input[type='file']'", "change", function(){
	var frontend_image = e.target.files[0].name;
	console.log(frontend_image);
	localStorage.setItem('frontend_image', frontend_image);
});
jQuery('.upload_art_popup_wrap .backend-image-ul input[type="file"]').change(function(e){
	var backend_image = e.target.files[0].name;
	localStorage.setItem('backend_image', backend_image);
});
	  
if (jQuery("body").hasClass("single-product")) {
    for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    var sub_t = key.substr(0,2);
    var laststring = key.substring(3);
   var backend_image = localStorage.getItem('backend_image');
   var frontend_image = localStorage.getItem('frontend_image');
   //jQuery('.frontend-image').val(frontend_image);
   //jQuery('.backend-image').val(backend_image);
    //console.log(sub_t);
    if(sub_t == 'tm')
      {
        var value = localStorage[key];
        jQuery( ".tm-extra-product-options-fields li .cpf-section .cpf-type-select").each(function( index ) {
		 var label = jQuery(this).find('.tm-epo-element-label').text().split(" ").join("");
		 var lowercase_label = label.toLowerCase();
		   lowercase_label = lowercase_label.replace(/([-,.€~!@#$%^&*()_+=`{}\[\]\|\\:;'<>])+/g, '');
		   
		   if(laststring == lowercase_label ) {
		      var option_val = jQuery(this).find('.'+lowercase_label+'').val(value);
            }
	     });
	  }  
       
}
    
}
jQuery(".woocommerce-cart .tm-extra-product-options-fields li .cpf-section .cpf-type-select").hide();
jQuery(".woocommerce-cart .tm-extra-product-options-fields li").not(":first-child").hide();
jQuery(".woocommerce-cart .tm-extra-product-options-fields .tc-row").not(":first-child").hide();
jQuery(".woocommerce-cart .upload-pop-up").show();
jQuery('.woocommerce-cart .frontend-image').change(function(e){
    console.log('test1');
	var backend_image = e.target.files[0].name;
     jQuery.ajax({
				 url: ajax_object.ajax_url,
				type:'POST',
				data : { "action":"cart_file" ,'backend_image':backend_image},
				success:function(data){
					alert(data);
				  
                  
				},
				error:function(error){
					console.log("error",error);   
				}
	 		});	
});
jQuery('.haru-woo-search__submit').on('click',function(e){  
  jQuery('.error_msg').hide();  
 var search_val = jQuery('.haru-woo-search__input').val();
    if(search_val == ''){
		e.preventDefault();
		jQuery( ".haru-woo-search__input" ).addClass('error');
		jQuery( "<p class='error_msg'>Please Enter Keyword.</p>" ).insertAfter( ".haru-woo-search__container" );
   
	}
});
jQuery('.woocommerce-form-coupon .button').on('click',function(e){
   jQuery('.error_msg').hide();
   var coupon_val = jQuery('#coupon_code').val();
    if(coupon_val == '')
    {
         e.preventDefault();
        jQuery('#coupon_code').addClass('error');
        jQuery("<span class='error_msg'>Enter Coupon Code.</span>").insertAfter("#coupon_code");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var fileInput = document.getElementById('.single-product #tmcp_upload_765ddb0e6d9f45');
    console.log(window.selectedFile);
    if(window.selectedFile) {
        fileInput.value = window.selectedFile;
    }
});
jQuery('.total_coupon_code').change(function() { 
 var a = jQuery(this).val();
    jQuery(document).find('.coupon_code').val(a);
});
jQuery( ".apply_coupon" ).on( "click", function() {
	jQuery('.error_msg').hide();
	var coupon_code_val = jQuery('.total_coupon_code').val();
   if(coupon_code_val == '') {
     jQuery('.total_coupon_code').addClass('error');
      jQuery("<span class='error_msg'>Please Enter Coupon Code</span>").insertAfter(".coupon_wrap .cart-actions .coupon");

   } else {
       jQuery( ".apply_coupon_cart" ).trigger( "click" );  
    }
});   
});   
jQuery( document ).on( "ajaxComplete", function() {
  console.log( "Triggered ajaxComplete handler." );      
} );

jQuery(document).ready(function($) {
	function setScrollHandlers() {
		
		 setTimeout(function() {
			jQuery('.description_tab').click(function(e) {
				e.preventDefault();
				jQuery('html, body').animate({
					scrollTop: jQuery('.woocommerce-Tabs-panel--description ').offset().top - 80
				}, 1000);
			});

		
			jQuery('.faqs_tab').click(function(e) {
				jQuery('html, body').animate({
					scrollTop: jQuery('.woocommerce-Tabs-panel--faqs').offset().top - 80
				}, 1000);
			});   
		
			jQuery('.layout_template_tab').click(function(e) {
				jQuery('html, body').animate({
					scrollTop: jQuery('#tab-layout_template').offset().top - 80
				}, 1000);
			});
		     
			jQuery('.material_specs_tab').click(function(e) {
				jQuery('html, body').animate({
					scrollTop: jQuery('.woocommerce-Tabs-panel--material_specs ').offset().top - 80
				}, 1000);
			});   
		 }, 500);        
	    
	}       
      
	function removeScrollHandlers() {                  
	  jQuery('.description_tab, .faqs_tab, .layout_template_tab, .material_specs_tab').off('click');
	}
  
	// Initial setup
	if (jQuery(window).width() >= 1024) {
	  setScrollHandlers();
	}
  
	// Adjust handlers on window resize
	jQuery(window).on('resize', function() {
	  if (jQuery(window).width() >= 1024) {
		setScrollHandlers();
	  } else {
		removeScrollHandlers();
	  }
	});
     
    if ($('body').hasClass('single-product')) {   
        setTimeout(function() {  
            if ($(window).width() >= 1024) {
                var tabs = $('.wc-tabs li');
                var startPosition = $('.wc-tabs').offset().top - 210;
                $(window).scroll(function() {
                    var currentPosition = $(this).scrollTop();
                    // Check if the scroll position has reached the desired point
                    if (currentPosition > startPosition) {
                        $('.wc-tabs').addClass('sticky');
                    } else {   
                        $('.wc-tabs').removeClass('sticky');
                    }
                    // Check which tab is currently in view
                    tabs.each(function(index) {
                        var tab = $(this);
                        var tabContent = tab.find('a').attr('href');
                        var section = $(tabContent);
                        if (section.length) {
                            var sectionPosition = section.offset().top - 230; // Adjusted for better accuracy
                            var sectionHeight = section.outerHeight();
                            if (currentPosition >= sectionPosition && currentPosition < (sectionPosition + sectionHeight)) {
                                tabs.removeClass('active');
                                tab.addClass('active');
                            }
                        }
                    });    
                });
            }   
        }, 1000);
    }
});

jQuery(document).ready(function(){
    jQuery('.tmcp-select').on('change', function(){      
        jQuery(this).removeClass('tm-error');       
        jQuery('label.tm-error').hide();
    });
	var length_var = jQuery('.woocommerce-cart .woocommerce-notices-wrapper div').length;
	if(length_var == 3)
	{
		jQuery(".woocommerce-cart .woocommerce-notices-wrapper div:nth-child(2)").hide();
		jQuery(".woocommerce-cart .woocommerce-notices-wrapper div:nth-child(1)").hide();
	}      
});

