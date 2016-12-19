<?php
  add_theme_support( 'post-thumbnails' );

  add_action( 'rest_api_init', 'slug_register_event_extra_fields' );

  function slug_register_event_extra_fields() {
      register_rest_field('event', 'starting_date',
          array(
              'get_callback'    => 'get_meta_field',
              'update_callback' => null,
              'schema'          => null,
          )
      );

      register_rest_field('event', 'address',
          array(
            'get_callback'    => 'get_meta_field',
            'update_callback' => null,
            'schema'          => null,
          )
       );

      register_rest_field('event', 'venue',
        array(
          'get_callback'    => 'get_meta_field',
          'update_callback' => null,
          'schema'          => null,
        )
      );
  }

  /**
   * Get the value of the "meta_field" field
   *
   * @param array $object Details of current post.
   * @param string $field_name Name of field.
   * @param WP_REST_Request $request Current request
   *
   * @return mixed
   */

  function get_meta_field( $object, $field_name, $request ) {
      return get_post_meta( $object[ 'id' ], $field_name, true );
  }

?>
