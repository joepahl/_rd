<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package WordPress
 * @subpackage WP Responds
 * @since WP Responds 0.1
 */
?>
	<div class="secondary widget-area" role="complementary">
	<div class="inner">
		<?php if ( ! dynamic_sidebar( 'sidebar-1' ) ) : ?>
	
			<aside id="search" class="widget widget_search">
				<?php get_search_form(); ?>
			</aside>
	
			<aside id="archives" class="widget">
				<h1 class="widget-title"><?php _e( 'Archives', 'wp_responds' ); ?></h1>
				<ul>
					<?php wp_get_archives( array( 'type' => 'monthly' ) ); ?>
				</ul>
			</aside>
	
			<aside id="meta" class="widget">
				<h1 class="widget-title"><?php _e( 'Meta', 'wp_responds' ); ?></h1>
				<ul>
					<?php wp_register(); ?>
					<aside><?php wp_loginout(); ?></aside>
					<?php wp_meta(); ?>
				</ul>
			</aside>
	
		<?php endif; // end sidebar widget area ?>
	</div>
	</div><!-- #secondary .widget-area -->		
	
	
	<div class="tertiary widget-area" role="complementary">
	<div class="inner">
		
		<?php if ( has_nav_menu( 'column' ) ) :
		
			wp_nav_menu( array( 'theme_location' => 'column' ) );
		
		elseif ( ! dynamic_sidebar( 'sidebar-2' ) ) : ?>
		
			<aside class="placeholder">
				<p>3 wolf moon quinoa butcher before they sold out ethical single-origin coffee. Blog +1 keffiyeh cardigan DIY, retro echo park 3 wolf moon. Wes anderson next level brunch, freegan stumptown fap lomo four loko retro cosby sweater aesthetic. Freegan cardigan thundercats viral trust fund marfa.</p>
			</aside>
			
		<?php endif; ?>
	</div>	
	</div><!-- #tertiary .widget-area -->
