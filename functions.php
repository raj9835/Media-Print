<?php
/**
 *
 * [Pricom] child theme functions and definitions
 * 
 * @package [Pricom]
 * @author  HaruTheme <admin@harutheme.com>
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU Public License
 * 
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * When using a child theme you can override certain functions (those wrapped
 * in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before
 * the parent theme's file, so the child theme functions would be used.
 *
 * @link https://codex.wordpress.org/Theme_Development
 * @link https://codex.wordpress.org/Child_Themes
 *
 * Functions that are not pluggable (not wrapped in function_exists()) are
 * instead attached to a filter or action hook.
 *
 * For more information on hooks, actions, and filters,
 * {@link https://codex.wordpress.org/Plugin_API}
 */

function haru_child_theme_enqueue_scripts()
{
    wp_enqueue_style('google-fonts-style',"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    wp_enqueue_style('haru-theme-child-style', get_stylesheet_directory_uri() . '/style.css', array('haru-theme-style'));
    wp_enqueue_style('custom-style', get_stylesheet_directory_uri() . '/css/custom-style.css');
    wp_enqueue_style('responsive-css', get_stylesheet_directory_uri() . '/css/custom.css');
    wp_enqueue_style('custom-css', get_stylesheet_directory_uri() . '/css/responsive.css');
    wp_enqueue_script(
        'custom-script',
        get_stylesheet_directory_uri() . '/assets/js/haru-custom-script.js',
        array('jquery')
    );
    wp_enqueue_script(
        'custom-js-script',
        get_stylesheet_directory_uri() . '/js/custom.js',
        array('jquery')
    );
    wp_localize_script('custom-js-script', 'ajax_object', array('ajax_url' => admin_url('admin-ajax.php')));
   // do_action( 'woocommerce_tm_epo_enqueue_scripts');
    
}

add_action('wp_enqueue_scripts', 'haru_child_theme_enqueue_scripts', 12);
// functions.php

function tm_epo_js_loader()
{
    do_action('woocommerce_tm_epo_enqueue_scripts');
}

add_action('wp_enqueue_scripts', 'tm_epo_js_loader');
// functions.php
// functions.php
// Your custom plugin file or functions.php
// Add a shortcode for displaying product form elements

add_shortcode('tm_epo_fields_shortcode', 'tm_epo_fields_shortcode');

function tm_epo_fields_shortcode($atts)
{
    // Extract shortcode attributes if needed
    $atts = shortcode_atts(array(
        'product_id' => 18071, // Default product ID
    ), $atts, 'tm_epo_fields_shortcode');
    // Display the product form elements
    ob_start();
    do_action("woocommerce_tm_epo", $atts['product_id']);
    return ob_get_clean();
}
//Body class 

function custom_class( $classes ) {
    if ( is_page('register')) {
        $classes[] = 'woocommerce-page';
    }
    if ( is_page('our-products')) {
        $classes[] = 'browse-product';
    }
    if ( is_page('register')) {
        $classes[] = 'register-page';
    }
    if ( is_page('contact-us')) {
        $classes[] = 'contact-me';
    }
    if(is_page('terms-and-condition')){
        $classes[] = 'privacy-policy';
    }
    return $classes;
}

add_filter( 'body_class', 'custom_class' );

function add_theme_menu_item()
{
    add_menu_page("Footer Details Menu", "Footer Details Menu", "manage_options", "theme-panel", "theme_settings_page", null, 99);
}

add_action("admin_menu", "add_theme_menu_item");

function theme_settings_page()
{
?>
    <div class="wrap">
        <h1 style="font-size: 45px;">PixelDrip</h1>
        <form method="post" action="options.php">
            <?php settings_fields('section'); ?>
            <?php do_settings_sections('theme-panel'); ?>
            <?php submit_button(); ?>
        </form>
    </div>
<?php
}

function display_email()
{ ?>
    <input type="email" name="email" id="email" value="<?php echo get_option('email'); ?>" />
<?php }

function display_phone()
{ ?>
    <input type="tel" name="phone" id="phone" value="<?php echo get_option('phone'); ?>" />
<?php }

function display_facebook()
{ ?>
    <input type="text" name="facebook" id="facebook" value="<?php echo get_option('facebook'); ?>" />
<?php }

function display_twitter()
{ ?>
    <input type="text" name="twitter" id="twitter" value="<?php echo get_option('twitter'); ?>" />
<?php }

function display_youtube()
{ ?>
    <input type="text" name="youtube" id="youtube" value="<?php echo get_option('youtube'); ?>" />
<?php }

function display_insta()
{ ?>
    <input type="text" name="instagram" id="instagram" value="<?php echo get_option('instagram'); ?>" />
<?php }

function display_address()
{ ?>
    <input type="text" name="address" id="address" value="<?php echo get_option('address'); ?>" />
<?php }

function display_theme_panel_fields()
{
    add_settings_section("section", "All Settings", null, "theme-panel");
    add_settings_field("email", "Email ID", "display_email", "theme-panel", "section");
    add_settings_field("phone", "Phone No", "display_phone", "theme-panel", "section");
    add_settings_field("address", "Address", "display_address", "theme-panel", "section");
    //social media
    add_settings_field("twitter", "Twitter URL", "display_twitter", "theme-panel", "section");
    add_settings_field("facebook", "Facebook URL", "display_facebook", "theme-panel", "section");
    add_settings_field("youtube", "Youtube URL", "display_youtube", "theme-panel", "section");
    add_settings_field("instagram", "Instagram URL", "display_insta", "theme-panel", "section");
    register_setting("section", "email");
    register_setting("section", "phone");
    register_setting("section", "address");
    //social media
    register_setting("section", "facebook");
    register_setting("section", "twitter");
    register_setting("section", "youtube");
    register_setting("section", "instagram");
}

add_action("admin_init", "display_theme_panel_fields");

add_shortcode('contact-details', 'contact_detail_sc');

function contact_detail_sc()
{
    $contact = get_option('phone');
    $email = get_option('email');
    $direction = get_option('address');
    echo '<div class="contacts-wrap">
            <p class="phone-sc"><span>Call Us</span><a href="tel:' . preg_replace('/[^0-9]/', '', $contact) . '">
                ' . $contact . '</a>
            </p>
            <p class="direction-sc">Address<span>' . $direction . '</span></p>';
    echo '<p class="mail-sc"><span>Email Us</span><a href="mailto:' . $email . '">
            ' . $email . '</a>
          </p>
        </div>';
}

add_shortcode('phone', 'phone_shortcode');

function phone_shortcode()
{
    $contact = get_option('phone');
    echo '<p class="phone-sc"><span>Call Us</span><a href="tel:' . preg_replace('/[^0-9]/', '', $contact) . '">
            ' . $contact . '</a></p>';
}

add_shortcode('email', 'email_shortcode');

function email_shortcode()
{
    $email = get_option('email');
    echo '<p class="mail-sc"><span>Email Us</span><a href="mailto:' . $email . '">
            ' . $email . '
        </a></p>';
}

add_shortcode('direction', 'direction_shortcode');

function direction_shortcode()
{
    $direction = get_option('address');
    echo '<p class="direction-scccc">Address<span>' . $direction . '</span></p>';
}
// add_shortcode( 'wc_reg_form_bbloomer', 'bbloomer_separate_registration_form' );
     
// function bbloomer_separate_registration_form() {
//    if ( is_user_logged_in() ) return '<p>You are already registered</p>';
//    ob_start();
//    do_action( 'woocommerce_before_customer_login_form' );
//    $html = wc_get_template_html( 'myaccount/form-login.php' );
//    $dom = new DOMDocument();
//    $dom->encoding = 'utf-8';
//    $dom->loadHTML( utf8_decode( $html ) );
//    $xpath = new DOMXPath( $dom );
//    $form = $xpath->query( '//form[contains(@class,"register")]' );
//    $form = $form->item( 0 );
//    echo $dom->saveXML( $form );
//    return ob_get_clean();
// }
/*--------------Admin logo-----------------------*/

function replace_wp_logo() {
	echo '<style type="text/css">
	h1 a { background-image:url('.site_url().'/wp-content/uploads/2022/11/header-logo.png) !important; background-size: 150px 150px !important;
	height: 150px !important;width:150px !important;
	}
		div#login h1 a {
			width: 100% !important;
			height: 130px !important;
			margin: 0 0 20px 0;
			background-size: 100% !important;
            background-color: red !important;
            max-height: 88px !important;
		}
	</style>';
	add_filter( 'login_headerurl', 'fnAdminLogoURL' );
	function fnAdminLogoURL($url) {
	return home_url();
	}
}

