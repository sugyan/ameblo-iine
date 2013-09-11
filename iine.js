$(function () {
    $('h3.title a, a.skinArticleTitle').each(function (i, a) {
        var url = $(a).attr('href');
        var m = url.match('/([^/]+?)/entry-([0-9]+)\.html');
        if (m) {
            $(a).after(
                $('<iframe>').attr({
                    src: 'http://iine.blog.ameba.jp/web/display_iine.html?receiveAmebaId=' + m[1] + '&entryId=' + m[2] + '&from=entry&device=sp&skinCode=',
                    width: '100%',
                    height: '65',
                    style: 'border: 0;'
                })
            );
        }
    });
});
