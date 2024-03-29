<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage WP Responds
 * @since WP Responds 0.1
 */

get_header(); ?>

	<div class="primary">
		<div id="content" class="common inner" role="main">

				<?php the_post(); ?>

				<?php get_template_part( 'content', 'page' ); ?>

				<?php comments_template( '', true ); ?>

		</div><!-- content -->
	</div><!-- primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>