add_action('login_head', 'replace_wp_logo');
/*--------------------------------------Separate register form------------------------------------------------------*/

add_shortcode('wc_reg_form_bbloomer', 'bbloomer_separate_registration_form');

function bbloomer_separate_registration_form()
{
    if (is_admin()) return;
    if (is_user_logged_in()) return '<p>You are already registered</p>';
    ob_start();
    // NOTE: THE FOLLOWING <FORM></FORM> IS COPIED FROM woocommerce\templates\myaccount\form-login.php
    // IF WOOCOMMERCE RELEASES AN UPDATE TO THAT TEMPLATE, YOU MUST CHANGE THIS ACCORDINGLY
    ?>
    <div class="nv-content-wrap entry-content">
        <div class="woocommerce">
            <div class="register-form-wrap sign-in-out-form testing">
                <? do_action('woocommerce_before_customer_login_form'); ?>
                <h2 class="form-title">REGI<span>STER</span> </h2>
                <form method="post" class="woocommerce-form woocommerce-form-register register" <?php do_action('woocommerce_register_form_tag'); ?> novalidate>
                    <?php do_action('woocommerce_register_form_start'); ?>
                    <p  class="form-row form-row-first">
					<label for="reg_billing_first_name"><?php _e( 'First Name', 'woocommerce' ); ?><span class="required">*</span></label>
					<input type="text" class="input-text" name="billing_first_name" id="reg_billing_first_name" value="<?php if ( ! empty( $_POST['billing_first_name'] ) ) esc_attr_e( $_POST['billing_first_name'] ); ?>" />
				</p>
				<p  class="form-row form-row-last">
					<label for="reg_billing_last_name"><?php _e( 'Last Name', 'woocommerce' ); ?><span class="required">*</span></label>
					<input type="text" class="input-text" name="billing_last_name" id="reg_billing_last_name" value="<?php if ( ! empty( $_POST['billing_last_name'] ) ) esc_attr_e( $_POST['billing_last_name'] ); ?>" />
       			</p>
                    <?php if ('no' === get_option('woocommerce_registration_generate_username')) : ?>
                        <!-- <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide user-name"> -->
                        <!-- <label for="reg_username"><?php //esc_html_e( 'Username', 'woocommerce' ); 
                                                        ?><em>*</em></label> -->
                        <!-- <span class="filed-wrap"> -->
                        <!-- <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="reg_username" autocomplete="username" value="<?php //echo ( ! empty( $_POST['username'] ) ) ? esc_attr( wp_unslash( $_POST['username'] ) ) : ''; 
                                                                                                                                                                                ?>" /><?php // @codingStandardsIgnoreLine 
                                                                                                                                                                                                                                                                                        ?> -->
                        <!-- </span> -->
                        <!-- </p> -->
                    <?php endif; ?>
                    <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide  email">
                        <label for="reg_billing_email"><?php _e('Email', 'woocommerce'); ?><em>*</em></label>
                        <span class="filed-wrap">
                            <input type="email" class="woocommerce-Input woocommerce-Input--text input-text" name="email" id="reg_email" autocomplete="email" value="<?php echo (!empty($_POST['email'])) ? esc_attr(wp_unslash($_POST['email'])) : ''; ?>" /><?php // @codingStandardsIgnoreLine 
                                                                                                                                                                                                                                                                        ?>
                        </span>
                    </p>
                    <?php if ('no' === get_option('woocommerce_registration_generate_password')) : ?>
                        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide password">
                            <label for="reg_password"><?php esc_html_e('Password', 'woocommerce'); ?><em>*</em></label>
                            <span class="filed-wrap">
                                <input type="password" class="woocommerce-Input woocommerce-Input--text input-text" name="password" id="reg_password" autocomplete="new-password" />
                            </span>
                        </p>
                        <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide password">
                            <label for="password_2"><?php esc_html_e('Confirm Password', 'woocommerce'); ?><em>*</em></label>
                            <span class="filed-wrap">
                                <input type="password" class="woocommerce-Input woocommerce-Input--text input-text" name="password_2" id="reg_password2" autocomplete="confirm-password"/>
                            </span>
                        </p>
                    <?php endif; ?>
                    <?php do_action('woocommerce_register_form'); ?>
                    <p class="woocommerce-FormRow login-register-btn">
                        <?php wp_nonce_field('woocommerce-register', 'woocommerce-register-nonce'); ?>
                        <button type="submit" class="woocommerce-Button woocommerce-button button reg_button woocommerce-form-register__submit" name="register" value="<?php esc_attr_e('Register', 'woocommerce'); ?>"><?php esc_html_e('Register', 'woocommerce'); ?></button>
                    </p>
                    <?php do_action('woocommerce_register_form_end'); ?>
                </form>
            </div>
            <div class="right">
                
                <p class="form-row register-page">Already Have Account? <a href="<?php echo site_url(); ?>/my-account/">Login</a></p>
            </div>
        </div>
    </div>
<?php
    return ob_get_clean();
}

