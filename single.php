<?php
/**
 * The Template for displaying all single posts.
 *
 * @package WordPress
 * @subpackage WP Responds
 * @since WP Responds 0.1
 */

get_header(); ?>

	<div class="primary">
		<div id="content" class="common inner" role="main">

		<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

			<?php toolbox_content_nav( 'nav-above' ); ?>

			<?php get_template_part( 'content', 'single' ); ?>

			<?php toolbox_content_nav( 'nav-below' ); ?>

			<?php comments_template( '', true ); ?>

		<?php endwhile; // end of the loop. ?>
<?php // TwitterWings(); ?>
		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>