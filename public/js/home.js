$(function() {

    var home = {
        selectTags: function() {
            $('#select_tag').val(user_selected_tags).trigger('change');
        },
        init: function() {
            $('#select_tag').select2({
                tags: "true",
                placeholder: "Select a state",
                allowClear: true
            });

            $('#add_tag').click(function() {
                let select_tag = $('#select_tag').val();
                ajaxToViewCallback({url: route_add_tag, data: {tags: select_tag}, function($data){
                    user_selected_tags = $data.data.tags_id;
                    this.selectTags();
                }})
            });
            $('.show_test').click(function() {
                $(this).toggleClass('active');
                let href = $(this).attr('href');
                $(href).toggleClass('active in');
            });

            $('.copy_href').click(function(e) {
                e.preventDefault();
                copy($(this).attr('href'));
            });



            this.selectTags();
        }
    }

    home.init();
});