add_filter( 'woocommerce_registration_redirect', 'bbloomer_customer_register_redirect' );
 

function bbloomer_customer_register_redirect( $redirect_url ) {
   $redirect_url = '/my-account';  
   return $redirect_url;
}
//////Hide Additional Information//

add_filter( 'woocommerce_product_tabs', 'bbloomer_remove_product_tabs', 9999 );
  

function bbloomer_remove_product_tabs( $tabs ) {
    unset( $tabs['additional_information'] ); 
    return $tabs;
}
///Remove Product Review /////

function iconic_disable_reviews() {
	remove_post_type_support( 'product', 'comments' );
}

add_action( 'init', 'iconic_disable_reviews' );
////// PROduct additional information /////
    add_filter('woocommerce_product_tabs', 'custom_product_tabs');
    function custom_product_tabs($tabs) {
        // First Custom Tab
        $tabs['material_specs'] = array(
            'title'    => __('MATERIAL & SPECs', 'woocommerce'),
            'priority' => 50,
            'callback' => 'material_specs_tab_content'
        );
    
        // Second Custom Tab
        $tabs['faqs'] = array(
            'title'    => __('FAQS', 'woocommerce'),
            'priority' => 51,
            'callback' => 'faqs_tab_content'
        );
    
        // Third Custom Tab
        $tabs['layout_template'] = array(
            'title'    => __('LAYOUT TEMPLATE', 'woocommerce'),
            'priority' => 52,
            'callback' => 'layout_template_tab_content'
        );
    
        return $tabs;
    }
/*--------Callback Function------------*/

