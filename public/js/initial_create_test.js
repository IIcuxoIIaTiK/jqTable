$(function() {

    var initial_create_test = {
        init: function() {
            create_test();
            $('.display_containers').hide();
            $('.container_info').show();
            $('#select_tag').select2({
                tags: "true",
                placeholder: "Select a state",
                allowClear: true
            });
            $('#select_tag').val(select_default_tag).trigger('change')
        }
    }
    initial_create_test.init();

});

