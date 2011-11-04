<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage WP Responds
 * @since WP Responds 0.1
 */
?><!DOCTYPE html>
<!--[if IE 6]>
<html id="ie6" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 7]>
<html id="ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html id="ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<title>
		<?php global $page, $paged;
	
		wp_title( '|', true, 'right' );
	
		// Add the blog name.
		bloginfo( 'name' );
	
		// Add the blog description for the home/front page.
		$site_description = html_entity_decode(get_bloginfo('description'));
		$site_description = strip_tags($site_description);
		if ( $site_description && ( is_home() || is_front_page() ) )
			echo " | $site_description";
	
		// Add a page number if necessary:
		if ( $paged >= 2 || $page >= 2 )
			echo ' | ' . sprintf( __( 'Page %s', 'wp_responds' ), max( $paged, $page ) ); ?>
	</title>
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<?php add_action('wp_print_styles', 'loadStyles');
	 add_action('wp_print_scripts', 'loadScripts'); ?>
	<script type="text/javascript" src="http://use.typekit.com/tkv6izq.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	
	<?php if ( is_singular() && get_option( 'thread_comments' ) ) wp_enqueue_script( 'comment-reply' ); ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/scripts/html5.js" type="text/javascript"></script>
	<![endif]-->

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	
	<nav class="network-nav" id="access" role="navigation">
		<h1 class="assistive-text"><?php _e( 'Main menu', 'wp_responds' ); ?></h1>
		<div class="skip-link screen-reader-text"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'wp_responds' ); ?>"><?php _e( 'Skip to content', 'wp_responds' ); ?></a></div>
		
		<!--<aside id="search" class="banner-search">
			<?php // get_search_form(); ?>
		</aside>-->
		
		<?php wp_nav_menu( array( 'theme_location' => 'banner' ) ); ?>
		
		<?php if (!is_mobile()) { ?>
			<aside class="social-med">
				<ul>
					<!-- RSS -->
					<li>
						<a href="<?php bloginfo('rss2_url') ?>" title="<?php _e('Subcribe to my RSS Feed', 'wp_responds'); ?>" class="rss-button"><span class="screen-reader-text"><?php _e('RSS Feed', 'wp_responds'); ?></span></a>
					</li>
					<!-- +1 button -->
					<li>
						<div class="g-plusone" data-size="medium" data-annotation="none"></div>
					</li>
					<!-- Tweet -->
					<li>
						<div class="tweet-btn"><a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-via="joepahl"><?php _e('Tweet', 'wp_responds'); ?></a></div>
					</li>
					<!-- Like -->
					<li>
						<div class="fb-like" data-send="false" data-layout="button_count" data-width="90" data-show-faces="false"></div>
					</li>		
				</ul>
			</aside>
		<?php } ?>
	</nav>
	
	<div class="page-wrapper">
		<header class="site-head">
			<hgroup>
				<h1 class="site-title"><a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<h2 class="site-description"><?php echo html_entity_decode(get_bloginfo('description', 'display' )); ?></h2>
				
			</hgroup>
			
			<div class="color-switcher">
			<div class="inner">
				<div class="purp-btn btn-wrap <?= button_up_or_down('purple') ?>"><button><img src="<?php bloginfo('template_directory'); ?>/images/new/<?= button_up_or_down('purple') ?>_100_210f28.png" alt="Purple Button" /></button></div>
				<div class="brn-btn btn-wrap <?= button_up_or_down('brown') ?>"><button><img src="<?php bloginfo('template_directory'); ?>/images/new/<?= button_up_or_down('brown') ?>_100_28200f.png" alt="Brown Button" /></button></div>
				<div class="grn-btn btn-wrap <?= button_up_or_down('green') ?>"><button><img src="<?php bloginfo('template_directory'); ?>/images/new/<?= button_up_or_down('green') ?>_100_0f2821.png" alt="Green Button" /></button></div>
			</div>
			</div>
			
		</header>
		<div class="col-wrapper">