function material_specs_tab_content() {
   the_field('product_heading'); ?>
    <div class="product-section">
	<div class="container">
		<div class="product-item">
			
			<?php if (have_rows('product_details')) : ?>
				<?php while (have_rows('product_details')) : the_row(); ?>
					<div class="product-panel">
						<div class="material-image">
							<?php
							// Get the image field value
							$image = get_sub_field('material_image');
							if ($image) {
								// Display the image HTML
								echo '<img src="' . esc_url($image['url']) . '" alt="' . esc_attr($image['alt']) . '">';
							}
							?>
						</div>
						<div class="material-details">
							<?php the_sub_field('material_details'); ?>
						</div>
					</div>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</div>
</div>
<?
}

function faqs_tab_content() {
    ?>
    <div class="accord-section">
    <div class="container">
        <h1 class="faq-title">FAQS</h1>
        <div class="accord-item">
            <?php if (have_rows('accordian_repeater')) : ?>
                <?php while (have_rows('accordian_repeater')) : the_row(); ?>
                    <div class="accord-panel">
                        <div class="accord-title">
                            <a class="accordion-title" href="#"><?php the_sub_field('accordian_title'); ?></a>
                        </div>
                        <div class="panel" style="display:none">
                            <p><?php the_sub_field('accordian_content'); ?></p>
                        </div>
                    </div>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </div>
</div>
<?
}

function layout_template_tab_content() {
 the_field('layout_template'); ?>
<div class="adobe-photo-publisher">
    
        <div class="all-file-type-heading">
            <div class="adobe-heading">
                <?php the_field('adobe'); ?>
            </div>
            <div class="jpeg-heading">
                <?php the_field('jpeg_heading'); ?>
            </div>
            <div class="adobe-acrobat-heading">
                <?php the_field('adobe_acrobate_title'); ?>
            </div>
            <div class="photoshop-heading">
                <?php the_field('adobe_photoshop_title'); ?>
            </div>
            <div class="publisher-heading">   
                <?php the_field('publisher_title'); ?>
            </div>
        </div>
<div class="all-filetype-wrap">
    <div class="product-heading">
        <?php the_field('product_name'); ?>
    </div>
<div class="adobe-ill">
    <div class="adobe-item">
       
    <?php if (have_rows('adobe_illustrator')) : ?>
    <?php while (have_rows('adobe_illustrator')) : the_row(); ?>
        <div class="adobe-sample">
            <?php 
            $file = get_sub_field('sample_template');
            $file_name = get_sub_field('adobe_illustrator_file_name');
            if ($file) {
                echo '<a href="' . esc_url($file['url']) . '" target="_blank">' . esc_html($file_name) . '</a>';
            }
            ?>
        </div>
    <?php endwhile; ?>
<?php endif; ?>
    </div>
</div>
<div class="jpeg-ill">
    <div class="jpeg-item">
    
        <?php if (have_rows('jpeg')) : ?>
            <?php while (have_rows('jpeg')) : the_row(); ?>
                <div class="jpeg-sample">
                    <?php 
                    $file = get_sub_field('jpeg_sample');
                    $file_name = get_sub_field('jpeg_file_name'); 
                    if ($file) {
                        echo '<a href="' . esc_url($file['url']) . '" target="_blank">' . esc_html($file_name) . '</a>';
                    }
                    ?>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</div>
<div class="adobe-acrobat">
    <div class="adobe-item">
   
        <?php if (have_rows('adobe_acrobat')) : ?>
            <?php while (have_rows('adobe_acrobat')) : the_row(); ?>
                <div class="adobe-sample">
                    <?php 
                    $file = get_sub_field('adobe_sample'); 
                    $file_name = get_sub_field('adobe_file_name'); 
                    if ($file) {
                        echo '<a href="' . esc_url($file['url']) . '" target="_blank">' . esc_html($file_name) . '</a>';
                    }
                    ?>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</div>
<div class="adobe-photoshop">
    <div class="photoshop-item">
    
        <?php if (have_rows('adobe_phptoshop')) : ?>
            <?php while (have_rows('adobe_phptoshop')) : the_row(); ?>
                <div class="photoshop-sample">
                    <?php 
                    $file = get_sub_field('photoshop_sample'); 
                    $file_name = get_sub_field('photoshop_file_name'); 
                    if ($file) {
                        echo '<a href="' . esc_url($file['url']) . '" target="_blank">' . esc_html($file_name) . '</a>';
                    }
                    ?>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</div>
<div class="publ-isher">
    <div class="publisher-item">
        <?php if (have_rows('publisher')) : ?>
            <?php while (have_rows('publisher')) : the_row(); ?>
                <div class="publisher-sample">
                    <?php 
                    $fileName = get_sub_field('publisher_file_name');
                    $file = get_sub_field('publisher_sample'); 
                    $file_name = get_sub_field('publisher_file_name');
                    if ($file) {
                        echo '<a href="' . esc_url($file['url']) . '" target="_blank">' . esc_html($file_name) . '</a>';
                    }
                    ?>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</div>
</div>
</div>
<?
}
/*------------------*/
// MY ACCOUNT PAGE SHORT CODE

add_shortcode('myaccount_page_title', 'myaccount_page_title');

