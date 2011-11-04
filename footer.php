<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package WordPress
 * @subpackage WP Responds
 * @since WP Responds 0.1
 */
?>

	</div><!-- end col-wrapper -->

	<footer id="colophon" class="clear" role="contentinfo">
		<small id="site-generator">
			<?php do_action( 'toolbox_credits' ); ?>
			<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'wp_responds' ) ); ?>" title="<?php esc_attr_e( 'Semantic Personal Publishing Platform', 'wp_responds' ); ?>" rel="generator"><?php printf( __( 'Proudly powered by %s', 'wp_responds' ), 'WordPress' ); ?></a>
			<span class="sep"> | </span>
			<?php printf( __( 'Theme: %1$s by %2$s.', 'wp_responds' ), 'WP Responds', '<a href="http://joepahl.is/" rel="designer">Joe Pahl</a>' ); ?>
		</small>
	</footer><!-- #colophon -->
</div><!-- end page-wrapper -->

<?php wp_footer(); ?>

<?php if (!is_mobile()) { ?>
	<!-- +1 -->
	<script type="text/javascript">
	  (function() {
	    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	    po.src = 'https://apis.google.com/js/plusone.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	  })();
	</script>
	<!-- Tweet -->
	<script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
	<!-- Like -->
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) {return;}
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
<?php } ?>

</body>
</html>