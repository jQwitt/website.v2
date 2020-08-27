(this['webpackJsonpwebsite.v2'] = this['webpackJsonpwebsite.v2'] || []).push([
  [0],
  [
    ,
    ,
    function (e, t, a) {},
    function (e, t, a) {},
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      e.exports = a(18);
    },
    ,
    ,
    ,
    ,
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        c = a.n(n),
        i = a(4),
        l = a.n(i),
        o = a(5),
        r = a(6),
        m = a(8),
        s = a(7),
        d =
          (a(14),
          a(2),
          function (e) {
            return c.a.createElement(
              'div',
              { className: 'col col-lg-8 col-12 container-fluid content' },
              c.a.createElement('div', { className: 'content-item' })
            );
          }),
        u =
          (a(15),
          a(16),
          function (e) {
            return c.a.createElement(
              'div',
              {
                className:
                  'col col-xl-3 col-lg-4 col-12 py-lg-3 row navigation position-fixed',
              },
              c.a.createElement(
                'div',
                { className: 'col col-md-12 align-self-start' },
                c.a.createElement(
                  'h1',
                  { className: 'underlined padded' },
                  'website.v2'
                ),
                c.a.createElement(
                  'div',
                  { className: 'navigation-links' },
                  c.a.createElement('h3', { id: 'experience' }, 'experience'),
                  c.a.createElement('h3', { id: 'projects' }, 'projects'),
                  c.a.createElement('h3', { id: 'education' }, 'education'),
                  c.a.createElement('h3', { id: 'contact' }, 'contact')
                )
              ),
              c.a.createElement(
                'div',
                { className: 'col col-md-12 align-self-end hide-mobile' },
                c.a.createElement(f, { hideMobile: !0 })
              )
            );
          }),
        f =
          (a(17),
          function (e) {
            return c.a.createElement(
              'div',
              { className: 'social-media-links d-flex justify-content-center' },
              c.a.createElement(
                'a',
                { href: 'https://www.linkedin.com/in/joseph-witt-52a960171/' },
                c.a.createElement('i', {
                  className: 'flaticon-linkedin medium',
                })
              ),
              c.a.createElement(
                'a',
                { href: 'mailto:jackwittbiz@gmail.com' },
                c.a.createElement('i', { className: 'flaticon-email medium' })
              ),
              c.a.createElement(
                'a',
                { href: 'https://github.com/jQwitt' },
                c.a.createElement('i', { className: 'flaticon-browser medium' })
              )
            );
          }),
        h =
          (a(3),
          (function (e) {
            Object(m.a)(a, e);
            var t = Object(s.a)(a);
            function a() {
              return Object(o.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(r.a)(a, [
                {
                  key: 'render',
                  value: function () {
                    return c.a.createElement(
                      'div',
                      { className: 'container-xl' },
                      c.a.createElement(
                        'div',
                        { className: 'row' },
                        c.a.createElement(u, null),
                        c.a.createElement(d, null)
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(c.a.Component));
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var E = document.getElementById('root');
      E &&
        l.a.render(
          c.a.createElement(c.a.StrictMode, null, c.a.createElement(h, null)),
          E
        ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  ],
  [[9, 1, 2]],
]);
//# sourceMappingURL=main.69b7063f.chunk.js.map