function myaccount_page_title()
{
    if (is_user_logged_in()) {
        $output = '<div class="title-breadcrumb-wrap">';
        $output .= do_shortcode('[breadcrumbs]');
        $endpoint = wc()->query->get_current_endpoint();
        global $wp;
        $request = explode('/', $wp->request);
        if (is_account_page() && $endpoint != '') {
            $endpoint_title = WC()->query->get_endpoint_title($endpoint);
            
            if (is_wc_endpoint_url('edit-address')) {
                if (end($request) == 'billing' || end($request) == 'Shipping') {
                    $output .= '<h2 class="main-title center-title page-title">EDIT ADDRESSES</h2>';
                } else {
                    $output .= '<h2 class="main-title center-title page-title">MY ADDRESSES</h2>';
                }
            } elseif (is_wc_endpoint_url('edit-account')) {
                $output .= '<h2 class="main-title center-title page-title">MY PROFILE</h2>';
            } elseif (is_wc_endpoint_url('orders')) {
                $output .= '<h2 class="main-title center-title page-title">MY ORDERS</h2>';
            }
            elseif(is_wc_endpoint_url( 'view-order' ))
            {
            	//$output .= '<h2>Orders #'.end($request).'</h2>';
            	$output .= '<h2 class="main-title center-title page-title"><strong>MY ORDERS</strong></h2>';
            }
            elseif (is_wc_endpoint_url('lost-password')) {
                $output .= '<h2 class="main-title center-title page-title test"><strong>LOST YOUR PASSWORD?</strong></h2> ';
            } elseif (is_wc_endpoint_url('lost-password/?show-reset-form=true')) {
                $output .= '<h2 class="main-title center-title page-title"><strong>LOST YOUR PASSWORD?</strong></h2> ';
             } 
             elseif (is_wc_endpoint_url('coupons')) {
                $output .= '<h2 class="main-title center-title page-title">COUPONS</h2> ';
            } 
            else {
                $modify_endpoint_title = explode(" ", $endpoint_title);
                $output .= $modify_endpoint_title[1];
            }
        } 
        else {
            //$endpoint_title = WC()->query->get_endpoint_title($endpoint);
            $output .= '<h2 class="main-title center-title page-title">DASHBOARD</h2>';
        }
        $output .= '</div>';
    }else {
		$output .= '<div class="title-breadcrumb-wrap">';
        $output .= do_shortcode('[breadcrumbs]');
		$user = wp_get_current_user();
		if (empty($user->ID) && $user->ID <= 0) {
			//$output .= '<h2 class="main-title center-title page-title">LOGIN</h2>';
		} else {
			$output .= '<h2 class="main-title center-title page-title">DASHBOARD</h2>';
			//$output .= do_shortcode('[breadcrumbs]');
		}
	}
    return $output;
}
/*-----------breadcrumb-------*/

function page_url_function()
{
	ob_start();
	global $post;
	?>
		<?php if (!is_front_page()) {
		?>
			<div Class="breadcrumbs">
				<div class="container">
					<ul class="breadcrumb">
						<?php
						$endpoint = wc()->query->get_current_endpoint();
						global $wp;
						$request = explode('/', $wp->request);
					 	if (is_account_page() && !is_user_logged_in()) {
						?>
							<li><a href="<?php echo site_url(); ?>">Home</a></li>                             
                            <?php
                            $endpoint_title = WC()->query->get_endpoint_title($endpoint);
                            
                           // echo $endpoint;
                            if (!is_wc_endpoint_url('my-account') && $endpoint == 'lost-password') {
                                 //var_dump($endpoint);
                                echo '<li><a href="' . get_permalink(get_option('woocommerce_myaccount_page_id')) . '">Login</a></li>';
                            }
								if (is_wc_endpoint_url('lost-password')) {
									echo "<li>Forgot Password?</li>";
								} else {
                              
									echo "<li class='test'>Login</li>";
								}
                                $endpoint_title = WC()->query->get_endpoint_title($endpoint);
                                //~ if (is_wc_endpoint_url('my-account') && $endpoint != '') {
                                    //~ //var_dump($endpoint);
                                    //~ echo '<li class="demo"><a href="' . get_permalink(get_option('woocommerce_myaccount_page_id')) . '">My Account</a></li>';
                                //~ }
                                    if (is_wc_endpoint_url('my-account')) {
                                        echo "<li class='demo'>Lost Your Password</li>";
                                     } //else {
                                    //     echo "<li>LOGIN</li>";
                                    // }
							} else if (is_account_page() && is_user_logged_in()) {
								?>
							<li><a href="<?php echo site_url(); ?>">Home</a></li>
							<?php
									$endpoint_title = WC()->query->get_endpoint_title($endpoint);
									if (!is_wc_endpoint_url('my-account') && $endpoint != '') {
										//var_dump($endpoint);
										echo '<li><a href="' . get_permalink(get_option('woocommerce_myaccount_page_id')) . '">My Account</a></li>';
									}
									if ($endpoint != '') {
										if (is_wc_endpoint_url('edit-address')) {
											if (end($request) == 'billing' || end($request) == 'shipping') {
												echo '<li><a href="' . wc_get_endpoint_url("edit-address", "", get_permalink(get_option("woocommerce_myaccount_page_id"))) . '">My Addresses</a></li>';
												echo "<li>Edit Addresses</li>";
											} else {
												echo '<li>My Addresses</li>';
											}
                                        }elseif (is_wc_endpoint_url('wc-smart-coupons')) {
                                            echo '<li>COUPONS</li>';                                            
										} elseif (is_wc_endpoint_url('edit-account')) {
											echo '<li>My Profile</li>';
										}elseif (is_wc_endpoint_url('orders')) {
											echo '<li>My Orders</li>';
										}elseif (is_wc_endpoint_url('view-order')) {
											echo '<li>My Orders</li>';
										}
                                         elseif (is_wc_endpoint_url('view-order')) {
											echo '<li><a href="' . wc_get_endpoint_url("orders", '', get_permalink(get_option('woocommerce_myaccount_page_id'))) . '">My Orders</a></li>';
											echo "<li> #" . end($request) . "</li>";
										} else {
											echo '<li> ' . $endpoint_title . '</li>';
										}
									} else {
										echo '<li><a href="' . get_permalink(get_option('woocommerce_myaccount_page_id')) . '">My Account</a></li>';
										echo '<li>Dashboard</li>';
									}
                                }				
						?>
					</ul>
				</div>
			</div>
		<?php
		}
    
		return ob_get_clean();
	}
	//end of printing page name
	add_shortcode('breadcrumbs', 'page_url_function');
	/*------------------- Change Dashboard Title And Reorder Name ----------------------- */
	function iso_reorder_my_account_menu()
	{
		$newtaborder = array(
			'dashboard'          => __('Dashboard', 'woocommerce'),
            'edit-account'       => __('My Profile', 'woocommerce'),
			'orders'       => __('My Orders', 'woocommerce'),
			'edit-address'             => __('My Addresses', 'woocommerce'),
			
			'customer-logout'    => __('Logout', 'woocommerce'),
		);
		return $newtaborder;
	}
	add_filter('woocommerce_account_menu_items', 'iso_reorder_my_account_menu');
