$(document).ready(function(){
    $('.delete').click(function(){
        var container = $(this).parent();
        var cid = $(this).attr('id');
        var string = 'page_id='+cid;

        $.ajax({
            type: "POST",
            url: "delete_page.php",
            data: string,
            success: function(){
                container.slideUp('fast', function(){$(this).parent().remove();});
            }
        });
    });
});