/*remove menu items downloads from navigation menu wc-----*/

add_filter ( 'woocommerce_account_menu_items', 'remove_my_account_links' );

function remove_my_account_links( $menu_links ){
    unset( $menu_links['downloads'] );
    return $menu_links;
}
/***  add body class in product category page ***/

function add_product_category_body_class($classes) {
    if (is_product_category()) {
        // Add product category class
        $classes[] = 'product-category-page';
        // Add a specific class based on the category slug
        $category = get_queried_object();
        $classes[] = 'product-category-' . $category->slug;
    }
    return $classes;
}

add_filter('body_class', 'add_product_category_body_class');
////////////

function load_more_posts() {
    $page = $_POST['page'];
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => 1,
        'paged'          => $page,
    );
    $products_query = new WP_Query($args);
    if ($products_query->have_posts()) :
        while ($products_query->have_posts()) : $products_query->the_post();
            wc_get_template_part('content', 'product');
        endwhile;
        wp_reset_postdata();
    else :
        echo 'no_more'; // Signal that there are no more posts
    endif;
    die();
}

add_action('wp_ajax_load_more_posts', 'load_more_posts');

add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts');

add_action('wp_ajax_tm_product_file_option', 'tm_product_file_option');

add_action('wp_ajax_nopriv_tm_product_file_option', 'tm_product_file_option');

function tm_product_file_option() {
	
       $product_id = $_POST['product_id'];
       do_action("woocommerce_tm_epo",$product_id);
	die();
	}

add_action('wp_ajax_tm_product_option', 'tm_product_option');

add_action('wp_ajax_nopriv_tm_product_option', 'tm_product_option');

function tm_product_option() {
	
	$product_id = $_POST['product_id'];
       do_action("woocommerce_tm_epo",$product_id);
	die();
	}

add_action('wp_ajax_cart_file', 'cart_file');

add_action('wp_ajax_nopriv_cart_file', 'cart_file');

function cart_file() {
	
	echo $backend_image = $_POST['backend_image'];
       
	die();
	}

function get_product_option(){
  $products = wc_get_products( array( 'limit' => -1 ) );
  echo '<div class="other_wrap">'; 
  echo "<div class='product_option_wrap'>";
 
	  echo "<div class='product-section-wrap'>";
		  echo "<div class='product_wrap'>";
		  echo "<label>Select The Product</label>";
		  echo "<select class='product_list'>";
			   echo "<option>Select Product</option>";   
			foreach ( $products as $product ){ 
				
				echo "<option value=".$product->get_id()." >". $product->get_title() ."</option>" ; // Product title
			}	   
		  echo "</select>";	  
		  echo "</div>";
		              
		  ?>
		  <div class="show_all">
			 <span>Show Options</span>
		  </div>
		  <div class="hide_all" style="display:none;">
		     <span>Hide Options</span>
		  </div> 
	   </div>
		
   <div class = "product_extra_option">
	  
	</div>    
   	
      <div class="quantity_wrap">
			<label> Quantity</label>
			<input type="number" name="quantity" class="quantity" value='1'>
			<div class="qty_wrap">
			 *Buy More, Save More!
			</div>
	 </div>
  
	 <div class="upload_art_wrap">
		 <label>Upload Art</label>
	     <div class="uploadart" id="uploadart">Upload Art </div>
	 </div>
<!--
	  <div class="requestart_wrap">
		 <label>Request Art</label>
         <input type="checkbox" name="uploadart" class="uploadart" id="uploadart">	 
      </div>
-->
  		  
	<?php 
	 echo "<div class='product_price'>";
	 echo "<label>Price Each</label>";
	 echo "<input type='hidden' id='select_product_type'>";
	 echo "<input type='hidden' id='strore_price'>";
		foreach ( $products as $product ){   
			echo "<span data-id=".$product->get_id()." data-value=".$product->get_price()." id=".$product->get_slug()." style='display:none;'>$". $product->get_price() ."</span>" ; // Product title
		}	   
	 echo "</div>";	 ?>	
   
	 
	 <div class="next_btn_wrap">
		 
	     <div name="submit" class="product_submit" id="submit" data-id="">Next</div>
	 </div>	
   </div> 
   <div class="other_option" style="display:none;">
		    
   </div> 
 </div>      
  <?php 
}

add_shortcode('get_product_option', 'get_product_option');
// Add terms and conditions checkbox to WooCommerce checkout page
//add_action('woocommerce_review_order_before_submit', 'add_terms_and_conditions_checkbox', 9);

function add_terms_and_conditions_checkbox() {
    echo '<p class="form-row terms">';
    woocommerce_form_field('terms_and_conditions', array(
        'type' => 'checkbox',
        'class' => array('input-checkbox'),
        'label' => __('I have read and agree to the website <span class="terms-dition">terms and conditions</span>', 'woocommerce'),
        'required' => true,
    ));
    echo '</p>';
}
// Validate the terms and conditions checkbox
//add_action('woocommerce_checkout_process', 'validate_terms_and_conditions_checkbox');

function validate_terms_and_conditions_checkbox() {
    if (!isset($_POST['terms_and_conditions'])) {
        wc_add_notice(__('Please agree to the terms and conditions.', 'woocommerce'), 'error');
    }
}

add_filter( 'woocommerce_registration_error_email_exists', function( $html ) {
    $url = 'https://kevtron.webmasterindia.net/my-account';
    $html = str_replace( 'Please log in', '<a href="' . esc_url( $url ) . '"><strong>Please log in</strong></a>', $html );
    return $html;
} );
// Add a filter to modify the title displayed in the cart

function modify_cart_item_title( $title, $cart_item, $cart_item_key ) {
    if ( is_cart() ) {
        // Get the position of the cart item in the cart
        $cart_item_position = array_search( $cart_item_key, array_keys( WC()->cart->get_cart() ) ) + 1;
        // Modify title to show "Job" followed by the cart item position
        $title = '<div class="job-title">Job #' . $cart_item_position . '</div>';
    }
    return $title;
}

add_filter( 'woocommerce_cart_item_name', 'modify_cart_item_title', 10, 3 );

function change_add_to_cart_text() {
    return __( 'Order Now', 'woocommerce' );
}

add_filter( 'woocommerce_product_add_to_cart_text', 'change_add_to_cart_text' ); 
/************************ */

function browse_product_listing() {
    global $product;
    $image = get_field('brand_logo', $product->get_id());
    // Output product image
    if ($image) {
        echo '<div class="browse-image">';
        echo '<img src="' . esc_url($image['url']) . '" alt="' . esc_attr($image['alt']) . '" />';
        echo '</div>';
    }
}

add_action('woocommerce_after_shop_loop_item_title', 'browse_product_listing', 10);
/*************** */

add_filter( 'woocommerce_continue_shopping_redirect', 'bbloomer_change_continue_shopping' );
 

function bbloomer_change_continue_shopping() {
	$url = 'https://kevtron.webmasterindia.net/our-products/';
   return $url;
}

add_filter( 'woocommerce_return_to_shop_redirect', 'custom_empty_cart_redirect_url' );

function custom_empty_cart_redirect_url() {
$url = 'https://kevtron.webmasterindia.net/our-products/';
   return $url;
}

function change_add_to_cart_url_to_details_page( $url, $product ){
    if( $product->is_type( 'simple' ) || $product->is_type( 'variable' ) ){
    // Change the URL to the product details page URL
    $url = get_permalink( $product->get_id() );
    }
    return $url;
    }
    add_filter( 'woocommerce_product_add_to_cart_url', 'change_add_to_cart_url_to_details_page', 10, 2 );
    function add_category_title_to_product_category_page() {
        if ( is_product_category() ) {
            $term = get_queried_object();
            echo '<h1 class="page-category-title">' . $term->name . '</h1>';
        }
    }
    add_action( 'woocommerce_archive_description', 'add_category_title_to_product_category_page', 10 );

add_filter( 'wc_add_to_cart_message_html', 'my_changed_wc_add_to_cart_message_html', 10, 2 );
function my_changed_wc_add_to_cart_message_html($message, $products){

    if (strpos($message, 'Continue shopping') !== false) {
        $message = str_replace("Continue shopping", "Continue Shopping", $message);
    }

    return $message;

}
add_filter( 'woocommerce_return_to_shop_redirect', 'bbloomer_change_return_shop_url' );
 
function bbloomer_change_return_shop_url() {
   $url = 'https://kevtron.webmasterindia.net/our-products/';
   return $url;
}

function custom_wc_breadcrumb() {
    if (is_product_category()) {
        // Breadcrumb for product category pages
        $term = get_queried_object();
        $term_parents = get_ancestors($term->term_id, 'product_cat');
        $term_parents = array_reverse($term_parents);
        echo '<div class="breadcrumbs">';
        echo '<div class="haru-breadcrumbsss">';
        echo '<span class="current"><a href="' . esc_url(home_url('/')) . '">Home</a></span>';
        echo '<span class="delimiter"></span>';
        echo '<span class="current"><a href="https://kevtron.webmasterindia.net/our-products/">Our Products</a></span>';
        echo '<span class="delimiter"></span>';

        // Output parent categories
        foreach ($term_parents as $parent_id) {
            $parent_term = get_term($parent_id, 'product_cat');
            echo '<span class="current"><a href="' . get_term_link($parent_term) . '">' . $parent_term->name . '</a></span>';
            echo '<span class="delimiter"></span>';
        }

        // Output current category
        echo '<span class="current">' . $term->name . '</span>';
        echo '</div>';
        echo '</div>';
    } elseif (is_product()) {
        // Breadcrumb for single product pages
        global $product;
        echo '<div class="breadcrumbs">';
        echo '<div class="haru-breadcrumbsss">';
        echo '<span class="current"><a href="' . esc_url(home_url('/')) . '">Home</a></span>';
        echo '<span class="delimiter"></span>';
        echo '<span class="current"><a href="https://kevtron.webmasterindia.net/our-products/">Our Products</a></span>';
        echo '<span class="delimiter"></span>';
        foreach ($term_parents as $parent_id) {
            $parent_term = get_term($parent_id, 'product_cat');
            echo '<span class="current"><a href="' . get_term_link($parent_term) . '">' . $parent_term->name . '</a></span>';
            echo '<span class="delimiter"></span>';
        }

        // Output category links for the product
        $categories = wp_get_post_terms($product->get_id(), 'product_cat');
        if (!empty($categories)) {
            $category = $categories[0]; // Assuming the product belongs to only one category
            $ancestors = get_ancestors($category->term_id, 'product_cat');
            $ancestors = array_reverse($ancestors);

            foreach ($ancestors as $ancestor_id) {
                $ancestor_term = get_term($ancestor_id, 'product_cat');
                echo '<span class="current"><a href="' . get_term_link($ancestor_term) . '">' . $ancestor_term->name . '</a></span>';
                echo '<span class="delimiter"></span>';
            }
        }
        if (!empty($categories)) {
            echo '<span class="current"><a href="' . get_term_link($category) . '">' . $category->name . '</a></span>';
            echo '<span class="delimiter"></span>';
        }

        // Output current product
        echo '<span class="current">' . get_the_title() . '</span>';
        echo '</div>';
        echo '</div>';
    }elseif (is_search()) {
        // Breadcrumb for search page
        echo '<div class="breadcrumbs">';
        echo '<div class="haru-breadcrumbsss">';
        echo '<span class="current"><a href="' . esc_url(home_url('/')) . '">Home</a></span>';
        echo '<span class="delimiter"></span>';
        echo '<span class="current"><a href="https://kevtron.webmasterindia.net/our-products/">Our Products</a></span>';
        echo '<span class="delimiter"></span>';
        echo '<span class="current">' . get_search_query() . '</span>';
        echo '</div>';
        echo '</div>';
    }
}

add_action('woocommerce_before_main_content', 'custom_wc_breadcrumb', 20);


add_filter('woocommerce_add_error', 'change_email_error');
function change_email_error( $message ) {
    // if ($message == 'Enter a username or email address.' ) {
    //     $message = 'Enter a username';
    // }
    if ($message == 'Invalid username or email.' ) {
        $message = 'Please enter a valid email address.';
    }
    return $message;
}
remove_filter( 'woocommerce_get_item_data', 'dokan_product_seller_info' );
remove_action( 'woocommerce_order_item_meta_start', 'dokan_attach_vendor_name' );
remove_filter( 'woocommerce_shipping_package_name', 'dokan_change_shipping_pack_name' );

function add_reset_password_breadcrumb() {
    // Check if it's the reset password page
    if (is_wc_endpoint_url('lost-password')) {
        // Output breadcrumb HTML
        echo '<div class="breadcrumb-reset">';
        echo '<div class="breadcrumb-reset-page">';
        echo '<a href="' . home_url() . '">Home</a> &raquo; ';
        echo '<a href="' . get_permalink(get_option('woocommerce_myaccount_page_id')) . '">Login</a> &raquo; ';
        echo '<span>Reset Password?</span>';
        echo '</div>';
        echo '</div>';
    }
}
add_action('woocommerce_before_reset_password_form', 'add_reset_password_breadcrumb');


